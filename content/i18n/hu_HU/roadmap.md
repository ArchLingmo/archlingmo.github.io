## Ütemterv

Amit még meg fogunk építeni. Ami már elkészült, az a [Funkciók](#recursos) részben található.
A dátumok előrejelzések, és változhatnak. A javaslatokat és a prioritásokat a
Discord-szerverünkön beszéljük meg, és minden pontból nyílt pull request lesz a GitHubon.

A prioritások abból születnek, ami a fórumokon és más disztribúciók értékeléseiben a leggyakrabban előkerül:
a félelem, hogy egy frissítés tönkreteszi a rendszert, az illesztőprogramok, a programok telepítése terminál nélkül és
a számítógép karbantartása szakértelem nélkül.

### 09.28. – 11.08. · Programok bonyodalmak nélkül (és biztonságosan)

- [x] **Alkalmazásbolt**: felhasználói értékelések és az egyes alkalmazások engedélyei telepítés előtt (az Áruház a Flathubbal és az Arch tárolóival már elkészült)
- [x] **Telepítés húzással**, mint Macen: kattints duplán egy .exe, .deb, .rpm vagy AppImage fájlra, és húzd az **Alkalmazások** mappába
- [x] **Minden külső program elszigetelt dobozban fut**: a Windows-programok (Bottles), a .deb/.rpm csomagok (Podman) és az AppImage-ek engedély nélkül nem látják a rendszeredet és a fájljaidat
- [x] **Dobozok** oldal a Beállításokban: a fájlokhoz, hálózathoz, kamerához és mikrofonhoz való hozzáférés megtekintése, megadása vagy visszavonása, és doboz törlése
- [x] **Android-alkalmazások** (APK) dobozban, Waydroiddal, amelyek ugyanúgy megjelennek az indítóban, mint bármely más alkalmazás
- [x] **Játékok egy kattintással**: Steam, Proton és játékmód, figyelmeztetéssel azokra a csalásvédelmet használó játékokra, amelyek nem futnak Linuxon
- [x] **Natív játékok**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Telepítés: Áruház → Natív játékok. Első indításkor add meg a saját kazettádról készült ROM-ot; a csomagok nem tartalmaznak játékadatokat.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 11.09. – 12.13. · Alkotás és megosztás

- [ ] **Okosabb Lingmo Studio**: képkivágás, amely a fő témát követi (nem csak az arcot), annak felismerése, hogy ki beszél az egyes részekben (beszélőazonosítás), és hangeffektek minden sávon
- [ ] **A hátralévő natív játékok kiadása**: Zelda: Ocarina of Time (Ship of Harkinian) és Mario Kart 64 (SpaghettiKart), amelyek most „Hamarosan” állapotban vannak az Áruházban, amint a projektek licence engedi a terjesztésüket
- [ ] A Beállítások, a Levelezés és a fájlkezelő oldalsávjainak teljes átállítása **LingmoUI**-ra, ugyanazzal a megjelenéssel, mint a többi alkalmazás
- [ ] A **Wayland-munkamenet** előkészítése: a Lingmo alkalmazásainak és effektjeinek tesztelése Waylanden (a teljes munkamenet továbbra is 2027-re van tervezve)

### 11.09. – 12.13. · A számítógép karbantartása

- [ ] **Rendszerfigyelő** (Ctrl + Shift + Esc): hálózat és videokártya a processzor, a memória és a lemez mellett, amelyeket az Optimalizáló már mutat
- [ ] **Rendszerinformációk** „Jelentés másolása” gombbal, hogy segítséget kérhess a Discordon vagy fórumokon
- [ ] Kamera háttérelmosás és háttércsere minőségi kivágással (haj, fejhallgató és vállak)

### 12.14. – 2027.01.31. · Frissítés félelem nélkül

- [ ] **Automatikus visszaállítási pont** minden frissítés előtt (btrfs), a visszatérés lehetőségével közvetlenül a rendszerindító menüből
- [ ] **„Vissza a tegnapi állapotra”** gomb a Beállításokban és a frissítőben
- [ ] A frissítő közérthetően mutatja az Arch híreit, és visszatartja a kézi beavatkozást igénylő frissítéseket
- [ ] **Illesztőprogram-kezelő**: felismeri a videokártyát (NVIDIA, AMD, Intel), telepíti a megfelelő illesztőprogramot, és naprakészen tartja a kernellel együtt

### 2027.02.01. – 03.31. · Mindennapi hardver

- [ ] **Nyomtatók és szkennerek** automatikus felismerése, egyszerű hozzáadási képernyővel
- [ ] **Bluetooth-fejhallgatók**: választás a zenei minőség és a mikrofon között, hívások után visszaállva a zenei minőségre
- [ ] **Akkumulátor**: 80%-os töltési korlát a hosszabb élettartamért, energiaprofilok és akkumulátorállapot
- [ ] Éles tört méretezés (125%, 150%) minden alkalmazásban, monitoronként

### 2027.04.01. – 05.31. · Integráció és megjelenés

- [ ] **Elrendezésváltás** egy kattintással: macOS-stílus, Windows-stílus vagy Lingmo
- [ ] A fájlok **korábbi verziói** a fájlkezelőben, mint a Time Machine-ben
- [x] **Telefonintegráció**: értesítések, fájlok és vágólap Androiddal és iPhone-nal (KDE Connect)
- [ ] **Felhőfiókok**: a Google Drive és a OneDrive megjelenik a fájlkezelőben
- [x] Szöveg másolása képernyőképről (OCR)
- [ ] Telepítő, amely figyelmeztet a BitLockerre és a Secure Bootra, ha a Windows mellé telepítesz

### 01/02 – 31/05/2027 · Learning with Lingmo

- [ ] **Lingmo Tutor for children**: kids ask by speaking, typing, a photo of their notebook or a PDF of the lesson, and the Tutor explains in the system language, at their age level, with a clear voice and the text highlighted
- [ ] **Teach without handing over the answer**: hints and questions that get the child thinking, similar exercises to practise and maths checked before it is shown
- [ ] **Reading aloud with help**: the child reads a text and the Tutor helps with pronunciation and fluency
- [ ] **Parent mode**: age and subjects, screen time, history kept only on the computer and an always-on topic filter; nothing goes online

### 2027 júniusától

- [ ] MI-asszisztens: a kijelölt szöveg összefoglalása, fordítása és magyarázata bármelyik alkalmazásban
- [ ] Szülői felügyelet: használati idő és lefekvési idő
- [ ] Wayland-munkamenet
- [ ] Minden verziónál automatikusan elkészített és tesztelt ISO
- [ ] Office és Adobe integrált Windowsszal (WinBoat) azoknak, akiknek szükségük van rá
