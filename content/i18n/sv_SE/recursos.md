## Funktioner

Allt det här finns redan i ArchLingmo i dag.

### Skrivbordet

- **Toppanel** med klocka, kalender när du klickar på datumet och ikoner i systemfältet
- **Kontrollcenter**: Wi-Fi, Bluetooth, mörkt läge, nattljus, stör ej och volym i en och samma panel
- **Docka** med förhandsvisning av fönster när du håller muspekaren över och bakgrund som är **heltäckande, glas eller ingen**
- **Spotlight** (Super + Blanksteg): appar, filer, uträkningar, omvandling av enheter och valutor samt sökning i dokument
- **Urklippshistorik** (Super + V)
- **Aktiva hörn**: för musen till ett hörn för att se alla fönster, visa skrivbordet eller låsa skärmen
- **Effekter**: vingliga fönster, magisk lampa och Alt+Tab som bläddrande boksidor
- Global meny även för GTK-appar
- **Klock- och väderwidgetar** på skrivbordet, med den riktiga prognosen för staden du väljer, samlade under en ikon i toppanelen
- **Alt+Tab ”Karusell”**: byt fönster i en karusell i 3D, i cover flow-stil, med spegling
- **Lingmo-ikoner**: ett eget ikontema med mjuka ikoner i squircle-form, skapade ovanpå WhiteSur. Ikonerna för appar från tredje part får samma platta automatiskt
- **Docka med förstoring** av ikonerna upp till 200 % när du håller muspekaren över och **toppanel** med färdiga höjder att välja mellan

### Artificiell intelligens (på din dator)

- **Assistent** (Super + I): en AI som körs på din dator, med Ollama. Den läser dina dokument (PDF, DOCX…), anteckningar och kalender, tittar på systeminformation och kör terminalkommandon som bara läser, i en isolerad låda. Med ditt tillstånd skapar den anteckningar, händelser, uppgifter och filer: varje ändring kräver bekräftelse, och den raderar aldrig något
- **AI i Spotlight**: börja med "ai:" för att chatta, eller skriv en fråga som slutar med "?" och välj att fråga AI:n. Den visar hur lång tid varje svar tog och hur snabbt det gick, och använder samma verktyg som Assistenten
- **Inställningar › Artificiell intelligens**: Ollamas status, installerade modeller, rekommendationer för *den här* datorn, nedladdning av modeller med förlopp, alternativet ”Tänk innan du svarar” samt Assistentens behörigheter och verktyg
- **Automatisering**: dagliga rutiner vid en bestämd tid, med ett kommando och, om du vill, den lokala AI:n som förklarar resultatet
- **Transkribering och undertexter** i Inställningar › Artificiell intelligens: whisper.cpp-modeller med etiketter och märket ”Rekommenderas för din dator”, bredvid de AI-modeller som rekommenderas för din hårdvara (llmfit)

### Inställningar

- **Välkommen** vid första inloggningen: ljust eller mörkt tema, accentfärg, skrivbordsbakgrund och effekter
- **Skärmar**: dra för att ordna dem, rotera och välj huvudskärm
- **Nattljus** med automatiskt schema och byte av tangentbordslayout från panelen
- Sidorna **Kortkommandon** och **Autostart** för att välja vad som öppnas när datorn startar
- **Uppdateringar utan terminal**: en avisering i panelen och en knapp för att ”Uppdatera”
- Finns på **48 språk**

### Kamera och säkerhet

- **Automatisk inramning** med kameran i möten, i vilken app som helst (Meet, Zoom, Teams, Discord)
- **Fingeravtrycksläsare** för att logga in, låsa upp och godkänna administratörslösenord
- **Ansiktsigenkänning** via webbkameran för att logga in och låsa upp (om det misslyckas frågar den efter lösenordet)

### Program

