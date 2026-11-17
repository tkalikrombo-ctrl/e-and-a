export type DictionaryCategory = 'general' | 'database' | 'systems' | 'projects' | 'commerce'

export type DictionaryEntry = {
  id: string
  english: string
  arabic: string
  category: DictionaryCategory
  example: string
  exampleArabic: string
}
export type DictionaryFilter = DictionaryCategory | 'all' | 'favorites'

export const dictionaryCategories: { id: DictionaryCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'كل المجالات' },
  { id: 'general', label: 'مصطلحات عامة' },
  { id: 'database', label: 'قواعد البيانات' },
  { id: 'systems', label: 'تحليل النظم' },
  { id: 'projects', label: 'إدارة المشاريع' },
  { id: 'commerce', label: 'التجارة الإلكترونية' },
]

export const dictionaryEntries: DictionaryEntry[] = [
  { id: 'account', english: 'account', arabic: 'حساب', category: 'general', example: 'Create an account to access the system.', exampleArabic: 'أنشئ حساباً للوصول إلى النظام.' },
  { id: 'analyse', english: 'analyse', arabic: 'يحلّل', category: 'general', example: 'We analyse the results every month.', exampleArabic: 'نحلّل النتائج كل شهر.' },
  { id: 'application', english: 'application', arabic: 'تطبيق؛ نظام', category: 'general', example: 'The application stores customer details.', exampleArabic: 'يخزّن التطبيق بيانات العملاء.' },
  { id: 'business', english: 'business', arabic: 'أعمال؛ شركة', category: 'general', example: 'The business needs reliable information.', exampleArabic: 'تحتاج الشركة إلى معلومات موثوقة.' },
  { id: 'data', english: 'data', arabic: 'بيانات', category: 'general', example: 'The team checks the data before making a decision.', exampleArabic: 'يراجع الفريق البيانات قبل اتخاذ قرار.' },
  { id: 'decision', english: 'decision', arabic: 'قرار', category: 'general', example: 'Managers use reports to make a decision.', exampleArabic: 'يستخدم المديرون التقارير لاتخاذ قرار.' },
  { id: 'digital', english: 'digital', arabic: 'رقمي', category: 'general', example: 'The company offers a digital service.', exampleArabic: 'تقدم الشركة خدمة رقمية.' },
  { id: 'efficient', english: 'efficient', arabic: 'فعّال؛ كفء', category: 'general', example: 'A clear process makes the team more efficient.', exampleArabic: 'تجعل العملية الواضحة الفريق أكثر كفاءة.' },
  { id: 'information', english: 'information', arabic: 'معلومات', category: 'general', example: 'Accurate information helps us plan.', exampleArabic: 'تساعدنا المعلومات الدقيقة على التخطيط.' },
  { id: 'manage', english: 'manage', arabic: 'يدير', category: 'general', example: 'The system helps us manage inventory.', exampleArabic: 'يساعدنا النظام على إدارة المخزون.' },
  { id: 'network', english: 'network', arabic: 'شبكة', category: 'general', example: 'All branches connect to the company network.', exampleArabic: 'تتصل كل الفروع بشبكة الشركة.' },
  { id: 'record-general', english: 'record', arabic: 'سجل؛ يسجّل', category: 'general', example: 'The system keeps a record of each order.', exampleArabic: 'يحتفظ النظام بسجل لكل طلب.' },
  { id: 'report', english: 'report', arabic: 'تقرير', category: 'general', example: 'The monthly report shows sales trends.', exampleArabic: 'يعرض التقرير الشهري اتجاهات المبيعات.' },
  { id: 'secure', english: 'secure', arabic: 'آمن؛ يؤمّن', category: 'general', example: 'Use a secure password to protect your account.', exampleArabic: 'استخدم كلمة مرور آمنة لحماية حسابك.' },
  { id: 'user', english: 'user', arabic: 'مستخدم', category: 'general', example: 'The user can update their profile.', exampleArabic: 'يمكن للمستخدم تحديث ملفه الشخصي.' },
  { id: 'database', english: 'database', arabic: 'قاعدة بيانات', category: 'database', example: 'The database stores student records.', exampleArabic: 'تخزّن قاعدة البيانات سجلات الطلاب.' },
  { id: 'field', english: 'field', arabic: 'حقل', category: 'database', example: 'The email field is required.', exampleArabic: 'حقل البريد الإلكتروني مطلوب.' },
  { id: 'foreign-key', english: 'foreign key', arabic: 'مفتاح خارجي', category: 'database', example: 'A foreign key links an order to a customer.', exampleArabic: 'يربط المفتاح الخارجي الطلب بالعميل.' },
  { id: 'index', english: 'index', arabic: 'فهرس', category: 'database', example: 'An index can speed up a database search.', exampleArabic: 'يمكن للفهرس تسريع البحث في قاعدة البيانات.' },
  { id: 'primary-key', english: 'primary key', arabic: 'مفتاح أساسي', category: 'database', example: 'Each student has a unique primary key.', exampleArabic: 'لكل طالب مفتاح أساسي فريد.' },
  { id: 'query', english: 'query', arabic: 'استعلام', category: 'database', example: 'This query finds all active customers.', exampleArabic: 'يعثر هذا الاستعلام على العملاء النشطين.' },
  { id: 'record', english: 'record', arabic: 'سجل في قاعدة البيانات', category: 'database', example: 'Each record represents one product.', exampleArabic: 'يمثّل كل سجل منتجاً واحداً.' },
  { id: 'relationship', english: 'relationship', arabic: 'علاقة', category: 'database', example: 'The relationship connects students and courses.', exampleArabic: 'تربط العلاقة بين الطلاب والمقررات.' },
  { id: 'row', english: 'row', arabic: 'صف', category: 'database', example: 'A row contains information about one order.', exampleArabic: 'يحتوي الصف على معلومات طلب واحد.' },
  { id: 'schema', english: 'schema', arabic: 'مخطط قاعدة البيانات', category: 'database', example: 'The schema defines the tables and their relationships.', exampleArabic: 'يحدّد المخطط الجداول والعلاقات بينها.' },
  { id: 'table', english: 'table', arabic: 'جدول', category: 'database', example: 'The products table contains names and prices.', exampleArabic: 'يحتوي جدول المنتجات على الأسماء والأسعار.' },
  { id: 'transaction', english: 'transaction', arabic: 'معاملة؛ عملية', category: 'database', example: 'The transaction updates the account balance.', exampleArabic: 'تحدّث المعاملة رصيد الحساب.' },
  { id: 'backup', english: 'backup', arabic: 'نسخة احتياطية', category: 'database', example: 'Create a backup before changing the database.', exampleArabic: 'أنشئ نسخة احتياطية قبل تعديل قاعدة البيانات.' },
  { id: 'requirement', english: 'requirement', arabic: 'متطلب', category: 'systems', example: 'The requirement says search must finish in two seconds.', exampleArabic: 'ينص المتطلب على أن ينتهي البحث خلال ثانيتين.' },
  { id: 'functional-requirement', english: 'functional requirement', arabic: 'متطلب وظيفي', category: 'systems', example: 'A functional requirement describes what the system does.', exampleArabic: 'يصف المتطلب الوظيفي ما يفعله النظام.' },
  { id: 'stakeholder', english: 'stakeholder', arabic: 'صاحب مصلحة', category: 'systems', example: 'We interviewed each stakeholder before designing the system.', exampleArabic: 'قابلنا كل صاحب مصلحة قبل تصميم النظام.' },
  { id: 'workflow', english: 'workflow', arabic: 'سير العمل', category: 'systems', example: 'The new workflow reduces manual steps.', exampleArabic: 'يقلّل سير العمل الجديد الخطوات اليدوية.' },
  { id: 'use-case', english: 'use case', arabic: 'حالة استخدام', category: 'systems', example: 'The use case shows how a customer places an order.', exampleArabic: 'توضح حالة الاستخدام كيف يقدّم العميل طلباً.' },
  { id: 'actor', english: 'actor', arabic: 'مُمثّل؛ طرف يتفاعل مع النظام', category: 'systems', example: 'The cashier is an actor in this use case.', exampleArabic: 'أمين الصندوق طرف يتفاعل مع النظام في حالة الاستخدام.' },
  { id: 'acceptance-criteria', english: 'acceptance criteria', arabic: 'معايير القبول', category: 'systems', example: 'The acceptance criteria explain when the feature is complete.', exampleArabic: 'توضح معايير القبول متى تكتمل الميزة.' },
  { id: 'interface', english: 'interface', arabic: 'واجهة', category: 'systems', example: 'The interface should be easy to use on a phone.', exampleArabic: 'ينبغي أن تكون الواجهة سهلة الاستخدام على الهاتف.' },
  { id: 'process', english: 'process', arabic: 'عملية؛ إجراء', category: 'systems', example: 'We mapped the process from request to approval.', exampleArabic: 'رسمنا العملية من الطلب إلى الموافقة.' },
  { id: 'system', english: 'system', arabic: 'نظام', category: 'systems', example: 'The system sends an alert when stock is low.', exampleArabic: 'يرسل النظام تنبيهاً عندما ينخفض المخزون.' },
  { id: 'test-case', english: 'test case', arabic: 'حالة اختبار', category: 'systems', example: 'This test case checks the password reset flow.', exampleArabic: 'تختبر حالة الاختبار خطوات إعادة تعيين كلمة المرور.' },
  { id: 'bug', english: 'bug', arabic: 'خطأ برمجي', category: 'systems', example: 'The developer fixed a bug in the search page.', exampleArabic: 'أصلح المطوّر خطأً برمجياً في صفحة البحث.' },
  { id: 'scope', english: 'scope', arabic: 'نطاق المشروع', category: 'projects', example: 'The team agreed on the project scope.', exampleArabic: 'اتفق الفريق على نطاق المشروع.' },
  { id: 'milestone', english: 'milestone', arabic: 'مَعلَم رئيسي', category: 'projects', example: 'Finishing the prototype is our next milestone.', exampleArabic: 'إنهاء النموذج الأولي هو معلمنا الرئيسي التالي.' },
  { id: 'deadline', english: 'deadline', arabic: 'موعد نهائي', category: 'projects', example: 'We must test the release before the deadline.', exampleArabic: 'يجب أن نختبر الإصدار قبل الموعد النهائي.' },
  { id: 'deliverable', english: 'deliverable', arabic: 'مُخرَج قابل للتسليم', category: 'projects', example: 'The project plan is the first deliverable.', exampleArabic: 'خطة المشروع هي أول مخرج قابل للتسليم.' },
  { id: 'risk', english: 'risk', arabic: 'مخاطرة', category: 'projects', example: 'The team identified a risk in the payment integration.', exampleArabic: 'حدّد الفريق مخاطرة في تكامل الدفع.' },
  { id: 'mitigate', english: 'mitigate', arabic: 'يخفّف؛ يحدّ من', category: 'projects', example: 'We can mitigate the risk by testing early.', exampleArabic: 'يمكننا الحد من المخاطرة بإجراء الاختبارات مبكراً.' },
  { id: 'schedule', english: 'schedule', arabic: 'جدول زمني', category: 'projects', example: 'The schedule gives each task a start date.', exampleArabic: 'يحدّد الجدول الزمني تاريخ بدء كل مهمة.' },
  { id: 'budget', english: 'budget', arabic: 'ميزانية', category: 'projects', example: 'The project is within its approved budget.', exampleArabic: 'المشروع ضمن الميزانية المعتمدة.' },
  { id: 'progress', english: 'progress', arabic: 'تقدّم؛ إنجاز', category: 'projects', example: 'The weekly report summarizes project progress.', exampleArabic: 'يلخّص التقرير الأسبوعي تقدّم المشروع.' },
  { id: 'resource', english: 'resource', arabic: 'مورد', category: 'projects', example: 'The manager assigned a resource to the task.', exampleArabic: 'خصّص المدير مورداً للمهمة.' },
  { id: 'customer', english: 'customer', arabic: 'عميل', category: 'commerce', example: 'The customer receives an order confirmation.', exampleArabic: 'يتلقى العميل تأكيداً للطلب.' },
  { id: 'cart', english: 'shopping cart', arabic: 'سلة التسوق', category: 'commerce', example: 'The customer added two items to the shopping cart.', exampleArabic: 'أضاف العميل منتجين إلى سلة التسوق.' },
  { id: 'checkout', english: 'checkout', arabic: 'إتمام الشراء؛ الدفع', category: 'commerce', example: 'A simple checkout helps customers complete their orders.', exampleArabic: 'يساعد إتمام الشراء السهل العملاء على إنهاء طلباتهم.' },
  { id: 'conversion', english: 'conversion', arabic: 'تحويل؛ إتمام عملية الشراء', category: 'commerce', example: 'The campaign increased the conversion rate.', exampleArabic: 'رفعت الحملة معدل التحويل.' },
  { id: 'inventory', english: 'inventory', arabic: 'مخزون', category: 'commerce', example: 'The store updates its inventory every day.', exampleArabic: 'يحدّث المتجر مخزونه كل يوم.' },
  { id: 'payment', english: 'payment', arabic: 'دفع؛ عملية دفع', category: 'commerce', example: 'The payment is processed securely.', exampleArabic: 'تُعالَج عملية الدفع بأمان.' },
  { id: 'refund', english: 'refund', arabic: 'استرداد المبلغ؛ يردّ المبلغ', category: 'commerce', example: 'The customer requested a refund for the damaged item.', exampleArabic: 'طلب العميل استرداد المبلغ للمنتج التالف.' },
  { id: 'order', english: 'order', arabic: 'طلب؛ طلب شراء', category: 'commerce', example: 'The store tracks each order until delivery.', exampleArabic: 'يتابع المتجر كل طلب حتى التوصيل.' },
  { id: 'revenue', english: 'revenue', arabic: 'إيرادات', category: 'commerce', example: 'Online sales generated more revenue this month.', exampleArabic: 'حققت المبيعات عبر الإنترنت إيرادات أكبر هذا الشهر.' },
  { id: 'stock', english: 'stock', arabic: 'مخزون؛ كمية متاحة', category: 'commerce', example: 'The product is out of stock.', exampleArabic: 'المنتج غير متوفر في المخزون.' },
  { id: 'delivery', english: 'delivery', arabic: 'توصيل؛ تسليم', category: 'commerce', example: 'The delivery is expected tomorrow.', exampleArabic: 'من المتوقع توصيل الطلب غداً.' },
]

export function normalizeDictionaryText(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/\s+/g, ' ')
    .trim()
}

export function searchDictionary(entries: DictionaryEntry[], query: string, category: DictionaryFilter, favorites: Set<string>) {
  const normalizedQuery = normalizeDictionaryText(query)
  return entries.filter((entry) => {
    const categoryMatches = category === 'all' || category === 'favorites' || entry.category === category
    const words = [entry.english, entry.arabic, entry.example, entry.exampleArabic]
    const queryMatches = !normalizedQuery || words.some((word) => normalizeDictionaryText(word).includes(normalizedQuery))
    const favoriteMatches = category !== 'favorites' || favorites.has(entry.id)
    return categoryMatches && queryMatches && favoriteMatches
  })
}
