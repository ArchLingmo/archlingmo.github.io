## Roadmap

Was wir noch bauen werden. Was bereits fertig ist, steht unter [Funktionen](#recursos).
Die Termine sind eine Schätzung und können sich ändern. Vorschläge und Prioritäten besprechen wir auf unserem
Discord, und jeder Punkt wird zu einem offenen Pull Request auf GitHub.

Die Prioritäten ergeben sich aus dem, was in Foren und Tests anderer Distributionen am häufigsten auftaucht:
die Angst, dass ein Update das System kaputt macht, Treiber, Programme ohne Terminal installieren und
den Computer pflegen, ohne technisch versiert sein zu müssen.

### 28/09 – 08/11 · Programme ohne Umstände (und sicher)

- [x] **App Store**: Nutzerbewertungen und die Berechtigungen jeder App vor der Installation (der Store mit Flathub und den Arch-Paketquellen ist schon da)
- [x] **Installieren per Ziehen** wie auf dem Mac: Doppelklick auf eine .exe, .deb, .rpm oder AppImage und in **Programme** ziehen
- [x] **Alles von außen läuft in einer isolierten Box**: Windows-Programme (Bottles), .deb/.rpm-Pakete (Podman) und AppImages sehen Ihr System und Ihre Dateien nicht ohne Erlaubnis
- [x] Eine Seite **Boxen** in den Einstellungen: Zugriff auf Dateien, Netzwerk, Kamera und Mikrofon ansehen, erteilen oder entziehen und eine Box löschen
- [x] **Android-Apps** (APK) in einer Box, mit Waydroid, die im Starter wie jede andere App erscheinen
- [x] **Spielen mit einem Klick**: Steam, Proton und Spielmodus, mit Hinweis auf Spiele, deren Anti-Cheat unter Linux nicht funktioniert
- [x] **Native Spiele**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installation über Store → Native Spiele. Beim ersten Start wird die ROM des eigenen Moduls benötigt; die Pakete enthalten keine Spieldaten.
- [x] **Zum Bildschirm fragen** (Meta + S): einen Bereich einkreisen, um ihn zu erklären, zu übersetzen oder zusammenzufassen, mit der KI auf Ihrem Computer
- [x] **App-Aktionen** (Lingmo Intents): Apps bieten dem Assistenten, den Abläufen und Spotlight Aktionen an
- [x] **Assistent mit Abläufen, Agenten und Sprache** (Meta + Umschalt + I)
- [x] **Eine Tastatur und eine Maus für mehrere Computer** (Deskflow), mit gemeinsamer Zwischenablage

### 09/11 – 13/12 · Erstellen und teilen

- [ ] **Ein klügeres Lingmo Studio**: den Bildausschnitt dem Hauptmotiv folgen lassen (nicht nur dem Gesicht), erkennen, wer in jedem Abschnitt spricht (Sprecherdiarisierung), und Audioeffekte auf jeder Spur
- [ ] **Die fehlenden nativen Spiele veröffentlichen**: Zelda: Ocarina of Time (Ship of Harkinian) und Mario Kart 64 (SpaghettiKart), im Store derzeit „Demnächst“, sobald die Lizenzen der Projekte die Verbreitung erlauben
- [ ] Die Seitenleisten von Einstellungen, Mail und Dateimanager vollständig auf **LingmoUI** umstellen, im selben Look wie die anderen Apps
- [ ] Den Weg für die **Wayland-Sitzung** ebnen: die Apps und Effekte von Lingmo unter Wayland testen (die vollständige Sitzung ist weiterhin für 2027 geplant)

### 09/11 – 13/12 · Den Computer pflegen

- [ ] **Systemmonitor** (Ctrl + Shift + Esc): Netzwerk und Grafikkarte, zusätzlich zu Prozessor, Arbeitsspeicher und Festplatte, die der Optimierer schon anzeigt
- [ ] **Systeminformationen** mit einem Knopf „Bericht kopieren“, um auf Discord oder in Foren um Hilfe zu bitten
- [ ] Kamera-Weichzeichner und -Hintergrund mit sauberer Freistellung (Haare, Kopfhörer und Schultern)

### 14/12 – 31/01/2027 · Aktualisieren ohne Angst

- [ ] **Automatischer Wiederherstellungspunkt** vor jedem Update (btrfs), mit der Möglichkeit, direkt über das Bootmenü zurückzukehren
- [ ] Knopf **„Zurück zu gestern“** in den Einstellungen und in der Aktualisierung
- [ ] Die Aktualisierung zeigt die Arch-Neuigkeiten in einfacher Sprache und hält Updates zurück, die manuelles Eingreifen erfordern
- [ ] **Treiberverwaltung**: erkennt die Grafikkarte (NVIDIA, AMD, Intel), installiert den passenden Treiber und hält ihn mit dem Kernel aktuell

### 01/02 – 31/03/2027 · Hardware für den Alltag

- [ ] **Drucker und Scanner** werden automatisch erkannt, mit einer einfachen Oberfläche zum Hinzufügen
- [ ] **Bluetooth-Kopfhörer**: Wahl zwischen Musikqualität und Mikrofon, nach Anrufen zurück zur Qualität
- [ ] **Akku**: Ladebegrenzung auf 80 % für eine längere Lebensdauer, Energieprofile und Akkuzustand
- [ ] Scharfe gebrochene Skalierung (125 %, 150 %) in allen Apps, pro Bildschirm

### 01/04 – 31/05/2027 · Integration und Aussehen

- [ ] **Layout wechseln** mit einem Klick: macOS-Stil, Windows-Stil oder Lingmo
- [ ] **Frühere Versionen** von Dateien im Dateimanager, wie bei Time Machine
- [x] **Smartphone-Anbindung**: Benachrichtigungen, Dateien und Zwischenablage mit Android und iPhone (KDE Connect)
- [ ] **Cloud-Konten**: Google Drive und OneDrive direkt im Dateimanager
- [x] Text aus einem Screenshot kopieren (OCR)
- [ ] Installer, der bei der Installation neben Windows auf BitLocker und Secure Boot hinweist

### Ab Juni 2027

- [ ] KI-Assistent: markierten Text in jeder App zusammenfassen, übersetzen und erklären
- [ ] Jugendschutz: Bildschirmzeit und Schlafenszeit
- [ ] Wayland-Sitzung
- [ ] ISO, die bei jeder Version automatisch erstellt und getestet wird
- [ ] Office und Adobe mit integriertem Windows (WinBoat), für alle, die es brauchen
