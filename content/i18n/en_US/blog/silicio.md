---
title: ArchLingmo Silicon (Si)
element: Silicon
summary: Lingmo Glass and the Island, Lingmo Tutor with Axo, live translation, Voice Studio and File actions. Plus our own icons, Lingmo Studio, your phone and PC together and the Assistant with flows, agents and voice.
---

ArchLingmo **Silicon** is here. The new ISO brings Lingmo Glass, the Island and the local AI
apps: **Lingmo Tutor**, **live translation**, **Voice Studio** and **File actions**. If you
already run ArchLingmo, `sudo pacman -Syu` brings all of it.

## Why Silicon

> **Glass** is made of silicon dioxide (SiO₂), and Silicon is the **Lingmo Glass** release.
> The **AI** that runs on your computer runs on silicon chips. And silicon is the element of
> **electronics**, the one that connects devices: in this release your phone, your PC and
> the other computers on your desk start working together.

Silicon is element number **14**. The names don't follow the table's order: each release
gets the element that matches what it brings.

## Silicon wallpapers

Two new backgrounds accompany this release: clear glass in ice blue for the light theme
and sapphire reflections for dark mode. The curves leave space for desktop icons and the
status bar. Both ship at 3840 × 2160 in Settings › Background.

![Silicon light wallpaper](assets/silicio-light.jpg)
![Silicon dark wallpaper](assets/silicio-dark.jpg)

And **Axo**, the ArchLingmo mascot, gets four backgrounds of its own: day, night, AI and dream.
Every wallpaper carries the new ArchLingmo logo.

![Axo day wallpaper](assets/axo-dia.jpg)
![Axo night wallpaper](assets/axo-noite.jpg)

## Lingmo Glass and the Island

One material for the whole shell: the status bar, dock, Control Center, notifications,
launcher, Spotlight, menus and tooltips get **frosted glass** with a hairline border, a top
highlight and a soft shadow. Pick the strength in Settings › Appearance: **Strong,
Balanced, Weak or Off**.

![The desktop with Lingmo Glass and a notification](screenshots/silicio/glass-desktop.jpg)

The **Island** lives in the middle of the status bar and opens when something is going on:
the song that's playing, a timer, a screen recording, a file copy or a download, without
pulling you away from what you're doing.

![The Island with a timer and a file copy](screenshots/silicio/island.jpg)

With **Reduce motion** on, animations get short, with no spring effect and no light
following the pointer on the glass.

## Lingmo icons

An icon theme of our own, with fluid **squircle** icons generated from code on top of
WhiteSur. Third-party apps get the same plate automatically, and folders, the trash and
drives were redrawn.

## Carousel Alt+Tab

Window switching is now a **3D carousel**, cover-flow style, with a reflection. It's the new
default.

![Carousel Alt+Tab](screenshots/alt-tab-carousel.jpg)

## Lingmo Studio

A video editor built on MLT, with pages like **DaVinci Resolve**'s: Cut, Edit, Colour,
Effects, Audio and Deliver.

- **Generate cuts**: turns a long video into clips for **Shorts, Reels and TikTok**, with the
  best moments picked by a local AI and 9:16 framing that follows the face.
- **Burned-in captions**, synced word by word with the speech, in nine styles made for
  reading.
- Transcription uses **whisper.cpp**, with the model picked to fit your hardware.

![Lingmo Studio generating cuts for Shorts and Reels](screenshots/studio-cuts.jpg)

The pages were redesigned in DaVinci style: **Cut** for quick assembly, **Edit** with the
Media Pool, Inspector and timeline, **Colour** with colour wheels and scopes, **Audio** with
a mixer and LUFS normalization, and **Deliver** with the formats and the render queue. On
launch, the project manager shows your recent projects and templates.

![Lingmo Studio, the Colour page](screenshots/studio-color.jpg)

## Assistant: flows, agents and voice

The Assistant still runs on your computer, and now it does more:

- **Flows**: automations built from blocks. A trigger (a time, a new e-mail, a voice
  command or a shortcut) starts the app actions, and every run is logged step by step. You
  approve once what the flow may do.
- **Agents**: assistants with their own instructions, model and tools, called in the chat,
  in a flow or from Spotlight with "ai:@name".
- **Voice**: press **Meta + Shift + I** and talk to the Assistant.

![An Assistant flow running](screenshots/assistant-flow-run.jpg)

## Lingmo Intents: app actions

