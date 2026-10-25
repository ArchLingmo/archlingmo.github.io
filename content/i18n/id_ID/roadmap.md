## Peta Jalan

Hal-hal yang masih akan kami bangun. Yang sudah siap ada di [Fitur](#recursos).
Tanggal-tanggal ini hanyalah perkiraan dan bisa berubah. Saran dan prioritas dibahas di
Discord kami, dan setiap item menjadi pull request terbuka di GitHub.

Prioritas berasal dari hal yang paling sering muncul di forum dan ulasan distro lain:
takut pembaruan merusak sistem, driver, memasang aplikasi tanpa terminal, dan
merawat komputer tanpa harus paham teknis.

### 28/09 – 08/11 · Aplikasi tanpa ribet (dan aman)

- [x] **Toko Aplikasi**: ulasan pengguna dan izin setiap aplikasi sebelum dipasang (Toko dengan Flathub dan repositori Arch sudah tersedia)
- [x] **Seret untuk memasang**, seperti di Mac: klik dua kali file .exe, .deb, .rpm, atau AppImage lalu seret ke **Aplikasi**
- [x] **Semua yang berasal dari luar berjalan di kotak terisolasi**: program Windows (Bottles), paket .deb/.rpm (Podman), dan AppImage tidak dapat melihat sistem atau berkas Anda tanpa izin
- [x] Halaman **Kotak** di Pengaturan: lihat, berikan, atau cabut akses ke berkas, jaringan, kamera, dan mikrofon, serta hapus kotak
- [x] **Aplikasi Android** (APK) di dalam kotak, dengan Waydroid, muncul di peluncur seperti aplikasi lainnya
- [x] **Main game sekali klik**: Steam, Proton, dan mode game, dengan peringatan untuk game yang anti-cheat-nya tidak berjalan di Linux
- [x] **Game native**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Pasang dari Toko → Game native. Saat pertama dibuka, berikan ROM yang disalin dari kartrid Anda sendiri; paket tidak menyertakan data game.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · Berkarya dan berbagi

- [ ] **Lingmo Studio yang lebih cerdas**: membingkai ulang dengan mengikuti subjek utama (tidak hanya wajah), mengenali siapa yang berbicara di tiap bagian (diarisasi pembicara), dan efek audio di setiap trek
- [ ] **Merilis game native yang tersisa**: Zelda: Ocarina of Time (Ship of Harkinian) dan Mario Kart 64 (SpaghettiKart), yang kini masih "Segera hadir" di Toko, segera setelah lisensi proyeknya mengizinkan untuk didistribusikan
- [ ] Menuntaskan pemindahan bilah sisi Pengaturan, Surel, dan pengelola berkas ke **LingmoUI**, dengan tampilan yang sama seperti aplikasi lain
- [ ] Merintis jalan untuk **sesi Wayland**: menguji aplikasi dan efek Lingmo di Wayland (sesi lengkap tetap direncanakan untuk 2027)

### 09/11 – 13/12 · Merawat komputer

- [ ] **Monitor sistem** (Ctrl + Shift + Esc): jaringan dan kartu grafis, selain prosesor, memori, dan disk yang sudah ditampilkan Pengoptimal
- [ ] **Informasi sistem** dengan tombol "Salin laporan" untuk meminta bantuan di Discord atau forum
- [ ] Blur dan latar belakang kamera dengan potongan berkualitas (rambut, headphone, dan bahu)

### 14/12 – 31/01/2027 · Memperbarui tanpa takut

- [ ] **Titik pemulihan otomatis** sebelum setiap pembaruan (btrfs), dengan opsi kembali langsung dari menu boot
- [ ] Tombol **"Kembali ke kemarin"** di Pengaturan dan di pembaru
- [ ] Pembaru menampilkan berita Arch dalam bahasa yang sederhana dan menahan pembaruan yang perlu penanganan manual
- [ ] **Pengelola driver**: mendeteksi kartu grafis (NVIDIA, AMD, Intel) dan memasang driver yang tepat, serta menjaganya tetap selaras dengan kernel

### 01/02 – 31/03/2027 · Perangkat keras sehari-hari

- [ ] **Printer dan pemindai** dikenali otomatis, dengan layar sederhana untuk menambahkannya
- [ ] **Headphone Bluetooth**: pilih antara kualitas musik atau mikrofon, lalu kembali ke kualitas setelah panggilan
- [ ] **Baterai**: batas pengisian 80% agar lebih awet, profil daya, dan kesehatan baterai
- [ ] Penskalaan pecahan yang tajam (125%, 150%) di semua aplikasi, per monitor

### 01/04 – 31/05/2027 · Integrasi dan tampilan

- [ ] **Ganti tata letak** dengan sekali klik: gaya macOS, gaya Windows, atau Lingmo
- [ ] **Versi sebelumnya** dari file di pengelola file, seperti Time Machine
- [x] **Ponsel terhubung**: notifikasi, file, dan papan klip dengan Android dan iPhone (KDE Connect)
- [ ] **Akun cloud**: Google Drive dan OneDrive muncul di pengelola file
- [x] Menyalin teks dari tangkapan layar (OCR)
- [ ] Pemasang yang memberi peringatan tentang BitLocker dan Secure Boot saat dipasang berdampingan dengan Windows

### 01/02 – 31/05/2027 · Learning with Lingmo

- [ ] **Lingmo Tutor for children**: kids ask by speaking, typing, a photo of their notebook or a PDF of the lesson, and the Tutor explains in the system language, at their age level, with a clear voice and the text highlighted
- [ ] **Teach without handing over the answer**: hints and questions that get the child thinking, similar exercises to practise and maths checked before it is shown
- [ ] **Reading aloud with help**: the child reads a text and the Tutor helps with pronunciation and fluency
- [ ] **Parent mode**: age and subjects, screen time, history kept only on the computer and an always-on topic filter; nothing goes online

### Mulai Juni 2027

- [ ] Asisten AI: meringkas, menerjemahkan, dan menjelaskan teks yang dipilih di aplikasi apa pun
- [ ] Kontrol orang tua: waktu layar dan jam tidur
- [ ] Sesi Wayland
- [ ] ISO dibuat dan diuji otomatis di setiap versi
- [ ] Office dan Adobe dengan Windows terintegrasi (WinBoat), bagi yang membutuhkan
