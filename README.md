# Bhargav Suthar (`@stoic0p`) — AAA 3D Esports Creator & Reel Editor Portfolio

A production-ready, cinematic 3D esports creator portfolio built for **Bhargav Suthar (`@stoic0p`)**, Esports Reel Editor and Gaming Content Creator specializing in **BGMI**, **PUBG Mobile**, **PUBG PC**, and **Free Fire** montage edits using **Adobe After Effects** and **Adobe Photoshop**.

---

## 1. Project Overview

This project transforms the original `index.html` into an AAA esports broadcast and tactical HUD web experience inspired by high-impact gaming launch portals:

- **Full-Screen 3D Hero Stage**: Interactive Three.js WebGL tactical monolith and particle field with mouse-responsive parallax, paired with an automatic HTML5 2D Canvas 3D-projection fallback if offline or if WebGL is restricted.
- **Interactive 3D Creator Identity Card**: Real-time perspective tilt, specular pointer spotlight, verified `1.1M+` reel milestone readout, and commission status indicator.
- **Esports Media Vault**: Category filtering across `BGMI`, `PUBG Mobile`, `PUBG PC`, `Free Fire`, and `Reels / Montage Edits`, a built-in custom HTML5 video preview deck (`assets/videos/sample-reel-slot.mp4` + local MP4 file loader), lightbox slot inspector, and direct links to the verified Google Drive playlist.
- **Verified Achievements Dashboard**: Animated counters driven by a single configuration object (`ACHIEVEMENTS_DATA` in `js/main.js`) with zero fabricated statistics.
- **Community Comms Typing Terminal ("Recognition From The Grind")**: Character-by-character typing animation, blinking cursor, pause/resume controls, previous/next navigation, instant-reveal mode, optional Web Audio terminal sound toggle (`OFF` by default), and a 25-slot data structure pre-loaded with **24 genuine supplied comments, DMs, and story replies** (2 from the project brief + 22 verbatim from `bk.pdf`) plus 1 hidden placeholder slot (`active: false`).
- **Mission Briefing Commission Terminal ("Queue Up Your Next Edit")**: Accessible client validation, honeypot spam protection, and an honest static-frontend dispatch workflow that copies a formatted brief for Instagram DM (`@stoic0p`) or launches a prefilled `mailto:` email client.

---

## 2. Technology Stack

- **HTML5**: Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`), ARIA live regions, modal dialogs, and keyboard-accessible controls.
- **CSS3 (`css/style.css`)**: CSS Custom Properties, 3D perspective transforms (`preserve-3d`), fluid `clamp()` typography, and responsive breakpoints tested across `320px`, `360px`, `375px`, `390px`, `430px`, `600px`, `768px`, `900px`, `1024px`, `1280px`, `1440px`, and `1920px`.
- **Vanilla JavaScript ES6+ (`js/main.js`)**: Zero frameworks, zero build step, zero npm dependencies.
- **Three.js (`r128` via CDN, Optional)**: Loaded from `cdnjs.cloudflare.com` with an automatic native HTML5 2D Canvas fallback.
- **Web Audio API**: Synthesizes subtle UI clicks and terminal typing ticks directly in the browser without external audio files (`OFF` by default).

---

## 3. How to Launch `index.html`

No compilation, Node.js, or package installation is required:

1. **Direct Browser Launch**: Double-click `index.html` (or right-click → *Open With* → Chrome, Edge, Firefox, or Safari).
2. **Optional Local Static Server**: If you prefer testing with a local development server (such as VS Code Live Server or Python's built-in HTTP server), run:
   ```bash
   python3 -m http.server 8080
   ```
   Then open `http://localhost:8080` in your browser.

---

## 4. File Structure

```text
bhargav-esports-portfolio/
├── index.html                           # Primary semantic HTML5 entry point
├── README.md                            # Complete customization & maintenance guide
├── assets/
│   ├── images/
│   │   └── tactical-emblem.svg          # Creator 3D card emblem artwork
│   ├── videos/
│   │   └── sample-reel-slot.mp4         # Playable local H.264 MP4 preview slot
│   ├── icons/
│   │   ├── favicon.svg                  # Browser tab icon (BS monogram)
│   │   ├── crosshair.svg                # Tactical reticle SVG icon
│   │   ├── instagram.svg                # Instagram vector icon
│   │   └── drive.svg                    # Google Drive vector icon
│   └── thumbnails/
│       ├── thumb-viral-1m-reel.svg      # Vault Slot 01 thumbnail (Reels / 1.1M+)
│       ├── thumb-bgmi-comp.svg          # Vault Slot 02 thumbnail (BGMI)
│       ├── thumb-pubgm-frag.svg         # Vault Slot 03 thumbnail (PUBG Mobile)
│       ├── thumb-pubgpc-marksman.svg    # Vault Slot 04 thumbnail (PUBG PC)
│       ├── thumb-freefire-rush.svg      # Vault Slot 05 thumbnail (Free Fire)
│       └── thumb-story-sync.svg         # Vault Slot 06 thumbnail (Narrative Reels)
├── css/
│   └── style.css                        # Complete stylesheet & responsive breakpoints
└── js/
    └── main.js                          # 3D scene, feedback terminal, vault & form logic
```