- **E-post**: IMAP- och POP3-konton med automatisk identifiering av leverantören och en guide för var och en (applösenord för Gmail, Yahoo och iCloud). Mappar med antal olästa, sökning och filter, stjärnmärk, arkivera, flytta och radera många meddelanden på en gång, automatiska regler, kontakter med autokomplettering och aviseringar om ny e-post
- **Kalender och uppgifter** i E-post: vyerna månad, vecka, dag och agenda, återkommande händelser, påminnelser även när appen är stängd och synkronisering via CalDAV (iCloud, Yahoo, Fastmail, Nextcloud). Uppgifter för i dag, kommande och försenade, och mötesinbjudningar (.ics) med Acceptera, Kanske eller Avböj
- **Anteckningar** i Notion-stil: blockredigerare, ”/”-meny, undersidor, ikoner, favoriter, papperskorg och snabbsökning (Ctrl + K)
- **Optimerare**: klicka på Processor, Minne eller Lagring för att se detaljerna: vart diskutrymmet tog vägen, mapp för mapp, med förslag, och apparna som använder mest minne och processor. Knappen ”Optimera och rensa” tömmer cacheminnen, uppdateringscachen, gamla loggar och oanvända Flatpak-körmiljöer
- **Filhanterare** med dra och släpp och sortering som i Thunar
- **Terminal** med Dracula-tema i mörkt läge och val av skal (bash, zsh, fish…) i de nya inställningarna, **textredigerare**, **kalkylator** och **videospelare**
- **Klocka och alarm**, en **USB-mediaskapare** för att skriva en ISO till ett USB-minne, **Windows-program** (öppna en .exe och se Linux-versionen eller ett alternativ i butiken, eller prova med Bottles/Wine) och **Appbutiken** med Flathub och Archs förråd på ett ställe
- Alla appar har samma Lingmo-utseende, i ljust och mörkt tema
- **Skärmbilder och skärminspelning**, med mikrofon och systemljud
- Installationsprogrammet **Calamares** och ljud via **PipeWire**
- **Inbyggda spel**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installera från Butiken → Inbyggda spel. Vid första starten behövs en ROM från din egen kassett; paketen innehåller inga speldata.
- **Skärmbild** (Print, Shift + Print och Ctrl + Print): allt som Flameshot gör (anteckningsverktyg, fäst på skärmen, kopiera, spara och kommandorad) och mer: ”Kopiera text” med OCR direkt på datorn, dölj uppgifter med ett klick, smart markering, rullande skärmbild, presentationsläge, redigerbar historik och inspelning som GIF
- **Foton**: dina bilder i ett bibliotek, favoriter och mappar, med samma miniatyrer som i filhanteraren
- **PDF-läsare**: miniatyrer av sidorna, innehållsförteckning, anteckningar och anpassa till bredd
- **Kolumnvy i Filer** (Ctrl + 3) och miniatyrer enligt freedesktop-standarden, delade med Foton

### Video: Lingmo Studio

- **Lingmo Studio**: en videoredigerare byggd på MLT, med sidor som i DaVinci Resolve: Redigera, Färg, Effekter, Ljud och Leverera
- **Redigering**: tidslinje med flera spår, ripple, roll, slip och slide, J- och L-klipp, sammansatta klipp, proxyfiler och en historikpanel
- **Färg**: färghjul, kurvor, HSL, .cube-LUT:ar och scopes
- **Ljud**: mixer, equalizer, kompressor, brusreducering och ljudnivånormalisering i LUFS
- **Exportera** till MP4 som standard, accelererat av grafikkortet (NVENC eller VA-API)
- **Skapa klipp**: gör om en lång video till klipp för Shorts, Reels, TikTok, Kwai, LinkedIn, X och Stories, med den längd och säkra yta som varje nätverk rekommenderar, de bästa ögonblicken utvalda av en lokal AI (Ollama) och en 9:16-inramning som följer ansiktet
- **Undertexter** synkade ord för ord med whisper.cpp, på din egen dator: nio stilar gjorda för läsning (karaoke där färgen sveper över raden, markerat ord, ord för ord, podcast, neon, hög kontrast, två talare…) och export till SRT, VTT och ASS
