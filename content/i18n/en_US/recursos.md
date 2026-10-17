## Features

All of this ships with ArchLingmo today.

### Desktop

- **Top bar** with a clock, a calendar when you click the date, and tray icons
- **Control Center**: Wi-Fi, Bluetooth, dark mode, night light, do not disturb and volume in a single panel
- **Dock** with window previews on hover and a **solid, glass or no** background
- **Spotlight** (Super + Space): apps, files, math, unit and currency conversion, and search inside documents
- **Clipboard history** (Super + V)
- **Hot corners**: move the pointer to a corner to see all windows, show the desktop or lock the screen
- **Effects**: wobbly windows, magic lamp and a book-page Alt+Tab
- Global menu for GTK apps too
- **Clock and weather widgets** on the desktop, with the real forecast for the city you choose, grouped under one icon in the top bar
- **"Carousel" Alt+Tab**: switch windows in a 3D carousel, cover-flow style, with a reflection
- **Lingmo icons**: our own icon theme, with fluid squircle icons generated on top of WhiteSur. Third-party app icons get the same plate automatically
- **Dock magnification** of up to 200% on hover and **status bar** height presets

### Artificial intelligence (on your computer)

- **Assistant** (Super + I): an AI that runs on your computer, with Ollama. It reads your documents (PDF, DOCX…), notes and calendar, looks at system information and runs read-only terminal commands in an isolated box. With your permission it creates notes, events, tasks and files: every change asks for confirmation, and it never deletes anything
- **AI in Spotlight**: start with "ai:" to chat, or type a question ending in "?" and choose to ask the AI. It shows how long each answer took and how fast it was, and uses the same tools as the Assistant
- **Settings › Artificial Intelligence**: Ollama status, installed models, recommendations for *this* computer, model downloads with progress, a "Think before answering" option, and the Assistant's permissions and tools
- **Automator**: daily routines at a set time, with a command and, if you like, the local AI explaining the result
- **Transcription and captions** in Settings › Artificial Intelligence: whisper.cpp models with tags and a "Recommended for your computer" badge, next to the AI models recommended for your hardware (llmfit)

### Settings

- **Welcome** screen on first login: light or dark theme, accent color, wallpaper and effects
- **Displays**: drag to arrange, rotate and choose the primary one
- **Night light** with an automatic schedule, and keyboard layout switching from the top bar
- **Shortcuts** and **Startup** pages to choose what opens with the system
- **Updates without the terminal**: a notice in the top bar and an "Update" button
- Available in **48 languages**

### Camera and security

- **Automatic camera framing** in meetings, in any app (Meet, Zoom, Teams, Discord)
- **Fingerprint reader** to log in, unlock and authorize administrator passwords
- **Face recognition** with your webcam to log in and unlock (falls back to your password if it fails)

### Apps

- **Mail**: IMAP and POP3 accounts with automatic provider detection and a guide for each one (app passwords for Gmail, Yahoo and iCloud). Folders with unread counts, search and filters, star, archive, move and delete many messages at once, automatic rules, contacts with autocomplete and new-mail notifications
- **Calendar and tasks** in Mail: month, week, day and agenda views, repeating events, reminders even when the app is closed, and CalDAV sync (iCloud, Yahoo, Fastmail, Nextcloud). Tasks for today, upcoming and overdue, and meeting invitations (.ics) with Accept, Maybe or Decline
- **Notes** in the style of Notion: block editor, "/" menu, sub-pages, icons, favorites, trash and quick search (Ctrl + K)
- **Optimizer**: click CPU, Memory or Storage to see the details: where your disk space went, folder by folder, with suggestions, and the apps using the most memory and processor. The "Optimize and Clean" button clears caches, the update cache, old logs and unused Flatpak runtimes
- **File manager** with drag and drop and Thunar-style sorting
- **Terminal** with the Dracula theme in dark mode and a choice of shell (bash, zsh, fish…) in the new preferences, **text editor**, **calculator** and **video player**
- **Clock and alarms**, a **USB Media Creator** to write an ISO to a USB stick, **Windows Programs** (open an .exe and see the Linux version or an alternative in the Store, or try it with Bottles/Wine) and the **App Store** with Flathub and the Arch repositories in one place
- Every app shares the same Lingmo look, in light and dark themes
- **Screenshots and screen recording**, with microphone and system audio
- **Calamares** installer and sound through **PipeWire**
- **Native games**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Install from Store → Native games. On first launch, provide a ROM dumped from your own cartridge; packages include no game data.
- **Screenshot** (Print, Shift + Print and Ctrl + Print): everything Flameshot does (annotation tools, pin to screen, copy, save and command line) and more: "Copy text" with on-device OCR, one-click redaction, smart selection, scrolling capture, presentation mode, editable history and GIF recording
- **Photos**: your pictures in a library, favorites and folders, with the same thumbnails as the file manager
- **PDF reader**: page thumbnails, outline, notes and fit to width
- **Column view in Files** (Ctrl + 3) and freedesktop-standard thumbnails, shared with Photos

### Video: Lingmo Studio

- **Lingmo Studio**: a video editor built on MLT, with pages like DaVinci Resolve's: Edit, Color, Effects, Audio and Deliver
- **Edit**: multi-track timeline, ripple, roll, slip and slide, J and L cuts, compound clips, proxies and a history panel
- **Color**: color wheels, curves, HSL, .cube LUTs and scopes
- **Audio**: mixer, equalizer, compressor, noise reduction and LUFS loudness normalization
- **Export** to MP4 by default, accelerated by the graphics card (NVENC or VA-API)
- **Generate cuts**: turns a long video into cuts for Shorts, Reels, TikTok, Kwai, LinkedIn, X and Stories, with each network's recommended length and safe area, the best moments picked by a local AI (Ollama) and a 9:16 reframe that follows the face
- **Captions** synced word by word with whisper.cpp, on your own computer: nine styles designed for reading (karaoke with the color sweeping across the line, highlighted word, word by word, podcast, neon, high contrast, two speakers…) and export to SRT, VTT and ASS
