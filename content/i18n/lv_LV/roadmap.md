## Ceļvedis

Tas, ko vēl būvēsim. Tas, kas jau ir gatavs, atrodams sadaļā [Iespējas](#recursos).
Datumi ir aptuveni un var mainīties. Ieteikumus un prioritātes apspriežam mūsu
Discord, un katrs punkts kļūst par atvērtu pull request vietnē GitHub.

Prioritātes nāk no tā, kas visbiežāk parādās forumos un citu distribūciju apskatos:
bailes, ka atjauninājums sabojās sistēmu, draiveri, programmu instalēšana bez termināļa un
datora uzturēšana bez tehniskām zināšanām.

### 28/09 – 08/11 · Programmas bez sarežģījumiem (un droši)

- [x] **Lietotņu veikals**: lietotāju vērtējumi un katras lietotnes atļaujas pirms instalēšanas (Veikals ar Flathub un Arch repozitorijiem jau ir pieejams)
- [x] **Velciet, lai instalētu**, kā Mac datorā: veiciet dubultklikšķi uz .exe, .deb, .rpm vai AppImage un velciet to uz **Lietotnes**
- [x] **Viss no ārpuses darbojas izolētā kastē**: Windows programmas (Bottles), .deb/.rpm pakotnes (Podman) un AppImage bez atļaujas neredz jūsu sistēmu vai failus
- [x] Lapa **Kastes** iestatījumos: skatiet, piešķiriet vai atsauciet piekļuvi failiem, tīklam, kamerai un mikrofonam un izdzēsiet kasti
- [x] **Android lietotnes** (APK) kastē, ar Waydroid, kas parādās palaidējā kā jebkura cita lietotne
- [x] **Spēles ar vienu klikšķi**: Steam, Proton un spēļu režīms, ar brīdinājumu par spēlēm, kuru pretkrāpšanas sistēma nedarbojas Linux
- [x] **Vietējās spēles**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalējiet no Veikals → Vietējās spēles. Pirmajā palaišanas reizē norādiet ROM, kas nolasīts no jūsu pašu kasetnes; pakotnēs nav spēļu datu.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · Radīt un dalīties

- [ ] **Gudrāks Lingmo Studio**: kadrējums, kas seko galvenajam objektam (ne tikai sejai), atpazīšana, kurš runā katrā daļā (runātāju nošķiršana), un audio efekti katram celiņam
- [ ] **Izlaist atlikušās vietējās spēles**: Zelda: Ocarina of Time (Ship of Harkinian) un Mario Kart 64 (SpaghettiKart), kas Veikalā pašlaik ir “Drīzumā”, tiklīdz projektu licences ļaus tās izplatīt
- [ ] Pabeigt Iestatījumu, Pasta un failu pārvaldnieka sānjoslu pāreju uz **LingmoUI**, lai tās izskatītos tāpat kā pārējās lietotnes
- [ ] Sagatavot ceļu **Wayland sesijai**: pārbaudīt Lingmo lietotnes un efektus Wayland vidē (pilnā sesija joprojām plānota 2027. gadam)

### 09/11 – 13/12 · Datora uzturēšana

- [ ] **Sistēmas monitors** (Ctrl + Shift + Esc): tīkls un videokarte papildus procesoram, atmiņai un diskam, ko jau rāda Optimizētājs
- [ ] **Sistēmas informācija** ar pogu “Kopēt atskaiti”, lai lūgtu palīdzību Discord vai forumos
- [ ] Kameras izpludināšana un fons ar kvalitatīvu izgriešanu (mati, austiņas un pleci)

### 14/12 – 31/01/2027 · Atjaunināšana bez bailēm

- [ ] **Automātisks atjaunošanas punkts** pirms katra atjauninājuma (btrfs), ar iespēju atgriezties tieši no sāknēšanas izvēlnes
- [ ] Poga **“Atgriezties uz vakardienu”** Iestatījumos un atjauninātājā
- [ ] Atjauninātājs rāda Arch jaunumus vienkāršā valodā un aiztur atjauninājumus, kuriem nepieciešama manuāla rīcība
- [ ] **Draiveru pārvaldnieks**: atpazīst videokarti (NVIDIA, AMD, Intel), instalē pareizo draiveri un uztur to saskaņā ar kodolu

### 01/02 – 31/03/2027 · Ikdienas aparatūra

- [ ] **Printeri un skeneri** tiek atpazīti automātiski, ar vienkāršu ekrānu to pievienošanai
- [ ] **Bluetooth austiņas**: izvēle starp mūzikas kvalitāti un mikrofonu, pēc zvaniem atgriežoties pie kvalitātes
- [ ] **Akumulators**: uzlādes ierobežojums 80 % ilgākam kalpošanas laikam, enerģijas profili un akumulatora stāvoklis
- [ ] Ass daļējs mērogojums (125 %, 150 %) visās lietotnēs, katram monitoram atsevišķi

### 01/04 – 31/05/2027 · Integrācija un izskats

- [ ] **Izkārtojuma maiņa** ar vienu klikšķi: macOS stils, Windows stils vai Lingmo
- [ ] **Iepriekšējās versijas** failiem failu pārvaldniekā, kā Time Machine
- [x] **Integrēts tālrunis**: paziņojumi, faili un starpliktuve ar Android un iPhone (KDE Connect)
- [ ] **Mākoņa konti**: Google Drive un OneDrive failu pārvaldniekā
- [x] Teksta kopēšana no ekrānuzņēmuma (OCR)
- [ ] Instalētājs, kas brīdina par BitLocker un Secure Boot, instalējot blakus Windows

### No 2027. gada jūnija

- [ ] AI asistents: atlasītā teksta kopsavilkums, tulkošana un skaidrojums jebkurā lietotnē
- [ ] Vecāku kontrole: ekrāna laiks un gulētiešanas laiks
- [ ] Wayland sesija
- [ ] ISO, kas tiek automātiski izveidots un pārbaudīts katrai versijai
- [ ] Office un Adobe ar integrētu Windows (WinBoat) tiem, kam tas vajadzīgs
