import { useEffect, useMemo, useState } from 'react'
import { Browser } from '@capacitor/browser'
import { Capacitor } from '@capacitor/core'
import { Download, Headphones, Languages, RefreshCw, Search, Star, Volume2 } from 'lucide-react'
import { dictionaryCategories, dictionaryEntries, searchDictionary, type DictionaryFilter } from './dictionary-data'

const VOICE_KEY = 'eanda-speech-voice'
const RATE_KEY = 'eanda-speech-rate'
const FAVORITES_KEY = 'eanda-dictionary-favorites'
const GOOGLE_TTS_URL = 'https://play.google.com/store/apps/details?id=com.google.android.tts'

function readFavorites() {
  try {
    const saved = localStorage.getItem(FAVORITES_KEY)
    const values: unknown = saved ? JSON.parse(saved) : []
    return new Set(Array.isArray(values) ? values.filter((value): value is string => typeof value === 'string') : [])
  } catch {
    return new Set<string>()
  }
}

function readRate() {
  const saved = Number(localStorage.getItem(RATE_KEY))
  return [0.75, 0.9, 1].includes(saved) ? saved : 0.9
}

export default function Dictionary() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<DictionaryFilter>('all')
  const [favorites, setFavorites] = useState(readFavorites)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  const [voiceUri, setVoiceUri] = useState(() => localStorage.getItem(VOICE_KEY) ?? '')
  const [rate, setRate] = useState(readRate)
  const [speechNotice, setSpeechNotice] = useState('')

  useEffect(() => {
    if (!('speechSynthesis' in window)) return
    const loadVoices = () => setVoices(window.speechSynthesis.getVoices())
    const timer = window.setTimeout(loadVoices, 0)
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices)
    return () => {
      window.clearTimeout(timer)
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices)
    }
  }, [])

  const entries = useMemo(() => searchDictionary(dictionaryEntries, query, filter, favorites), [query, filter, favorites])
  const englishVoices = voices.filter((voice) => /^en(-|_)/i.test(voice.lang))

  function speak(text: string) {
    if (!('speechSynthesis' in window)) {
      setSpeechNotice('النطق غير متاح في هذا الجهاز. نزّل محرّك تحويل النص إلى كلام من إعدادات النظام.')
      return
    }
    const installedVoices = window.speechSynthesis.getVoices()
    const preferredVoice = installedVoices.find((voice) => voice.voiceURI === voiceUri && /^en(-|_)/i.test(voice.lang))
    const englishVoice = preferredVoice ?? installedVoices.find((voice) => /^en-US/i.test(voice.lang)) ?? installedVoices.find((voice) => /^en(-|_)/i.test(voice.lang))
    if (!englishVoice) {
      setSpeechNotice('لم يظهر صوت إنجليزي مثبت. نزّل صوتاً من إعدادات الجهاز، ثم اضغط «تحديث الأصوات».')
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.voice = englishVoice
    utterance.lang = englishVoice.lang
    utterance.rate = rate
    utterance.onerror = () => setSpeechNotice('تعذّر تشغيل الصوت. تحقّق من إعدادات الصوت في الجهاز.')
    utterance.onstart = () => setSpeechNotice('')
    window.speechSynthesis.speak(utterance)
  }

  function toggleFavorite(id: string) {
    const next = new Set(favorites)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setFavorites(next)
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify([...next]))
    } catch {
      setSpeechNotice('تعذّر حفظ المفضّلة على هذا الجهاز.')
    }
  }

  function updateVoiceUri(value: string) {
    setVoiceUri(value)
    try {
      localStorage.setItem(VOICE_KEY, value)
    } catch {
      setSpeechNotice('تعذّر حفظ إعداد الصوت على هذا الجهاز.')
    }
  }

  function updateRate(value: number) {
    setRate(value)
    try {
      localStorage.setItem(RATE_KEY, String(value))
    } catch {
      setSpeechNotice('تعذّر حفظ إعداد الصوت على هذا الجهاز.')
    }
  }

  function refreshVoices() {
    if (!('speechSynthesis' in window)) return
    setVoices(window.speechSynthesis.getVoices())
    setSpeechNotice('تم تحديث قائمة الأصوات المتاحة.')
  }

  async function downloadAndroidVoices() {
    try {
      if (Capacitor.isNativePlatform()) await Browser.open({ url: GOOGLE_TTS_URL })
      else window.open(GOOGLE_TTS_URL, '_blank', 'noopener,noreferrer')
    } catch {
      setSpeechNotice('تعذّر فتح متجر Google Play. افتح الرابط من متصفح الجهاز.')
    }
  }

  function openWindowsVoiceSettings() {
    if (navigator.userAgent.toLowerCase().includes('electron')) {
      window.open('ms-settings:speech', '_blank')
      return
    }
    setSpeechNotice('في Windows: افتح الإعدادات > الوقت واللغة > الكلام، ثم أضف صوتاً إنجليزياً.')
  }

  return (
    <div className="page-content inner-page dictionary-page">
      <div className="inner-page-heading">
        <span className="section-kicker"><Languages size={14} /> ترجمة ومفردات التخصص</span>
        <h1>قاموسك الإنجليزي–العربي</h1>
        <p>ابحث بالإنجليزية أو العربية، واستمع إلى النطق والأمثلة. القاموس يعمل دون إنترنت.</p>
      </div>

      <section className="voice-panel" aria-labelledby="voice-panel-title">
        <div className="voice-panel-heading">
          <span className="voice-panel-icon"><Headphones size={19} /></span>
          <div><h2 id="voice-panel-title">الأصوات والنطق</h2><p>{englishVoices.length ? `${englishVoices.length} صوت إنجليزي متاح على جهازك` : 'تحقّق من أصوات تحويل النص إلى كلام المثبّتة على جهازك'}</p></div>
          <button className="refresh-voices" onClick={refreshVoices}><RefreshCw size={15} /> تحديث الأصوات</button>
        </div>
        <div className="voice-controls">
          <label>الصوت الإنجليزي
            <select value={voiceUri} onChange={(event) => updateVoiceUri(event.target.value)}>
              <option value="">الصوت الافتراضي للجهاز</option>
              {englishVoices.map((voice) => <option value={voice.voiceURI} key={voice.voiceURI}>{voice.name} · {voice.lang}{voice.localService ? ' · على الجهاز' : ''}</option>)}
            </select>
          </label>
          <label>سرعة النطق
            <select value={rate} onChange={(event) => updateRate(Number(event.target.value))}>
              <option value={0.75}>بطيئة</option><option value={0.9}>متوسطة</option><option value={1}>طبيعية</option>
            </select>
          </label>
          <button className="test-voice-button" onClick={() => speak('Hello! This is your English pronunciation test.')}><Volume2 size={16} /> جرّب الصوت</button>
        </div>
        <div className="voice-download-grid">
          <div className="voice-download-card">
            <strong>تنزيل أصوات Android</strong>
            <p>افتح Google Speech Services، ثم من إعدادات الجهاز اختر «تحويل النص إلى كلام» لتنزيل صوت إنجليزي يعمل دون إنترنت.</p>
            <button onClick={() => void downloadAndroidVoices()}><Download size={14} /> تنزيل خدمات النطق</button>
          </div>
          <div className="voice-download-card">
            <strong>تنزيل أصوات Windows</strong>
            <p>أضف صوتاً إنجليزياً من إعدادات الكلام في Windows؛ سيظهر هنا إذا أتاحه النظام للتطبيق.</p>
            <button onClick={openWindowsVoiceSettings}><Download size={14} /> إعداد أصوات Windows</button>
          </div>
        </div>
        <p className="voice-disclaimer">الأصوات تُنزّل من النظام الرسمي للجهاز ولا يخزّنها E&amp;A. توافر الأصوات دون إنترنت يعتمد على محرك النطق والصوت الذي تثبّته.</p>
        {speechNotice && <p className="speech-notice" role="status">{speechNotice}</p>}
      </section>

      <section className="dictionary-browser" aria-label="البحث في القاموس">
        <label className="dictionary-search"><Search size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث عن كلمة أو معنى بالعربية أو الإنجليزية..." autoComplete="off" /></label>
        <div className="dictionary-filters" aria-label="تصفية القاموس">
          {dictionaryCategories.map((category) => <button key={category.id} className={filter === category.id ? 'dictionary-filter-active' : ''} onClick={() => setFilter(category.id)}>{category.label}</button>)}
          <button className={filter === 'favorites' ? 'dictionary-filter-active favorites-filter' : 'favorites-filter'} onClick={() => setFilter('favorites')}><Star size={13} /> المفضّلة <span>{favorites.size}</span></button>
        </div>
        <p className="dictionary-result-count">{entries.length} {entries.length === 1 ? 'نتيجة' : 'نتيجة'} من {dictionaryEntries.length} مصطلحاً</p>
        {entries.length === 0
          ? <div className="dictionary-empty"><Search size={23} /><strong>لا توجد نتائج مطابقة</strong><span>جرّب كلمة أخرى أو اختر «كل المجالات».</span></div>
          : <div className="dictionary-list">{entries.map((entry) => {
            const categoryLabel = dictionaryCategories.find((category) => category.id === entry.category)?.label ?? ''
            return <article className="dictionary-entry" key={entry.id}>
              <div className="dictionary-entry-head">
                <div><h2 dir="ltr">{entry.english}</h2><span className="dictionary-category">{categoryLabel}</span></div>
                <div className="dictionary-entry-actions">
                  <button className="dictionary-icon-button" onClick={() => speak(entry.english)} aria-label={`استمع إلى نطق ${entry.english}`} title="استمع إلى النطق"><Volume2 size={17} /></button>
                  <button className={`dictionary-icon-button favorite-button ${favorites.has(entry.id) ? 'is-favorite' : ''}`} onClick={() => toggleFavorite(entry.id)} aria-label={favorites.has(entry.id) ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'} title={favorites.has(entry.id) ? 'إزالة من المفضلة' : 'إضافة إلى المفضلة'}><Star size={17} fill={favorites.has(entry.id) ? 'currentColor' : 'none'} /></button>
                </div>
              </div>
              <p className="dictionary-translation">{entry.arabic}</p>
              <div className="dictionary-example"><p dir="ltr">{entry.example}</p><button onClick={() => speak(entry.example)} aria-label={`استمع إلى المثال: ${entry.example}`}><Volume2 size={15} /></button><small>{entry.exampleArabic}</small></div>
            </article>
          })}</div>}
      </section>
    </div>
  )
}
