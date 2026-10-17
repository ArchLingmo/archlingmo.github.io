## Vojmapo

Kion ni ankoraŭ konstruos. Kio jam pretas troviĝas en [Funkcioj](#recursos).
La datoj estas taksoj kaj povas ŝanĝiĝi. Proponojn kaj prioritatojn ni diskutas en nia
Discord, kaj ĉiu ero iĝas malfermita pull request en GitHub.

La prioritatoj venas de tio, kio plej ofte aperas en forumoj kaj en recenzoj de aliaj distribuoj:
timo, ke ĝisdatigo rompos la sistemon, peliloj, instali programojn sen terminalo kaj
prizorgi la komputilon sen esti teknikisto.

### 28/09 – 08/11 · Programoj sen komplikaĵoj (kaj sekure)

- [x] **Aplikaĵa vendejo**: taksoj de uzantoj kaj la permesoj de ĉiu aplikaĵo antaŭ instalado (la Vendejo kun Flathub kaj la deponejoj de Arch jam estas ĉi tie)
- [x] **Treni por instali**, kiel ĉe Mac: duoble alklaku .exe, .deb, .rpm aŭ AppImage kaj trenu ĝin al **Aplikaĵoj**
- [x] **Ĉio el ekstere funkcias en izolita skatolo**: programoj por Windows (Bottles), pakoj .deb/.rpm (Podman) kaj AppImage ne povas vidi vian sistemon nek viajn dosierojn sen permeso
- [x] Paĝo **Skatoloj** en Agordoj: vidi, doni aŭ forpreni aliron al dosieroj, reto, kamerao kaj mikrofono, kaj forigi skatolon
- [x] **Android-aplikaĵoj** (APK) en skatolo, kun Waydroid, aperantaj en la lanĉilo kiel ajna alia aplikaĵo
- [x] **Ludoj per unu klako**: Steam, Proton kaj luda reĝimo, kun averto pri ludoj, kies kontraŭtrompa sistemo ne funkcias en Linux
- [x] **Indiĝenaj ludoj**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalu el Vendejo → Indiĝenaj ludoj. Je la unua lanĉo, donu ROM el via propra kartoĉo; la pakaĵoj ne enhavas ludajn datumojn.

### 09/11 – 13/12 · Krei kaj kunhavigi

- [ ] **Pli lerta Lingmo Studio**: rekadrigo sekvanta la ĉefan subjekton (ne nur la vizaĝon), scii kiu parolas en ĉiu parto (identigo de parolantoj) kaj sonefektoj en ĉiu trako
- [ ] **Publikigi la restantajn indiĝenajn ludojn**: Zelda: Ocarina of Time (Ship of Harkinian) kaj Mario Kart 64 (SpaghettiKart), nun «Baldaŭ» en la Vendejo, tuj kiam la permesiloj de la projektoj permesos distribui ilin
- [ ] Fini la transiron de la flankaj bretoj de Agordoj, Retpoŝto kaj la dosieradministrilo al **LingmoUI**, kun la sama aspekto kiel la aliaj aplikaĵoj
- [ ] Prepari la vojon por la **Wayland-seanco**: testi la aplikaĵojn kaj efektojn de Lingmo en Wayland (la kompleta seanco ankoraŭ estas planita por 2027)

### 09/11 – 13/12 · Prizorgi la komputilon

- [ ] **Sistema monitoro** (Ctrl + Shift + Esc): reto kaj grafika karto, aldone al la procesoro, memoro kaj disko, kiujn la Optimumigilo jam montras
- [ ] **Sistemaj informoj** kun butono «Kopii raporton» por peti helpon en Discord aŭ en forumoj
- [ ] Malklarigo kaj fono de la kamerao kun altkvalita eltondo (haroj, aŭdiloj kaj ŝultroj)

### 14/12 – 31/01/2027 · Ĝisdatigi sen timo

- [ ] **Aŭtomata restarigpunkto** antaŭ ĉiu ĝisdatigo (btrfs), kun eblo reiri rekte el la praŝarga menuo
- [ ] Butono **«Reiri al hieraŭ»** en Agordoj kaj en la ĝisdatigilo
- [ ] La ĝisdatigilo montras la novaĵojn de Arch en simpla lingvo kaj prokrastas ĝisdatigojn, kiuj bezonas manan zorgon
- [ ] **Pelilo-administrilo**: detektas la grafikan karton (NVIDIA, AMD, Intel) kaj instalas la ĝustan pelilon, tenante ĝin kongrua kun la kerno

### 01/02 – 31/03/2027 · Ĉiutaga aparataro

- [ ] **Presiloj kaj skaniloj** rekonataj aŭtomate, kun simpla ekrano por aldoni ilin
- [ ] **Bluetooth-aŭdiloj**: elekti inter muzika kvalito kaj mikrofono, revenante al kvalito post vokoj
- [ ] **Baterio**: ŝarglimo je 80% por pli longa vivdaŭro, energiprofiloj kaj sano de la baterio
- [ ] Akra frakcia skalado (125%, 150%) en ĉiuj aplikaĵoj, po ekrano

### 01/04 – 31/05/2027 · Integriĝo kaj aspekto

- [ ] **Ŝanĝi la aranĝon** per unu klako: stilo macOS, stilo Windows aŭ Lingmo
- [ ] **Antaŭaj versioj** de dosieroj en la dosieradministrilo, kiel en Time Machine
- [ ] **Integrita telefono**: sciigoj, dosieroj kaj tondujo kun Android kaj iPhone (KDE Connect)
- [ ] **Nubaj kontoj**: Google Drive kaj OneDrive aperas en la dosieradministrilo
- [x] Kopii la tekston de ekrankopio (OCR)
- [ ] Instalilo, kiu avertas pri BitLocker kaj Secure Boot dum instalado apud Windows

### Ekde junio 2027

- [ ] AI-asistanto: resumi, traduki kaj klarigi la elektitan tekston en ajna aplikaĵo
- [ ] Gepatra kontrolo: ekrantempo kaj enlitiĝa horo
- [ ] Wayland-seanco
- [ ] ISO aŭtomate kreata kaj testata ĉe ĉiu versio
- [ ] Office kaj Adobe kun integrita Windows (WinBoat), por tiuj, kiuj bezonas ĝin
