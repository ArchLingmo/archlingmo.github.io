## Plán vývoja

Čo ešte postavíme. Čo je už hotové, nájdete v časti [Funkcie](#recursos).
Termíny sú odhad a môžu sa zmeniť. Návrhy a priority rozoberáme na našom
Discorde a z každej položky vznikne otvorený pull request na GitHube.

Priority vychádzajú z toho, čo sa najčastejšie objavuje na fórach a v recenziách iných distribúcií:
strach, že aktualizácia pokazí systém, ovládače, inštalácia programov bez terminálu a
starostlivosť o počítač bez technických znalostí.

### 28/09 – 08/11 · Programy bez komplikácií (a bezpečne)

- [ ] **Obchod s aplikáciami**: hodnotenia používateľov a povolenia každej aplikácie pred inštaláciou (Obchod s Flathubom a repozitármi Archu už existuje)
- [ ] **Inštalácia potiahnutím**, ako na Macu: dvakrát kliknite na .exe, .deb, .rpm alebo AppImage a potiahnite ho do **Aplikácií**
- [ ] **Všetko zvonku beží v izolovanom boxe**: programy pre Windows (Bottles), balíky .deb/.rpm (Distrobox) a AppImage nevidia váš systém ani súbory bez povolenia
- [ ] Stránka **Boxy** v Nastaveniach: zobrazte, udeľte alebo odoberte prístup k súborom, sieti, kamere a mikrofónu a odstráňte box
- [ ] **Aplikácie pre Android** (APK) v boxe cez Waydroid, ktoré sa zobrazia v spúšťači ako každá iná aplikácia
- [ ] **Hry jedným kliknutím**: Steam, Proton a herný režim, s upozornením na hry, ktorých anti-cheat na Linuxe nefunguje
- [x] **Natívne hry**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Inštalujte cez Obchod → Natívne hry. Pri prvom spustení zadajte ROM získanú z vlastnej kazety; balíky neobsahujú herné dáta.
- [ ] **Ďalšie natívne hry**: Zelda: Ocarina of Time (Ship of Harkinian) a Mario Kart 64 (SpaghettiKart), v obchode zatiaľ „Už čoskoro“

### 09/11 – 13/12 · Starostlivosť o počítač

- [ ] **Monitor systému** (Ctrl + Shift + Esc): sieť a grafická karta, popri procesore, pamäti a disku, ktoré už ukazuje Optimalizátor
- [ ] **Informácie o systéme** s tlačidlom „Kopírovať správu“ na žiadosť o pomoc na Discorde alebo na fórach
- [ ] Rozmazanie a pozadie kamery s kvalitným orezaním (vlasy, slúchadlá a plecia)

### 14/12 – 31/01/2027 · Aktualizácie bez obáv

- [ ] **Automatický bod obnovenia** pred každou aktualizáciou (btrfs), s možnosťou vrátiť sa priamo zo zavádzacej ponuky
- [ ] Tlačidlo **„Späť na včerajšok“** v Nastaveniach a v aktualizátore
- [ ] Aktualizátor zobrazuje novinky z Archu zrozumiteľným jazykom a pozdrží aktualizácie, ktoré vyžadujú ručný zásah
- [ ] **Správca ovládačov**: rozpozná grafickú kartu (NVIDIA, AMD, Intel), nainštaluje správny ovládač a udržiava ho v súlade s jadrom

### 01/02 – 31/03/2027 · Bežný hardvér

- [ ] **Tlačiarne a skenery** rozpoznané automaticky, s jednoduchou obrazovkou na pridanie
- [ ] **Bluetooth slúchadlá**: voľba medzi kvalitou hudby a mikrofónom, po hovore návrat ku kvalite
- [ ] **Batéria**: limit nabíjania na 80 % pre dlhšiu životnosť, profily napájania a stav batérie
- [ ] Ostré zlomkové škálovanie (125 %, 150 %) vo všetkých aplikáciách, pre každý monitor zvlášť

### 01/04 – 31/05/2027 · Integrácia a vzhľad

- [ ] **Zmena rozloženia** jedným kliknutím: štýl macOS, štýl Windows alebo Lingmo
- [ ] **Predchádzajúce verzie** súborov v správcovi súborov, ako v Time Machine
- [ ] **Prepojený telefón**: upozornenia, súbory a schránka s Androidom a iPhonom (KDE Connect)
- [ ] **Cloudové účty**: Google Drive a OneDrive priamo v správcovi súborov
- [ ] Kopírovanie textu zo snímky obrazovky (OCR)
- [ ] Inštalátor, ktorý upozorní na BitLocker a Secure Boot pri inštalácii vedľa Windows

### Od júna 2027

- [ ] AI asistent: zhrnutie, preklad a vysvetlenie vybraného textu v akejkoľvek aplikácii
- [ ] Rodičovská kontrola: čas pred obrazovkou a večierka
- [ ] Relácia Wayland
- [ ] ISO automaticky zostavené a otestované pri každej verzii
- [ ] Office a Adobe s integrovanými Windows (WinBoat) pre tých, ktorí ich potrebujú
