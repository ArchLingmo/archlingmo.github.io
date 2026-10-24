## Plan razvoja

Ono što tek trebamo napraviti. Ono što je već gotovo nalazi se u odjeljku [Mogućnosti](#recursos).
Datumi su procjena i mogu se promijeniti. Prijedlozi i prioriteti razgovaraju se na našem
Discordu, a svaka stavka postaje otvoreni pull request na GitHubu.

Prioriteti proizlaze iz onoga što se najčešće spominje na forumima i u recenzijama drugih distribucija:
strah da će ažuriranje pokvariti sistem, drajveri, instaliranje programa bez terminala i
održavanje računara bez potrebe da budete stručnjak.

### 28.09. do 08.11. · Programi bez komplikacija (i sigurno)

- [x] **Prodavnica aplikacija**: ocjene korisnika i dozvole svake aplikacije prije instalacije (Prodavnica s Flathubom i Arch repozitorijima već postoji)
- [x] **Prevuci za instalaciju**, kao na Macu: dvaput kliknite na .exe, .deb, .rpm ili AppImage i prevucite ga u **Aplikacije**
- [x] **Sve što dolazi izvana radi u izolovanoj kutiji**: Windows programi (Bottles), .deb/.rpm paketi (Podman) i AppImage ne vide vaš sistem ni vaše datoteke bez dozvole
- [x] Stranica **Kutije** u Postavkama: pregledajte, dajte ili uklonite pristup datotekama, mreži, kameri i mikrofonu te obrišite kutiju
- [x] **Android aplikacije** (APK) u kutiji, pomoću Waydroida, koje se pojavljuju u pokretaču kao i svaka druga aplikacija
- [x] **Igre jednim klikom**: Steam, Proton i režim za igre, s upozorenjem za igre sa anti-cheat zaštitom koje ne rade na Linuxu
- [x] **Nativne igre**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalirajte iz Prodavnice → Nativne igre. Pri prvom pokretanju priložite ROM vlastitog kertridža; paketi ne sadrže podatke igara.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09.11. do 13.12. · Stvaranje i dijeljenje

- [ ] **Pametniji Lingmo Studio**: kadriranje koje prati glavni objekat (ne samo lice), prepoznavanje ko govori u kojem dijelu (dijarizacija) i zvučni efekti na svakoj traci
- [ ] **Objaviti preostale nativne igre**: Zelda: Ocarina of Time (Ship of Harkinian) i Mario Kart 64 (SpaghettiKart), trenutno "Uskoro" u Prodavnici, čim licence projekata dozvole njihovu distribuciju
- [ ] Završiti prelazak bočnih traka Postavki, Pošte i upravitelja datoteka na **LingmoUI**, s istim izgledom kao ostale aplikacije
- [ ] Pripremiti teren za **Wayland sesiju**: testirati Lingmo aplikacije i efekte na Waylandu (puna sesija je i dalje planirana za 2027.)

### 09.11. do 13.12. · Briga o računaru

- [ ] **Monitor sistema** (Ctrl + Shift + Esc): mreža i grafička kartica, uz procesor, memoriju i disk koje Optimizator već prikazuje
- [ ] **Informacije o sistemu** s dugmetom "Kopiraj izvještaj" za traženje pomoći na Discordu ili forumima
- [ ] Zamućenje i pozadina kamere s kvalitetnim izrezivanjem (kosa, slušalice i ramena)

### 14.12. do 31.01.2027. · Ažuriranje bez straha

- [ ] **Automatska tačka vraćanja** prije svakog ažuriranja (btrfs), s mogućnošću povratka direktno iz menija za pokretanje
- [ ] Dugme **"Vrati na jučer"** u Postavkama i u programu za ažuriranje
- [ ] Program za ažuriranje prikazuje Arch vijesti jednostavnim jezikom i zadržava ažuriranja koja zahtijevaju ručnu intervenciju
- [ ] **Upravitelj drajvera**: prepoznaje grafičku karticu (NVIDIA, AMD, Intel) i instalira pravi drajver, održavajući ga usklađenim s kernelom

### 01.02. do 31.03.2027. · Svakodnevni hardver

- [ ] **Štampači i skeneri** prepoznati automatski, s jednostavnim ekranom za dodavanje
- [ ] **Bluetooth slušalice**: izbor između kvaliteta muzike i mikrofona, s povratkom na kvalitet muzike nakon poziva
- [ ] **Baterija**: ograničenje punjenja na 80% za duži vijek, profili napajanja i stanje baterije
- [ ] Oštro frakcijsko skaliranje (125%, 150%) u svim aplikacijama, po monitoru

### 01.04. do 31.05.2027. · Integracija i izgled

- [ ] **Promjena rasporeda** jednim klikom: stil macOS, stil Windows ili Lingmo
- [ ] **Prethodne verzije** fajlova u upravitelju fajlova, kao u Time Machine
- [x] **Integrisan telefon**: obavještenja, fajlovi i međuspremnik s Androidom i iPhoneom (KDE Connect)
- [ ] **Računi u oblaku**: Google Drive i OneDrive vidljivi u upravitelju fajlova
- [x] Kopiranje teksta sa snimka ekrana (OCR)
- [ ] Instalacijski program koji upozorava na BitLocker i Secure Boot pri instalaciji pored Windowsa

### Od juna 2027.

- [ ] AI asistent: sažimanje, prevođenje i objašnjavanje odabranog teksta u bilo kojoj aplikaciji
- [ ] Roditeljski nadzor: vrijeme korištenja i vrijeme za spavanje
- [ ] Wayland sesija
- [ ] ISO automatski generisan i testiran za svaku verziju
- [ ] Office i Adobe uz integrisani Windows (WinBoat), za one kojima treba
