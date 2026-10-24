---
title: ArchLingmo Silicon (Si)
element: Silicon
summary: Lingmo Glass and the Island, our own icons, Lingmo Studio, your phone and PC together, one keyboard and mouse for several computers. And the Assistant starts to learn flows, agents and voice.
---

The next ArchLingmo release is called **Silicon**. It's still being put together; this post
covers what is already done in the repositories and lands in the next ISO.

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

## Assistant: flows, agents and voice (in progress)

The Assistant still runs on your computer, and it's learning to do more: multi-step
**flows**, **agents** that see a task through, and **voice** conversations. This part is
still being built and may arrive bit by bit.

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

## Under the hood

- **Lingmo Camera** (auto framing, background blur and face login) is now **installed by
  default**.
- **KWin X11 lives on with Plasma 6.8**: Arch went Wayland-only, so we rebuild `kwin-x11`
  against the current KDE libraries and package `kglobalacceld-x11`, so KWin's shortcuts
  (Alt+Tab, Alt+F4...) keep working on X11.
- **A safer session**: if the graphics stack fails at start (say, after a driver update
  without a reboot), the dock and status bar come back by themselves with **software
  rendering** instead of the desktop disappearing.
- And more: **Inter** as the default font, notifications with actions and quick reply, the
  **Photos** app, the **PDF Reader** and a new screenshot tool with OCR.

Want to try it early? Use the [ArchLingmo repository](#download) and follow along on Discord.
