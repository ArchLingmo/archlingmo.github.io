## Funkciók

Mindez már ma is benne van az ArchLingmóban.

### Asztal

- **Felső sáv** órával, a dátumra kattintva megnyíló naptárral és a tálca ikonjaival
- **Vezérlőközpont**: Wi-Fi, Bluetooth, sötét mód, éjszakai fény, ne zavarjanak és hangerő egyetlen panelen
- **Dokk** ablakelőnézettel, amikor fölé viszed az egeret, és **tömör, üveghatású vagy átlátszó** háttérrel
- **Spotlight** (Super + Szóköz): alkalmazások, fájlok, számolás, mértékegység- és pénznemváltás, valamint keresés a dokumentumok tartalmában
- **Vágólapelőzmények** (Super + V)
- **Aktív sarkok**: vidd az egeret egy sarokba, hogy lásd az összes ablakot, megjelenítsd az asztalt vagy zárold a képernyőt
- **Effektek**: kocsonyás ablakok, varázslámpa és könyvlapozós Alt+Tab
- Globális menü a GTK-alkalmazásokhoz is
- **Óra- és időjárás-kisalkalmazások** az asztalon, valódi előrejelzéssel a választott városra, egyetlen ikon alá csoportosítva a felső sávon
- **„Körhinta” Alt+Tab**: válts ablakot egy 3D-s körhintában, cover flow stílusban, tükröződéssel
- **Lingmo ikonok**: saját ikontéma, folyékony, squircle (lekerekített négyzet) formájú ikonokkal, a WhiteSur alapján generálva. A külső alkalmazások ikonjai automatikusan ugyanazt az ikonhátteret kapják
- **Dokk nagyítással**: akár 200%-os ikonnagyítás, amikor fölé viszed az egeret, és **felső sáv** előre beállított, választható magasságokkal

### Mesterséges intelligencia (a saját gépeden)

- **Asszisztens** (Super + I): a saját gépeden futó MI, Ollamával. Elolvassa a dokumentumaidat (PDF, DOCX…), jegyzeteidet és naptáradat, megnézi a rendszerinformációkat, és csak olvasó terminálparancsokat futtat egy elszigetelt dobozban. Engedélyeddel jegyzeteket, eseményeket, feladatokat és fájlokat hoz létre: minden változtatás megerősítést kér, és soha nem töröl semmit
- **MI a Spotlightban**: kezdd "ai:" előtaggal a csevegéshez, vagy írj egy "?"-re végződő kérdést, és válaszd, hogy az MI-től kérdezed. Megmutatja, mennyi ideig tartott és milyen gyors volt az egyes válasz, és ugyanazokat az eszközöket használja, mint az Asszisztens
- **Beállítások › Mesterséges intelligencia**: az Ollama állapota, telepített modellek, ajánlások *ehhez* a géphez, modellek letöltése folyamatjelzővel, „Gondolkodj válasz előtt” opció, valamint az Asszisztens engedélyei és eszközei
- **Automatizáló**: napi rutinok megadott időpontban, egy paranccsal, és ha szeretnéd, a helyi MI elmagyarázza az eredményt
- **Átírás és feliratok** a Beállítások › Mesterséges intelligencia oldalon: whisper.cpp-modellek címkékkel és „Ajánlott a gépedhez” jelvénnyel, a hardveredhez ajánlott MI-modellek mellett (llmfit)

### Beállítások

- **Üdvözlőképernyő** az első bejelentkezéskor: világos vagy sötét téma, kiemelőszín, háttérkép és effektek
- **Kijelzők**: rendezd el őket húzással, forgasd el és válaszd ki az elsődlegeset
- **Éjszakai fény** automatikus időzítéssel, billentyűzetkiosztás váltása a sávról
- **Gyorsbillentyűk** és **Automatikus indítás** oldal, ahol kiválaszthatod, mi induljon el a rendszerrel
- **Frissítés terminál nélkül**: értesítés a sávon és „Frissítés” gomb
- Elérhető **48 nyelven**

### Kamera és biztonság

- **Automatikus képkivágás** a kamerával megbeszéléseken, bármelyik alkalmazásban (Meet, Zoom, Teams, Discord)
- **Ujjlenyomat-olvasó** a bejelentkezéshez, feloldáshoz és a rendszergazdai jelszókérések jóváhagyásához
- **Arcfelismerés** a webkamerával a bejelentkezéshez és feloldáshoz (ha nem sikerül, jelszót kér)

### Alkalmazások

