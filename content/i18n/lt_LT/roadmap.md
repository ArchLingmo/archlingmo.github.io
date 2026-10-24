## Veiksmų planas

Tai, ką dar kursime. Tai, kas jau paruošta, rasite skiltyje [Galimybės](#recursos).
Datos yra preliminarios ir gali keistis. Pasiūlymai ir prioritetai aptariami mūsų
Discord, o kiekvienas punktas tampa atviru pull request GitHub.

Prioritetai kyla iš to, kas dažniausiai minima forumuose ir kitų distribucijų apžvalgose:
baimė, kad atnaujinimas sugadins sistemą, tvarkyklės, programų diegimas be terminalo ir
kompiuterio priežiūra nebūnant techniniu žinovu.

### 28/09–08/11 · Programos be vargo (ir saugiai)

- [x] **Programėlių parduotuvė**: naudotojų įvertinimai ir kiekvienos programėlės leidimai prieš diegiant (Parduotuvė su Flathub ir Arch saugyklomis jau yra)
- [x] **Vilkite, kad įdiegtumėte**, kaip Mac: dukart spustelėkite .exe, .deb, .rpm ar AppImage ir nuvilkite į **Programos**
- [x] **Viskas, kas iš išorės, veikia izoliuotoje dėžėje**: Windows programos (Bottles), .deb/.rpm paketai (Podman) ir AppImage negali matyti jūsų sistemos ar failų be leidimo
- [x] **Dėžių** puslapis Nustatymuose: peržiūrėkite, suteikite ar atimkite prieigą prie failų, tinklo, kameros ir mikrofono bei ištrinkite dėžę
- [x] **Android programėlės** (APK) dėžėje, su Waydroid, rodomos paleidiklyje kaip bet kuri kita programėlė
- [x] **Žaidimai vienu spustelėjimu**: Steam, Proton ir žaidimų režimas, su įspėjimu apie žaidimus su apsauga nuo sukčiavimo, kurie neveikia Linux
- [x] **Vietiniai žaidimai**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Įdiekite iš Parduotuvė → Vietiniai žaidimai. Pirmą kartą paleidę pateikite ROM, nukopijuotą iš savo kasetės; paketuose nėra žaidimų duomenų.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11–13/12 · Kurti ir dalytis

- [ ] **Protingesnis Lingmo Studio**: kadravimas, sekantis pagrindinį objektą (ne tik veidą), atpažinimas, kas kalba kiekvienoje dalyje (kalbėtojų atskyrimas), ir garso efektai kiekvienam takeliui
- [ ] **Išleisti likusius vietinius žaidimus**: Zelda: Ocarina of Time (Ship of Harkinian) ir Mario Kart 64 (SpaghettiKart), dabar Parduotuvėje pažymėtus „Netrukus“, kai tik projektų licencijos leis juos platinti
- [ ] Baigti perkelti Nustatymų, Pašto ir failų tvarkytuvės šonines juostas į **LingmoUI**, kad jos atrodytų taip pat kaip kitos programos
- [ ] Paruošti kelią **Wayland seansui**: išbandyti Lingmo programas ir efektus Wayland aplinkoje (visas seansas vis dar planuojamas 2027 metams)

### 09/11–13/12 · Kompiuterio priežiūra

- [ ] **Sistemos stebėjimas** (Ctrl + Shift + Esc): tinklas ir vaizdo plokštė, be procesoriaus, atminties ir disko, kuriuos jau rodo Optimizatorius
- [ ] **Sistemos informacija** su mygtuku „Kopijuoti ataskaitą“, kad galėtumėte paprašyti pagalbos Discord ar forumuose
- [ ] Kameros fono suliejimas ir keitimas su kokybišku iškirpimu (plaukai, ausinės ir pečiai)

### 14/12–31/01/2027 · Atnaujinimai be baimės

- [ ] **Automatinis atkūrimo taškas** prieš kiekvieną atnaujinimą (btrfs), su galimybe grįžti tiesiai iš paleidimo meniu
- [ ] Mygtukas **„Grįžti į vakar“** Nustatymuose ir atnaujinimo programoje
- [ ] Atnaujinimo programa rodo Arch naujienas paprasta kalba ir sulaiko atnaujinimus, kuriems reikia rankinių veiksmų
- [ ] **Tvarkyklių tvarkytuvė**: aptinka vaizdo plokštę (NVIDIA, AMD, Intel) ir įdiegia tinkamą tvarkyklę, palaikydama ją suderintą su branduoliu

### 01/02–31/03/2027 · Kasdienė įranga

- [ ] **Spausdintuvai ir skeneriai** atpažįstami automatiškai, su paprastu pridėjimo langu
- [ ] **Bluetooth ausinės**: pasirinkite tarp muzikos kokybės ir mikrofono, o po skambučių grįžtama prie muzikos kokybės
- [ ] **Baterija**: įkrovimo riba 80 %, kad tarnautų ilgiau, energijos profiliai ir baterijos būklė
- [ ] Ryškus trupmeninis mastelis (125 %, 150 %) visose programėlėse, kiekvienam monitoriui atskirai

### 01/04–31/05/2027 · Integracija ir išvaizda

- [ ] **Išdėstymo keitimas** vienu spustelėjimu: macOS stilius, Windows stilius arba Lingmo
- [ ] **Ankstesnės failų versijos** failų tvarkytuvėje, kaip Time Machine
- [x] **Integruotas telefonas**: pranešimai, failai ir iškarpinė su Android ir iPhone (KDE Connect)
- [ ] **Debesų paskyros**: Google Drive ir OneDrive rodomi failų tvarkytuvėje
- [x] Teksto kopijavimas iš ekrano nuotraukos (OCR)
- [ ] Diegimo programa, įspėjanti apie BitLocker ir Secure Boot diegiant šalia Windows

### Nuo 2027 m. birželio

- [ ] DI asistentas: pažymėto teksto santrauka, vertimas ir paaiškinimas bet kurioje programoje
- [ ] Tėvų kontrolė: naudojimo laikas ir miego laikas
- [ ] Wayland seansas
- [ ] ISO, automatiškai sukuriamas ir išbandomas kiekvienai versijai
- [ ] Office ir Adobe su integruota Windows (WinBoat) tiems, kam reikia