---

## 5. Customization Guide

### How to Replace the Hero Artwork & Emblem
- Replace `assets/images/tactical-emblem.svg` with your own logo, creator portrait, or PNG/SVG emblem (keep the filename `tactical-emblem.svg` or update the `<img src="assets/images/...">` path inside `index.html` under `.creator-3d-card__emblem-wrap`).
- To customize the 3D background geometry colors or speed, open `js/main.js` and edit `initHero3DScene()`.

### How to Add Real Gaming Videos & Thumbnails
1. **Featured Video Player**:
   - Place your `.mp4` reel inside `assets/videos/` (for example, `assets/videos/my-featured-reel.mp4`).
   - Either name it `sample-reel-slot.mp4` to replace the default file automatically, or update the `<video id="featuredReelVideo" src="assets/videos/my-featured-reel.mp4">` attribute in `index.html`.
   - You can also click **"TEST LOCAL MP4 FILE"** directly on the live webpage to load and preview any `.mp4` file from your computer immediately.
2. **Portfolio Vault Thumbnails**:
   - Place your `16:9` gameplay screenshots or Photoshop thumbnails (`.jpg`, `.png`, `.webp`, or `.svg`) into `assets/thumbnails/`.
   - Update the `<img src="assets/thumbnails/...">` and `data-img="assets/thumbnails/..."` attributes on the `.vault-card` elements in `index.html`.

### Where to Edit the 25-Entry Feedback Dataset & Add New Testimonials
Open `js/main.js` and locate `COMMUNITY_FEEDBACK_DATA` (Section 3 at the top of the file):
- **Slots 1–24** are already populated with your 24 genuine feedback messages (`S8UL Sid`, `Geetini`, and all 22 comments/DMs from `bk.pdf`).
- **Slot 25** is pre-configured as an editable placeholder (`active: false, isPlaceholder: true`). To publish a 25th comment:
  ```javascript
  {
    id: 25,
    handle: '@real_user_handle',
    monogram: 'RU',
    platform: 'IG REEL COMMENT',
    meta: 'Verified Comment',
    message: 'Paste the exact comment text here',
    active: true,
    isPlaceholder: false
  }
  ```
- You can also add additional objects (`id: 26`, `id: 27`, etc.) to `COMMUNITY_FEEDBACK_DATA` and the terminal counter and roster will update automatically.

### Where to Edit Achievements & Stats
Open `js/main.js` and edit `ACHIEVEMENTS_DATA` (Section 2). Set `numericTarget` for animated counters or `staticText` for text badges.

### How to Change the Instagram Handle or Google Drive URL
1. Open `js/main.js` and update `CREATOR_CONFIG.instagramUrl` and `CREATOR_CONFIG.googleDriveUrl`.
2. Update the `href` links in `index.html` if you change your primary handle or folder URL.

### How to Configure the Contact Email or Connect a Backend Form Service
1. **Prefilled Email (`mailto:`)**:
   - Open `js/main.js` and set `contactEmail` inside `CREATOR_CONFIG` at the top of the file:
     ```javascript
     const CREATOR_CONFIG = {
       // ...
       contactEmail: 'your-real-email@gmail.com',
     };
     ```
2. **Connecting a Real Form Service Later (e.g., Formspree / Web3Forms)**:
   - In `index.html`, add `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"` to `<form id="commissionForm">`, or send a `fetch()` POST request inside the `submit` handler of `initContactTerminal()` in `js/main.js`.

---

## 6. External CDN Dependencies & Fallbacks

1. **Google Fonts** (`Anton`, `IBM Plex Mono`, `Inter`): Loaded from `fonts.googleapis.com`. Falls back gracefully to `Impact`, `'Arial Narrow'`, system sans-serif, and system monospace fonts if offline.
2. **Three.js `r128`** (`https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js`): Used for the WebGL 3D hero scene. If the user is offline or WebGL is disabled, `js/main.js` automatically switches to a custom 2D Canvas 3D-wireframe projection engine (`CANVAS // 3D_FALLBACK`).

---

## 7. Browser Compatibility & Known Limitations

- **Supported Browsers**: Chrome 90+, Edge 90+, Firefox 88+, Safari 14+, and modern iOS/Android mobile browsers.
- **Static Hosting Limitation**: Because this portfolio runs purely on client-side HTML/CSS/JS without a backend server, submitting the contact form generates a formatted Mission Brief for one-click Instagram DM copy (`@stoic0p`) or `mailto:` email client launch rather than silently sending a server-side email.
- **Clipboard API over `file://`**: Modern browsers support `navigator.clipboard` on `https://` and `localhost`, and fall back to `document.execCommand('copy')` when opened directly via `file://`.