- **Levelezés**: IMAP- és POP3-fiókok a szolgáltató automatikus felismerésével és útmutatóval mindegyikhez (alkalmazásjelszavak Gmailhez, Yahoohoz és iCloudhoz). Mappák az olvasatlan üzenetek számával, keresés és szűrők, csillagozás, archiválás, több üzenet áthelyezése és törlése egyszerre, automatikus szabályok, névjegyek automatikus kiegészítéssel és értesítés az új levelekről
- **Naptár és feladatok** a Levelezésben: havi, heti, napi és napirend nézet, ismétlődő események, emlékeztetők akkor is, ha az alkalmazás be van zárva, és CalDAV-szinkronizálás (iCloud, Yahoo, Fastmail, Nextcloud). Mai, közelgő és lejárt feladatok, valamint meghívók megbeszélésekre (.ics) Elfogadás, Talán vagy Elutasítás gombbal
- **Jegyzetek** Notion-stílusban: blokkszerkesztő, "/" menü, aloldalak, ikonok, kedvencek, kuka és gyorskeresés (Ctrl + K)
- **Optimalizáló**: kattints a Processzor, Memória vagy Tárhely elemre a részletekért: hová lett a lemezterület, mappáról mappára, javaslatokkal, és mely alkalmazások használják a legtöbb memóriát és processzort. Az „Optimalizálás és takarítás” gomb törli a gyorsítótárakat, a frissítési gyorsítótárat, a régi naplókat és a nem használt Flatpak-futtatókörnyezeteket
- **Fájlkezelő** húzd és ejtsd támogatással és a Thunarhoz hasonló rendezéssel
- **Terminál** Dracula témával sötét módban és a parancsértelmező (bash, zsh, fish…) kiválasztásával az új beállításokban, **szövegszerkesztő**, **számológép** és **videolejátszó**
- **Óra és ébresztők**, **USB-médiakészítő** ISO-fájl pendrive-ra írásához, **Windows-programok** (nyiss meg egy .exe fájlt, és nézd meg a Linuxos változatot vagy egy alternatívát az Áruházban, vagy próbáld ki Bottles/Wine segítségével) és az **Alkalmazásbolt**, ahol a Flathub és az Arch tárolói egy helyen vannak
- Minden alkalmazás ugyanazt a Lingmo megjelenést kapja, világos és sötét témával
- **Képernyőképek és képernyőfelvétel** mikrofonnal és rendszerhanggal
- **Calamares** telepítő és **PipeWire** hangrendszer
- **Natív játékok**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Telepítés: Áruház → Natív játékok. Első indításkor add meg a saját kazettádról készült ROM-ot; a csomagok nem tartalmaznak játékadatokat.
- **Képernyőkép** (Print, Shift + Print és Ctrl + Print): mindaz, amit a Flameshot tud (jegyzetelőeszközök, rögzítés a képernyőre, másolás, mentés és parancssor), és még több: „Szöveg másolása” helyi OCR-rel, adatok kitakarása egy kattintással, intelligens kijelölés, görgetős képernyőkép, bemutató mód, szerkeszthető előzmények és GIF-felvétel
- **Fotók**: a képeid könyvtárban, kedvencekben és mappákban, ugyanazokkal a bélyegképekkel, mint a fájlkezelőben
- **PDF-olvasó**: oldalbélyegképek, tartalomjegyzék, jegyzetek és szélességhez igazítás
- **Oszlopnézet a Fájlokban** (Ctrl + 3) és freedesktop-szabványú bélyegképek, közösen a Fotókkal

### Videó: Lingmo Studio

- **Lingmo Studio**: MLT-re épülő videószerkesztő, a DaVinci Resolve-éhoz hasonló oldalakkal: Vágás, Szín, Effektek, Hang és Kimenet
- **Vágás**: többsávos idővonal, ripple, roll, slip és slide, J és L vágások, összetett klipek, proxyk és előzménypanel
- **Szín**: színkerekek, görbék, HSL, .cube LUT-ok és videoszkópok
- **Hang**: keverő, hangszínszabályzó, kompresszor, zajcsökkentés és LUFS-alapú hangerő-normalizálás
- **Exportálás** alapértelmezetten MP4-be, a videokártya gyorsításával (NVENC vagy VA-API)
- **Rövid klipek készítése**: egy hosszú videóból rövid klipeket készít Shorts, Reels, TikTok, Kwai, LinkedIn, X és Stories számára, az egyes hálózatok által ajánlott hosszal és biztonságos területtel; a legjobb pillanatokat egy helyi MI (Ollama) választja ki, a 9:16-os képkivágás pedig követi az arcot
- **Feliratok** szóról szóra szinkronizálva a whisper.cpp-vel, a saját gépeden: kilenc, olvasásra tervezett stílus (karaoke, ahol a szín végigsöpör a mondaton, kiemelt szó, szóról szóra, podcast, neon, nagy kontraszt, két beszélő…) és exportálás SRT, VTT és ASS formátumba
