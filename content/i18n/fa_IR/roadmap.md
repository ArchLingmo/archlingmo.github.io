## نقشهٔ راه

آنچه هنوز قرار است بسازیم. آنچه آماده است در بخش [امکانات](#recursos) آمده است.
تاریخ‌ها تخمینی‌اند و ممکن است تغییر کنند. پیشنهادها و اولویت‌ها در
Discord ما بررسی می‌شوند و هر مورد به یک pull request باز در GitHub تبدیل می‌شود.

اولویت‌ها از چیزهایی می‌آیند که بیش از همه در انجمن‌ها و نقدهای توزیع‌های دیگر دیده می‌شوند:
ترس از اینکه یک به‌روزرسانی سیستم را خراب کند، درایورها، نصب برنامه بدون ترمینال و
نگهداری از رایانه بدون نیاز به دانش فنی.

### 28/09 – 08/11 · برنامه‌ها بدون دردسر (و امن)

- [x] **فروشگاه برنامه**: امتیاز کاربران و مجوزهای هر برنامه پیش از نصب (فروشگاه با Flathub و مخازن Arch از قبل آماده است)
- [x] **نصب با کشیدن**، مانند Mac: روی یک ‎.exe، ‎.deb، ‎.rpm یا AppImage دوبار کلیک کنید و آن را به **برنامه‌ها** بکشید
- [x] **هر چیزی از بیرون در یک جعبهٔ ایزوله اجرا می‌شود**: برنامه‌های Windows ‏(Bottles)، بسته‌های ‎.deb/.rpm ‏(Podman) و AppImageها بدون اجازه نمی‌توانند سیستم یا فایل‌های شما را ببینند
- [x] صفحهٔ **جعبه‌ها** در تنظیمات: دسترسی به فایل‌ها، شبکه، دوربین و میکروفون را ببینید، بدهید یا بگیرید و یک جعبه را حذف کنید
- [x] **برنامه‌های Android** ‏(APK) در یک جعبه، با Waydroid، که مانند هر برنامهٔ دیگری در فهرست برنامه‌ها ظاهر می‌شوند
- [x] **بازی با یک کلیک**: Steam، Proton و حالت بازی، همراه با هشدار برای بازی‌هایی که ضدتقلبشان روی Linux کار نمی‌کند
- [x] **بازی‌های بومی**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). از فروشگاه ← بازی‌های بومی نصب کنید. در اجرای نخست، ROM استخراج‌شده از کارتریج خود را ارائه دهید؛ بسته‌ها شامل داده‌های بازی نیستند.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · ساختن و هم‌رسانی

- [ ] **Lingmo Studio هوشمندتر**: کادربندی دوباره با دنبال کردن سوژهٔ اصلی (نه فقط چهره)، تشخیص اینکه در هر بخش چه کسی صحبت می‌کند (تفکیک گوینده) و جلوه‌های صوتی روی هر ترک
- [ ] **انتشار بازی‌های بومی باقی‌مانده**: Zelda: Ocarina of Time (Ship of Harkinian) و Mario Kart 64 (SpaghettiKart)، که اکنون در فروشگاه «به‌زودی» هستند، به محض اینکه مجوز پروژه‌ها اجازهٔ توزیعشان را بدهد
- [ ] تمام کردن انتقال نوارهای کناری تنظیمات، ایمیل و مدیر فایل به **LingmoUI**، با همان ظاهر برنامه‌های دیگر
- [ ] هموار کردن راه برای **نشست Wayland**: آزمودن برنامه‌ها و جلوه‌های Lingmo روی Wayland (نشست کامل همچنان برای 2027 برنامه‌ریزی شده است)

### 09/11 – 13/12 · نگهداری از رایانه

- [ ] **پایشگر سیستم** (Ctrl + Shift + Esc): شبکه و کارت گرافیک، افزون بر پردازنده، حافظه و دیسکی که بهینه‌ساز از قبل نشان می‌دهد
- [ ] **اطلاعات سیستم** با دکمهٔ «کپی گزارش» برای کمک خواستن در Discord یا انجمن‌ها
- [ ] محوسازی و پس‌زمینهٔ دوربین با برش باکیفیت (مو، هدفون و شانه‌ها)

### 14/12 – 31/01/2027 · به‌روزرسانی بدون ترس

- [ ] **نقطهٔ بازیابی خودکار** پیش از هر به‌روزرسانی (btrfs)، با امکان بازگشت مستقیم از منوی راه‌اندازی
- [ ] دکمهٔ **«بازگشت به دیروز»** در تنظیمات و در به‌روزرسان
- [ ] به‌روزرسان اخبار Arch را به زبانی ساده نشان می‌دهد و به‌روزرسانی‌هایی را که نیاز به رسیدگی دستی دارند نگه می‌دارد
- [ ] **مدیر درایور**: کارت گرافیک (NVIDIA، AMD، Intel) را شناسایی می‌کند، درایور درست را نصب می‌کند و آن را با هسته هماهنگ نگه می‌دارد

### 01/02 – 31/03/2027 · سخت‌افزار روزمره

- [ ] **چاپگرها و اسکنرها** خودکار شناسایی می‌شوند، با صفحه‌ای ساده برای افزودن
- [ ] **هدفون‌های Bluetooth**: انتخاب بین کیفیت موسیقی و میکروفون، با بازگشت به کیفیت پس از تماس‌ها
- [ ] **باتری**: محدودیت شارژ 80% برای عمر بیشتر، نمایه‌های انرژی و سلامت باتری
- [ ] مقیاس‌بندی کسری واضح (125%، 150%) در همهٔ برنامه‌ها، برای هر نمایشگر

### 01/04 – 31/05/2027 · یکپارچگی و ظاهر

- [ ] **تغییر چیدمان** با یک کلیک: سبک macOS، سبک Windows یا Lingmo
- [ ] **نسخه‌های قبلی** فایل‌ها در مدیر فایل، مانند Time Machine
- [x] **گوشی یکپارچه**: اعلان‌ها، فایل‌ها و بریده‌دان با Android و iPhone ‏(KDE Connect)
- [ ] **حساب‌های ابری**: Google Drive و OneDrive در مدیر فایل
- [x] کپی متن از یک تصویر صفحه (OCR)
- [ ] نصب‌کننده‌ای که هنگام نصب در کنار Windows دربارهٔ BitLocker و Secure Boot هشدار می‌دهد

### 01/02 – 31/05/2027 · Learning with Lingmo

- [ ] **Lingmo Tutor for children**: kids ask by speaking, typing, a photo of their notebook or a PDF of the lesson, and the Tutor explains in the system language, at their age level, with a clear voice and the text highlighted
- [ ] **Teach without handing over the answer**: hints and questions that get the child thinking, similar exercises to practise and maths checked before it is shown
- [ ] **Reading aloud with help**: the child reads a text and the Tutor helps with pronunciation and fluency
- [ ] **Parent mode**: age and subjects, screen time, history kept only on the computer and an always-on topic filter; nothing goes online

### از ژوئن 2027

- [ ] دستیار هوش مصنوعی: خلاصه‌سازی، ترجمه و توضیح متن انتخاب‌شده در هر برنامه‌ای
- [ ] نظارت والدین: زمان استفاده از صفحه و زمان خواب
- [ ] نشست Wayland
- [ ] ISO که در هر نسخه به‌صورت خودکار ساخته و آزموده می‌شود
- [ ] Office و Adobe با Windows یکپارچه (WinBoat)، برای کسانی که نیاز دارند
