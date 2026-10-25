## Plan rozwoju

To, co jeszcze zbudujemy. To, co jest już gotowe, znajdziesz w sekcji [Funkcje](#recursos).
Daty są szacunkowe i mogą się zmienić. Sugestie i priorytety omawiamy na naszym
Discordzie, a każdy punkt staje się otwartym pull requestem na GitHubie.

Priorytety wynikają z tego, co najczęściej pojawia się na forach i w recenzjach innych dystrybucji:
obawa, że aktualizacja zepsuje system, sterowniki, instalowanie programów bez terminala i
dbanie o komputer bez konieczności bycia specjalistą.

### 28/09 – 08/11 · Programy bez komplikacji (i bezpieczne)

- [x] **Sklep z aplikacjami**: oceny użytkowników i uprawnienia każdej aplikacji przed instalacją (Sklep z Flathub i repozytoriami Arch już jest)
- [x] **Instalacja przez przeciągnięcie**, jak na Macu: kliknij dwukrotnie plik .exe, .deb, .rpm lub AppImage i przeciągnij go do **Aplikacji**
- [x] **Wszystko spoza systemu działa w izolowanym pudełku**: programy Windows (Bottles), pakiety .deb/.rpm (Podman) i AppImage nie widzą Twojego systemu ani plików bez zgody
- [x] Strona **Pudełka** w Ustawieniach: podgląd, nadawanie i odbieranie dostępu do plików, sieci, kamery i mikrofonu oraz usuwanie pudełka
- [x] **Aplikacje Android** (APK) w pudełku, z Waydroid, widoczne w programie uruchamiającym jak każda inna aplikacja
- [x] **Gry jednym kliknięciem**: Steam, Proton i tryb gry, z ostrzeżeniem o grach z anti-cheatem, które nie działają na Linuksie
- [x] **Gry natywne**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalacja ze Sklepu → Gry natywne. Przy pierwszym uruchomieniu podaj ROM własnego kartridża; pakiety nie zawierają danych gier.
- [x] **Ask about the screen** (Meta + S): circle an area to explain, translate or summarize it, with the AI on your computer
- [x] **App actions** (Lingmo Intents): apps offer actions to the Assistant, Flows and Spotlight
- [x] **Assistant with flows, agents and voice** (Meta + Shift + I)
- [x] **One keyboard and mouse for several computers** (Deskflow), with a shared clipboard

### 09/11 – 13/12 · Tworzenie i udostępnianie

- [ ] **Mądrzejsze Lingmo Studio**: kadrowanie podążające za głównym obiektem (nie tylko za twarzą), rozpoznawanie, kto mówi w danym fragmencie (diaryzacja), i efekty dźwiękowe na każdej ścieżce
- [ ] **Publikacja pozostałych gier natywnych**: Zelda: Ocarina of Time (Ship of Harkinian) i Mario Kart 64 (SpaghettiKart), obecnie „Wkrótce” w Sklepie, gdy tylko licencje projektów pozwolą je rozpowszechniać
- [ ] Dokończenie przenoszenia paneli bocznych Ustawień, Poczty i menedżera plików do **LingmoUI**, z tym samym wyglądem co pozostałe aplikacje
- [ ] Przygotowanie gruntu pod **sesję Wayland**: testy aplikacji i efektów Lingmo na Waylandzie (pełna sesja nadal jest planowana na 2027 rok)

### 09/11 – 13/12 · Dbanie o komputer

- [ ] **Monitor systemu** (Ctrl + Shift + Esc): sieć i karta graficzna, oprócz procesora, pamięci i dysku, które już pokazuje Optymalizator
- [ ] **Informacje o systemie** z przyciskiem "Kopiuj raport", aby poprosić o pomoc na Discordzie lub forach
- [ ] Rozmycie i zmiana tła kamery z precyzyjnym wycinaniem (włosy, słuchawki i ramiona)

### 14/12 – 31/01/2027 · Aktualizacje bez obaw

- [ ] **Automatyczny punkt przywracania** przed każdą aktualizacją (btrfs), z możliwością powrotu bezpośrednio z menu rozruchu
- [ ] Przycisk **"Wróć do wczoraj"** w Ustawieniach i w programie aktualizacji
- [ ] Program aktualizacji pokazuje wiadomości Arch prostym językiem i wstrzymuje aktualizacje wymagające ręcznej interwencji
- [ ] **Menedżer sterowników**: wykrywa kartę graficzną (NVIDIA, AMD, Intel) i instaluje właściwy sterownik, utrzymując go w zgodzie z jądrem

### 01/02 – 31/03/2027 · Sprzęt na co dzień

- [ ] **Drukarki i skanery** rozpoznawane automatycznie, z prostym ekranem dodawania
- [ ] **Słuchawki Bluetooth**: wybór między jakością muzyki a mikrofonem, z powrotem do jakości muzyki po rozmowach
- [ ] **Bateria**: limit ładowania do 80% dla dłuższej żywotności, profile zasilania i kondycja baterii
- [ ] Ostre skalowanie ułamkowe (125%, 150%) we wszystkich aplikacjach, osobno dla każdego monitora

### 01/04 – 31/05/2027 · Integracja i wygląd

- [ ] **Zmiana układu** jednym kliknięciem: styl macOS, styl Windows lub Lingmo
- [ ] **Poprzednie wersje** plików w menedżerze plików, jak w Time Machine
- [x] **Zintegrowany telefon**: powiadomienia, pliki i schowek z Androidem i iPhone'em (KDE Connect)
- [ ] **Konta w chmurze**: Google Drive i OneDrive widoczne w menedżerze plików
- [x] Kopiowanie tekstu ze zrzutu ekranu (OCR)
- [ ] Instalator, który ostrzega o BitLocker i Secure Boot przy instalacji obok Windowsa

### 01/02 – 31/05/2027 · Learning with Lingmo

- [ ] **Lingmo Tutor for children**: kids ask by speaking, typing, a photo of their notebook or a PDF of the lesson, and the Tutor explains in the system language, at their age level, with a clear voice and the text highlighted
- [ ] **Teach without handing over the answer**: hints and questions that get the child thinking, similar exercises to practise and maths checked before it is shown
- [ ] **Reading aloud with help**: the child reads a text and the Tutor helps with pronunciation and fluency
- [ ] **Parent mode**: age and subjects, screen time, history kept only on the computer and an always-on topic filter; nothing goes online

### Od czerwca 2027

- [ ] Asystent AI: streszczanie, tłumaczenie i objaśnianie zaznaczonego tekstu w dowolnej aplikacji
- [ ] Kontrola rodzicielska: czas korzystania i pora snu
- [ ] Sesja Wayland
- [ ] ISO budowane i testowane automatycznie przy każdej wersji
- [ ] Office i Adobe z zintegrowanym Windowsem (WinBoat), dla tych, którzy tego potrzebują
