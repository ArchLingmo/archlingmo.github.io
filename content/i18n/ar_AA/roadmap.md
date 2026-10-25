## خارطة الطريق

ما سنبنيه لاحقًا. أما ما هو جاهز بالفعل فتجده في [الميزات](#recursos).
التواريخ تقديرية وقد تتغير. نناقش الاقتراحات والأولويات على
Discord، ويتحول كل بند إلى pull request مفتوح على GitHub.

تأتي الأولويات مما يتكرر أكثر في المنتديات وفي مراجعات التوزيعات الأخرى:
الخوف من أن يُعطّل تحديثٌ النظام، والتعريفات، وتثبيت البرامج دون طرفية،
والعناية بالحاسوب دون الحاجة إلى خبرة تقنية.

### 28/09 – 08/11 · برامج بلا تعقيد (وآمنة)

- [x] **متجر التطبيقات**: تقييمات المستخدمين وأذونات كل تطبيق قبل التثبيت (المتجر مع Flathub ومستودعات Arch متوفر بالفعل)
- [x] **اسحب لتثبّت**، كما في Mac: انقر نقرًا مزدوجًا على ملف .exe أو .deb أو .rpm أو AppImage واسحبه إلى **التطبيقات**
- [x] **كل ما يأتي من الخارج يعمل في صندوق معزول**: برامج Windows ‏(Bottles) وحزم .deb/.rpm ‏(Podman) وملفات AppImage لا ترى نظامك ولا ملفاتك دون إذن
- [x] صفحة **الصناديق** في الإعدادات: اعرض الوصول إلى الملفات والشبكة والكاميرا والميكروفون أو امنحه أو اسحبه، واحذف الصندوق
- [x] **تطبيقات Android** ‏(APK) في صندوق عبر Waydroid، تظهر في المشغّل مثل أي تطبيق آخر
- [x] **الألعاب بنقرة واحدة**: Steam وProton ووضع الألعاب، مع تنبيه للألعاب التي لا يعمل نظام مكافحة الغش فيها على Linux
- [x] **ألعاب أصلية**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). ثبّتها من المتجر ← الألعاب الأصلية. عند التشغيل الأول، قدّم ملف ROM المستخرج من خرطوشتك الخاصة؛ لا تتضمن الحزم بيانات الألعاب.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · الإنشاء والمشاركة

- [ ] **Lingmo Studio أذكى**: إعادة تأطير تتبع العنصر الرئيسي (لا الوجه فقط)، ومعرفة من يتحدث في كل جزء (تمييز المتحدثين)، وتأثيرات صوتية على كل مسار
- [ ] **نشر الألعاب الأصلية المتبقية**: Zelda: Ocarina of Time ‏(Ship of Harkinian) وMario Kart 64 ‏(SpaghettiKart)، التي تظهر الآن «قريبًا» في المتجر، فور أن تسمح تراخيص المشروعين بتوزيعها
- [ ] إكمال نقل الأشرطة الجانبية في الإعدادات والبريد ومدير الملفات إلى **LingmoUI**، بمظهر التطبيقات الأخرى نفسه
- [ ] تمهيد الطريق إلى **جلسة Wayland**: اختبار تطبيقات Lingmo وتأثيراته على Wayland (وما زالت الجلسة الكاملة مخططًا لها في 2027)

### 09/11 – 13/12 · العناية بالحاسوب

- [ ] **مراقب النظام** (Ctrl + Shift + Esc): الشبكة وبطاقة الرسوميات، إضافةً إلى المعالج والذاكرة والقرص التي يعرضها المحسِّن بالفعل
- [ ] **معلومات النظام** مع زر «نسخ التقرير» لطلب المساعدة على Discord أو في المنتديات
- [ ] تمويه خلفية الكاميرا وتغييرها مع قصّ عالي الجودة (الشعر والسماعات والكتفين)

### 14/12 – 31/01/2027 · تحديث بلا خوف

- [ ] **نقطة استعادة تلقائية** قبل كل تحديث (btrfs)، مع إمكانية الرجوع مباشرة من قائمة الإقلاع
- [ ] زر **«العودة إلى الأمس»** في الإعدادات وفي أداة التحديث
- [ ] تعرض أداة التحديث أخبار Arch بلغة بسيطة وتؤجّل التحديثات التي تحتاج إلى تدخل يدوي
- [ ] **مدير التعريفات**: يتعرّف على بطاقة الرسوميات (NVIDIA وAMD وIntel) ويثبّت التعريف المناسب ويبقيه متوافقًا مع النواة

### 01/02 – 31/03/2027 · عتاد الاستخدام اليومي

- [ ] **الطابعات والماسحات الضوئية** تُكتشف تلقائيًا، مع شاشة بسيطة لإضافتها
- [ ] **سماعات Bluetooth**: الاختيار بين جودة الموسيقى والميكروفون، والعودة إلى الجودة بعد المكالمات
- [ ] **البطارية**: حد شحن عند 80% لإطالة عمرها، وأوضاع الطاقة وصحة البطارية
- [ ] تحجيم كسري واضح (125%، 150%) في جميع التطبيقات، لكل شاشة على حدة

### 01/04 – 31/05/2027 · التكامل والمظهر

- [ ] **تبديل التخطيط** بنقرة واحدة: نمط macOS أو نمط Windows أو Lingmo
- [ ] **الإصدارات السابقة** من الملفات في مدير الملفات، كما في Time Machine
- [x] **ربط الهاتف**: الإشعارات والملفات والحافظة مع Android وiPhone ‏(KDE Connect)
- [ ] **الحسابات السحابية**: Google Drive وOneDrive داخل مدير الملفات
- [x] نسخ النص من لقطة الشاشة (OCR)
- [ ] مثبّت ينبّه إلى BitLocker وSecure Boot عند التثبيت بجانب Windows

### 01/02 – 31/05/2027 · Learning with Lingmo

- [ ] **Lingmo Tutor for children**: kids ask by speaking, typing, a photo of their notebook or a PDF of the lesson, and the Tutor explains in the system language, at their age level, with a clear voice and the text highlighted
- [ ] **Teach without handing over the answer**: hints and questions that get the child thinking, similar exercises to practise and maths checked before it is shown
- [ ] **Reading aloud with help**: the child reads a text and the Tutor helps with pronunciation and fluency
- [ ] **Parent mode**: age and subjects, screen time, history kept only on the computer and an always-on topic filter; nothing goes online

### ابتداءً من يونيو 2027

- [ ] مساعد الذكاء الاصطناعي: تلخيص النص المحدد وترجمته وشرحه في أي تطبيق
- [ ] الرقابة الأبوية: وقت استخدام الشاشة ووقت النوم
- [ ] جلسة Wayland
- [ ] ملف ISO يُبنى ويُختبر تلقائيًا مع كل إصدار
- [ ] Office وAdobe مع Windows مدمج (WinBoat) لمن يحتاج إليهما
