## Yol haritası

Henüz inşa edeceğimiz şeyler. Hazır olanlar [Özellikler](#recursos) bölümünde.
Tarihler tahminidir ve değişebilir. Öneriler ve öncelikler
Discord sunucumuzda tartışılır; her madde GitHub'da açık bir pull request'e dönüşür.

Öncelikler, forumlarda ve diğer dağıtımların incelemelerinde en çok karşılaşılan konulardan gelir:
bir güncellemenin sistemi bozma korkusu, sürücüler, terminal olmadan program kurmak ve
teknik bilgi gerektirmeden bilgisayara bakmak.

### 28/09 – 08/11 · Zahmetsiz (ve güvenli) programlar

- [x] **Uygulama mağazası**: yüklemeden önce kullanıcı puanları ve her uygulamanın izinleri (Flathub ve Arch depolarını içeren mağaza zaten hazır)
- [x] Mac'teki gibi **sürükleyerek yükleme**: bir .exe, .deb, .rpm veya AppImage dosyasına çift tıklayıp **Uygulamalar**'a sürükleyin
- [x] **Dışarıdan gelen her şey yalıtılmış bir kutuda çalışır**: Windows programları (Bottles), .deb/.rpm paketleri (Podman) ve AppImage'lar izin olmadan sisteminizi ya da dosyalarınızı göremez
- [x] Ayarlar'da **Kutular** sayfası: dosyalara, ağa, kameraya ve mikrofona erişimi görün, verin ya da kaldırın ve bir kutuyu silin
- [x] Waydroid ile bir kutu içinde, başlatıcıda diğer uygulamalar gibi görünen **Android uygulamaları** (APK)
- [x] **Tek tıkla oyun**: Steam, Proton ve oyun modu; hile önleyicisi Linux'ta çalışmayan oyunlar için uyarıyla
- [x] **Yerel oyunlar**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Mağaza → Yerel oyunlar'dan yükleyin. İlk açılışta kendi kartuşunuzdan alınan ROM'u sağlayın; paketler oyun verilerini içermez.
- [ ] **Daha fazla yerel oyun**: Zelda: Ocarina of Time (Ship of Harkinian) ve Mario Kart 64 (SpaghettiKart), mağazada hâlâ "Yakında"

### 09/11 – 13/12 · Bilgisayara bakım

- [ ] **Sistem izleyici** (Ctrl + Shift + Esc): Eniyileyici'nin zaten gösterdiği işlemci, bellek ve diske ek olarak ağ ve ekran kartı
- [ ] Discord'da veya forumlarda yardım istemek için "Raporu kopyala" düğmeli **Sistem bilgisi**
- [ ] Kalite kırpmalı (saç, kulaklık ve omuzlar) kamera bulanıklaştırma ve arka planı

### 14/12 – 31/01/2027 · Korkmadan güncelleme

- [ ] Her güncellemeden önce **otomatik geri yükleme noktası** (btrfs), doğrudan önyükleme menüsünden geri dönme seçeneğiyle
- [ ] Ayarlar'da ve güncelleyicide **"Düne dön"** düğmesi
- [ ] Güncelleyici, Arch haberlerini sade bir dille gösterir ve elle müdahale gerektiren güncellemeleri bekletir
- [ ] **Sürücü yöneticisi**: ekran kartını (NVIDIA, AMD, Intel) algılar, doğru sürücüyü kurar ve çekirdekle uyumlu tutar

### 01/02 – 31/03/2027 · Günlük donanım

- [ ] **Yazıcılar ve tarayıcılar** kendiliğinden tanınır, eklemek için basit bir ekranla
- [ ] **Bluetooth kulaklıklar**: müzik kalitesi ile mikrofon arasında seçim, aramalardan sonra kaliteye geri dönüş
- [ ] **Pil**: daha uzun ömür için %80 şarj sınırı, güç profilleri ve pil sağlığı
- [ ] Tüm uygulamalarda, her monitör için ayrı, keskin kesirli ölçekleme (%125, %150)

### 01/04 – 31/05/2027 · Entegrasyon ve görünüm

- [ ] Tek tıkla **düzen değiştirme**: macOS tarzı, Windows tarzı veya Lingmo
- [ ] Dosya yöneticisinde dosyaların **önceki sürümleri**, Time Machine'deki gibi
- [ ] **Telefon entegrasyonu**: Android ve iPhone ile bildirimler, dosyalar ve pano (KDE Connect)
- [ ] **Bulut hesapları**: Google Drive ve OneDrive dosya yöneticisinde görünür
- [ ] Ekran görüntüsündeki metni kopyalama (OCR)
- [ ] Windows'un yanına kurarken BitLocker ve Secure Boot hakkında uyaran yükleyici

### Haziran 2027'den itibaren

- [ ] Yapay zekâ asistanı: herhangi bir uygulamada seçili metni özetleme, çevirme ve açıklama
- [ ] Ebeveyn denetimi: ekran süresi ve yatma saati
- [ ] Wayland oturumu
- [ ] Her sürümde otomatik olarak oluşturulan ve test edilen ISO
- [ ] İhtiyacı olanlar için Windows entegreli (WinBoat) Office ve Adobe
