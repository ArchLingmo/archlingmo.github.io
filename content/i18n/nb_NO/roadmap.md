## Veikart

Det vi fortsatt skal bygge. Det som allerede er klart, finner du under [Funksjoner](#recursos).
Datoene er anslag og kan endres. Forslag og prioriteringer diskuteres på vår
Discord, og hvert punkt blir en åpen pull request på GitHub.

Prioriteringene bygger på det som dukker opp oftest i forum og i anmeldelser av andre distroer:
frykten for at en oppdatering ødelegger systemet, drivere, å installere programmer uten terminal og
å ta vare på datamaskinen uten å måtte være teknisk.

### 28/09 til 08/11 · Programmer uten styr (og trygt)

- [x] **Appbutikk**: brukervurderinger og hver apps tillatelser før installasjon (butikken med Flathub og Arch-pakkebrønnene er allerede på plass)
- [x] **Installer ved å dra**, som på en Mac: dobbeltklikk på en .exe, .deb, .rpm eller AppImage og dra den til **Programmer**
- [x] **Alt utenfra kjører i en isolert boks**: Windows-programmer (Bottles), .deb/.rpm-pakker (Podman) og AppImage-er ser ikke systemet eller filene dine uten tillatelse
- [x] En **Bokser**-side i Innstillinger: se, gi eller fjern tilgang til filer, nettverk, kamera og mikrofon, og slett en boks
- [x] **Android-apper** (APK) i en boks, med Waydroid, som vises i programstarteren som alle andre apper
- [x] **Spill med ett klikk**: Steam, Proton og spillmodus, med varsel om spill med anti-juks som ikke fungerer på Linux
- [x] **Native spill**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installer fra butikken → Native spill. Ved første start trenger du en ROM fra din egen kassett; pakkene inneholder ingen spilldata.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 til 13/12 · Skap og del

- [ ] **Et smartere Lingmo Studio**: innramming som følger hovedmotivet (ikke bare ansiktet), vite hvem som snakker i hver del (talergjenkjenning) og lydeffekter på hvert spor
- [ ] **Publisere de gjenværende native spillene**: Zelda: Ocarina of Time (Ship of Harkinian) og Mario Kart 64 (SpaghettiKart), nå merket «Kommer snart» i butikken, så snart prosjektenes lisenser tillater at de distribueres
- [ ] Fullføre flyttingen av sidepanelene i Innstillinger, E-post og filbehandleren til **LingmoUI**, med samme utseende som de andre appene
- [ ] Bane vei for **Wayland-økten**: teste Lingmos apper og effekter på Wayland (den fullstendige økten er fortsatt planlagt til 2027)

### 09/11 til 13/12 · Ta vare på datamaskinen

- [ ] **Systemovervåker** (Ctrl + Shift + Esc): nettverk og skjermkort, i tillegg til prosessoren, minnet og disken som Optimalisering allerede viser
- [ ] **Systeminformasjon** med en "Kopier rapport"-knapp for å be om hjelp på Discord eller i forum
- [ ] Uskarp og byttet kamerabakgrunn med nøyaktig utklipp (hår, hodetelefoner og skuldre)

### 14/12 til 31/01/2027 · Oppdater uten frykt

- [ ] **Automatisk gjenopprettingspunkt** før hver oppdatering (btrfs), med mulighet for å gå tilbake direkte fra oppstartsmenyen
- [ ] Knappen **"Tilbake til i går"** i Innstillinger og i oppdateringsverktøyet
- [ ] Oppdateringsverktøyet viser nyheter fra Arch i et enkelt språk og holder tilbake oppdateringer som krever manuell innsats
- [ ] **Driverbehandler**: finner skjermkortet (NVIDIA, AMD, Intel) og installerer riktig driver, og holder den oppdatert i takt med kjernen

### 01/02 til 31/03/2027 · Maskinvare i hverdagen

- [ ] **Skrivere og skannere** gjenkjennes automatisk, med et enkelt skjermbilde for å legge dem til
- [ ] **Bluetooth-hodetelefoner**: velg mellom musikkvalitet og mikrofon, og få musikkvaliteten tilbake etter samtaler
- [ ] **Batteri**: ladegrense på 80 % for lengre levetid, strømprofiler og batterihelse
- [ ] Skarp brøkskalering (125 %, 150 %) i alle apper, per skjerm

### 01/04 til 31/05/2027 · Integrasjon og utseende

- [ ] **Bytt oppsett** med ett klikk: macOS-stil, Windows-stil eller Lingmo
- [ ] **Tidligere versjoner** av filer i filbehandleren, som i Time Machine
- [x] **Integrert mobil**: varsler, filer og utklippstavle med Android og iPhone (KDE Connect)
- [ ] **Skykontoer**: Google Drive og OneDrive rett i filbehandleren
- [x] Kopier tekst fra et skjermbilde (OCR)
- [ ] Installasjonsprogram som varsler om BitLocker og Secure Boot når du installerer ved siden av Windows

### Fra juni 2027

- [ ] KI-assistent: oppsummer, oversett og forklar markert tekst i hvilken som helst app
- [ ] Foreldrekontroll: skjermtid og leggetid
- [ ] Wayland-økt
- [ ] ISO som bygges og testes automatisk for hver versjon
- [ ] Office og Adobe med integrert Windows (WinBoat) for dem som trenger det
