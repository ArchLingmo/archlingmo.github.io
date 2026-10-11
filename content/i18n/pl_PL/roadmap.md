## Plan rozwoju

To, co jeszcze zbudujemy. To, co jest już gotowe, znajdziesz w sekcji [Funkcje](#recursos).
Daty są szacunkowe i mogą się zmienić. Sugestie i priorytety omawiamy na naszym
Discordzie, a każdy punkt staje się otwartym pull requestem na GitHubie.

Priorytety wynikają z tego, co najczęściej pojawia się na forach i w recenzjach innych dystrybucji:
obawa, że aktualizacja zepsuje system, sterowniki, instalowanie programów bez terminala i
dbanie o komputer bez konieczności bycia specjalistą.

### 28/09 – 08/11 · Programy bez komplikacji (i bezpieczne)

- [ ] **Sklep z aplikacjami**: oceny użytkowników i uprawnienia każdej aplikacji przed instalacją (Sklep z Flathub i repozytoriami Arch już jest)
- [ ] **Instalacja przez przeciągnięcie**, jak na Macu: kliknij dwukrotnie plik .exe, .deb, .rpm lub AppImage i przeciągnij go do **Aplikacji**
- [ ] **Wszystko spoza systemu działa w izolowanym pudełku**: programy Windows (Bottles), pakiety .deb/.rpm (Distrobox) i AppImage nie widzą Twojego systemu ani plików bez zgody
- [ ] Strona **Pudełka** w Ustawieniach: podgląd, nadawanie i odbieranie dostępu do plików, sieci, kamery i mikrofonu oraz usuwanie pudełka
- [ ] **Aplikacje Android** (APK) w pudełku, z Waydroid, widoczne w programie uruchamiającym jak każda inna aplikacja
- [ ] **Gry jednym kliknięciem**: Steam, Proton i tryb gry, z ostrzeżeniem o grach z anti-cheatem, które nie działają na Linuksie
- [x] **Gry natywne**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalacja ze Sklepu → Gry natywne. Przy pierwszym uruchomieniu podaj ROM własnego kartridża; pakiety nie zawierają danych gier.
- [ ] **Więcej gier natywnych**: Zelda: Ocarina of Time (Ship of Harkinian) i Mario Kart 64 (SpaghettiKart), na razie jako „Wkrótce” w sklepie

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
- [ ] **Zintegrowany telefon**: powiadomienia, pliki i schowek z Androidem i iPhone'em (KDE Connect)
- [ ] **Konta w chmurze**: Google Drive i OneDrive widoczne w menedżerze plików
- [ ] Kopiowanie tekstu ze zrzutu ekranu (OCR)
- [ ] Instalator, który ostrzega o BitLocker i Secure Boot przy instalacji obok Windowsa

### Od czerwca 2027

- [ ] Asystent AI: streszczanie, tłumaczenie i objaśnianie zaznaczonego tekstu w dowolnej aplikacji
- [ ] Kontrola rodzicielska: czas korzystania i pora snu
- [ ] Sesja Wayland
- [ ] ISO budowane i testowane automatycznie przy każdej wersji
- [ ] Office i Adobe z zintegrowanym Windowsem (WinBoat), dla tych, którzy tego potrzebują