Clock, Mail, Notes, Files, Screenshots, Phone and other apps now offer **actions** to the
Assistant, Flows and Spotlight. Type what you want in Spotlight, such as an alarm at 7, ask
the Assistant, or drag the action into a flow: the form is generated for you. Sending or
changing anything always asks first, and in Settings › Artificial Intelligence › App
actions you can turn off a whole app or a single action.

![Spotlight suggesting Clock › Create alarm](screenshots/intents-spotlight.jpg)

## Ask about the screen

With **Meta + S**, circle or select any area of the screen and ask to **explain,
translate, summarize** it, copy its text or search the web. The AI runs on your computer
and nothing is sent; you can carry on the conversation in the Assistant.

![Ask about the screen translating a note](screenshots/screen-ask.jpg)

## Phone ↔ PC

The **Phone and devices** app brings together **KDE Connect** and **LocalSend**:
notifications, messages, battery and files from your phone on your computer, with Android
and iPhone. Drag a file to the edge of the screen and drop it on a **nearby device**.

![Send to a nearby device](screenshots/silicio/phone-send.jpg)

## One keyboard and mouse for all your computers

With **Deskflow**, the pointer moves past the edge of the screen onto the computer next to
it, with the same keyboard and the same clipboard. Drag the computers to match your desk;
the connection is encrypted.

![Shared keyboard and mouse in Settings](screenshots/silicio/continuity.jpg)

## Lingmo Tutor

A tutor with **Axo**, the ArchLingmo mascot, running entirely on your computer. Ask by voice,
text, photo or PDF: it teaches with questions and hints instead of handing over the answer,
and math is checked by SymPy.

- **Child and adult profiles**, each with its own data. The child profile is protected by the
  parents' PIN, with a local history and a subject filter.
- **English course from A1 to C2**: a placement test and 40 hand-written units with
  pronunciation, role-play, the 4/3/2 fluency activity and writing with a correction rubric.
- **Study with your own material**: EPUB, PDF, DOCX, ODT and images turn into reading with
  tap-a-word, summaries, quizzes and answers that cite the page.
- **Fast**: the model stays loaded while the app is open and answers appear as they are
  written, with the first words in about a second.

## Live translation

Press **Meta + Shift + T**: **subtitles** for any video or call, **dubbed listening** in your
language and **translated speech**. The **Lingmo Translator** microphone carries your
translated voice into OBS, Teams or Meet, and it can speak with your own cloned voice.

## Voice Studio and dictation

Create and clone voices, listen to books and documents in the **Reader** (PDF, EPUB, DOCX,
ODT and TXT, with word highlighting) and export the audio as mp3, m4a, opus or m4b with
chapters. With **Meta + H**, dictate in any app: the text appears as you speak. No audio
carries a watermark.

## Podcast dubber

Dubs a whole episode into another language, keeping each speaker's voice.

## File actions

Drag a file and tap **Shift, Ctrl or Alt** (or press **Meta + Shift + A**): a wheel opens
around the pointer with the conversions for that file type. Images, videos, audio, PDFs and
documents, with the progress on the Island. In the file manager the same wheel is under
**Convert…** in the right-click menu. The engine is the open source FileAction.

## Under the hood

- **Safe graphics**: a new boot menu entry starts without modesetting, for recent NVIDIA
  cards where the screen stays black.
- **zram by default**: compressed swap in memory that keeps the desktop alive when AI models
  or the Studio fill the RAM.
- **Lingmo Camera** (auto framing, background blur and face login) is now **installed by
  default**.
- **X11 lives on with Plasma 6.8**: Arch went Wayland-only, so we rebuild `kwin-x11`
  against the current KDE libraries and package `kglobalacceld-x11`, so KWin's shortcuts
  (Alt+Tab, Alt+F4...) keep working on X11.
- **Folders that follow your language**: when you switch language, your personal folders
  (Documents, Videos, Pictures…) get the new names. If the same folder exists in both
  languages, the contents are merged without deleting anything, and you can undo it.
- **An Optimizer for developers**: the Development tab finds and cleans pacman, Docker, Go,
  Node, Python, Rust, Gradle, JetBrains and AI model caches, showing how much each one takes
  and asking before deleting anything.
- **A safer session**: if the graphics stack fails at start (say, after a driver update
  without a reboot), the dock and status bar come back by themselves with **software
  rendering** instead of the desktop disappearing.
- And more: **Inter** as the default font, notifications with actions and quick reply, the
  **Photos** app, the **PDF Reader** and a new screenshot tool with OCR.

[Download the ISO](#download) and tell us how it went on Discord.
