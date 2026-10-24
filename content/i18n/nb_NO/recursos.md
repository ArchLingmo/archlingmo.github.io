## Funksjoner

Alt dette følger med ArchLingmo allerede i dag.

### Skrivebord

- **Topplinje** med klokke, kalender når du klikker på datoen, og ikoner i systemstatusfeltet
- **Kontrollsenter**: Wi-Fi, Bluetooth, mørk modus, nattlys, ikke forstyrr og volum i ett panel
- **Dock** med forhåndsvisning av vinduer når du holder musepekeren over, og **heldekkende, glass- eller ingen** bakgrunn
- **Spotlight** (Super + Mellomrom): apper, filer, regnestykker, omregning av enheter og valuta og søk i dokumenter
- **Utklippstavlehistorikk** (Super + V)
- **Aktive hjørner**: før musen til et hjørne for å se alle vinduer, vise skrivebordet eller låse skjermen
- **Effekter**: vaklende vinduer, magisk lampe og Alt+Tab som boksider
- Global meny også for GTK-apper
- **Klokke- og værwidgeter** på skrivebordet, med ekte værvarsel for byen du velger, samlet under ett ikon i topplinjen
- **Alt+Tab «Karusell»**: bytt vindu i en karusell i 3D, i cover flow-stil, med speilbilde
- **Lingmo-ikoner**: vårt eget ikontema med myke ikoner i squircle-form, laget oppå WhiteSur. Ikonene til apper fra tredjeparter får automatisk den samme platen
- **Dock med forstørrelse** av ikonene opptil 200 % når du holder musepekeren over, og **topplinje** med ferdige høyder å velge mellom

### Kunstig intelligens (på din datamaskin)

- **Assistent** (Super + I): en KI som kjører på datamaskinen din, med Ollama. Den leser dokumentene dine (PDF, DOCX…), notater og kalender, ser på systeminformasjon og kjører skrivebeskyttede terminalkommandoer i en isolert boks. Med din tillatelse lager den notater, hendelser, oppgaver og filer: hver endring må bekreftes, og den sletter aldri noe
- **KI i Spotlight**: start med "ai:" for å chatte, eller skriv et spørsmål som slutter med "?" og velg å spørre KI-en. Den viser hvor lang tid hvert svar tok og hvor raskt det var, og bruker de samme verktøyene som Assistent
- **Innstillinger › Kunstig intelligens**: status for Ollama, installerte modeller, anbefalinger for *denne* datamaskinen, nedlasting av modeller med fremdrift, valget «Tenk før du svarer» og Assistents tillatelser og verktøy
- **Automatisering**: daglige rutiner til fast tid, med en kommando og, om du vil, den lokale KI-en som forklarer resultatet
- **Transkripsjon og undertekster** i Innstillinger › Kunstig intelligens: whisper.cpp-modeller med etiketter og merket «Anbefalt for datamaskinen din», ved siden av KI-modellene som anbefales for maskinvaren din (llmfit)
- **Assistant flows**: build automations from blocks, a trigger (a time, a new e-mail, a voice command or a shortcut) plus app actions, follow every run step by step and approve once what the flow may do
- **Agents and voice**: assistants with their own instructions, model and tools, called in the chat, in a flow or from Spotlight ("ai:@name"). And talk to the Assistant by voice with Meta + Shift + I
- **Ask about the screen** (Meta + S): circle or select any area of the screen to explain, translate, summarize, copy its text or search the web. It is analyzed on your computer and nothing is sent
- **App actions** (Lingmo Intents): Clock, Mail, Notes, Files, Screenshots and other apps offer actions to the Assistant, Flows and Spotlight: type what you want, such as an alarm at 7, and confirm. In Settings › Artificial Intelligence you can turn off an app or a single action, and sending or changing anything always asks first

### Innstillinger

- **Velkomst** ved første innlogging: lyst eller mørkt tema, uthevingsfarge, bakgrunnsbilde og effekter
- **Skjermer**: dra for å ordne, roter og velg hovedskjerm
- **Nattlys** med automatisk tidsplan og bytte av tastaturoppsett fra linjen
- Sider for **Snarveier** og **Oppstart**, der du velger hva som starter sammen med systemet
- **Oppdateringer uten terminal**: varsel i linjen og en «Oppdater»-knapp
- Tilgjengelig på **48 språk**
- **Folders that follow your language**: when you switch language, your personal folders (Documents, Videos, Pictures…) get the new names; folders that exist in two languages are merged without deleting anything, and you can undo it

### Kamera og sikkerhet

