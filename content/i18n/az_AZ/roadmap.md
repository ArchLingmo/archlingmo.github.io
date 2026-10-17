## Yol xəritəsi

Hələ hazırlayacağımız şeylər. Artıq hazır olanlar [İmkanlar](#recursos) bölməsindədir.
Tarixlər təxminidir və dəyişə bilər. Təkliflər və prioritetlər bizim
Discord serverimizdə müzakirə olunur və hər bənd GitHub-da açıq pull request-ə çevrilir.

Prioritetlər forumlarda və digər distributivlərin rəylərində ən çox rast gəlinən mövzulara əsaslanır:
yeniləmənin sistemi pozacağı qorxusu, drayverlər, proqramları terminalsız quraşdırmaq və
texniki bilik tələb etmədən kompüterə qulluq etmək.

### 28/09 – 08/11 · Asan (və təhlükəsiz) proqramlar

- [x] **Tətbiq mağazası**: quraşdırmadan əvvəl istifadəçi reytinqləri və hər tətbiqin icazələri (Flathub və Arch repozitoriyaları ilə Mağaza artıq var)
- [x] Mac-dakı kimi **sürüşdürüb quraşdırmaq**: .exe, .deb, .rpm və ya AppImage faylına iki dəfə klikləyin və onu **Tətbiqlər** qovluğuna sürüşdürün
- [x] **Kənardan gələn hər şey təcrid olunmuş qutuda işləyir**: Windows proqramları (Bottles), .deb/.rpm paketləri (Podman) və AppImage-lər icazəsiz sisteminizi və fayllarınızı görə bilmir
- [x] Parametrlərdə **Qutular** səhifəsi: fayllara, şəbəkəyə, kameraya və mikrofona girişi görün, verin və ya geri alın, qutunu silin
- [x] Waydroid ilə qutuda işləyən və digər tətbiqlər kimi başladıcıda görünən **Android tətbiqləri** (APK)
- [x] **Bir kliklə oyunlar**: Steam, Proton və oyun rejimi, Linux-da işləməyən anti-cheat oyunlar barədə xəbərdarlıqla
- [x] **Doğma oyunlar**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Mağaza → Doğma oyunlar bölməsindən quraşdırın. İlk açılışda öz kartricinizdən çıxarılmış ROM-u təqdim edin; paketlərə oyun məlumatları daxil deyil.

### 09/11 – 13/12 · Yaradın və paylaşın

- [ ] **Daha ağıllı Lingmo Studio**: əsas obyekti (yalnız üzü deyil) izləyən yenidən kadrlama, hər hissədə kimin danışdığını bilmək (danışanların ayrılması) və hər trekdə səs effektləri
- [ ] **Qalan doğma oyunları dərc etmək**: hazırda Mağazada "Tezliklə" kimi görünən Zelda: Ocarina of Time (Ship of Harkinian) və Mario Kart 64 (SpaghettiKart), layihələrin lisenziyası onları yaymağa icazə verən kimi
- [ ] Parametrlərin, Poçtun və fayl menecerinin yan panellərini digər tətbiqlərlə eyni görünüşdə **LingmoUI**-a köçürməyi başa çatdırmaq
- [ ] **Wayland sessiyası** üçün zəmin hazırlamaq: Lingmo-nun tətbiqlərini və effektlərini Wayland-də sınamaq (tam sessiya hələ də 2027 üçün planlaşdırılır)

### 09/11 – 13/12 · Kompüterə qulluq

- [ ] **Sistem monitoru** (Ctrl + Shift + Esc): Optimallaşdırıcının artıq göstərdiyi prosessor, yaddaş və diskə əlavə olaraq şəbəkə və videokart
- [ ] Discord-da və ya forumlarda kömək istəmək üçün "Hesabatı kopyala" düyməli **sistem məlumatı**
- [ ] Keyfiyyətli kəsimlə kamera arxa fonunun bulanıqlaşdırılması və dəyişdirilməsi (saç, qulaqlıq və çiyinlər)

### 14/12 – 31/01/2027 · Qorxmadan yeniləyin

- [ ] Hər yeniləmədən əvvəl **avtomatik bərpa nöqtəsi** (btrfs), birbaşa yükləmə menyusundan geri qayıtmaq imkanı ilə
- [ ] Parametrlərdə və yeniləyicidə **"Dünənə qayıt"** düyməsi
- [ ] Yeniləyici Arch xəbərlərini sadə dildə göstərir və əl ilə müdaxilə tələb edən yeniləmələri saxlayır
- [ ] **Drayver meneceri**: videokartı (NVIDIA, AMD, Intel) aşkar edir, düzgün drayveri quraşdırır və onu kernel ilə birlikdə aktual saxlayır

### 01/02 – 31/03/2027 · Gündəlik avadanlıq

- [ ] **Printerlər və skanerlər** avtomatik tanınır, əlavə etmək üçün sadə ekranla
- [ ] **Bluetooth qulaqlıqlar**: musiqi keyfiyyəti ilə mikrofon arasında seçim, zənglərdən sonra musiqi keyfiyyətinə qayıdış
- [ ] **Batareya**: daha uzun ömür üçün 80% şarj limiti, enerji profilləri və batareyanın vəziyyəti
- [ ] Bütün tətbiqlərdə, hər monitor üçün aydın kəsr miqyaslama (125%, 150%)

### 01/04 – 31/05/2027 · İnteqrasiya və görünüş

- [ ] Bir kliklə **tərtibatı dəyişmək**: macOS üslubu, Windows üslubu və ya Lingmo
- [ ] Fayl menecerində faylların **əvvəlki versiyaları**, Time Machine-dəki kimi
- [ ] **Telefon inteqrasiyası**: Android və iPhone ilə bildirişlər, fayllar və mübadilə buferi (KDE Connect)
- [ ] **Bulud hesabları**: Google Drive və OneDrive fayl menecerində görünür
- [x] Ekran görüntüsündən mətni kopyalamaq (OCR)
- [ ] Windows ilə yanaşı quraşdırarkən BitLocker və Secure Boot barədə xəbərdarlıq edən quraşdırıcı

### 2027-ci ilin iyunundan

- [ ] Süni intellekt köməkçisi: istənilən tətbiqdə seçilmiş mətni xülasə etmək, tərcümə etmək və izah etmək
- [ ] Valideyn nəzarəti: istifadə vaxtı və yatma vaxtı
- [ ] Wayland sessiyası
- [ ] Hər versiya üçün avtomatik yaradılan və sınaqdan keçirilən ISO
- [ ] Ehtiyacı olanlar üçün inteqrasiya olunmuş Windows ilə Office və Adobe (WinBoat)
