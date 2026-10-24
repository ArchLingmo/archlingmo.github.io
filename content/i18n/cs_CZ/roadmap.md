## Plán vývoje

Co teprve postavíme. Co už je hotové, najdete v části [Funkce](#recursos).
Termíny jsou odhad a mohou se změnit. Návrhy a priority probíráme na našem
Discordu a z každé položky vznikne otevřený pull request na GitHubu.

Priority vycházejí z toho, co se nejčastěji objevuje na fórech a v recenzích jiných distribucí:
strach, že aktualizace rozbije systém, ovladače, instalace programů bez terminálu a
péče o počítač bez technických znalostí.

### 28/09 – 08/11 · Programy bez komplikací (a bezpečně)

- [x] **Obchod s aplikacemi**: hodnocení uživatelů a oprávnění každé aplikace před instalací (Obchod s Flathubem a repozitáři Archu už je tady)
- [x] **Instalace přetažením** jako na Macu: dvakrát klikněte na .exe, .deb, .rpm nebo AppImage a přetáhněte ho do **Aplikací**
- [x] **Vše zvenčí běží v izolovaném boxu**: programy pro Windows (Bottles), balíčky .deb/.rpm (Podman) a AppImage nevidí váš systém ani vaše soubory bez svolení
- [x] Stránka **Boxy** v Nastavení: zobrazte, udělte nebo odeberte přístup k souborům, síti, kameře a mikrofonu a smažte box
- [x] **Aplikace pro Android** (APK) v boxu s Waydroidem, které se v launcheru zobrazí jako jakákoli jiná aplikace
- [x] **Hry jedním kliknutím**: Steam, Proton a herní režim, s upozorněním na hry, jejichž anti-cheat na Linuxu nefunguje
- [x] **Nativní hry**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalace z Obchodu → Nativní hry. Při prvním spuštění zadejte ROM z vlastní cartridge; balíčky neobsahují herní data.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · Tvorba a sdílení

- [ ] **Chytřejší Lingmo Studio**: ořez, který sleduje hlavní objekt (nejen obličej), rozpoznání, kdo v které části mluví (diarizace), a zvukové efekty na každé stopě
- [ ] **Vydat zbývající nativní hry**: Zelda: Ocarina of Time (Ship of Harkinian) a Mario Kart 64 (SpaghettiKart), v Obchodě zatím „Již brzy“, jakmile licence projektů dovolí jejich distribuci
- [ ] Dokončit převod bočních panelů Nastavení, Pošty a správce souborů na **LingmoUI**, se stejným vzhledem jako ostatní aplikace
- [ ] Připravit půdu pro **relaci Wayland**: otestovat aplikace a efekty Lingmo na Waylandu (plná relace je stále plánována na rok 2027)

### 09/11 – 13/12 · Péče o počítač

- [ ] **Monitor systému** (Ctrl + Shift + Esc): síť a grafická karta, navíc k procesoru, paměti a disku, které už ukazuje Optimalizátor
- [ ] **Informace o systému** s tlačítkem „Kopírovat zprávu“ pro žádost o pomoc na Discordu nebo na fórech
- [ ] Rozmazání a pozadí kamery s kvalitním ořezem (vlasy, sluchátka a ramena)

### 14/12 – 31/01/2027 · Aktualizace bez obav

- [ ] **Automatický bod obnovení** před každou aktualizací (btrfs), s možností vrátit se přímo ze spouštěcí nabídky
- [ ] Tlačítko **„Zpět na včerejšek“** v Nastavení a v aktualizátoru
- [ ] Aktualizátor zobrazuje novinky z Archu srozumitelným jazykem a pozdrží aktualizace, které vyžadují ruční zásah
- [ ] **Správce ovladačů**: rozpozná grafickou kartu (NVIDIA, AMD, Intel), nainstaluje správný ovladač a udržuje ho v souladu s jádrem

### 01/02 – 31/03/2027 · Běžný hardware

- [ ] **Tiskárny a skenery** rozpoznané automaticky, s jednoduchou obrazovkou pro přidání
- [ ] **Bluetooth sluchátka**: volba mezi kvalitou hudby a mikrofonem, po hovoru návrat ke kvalitě
- [ ] **Baterie**: limit nabíjení na 80 % pro delší životnost, profily napájení a stav baterie
- [ ] Ostré zlomkové škálování (125 %, 150 %) ve všech aplikacích, pro každý monitor zvlášť

### 01/04 – 31/05/2027 · Integrace a vzhled

- [ ] **Změna rozložení** jedním kliknutím: styl macOS, styl Windows nebo Lingmo
- [ ] **Předchozí verze** souborů ve správci souborů, jako v Time Machine
- [x] **Propojený telefon**: oznámení, soubory a schránka s Androidem a iPhonem (KDE Connect)
- [ ] **Cloudové účty**: Google Drive a OneDrive přímo ve správci souborů
- [x] Kopírování textu ze snímku obrazovky (OCR)
- [ ] Instalátor, který upozorní na BitLocker a Secure Boot při instalaci vedle Windows

### Od června 2027

- [ ] AI asistent: shrnutí, překlad a vysvětlení vybraného textu v jakékoli aplikaci
- [ ] Rodičovská kontrola: čas u obrazovky a večerka
- [ ] Relace Wayland
- [ ] ISO automaticky sestavené a otestované u každé verze
- [ ] Office a Adobe s integrovanými Windows (WinBoat) pro ty, kdo je potřebují