- **Automatisk innramming** med kameraet i møter, i alle apper (Meet, Zoom, Teams, Discord)
- **Fingeravtrykkleser** for å logge inn, låse opp og godkjenne administratorpassord
- **Ansiktsgjenkjenning** med webkameraet for å logge inn og låse opp (hvis den feiler, blir du bedt om passordet)

### Apper

- **E-post**: IMAP- og POP3-kontoer med automatisk gjenkjenning av leverandør og en veiledning for hver av dem (app-passord for Gmail, Yahoo og iCloud). Mapper med antall uleste, søk og filtre, stjernemerking, arkivering, flytting og sletting av mange meldinger samtidig, automatiske regler, kontakter med autofullføring og varsler om ny e-post
- **Kalender og oppgaver** i E-post: måneds-, uke-, dags- og agendavisning, gjentakende hendelser, påminnelser selv når appen er lukket, og CalDAV-synkronisering (iCloud, Yahoo, Fastmail, Nextcloud). Oppgaver for i dag, kommende og forfalte, og møteinvitasjoner (.ics) med Godta, Kanskje eller Avslå
- **Notater** i Notion-stil: blokkeditor, «/»-meny, undersider, ikoner, favoritter, papirkurv og hurtigsøk (Ctrl + K)
- **Optimalisering**: klikk på CPU, Minne eller Lagring for å se detaljene: hvor diskplassen ble av, mappe for mappe, med forslag, og appene som bruker mest minne og prosessor. Knappen «Optimaliser og rydd» fjerner hurtigbuffere, oppdateringsbufferen, gamle logger og ubrukte Flatpak-kjøretider
- **Filbehandler** med dra og slipp og sortering som i Thunar
- **Terminal** med Dracula-tema i mørk modus og valg av skall (bash, zsh, fish…) i de nye innstillingene, **tekstredigerer**, **kalkulator** og **videospiller**
- **Klokke og alarmer**, **USB-medieskaper** for å skrive en ISO til en minnepinne, **Windows-programmer** (åpne en .exe og se Linux-versjonen eller et alternativ i butikken, eller prøv med Bottles/Wine) og **appbutikken** med Flathub og Arch-pakkebrønnene samlet på ett sted
- Alle apper har det samme Lingmo-utseendet, med lyst og mørkt tema
- **Skjermbilder og skjermopptak**, med mikrofon og systemlyd
- **Calamares**-installasjonsprogram og lyd via **PipeWire**
- **Native spill**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installer fra butikken → Native spill. Ved første start trenger du en ROM fra din egen kassett; pakkene inneholder ingen spilldata.
- **Skjermbilde** (Print, Shift + Print og Ctrl + Print): alt Flameshot gjør (merknadsverktøy, fest til skjermen, kopier, lagre og kommandolinje) og mer: «Kopier tekst» med OCR på selve datamaskinen, skjul opplysninger med ett klikk, smart markering, rullende skjermbilde, presentasjonsmodus, redigerbar historikk og opptak som GIF
- **Bilder**: bildene dine i et bibliotek, favoritter og mapper, med de samme miniatyrbildene som i filbehandleren
- **PDF-leser**: miniatyrbilder av sidene, innholdsfortegnelse, notater og tilpass til bredden
- **Kolonnevisning i Filer** (Ctrl + 3) og miniatyrbilder etter freedesktop-standarden, delt med Bilder

### Video: Lingmo Studio

- **Lingmo Studio**: et videoredigeringsprogram bygget på MLT, med sider som i DaVinci Resolve: Rediger, Farge, Effekter, Lyd og Lever
- **Redigering**: tidslinje med flere spor, ripple, roll, slip og slide, J- og L-klipp, sammensatte klipp, proxyfiler og et historikkpanel
- **Farge**: fargehjul, kurver, HSL, .cube-LUT-er og scopes
- **Lyd**: mikser, equalizer, kompressor, støyreduksjon og lydnivånormalisering i LUFS
- **Eksporter** til MP4 som standard, akselerert av skjermkortet (NVENC eller VA-API)
- **Lag klipp**: gjør en lang video om til klipp for Shorts, Reels, TikTok, Kwai, LinkedIn, X og Stories, med lengden og det trygge området hvert nettverk anbefaler, de beste øyeblikkene valgt ut av en lokal KI (Ollama) og en 9:16-innramming som følger ansiktet
- **Undertekster** synkronisert ord for ord med whisper.cpp, på din egen datamaskin: ni stiler laget for lesing (karaoke der fargen glir over linjen, uthevet ord, ord for ord, podkast, neon, høy kontrast, to som snakker…) og eksport til SRT, VTT og ASS
- **Cut**: the quick page for assembling a video, with the whole timeline in miniature above the detailed one, smart trim and shortcuts to Generate cuts and Captions
