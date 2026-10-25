## Foaie de parcurs

Ce urmează să construim. Ce este deja gata găsești la [Funcții](#recursos).
Datele sunt estimative și se pot schimba. Sugestiile și prioritățile sunt discutate pe
Discord-ul nostru, iar fiecare punct devine un pull request deschis pe GitHub.

Prioritățile vin din ce apare cel mai des pe forumuri și în recenziile altor distribuții:
teama că o actualizare va strica sistemul, driverele, instalarea programelor fără terminal și
îngrijirea calculatorului fără a fi nevoie de cunoștințe tehnice.

### 28/09 – 08/11 · Programe fără bătăi de cap (și în siguranță)

- [x] **Magazin de aplicații**: evaluările utilizatorilor și permisiunile fiecărei aplicații înainte de instalare (magazinul cu Flathub și depozitele Arch există deja)
- [x] **Tragere pentru instalare**, ca pe Mac: dublu clic pe un .exe, .deb, .rpm sau AppImage și trageți-l în **Aplicații**
- [x] **Tot ce vine din afară rulează într-o cutie izolată**: programele Windows (Bottles), pachetele .deb/.rpm (Podman) și AppImage-urile nu vă pot vedea sistemul sau fișierele fără permisiune
- [x] O pagină **Cutii** în Setări: vedeți, acordați sau retrageți accesul la fișiere, rețea, cameră și microfon și ștergeți o cutie
- [x] **Aplicații Android** (APK) într-o cutie, cu Waydroid, care apar în lansator ca orice altă aplicație
- [x] **Jocuri dintr-un clic**: Steam, Proton și modul joc, cu avertisment pentru jocurile cu anti-cheat care nu funcționează pe Linux
- [x] **Jocuri native**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalați din Magazin → Jocuri native. La prima pornire, furnizați un ROM extras din propriul cartuș; pachetele nu includ datele jocurilor.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · Creație și partajare

- [ ] **Un Lingmo Studio mai isteț**: reîncadrare care urmărește subiectul principal (nu doar fața), recunoașterea celui care vorbește în fiecare secvență (diarizare) și efecte audio pe fiecare pistă
- [ ] **Publicarea jocurilor native rămase**: Zelda: Ocarina of Time (Ship of Harkinian) și Mario Kart 64 (SpaghettiKart), acum „În curând” în Magazin, imediat ce licențele proiectelor permit distribuirea lor
- [ ] Finalizarea mutării barelor laterale din Setări, Mail și managerul de fișiere pe **LingmoUI**, cu același aspect ca celelalte aplicații
- [ ] Pregătirea terenului pentru **sesiunea Wayland**: testarea aplicațiilor și efectelor Lingmo pe Wayland (sesiunea completă rămâne planificată pentru 2027)

### 09/11 – 13/12 · Îngrijirea calculatorului

- [ ] **Monitor de sistem** (Ctrl + Shift + Esc): rețea și placă video, pe lângă procesorul, memoria și discul pe care Optimizatorul le arată deja
- [ ] **Informații despre sistem** cu un buton „Copiază raportul” pentru a cere ajutor pe Discord sau pe forumuri
- [ ] Estomparea și înlocuirea fundalului camerei cu decupare de calitate (păr, căști și umeri)

### 14/12 – 31/01/2027 · Actualizări fără teamă

- [ ] **Punct de restaurare automat** înainte de fiecare actualizare (btrfs), cu opțiunea de a reveni direct din meniul de pornire
- [ ] Butonul **„Înapoi la ziua de ieri”** în Setări și în programul de actualizare
- [ ] Programul de actualizare afișează știrile Arch pe înțelesul tuturor și amână actualizările care necesită intervenție manuală
- [ ] **Manager de drivere**: detectează placa video (NVIDIA, AMD, Intel) și instalează driverul potrivit, ținându-l la zi cu kernelul

### 01/02 – 31/03/2027 · Hardware de zi cu zi

- [ ] **Imprimante și scanere** recunoscute automat, cu un ecran simplu pentru adăugare
- [ ] **Căști Bluetooth**: alegi între calitatea muzicii și microfon, cu revenire la calitatea muzicii după apeluri
- [ ] **Baterie**: limită de încărcare la 80% pentru o durată de viață mai lungă, profiluri de energie și starea bateriei
- [ ] Scalare fracționară clară (125%, 150%) în toate aplicațiile, pentru fiecare monitor

### 01/04 – 31/05/2027 · Integrare și aspect

- [ ] **Schimbă aspectul** dintr-un clic: stil macOS, stil Windows sau Lingmo
- [ ] **Versiuni anterioare** ale fișierelor în managerul de fișiere, ca în Time Machine
- [x] **Telefon integrat**: notificări, fișiere și clipboard cu Android și iPhone (KDE Connect)
- [ ] **Conturi în cloud**: Google Drive și OneDrive direct în managerul de fișiere
- [x] Copierea textului dintr-o captură de ecran (OCR)
- [ ] Program de instalare care avertizează despre BitLocker și Secure Boot la instalarea alături de Windows

### 01/02 – 31/05/2027 · Learning with Lingmo

- [ ] **Lingmo Tutor for children**: kids ask by speaking, typing, a photo of their notebook or a PDF of the lesson, and the Tutor explains in the system language, at their age level, with a clear voice and the text highlighted
- [ ] **Teach without handing over the answer**: hints and questions that get the child thinking, similar exercises to practise and maths checked before it is shown
- [ ] **Reading aloud with help**: the child reads a text and the Tutor helps with pronunciation and fluency
- [ ] **Parent mode**: age and subjects, screen time, history kept only on the computer and an always-on topic filter; nothing goes online

### Din iunie 2027

- [ ] Asistent AI: rezumă, traduce și explică textul selectat în orice aplicație
- [ ] Control parental: timp de utilizare și ora de culcare
- [ ] Sesiune Wayland
- [ ] ISO generat și testat automat la fiecare versiune
- [ ] Office și Adobe cu Windows integrat (WinBoat), pentru cine are nevoie
