/* ==========================================================================
   BHARGAV SUTHAR (@STOIC0P) — AAA ESPORTS CREATOR & REEL EDITOR PORTFOLIO
   Script: js/main.js (Vanilla ES6+, Zero Framework Dependencies)
   ========================================================================== */

(() => {
  'use strict';

  /* ========================================================================
     1. CENTRAL CREATOR CONFIGURATION (EDITABLE BY CLIENT)
     ======================================================================== */
  const CREATOR_CONFIG = {
    name: 'Bhargav Suthar',
    handle: '@stoic0p',
    profession: 'Esports Reel Editor / Gaming Content Creator',
    instagramUrl: 'https://www.instagram.com/stoic0p/',
    googleDriveUrl: 'https://drive.google.com/drive/folders/1YV9RTn1IVI9xlkhm9rc4v1AvXMHGQL4d',
    // Set your real contact email below to enable direct mailto: inbox dispatch
    // Example: contactEmail: 'bhargav@example.com'
    contactEmail: '',
    availableForWork: true
  };

  /* ========================================================================
     2. VERIFIED ACHIEVEMENTS DATA (EDITABLE BY CLIENT)
     Only real, supported numbers are included. Never fabricate metrics.
     ======================================================================== */
  const ACHIEVEMENTS_DATA = [
    {
      id: 'stat-viral-reel',
      code: 'METRIC // 01',
      numericTarget: 1.1,
      decimals: 1,
      suffix: 'M+',
      label: 'Views on a Single Reel',
      detail: 'Verified viral short-form esports edit milestone on Instagram (@stoic0p).'
    },
    {
      id: 'stat-games-covered',
      code: 'METRIC // 02',
      numericTarget: 4,
      decimals: 0,
      prefix: '0',
      suffix: '',
      label: 'Gaming Titles Covered',
      detail: 'Dedicated montage & reel editing across BGMI, PUBG Mobile, PUBG PC, and Free Fire.'
    },
    {
      id: 'stat-editing-suite',
      code: 'METRIC // 03',
      numericTarget: 2,
      decimals: 0,
      prefix: '0',
      suffix: '',
      label: 'Core Production Tools',
      detail: 'Frame-accurate VFX, velocity sync, and visual design in After Effects & Photoshop.'
    },
    {
      id: 'stat-commission-status',
      code: 'STATUS // 04',
      numericTarget: null,
      staticText: 'OPEN',
      label: 'Commission Queue',
      detail: 'Available for esports reels, player montages, and team highlight cuts.'
    }
  ];

  /* ========================================================================
     3. COMMUNITY FEEDBACK DATASET (25-SLOT ARCHITECTURE)
     Slots 1–24 are populated with genuine client-supplied comments & DMs
     (2 from prompt specification + 22 verbatim from supplied bk.pdf).
     Slot 25 is a hidden placeholder (active: false) ready for future entries.
     ======================================================================== */
  const COMMUNITY_FEEDBACK_DATA = [
    {
      id: 1,
      handle: 'S8UL Sid',
      monogram: 'SS',
      platform: 'CREATOR FEEDBACK // IG',
      meta: 'Supplied Feedback',
      message: 'Your profile looks interesting also your editing insane',
      active: true
    },
    {
      id: 2,
      handle: 'Geetini',
      monogram: 'GT',
      platform: 'COMMUNITY FEEDBACK // IG',
      meta: 'Supplied Feedback',
      message: 'Your edits is crazy and preety good',
      active: true
    },
    {
      id: 3,
      handle: '@willygamingg',
      monogram: 'WG',
      platform: 'IG REEL COMMENT // PINNED',
      meta: '2,212 Likes · 3w',
      message: 'The greatest team to ever grace this game in India 🔥',
      active: true
    },
    {
      id: 4,
      handle: '@saggyyy.01',
      monogram: 'SG',
      platform: 'IG REEL COMMENT // PINNED',
      meta: '1,035 Likes · 3w',
      message: 'Bro made movie 🙌🔥',
      active: true
    },
    {
      id: 5,
      handle: '@op_devil_93',
      monogram: 'OD',
      platform: 'IG REEL COMMENT',
      meta: '636 Likes · 3w',
      message: 'Editing 💀🥶',
      active: true
    },
    {
      id: 6,
      handle: '@yashkushwaha1506_',
      monogram: 'YK',
      platform: 'IG REEL COMMENT',
      meta: '361 Likes · 3w',
      message: 'Bhai editing hi goosebumps dila gyi bol baby bol iqoosoul 🚀❤️',
      active: true
    },
    {
      id: 7,
      handle: '@bhonduchashmish_',
      monogram: 'BC',
      platform: 'IG REEL COMMENT // PINNED',
      meta: '112 Likes · 2d',
      message: 'Goated edit 🔥🙌',
      active: true
    },
    {
      id: 8,
      handle: '@thomas_0p1',
      monogram: 'T0',
      platform: 'IG REEL COMMENT',
      meta: '8 Likes · 2w',
      message: '❤️🔥 Nice bhai kya song dala he good bhai 🙌',
      active: true
    },
    {
      id: 9,
      handle: '@godlike_dilse_like',
      monogram: 'GD',
      platform: 'IG REEL COMMENT',
      meta: '7 Likes · 3w',
      message: 'W edit brother 🗿🔥',
      active: true
    },
    {
      id: 10,
      handle: '@apex.official_fc',
      monogram: 'AF',
      platform: 'IG REEL COMMENT',
      meta: '4 Likes · 4d',
      message: 'W edit',
      active: true
    },
    {
      id: 11,
      handle: '@_rahul.0_0',
      monogram: 'R0',
      platform: 'IG REEL COMMENT',
      meta: '3 Likes · 3w',
      message: 'Tears in my eyes 👏🏻🙌🏻🚀',
      active: true
    },
    {
      id: 12,
      handle: '@tahirrrrrr_22',
      monogram: 'T2',
      platform: 'IG REEL COMMENT',
      meta: '3 Likes · 3w',
      message: 'W Edits 🥶',
      active: true
    },
    {
      id: 13,
      handle: '@syed_abdul_qadir_al_jilani',
      monogram: 'SA',
      platform: 'IG REEL COMMENT',
      meta: '3 Likes · 2d',
      message: 'Nice editing video 🔥🔥🔥',
      active: true
    },
    {
      id: 14,
      handle: '@__ayushhh.__',
      monogram: 'AY',
      platform: 'IG REEL COMMENT',
      meta: '3 Likes · 3w',
      message: 'Besttest edit till the date 💥🔥',
      active: true
    },
    {
      id: 15,
      handle: '@ig._.spectra07',
      monogram: 'SP',
      platform: 'IG REEL COMMENT',
      meta: '2 Likes · 3w',
      message: 'Peak level Editing 🚀🚀',
      active: true
    },
    {
      id: 16,
      handle: '@royal_nakul05',
      monogram: 'RN',
      platform: 'IG REEL COMMENT',
      meta: '2 Likes · 2w',
      message: 'Goosebumps 🚀❤️',
      active: true
    },
    {
      id: 17,
      handle: '@x_legend_sajid_x',
      monogram: 'LS',
      platform: 'IG REEL COMMENT',
      meta: '2 Likes · 2d',
      message: 'W edit Tag on top 🖤',
      active: true
    },
    {
      id: 18,
      handle: '@harsh.sleep.deprived',
      monogram: 'HS',
      platform: 'IG REEL COMMENT',
      meta: '1 Like · 3w',
      message: '🚀🚀 kya bana diya bhai ye 🔥🔥',
      active: true
    },
    {
      id: 19,
      handle: '@harjeet.lifts',
      monogram: 'HL',
      platform: 'IG REEL COMMENT',
      meta: '1 Like · 3w',
      message: 'What an edit 🔥',
      active: true
    },
    {
      id: 20,
      handle: '@vaibhavsidhwani',
      monogram: 'VS',
      platform: 'IG REEL COMMENT',
      meta: '1 Like · 2d',
      message: 'Crazy crazy Editing 🔥🔥🔥',
      active: true
    },
    {
      id: 21,
      handle: '@its.all_aboutme_',
      monogram: 'IA',
      platform: 'IG REEL COMMENT',
      meta: '1 Like · 3w',
      message: 'Pure goosebumps ❤️‍🔥',
      active: true
    },
    {
      id: 22,
      handle: '@saggyyy.01 (Story Reply)',
      monogram: 'SG',
      platform: 'IG STORY REPLY',
      meta: 'Direct Reply',
      message: 'Really bro words to words edited 😌',
      active: true
    },
    {
      id: 23,
      handle: 'Community Member (DM)',
      monogram: 'DM',
      platform: 'IG DIRECT MESSAGE',
      meta: '2 JUN · 4:27 PM',
      message: 'BROTHERR YOUR EDITS 🫡✨🔥',
      active: true
    },
    {
      id: 24,
      handle: 'Milestone Supporter (DM)',
      monogram: 'MS',
      platform: 'IG STORY REPLY',
      meta: 'Milestone Story Reply',
      message: 'You deserve it🤍',
      active: true
    },
    {
      id: 25,
      handle: '@your_next_feedback_slot',
      monogram: '25',
      platform: 'EDITABLE SLOT // 25',
      meta: 'Hidden Placeholder',
      message: 'Replace this placeholder in js/main.js (COMMUNITY_FEEDBACK_DATA) and set active: true to display on the public website.',
      active: false,
      isPlaceholder: true
    }
  ];

  /* ========================================================================
     4. ENVIRONMENT & PREFERENCE DETECTION
     ======================================================================== */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isCoarsePointer = window.matchMedia('(hover: none) and (pointer: coarse)');

  /* ========================================================================
     5. SUBTLE TACTICAL SOUND ENGINE (OFF BY DEFAULT, WEB AUDIO SYNTHESIS)
     ======================================================================== */
  const SoundEngine = {
    enabled: false,
    ctx: null,

    initContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    },

    toggle(forceState) {
      this.enabled = typeof forceState === 'boolean' ? forceState : !this.enabled;
      if (this.enabled) {
        this.initContext();
        this.playClick(660, 0.04);
      }
      this.syncButtons();
      return this.enabled;
    },

    syncButtons() {
      const navBtn = document.getElementById('navSfxToggle');
      const commsBtn = document.getElementById('commsSfxToggle');
      if (navBtn) {
        navBtn.setAttribute('aria-pressed', String(this.enabled));
        const labelEl = navBtn.querySelector('.sfx-toggle__state');
        if (labelEl) labelEl.textContent = this.enabled ? 'ON' : 'OFF';
      }
      if (commsBtn) {
        commsBtn.setAttribute('aria-pressed', String(this.enabled));
        commsBtn.textContent = this.enabled ? 'TERM SFX: ON' : 'TERM SFX: OFF';
      }
    },

    playClick(freq = 520, duration = 0.03) {
      if (!this.enabled || prefersReducedMotion.matches) return;
      try {
        this.initContext();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.025, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (_) {}
    },

    playTypeTick() {
      if (!this.enabled || prefersReducedMotion.matches) return;
      try {
        this.initContext();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(780 + Math.random() * 180, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.012, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.018);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.018);
      } catch (_) {}
    }
  };

  /* ========================================================================
     6. HERO 3D SCENE (THREE.JS WITH AUTOMATIC 2D CANVAS FALLBACK)
     ======================================================================== */
  function initHero3DScene() {
    const canvas = document.getElementById('hero3dCanvas');
    const engineReadout = document.getElementById('telemetryRenderMode');
    if (!canvas) return;

    let isTabHidden = document.hidden;
    let pointerX = 0;
    let pointerY = 0;

    window.addEventListener('mousemove', (e) => {
      if (isCoarsePointer.matches) return;
      pointerX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointerY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
      isTabHidden = document.hidden;
    });

    // Try Three.js WebGL first if library loaded and WebGL is supported
    if (typeof window.THREE !== 'undefined') {
      try {
        const THREE = window.THREE;
        const renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: !isCoarsePointer.matches,
          powerPreference: 'high-performance'
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        renderer.setSize(canvas.clientWidth || window.innerWidth, canvas.clientHeight || window.innerHeight, false);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          50,
          (canvas.clientWidth || window.innerWidth) / (canvas.clientHeight || window.innerHeight),
          0.1,
          100
        );
        camera.position.set(0, 0.2, 6.5);

        const mainGroup = new THREE.Group();
        // Offset slightly right on desktop so hero typography has clean contrast
        mainGroup.position.x = window.innerWidth > 1024 ? 1.55 : 0;
        scene.add(mainGroup);

        // Tactical Wireframe Core (Icosahedron)
        const coreGeo = new THREE.IcosahedronGeometry(1.55, 1);
        const coreMat = new THREE.MeshStandardMaterial({
          color: 0x141720,
          roughness: 0.35,
          metalness: 0.85,
          flatShading: true
        });
        const coreMesh = new THREE.Mesh(coreGeo, coreMat);
        mainGroup.add(coreMesh);

        // Crimson Wireframe Cage
        const cageGeo = new THREE.IcosahedronGeometry(1.58, 1);
        const cageMat = new THREE.MeshBasicMaterial({
          color: 0xe62e3a,
          wireframe: true,
          transparent: true,
          opacity: 0.55
        });
        const cageMesh = new THREE.Mesh(cageGeo, cageMat);
        mainGroup.add(cageMesh);

        // Outer Orbital HUD Ring
        const ringGeo = new THREE.TorusGeometry(2.35, 0.015, 12, 80);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0xf59e0b,
          transparent: true,
          opacity: 0.45
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        ringMesh.rotation.x = Math.PI / 2.6;
        ringMesh.rotation.y = 0.35;
        mainGroup.add(ringMesh);

        // Floating Particle Field
        const particleCount = isCoarsePointer.matches ? 70 : 150;
        const positions = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3] = (Math.random() - 0.5) * 14;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
          positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
        }
        const partGeo = new THREE.BufferGeometry();
        partGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const partMat = new THREE.PointsMaterial({
          color: 0xe62e3a,
          size: 0.045,
          transparent: true,
          opacity: 0.65
        });
        const particles = new THREE.Points(partGeo, partMat);
        scene.add(particles);

        // Dramatic Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const crimsonLight = new THREE.PointLight(0xe62e3a, 3.2, 15);
        crimsonLight.position.set(3, 2.5, 4);
        scene.add(crimsonLight);

        const amberLight = new THREE.PointLight(0xf59e0b, 1.8, 15);
        amberLight.position.set(-3, -2, 3);
        scene.add(amberLight);

        if (engineReadout) engineReadout.textContent = 'WEBGL // 3D_ACTIVE';

        const handleResize = () => {
          const w = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
          const h = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
          renderer.setSize(w, h, false);
          camera.aspect = w / Math.max(h, 1);
          camera.updateProjectionMatrix();
          mainGroup.position.x = w > 1024 ? 1.55 : 0;
        };
        window.addEventListener('resize', handleResize);

        const renderFrame = () => {
          if (!isTabHidden) {
            if (!prefersReducedMotion.matches) {
              coreMesh.rotation.y += 0.0035;
              coreMesh.rotation.x += 0.0018;
              cageMesh.rotation.y = coreMesh.rotation.y;
              cageMesh.rotation.x = coreMesh.rotation.x;
              ringMesh.rotation.z -= 0.0025;
              particles.rotation.y += 0.0008;

              mainGroup.rotation.y += (pointerX * 0.35 - mainGroup.rotation.y) * 0.05;
              mainGroup.rotation.x += (pointerY * 0.22 - mainGroup.rotation.x) * 0.05;
            }
            renderer.render(scene, camera);
          }
          if (!prefersReducedMotion.matches) {
            requestAnimationFrame(renderFrame);
          }
        };

        renderFrame();
        return;
      } catch (err) {
        // Fall through to 2D Canvas tactical renderer if WebGL fails
      }
    }

    // Lightweight 2D Canvas 3D-Projection Fallback (Works 100% Offline without CDN/WebGL)
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (engineReadout) engineReadout.textContent = 'CANVAS // 3D_FALLBACK';

    let width = 0;
    let height = 0;
    const resizeFallback = () => {
      width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeFallback();
    window.addEventListener('resize', resizeFallback);

    // 3D Octahedron vertices & edges for software projection
    const verts = [
      [0, 1.4, 0], [0, -1.4, 0],
      [1.4, 0, 0], [-1.4, 0, 0],
      [0, 0, 1.4], [0, 0, -1.4]
    ];
    const edges = [
      [0,2],[0,3],[0,4],[0,5],
      [1,2],[1,3],[1,4],[1,5],
      [2,4],[4,3],[3,5],[5,2]
    ];

    const dots = Array.from({ length: 48 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 1.8,
      s: 0.15 + Math.random() * 0.35
    }));

    let angleY = 0.4;
    let angleX = 0.25;

    const drawFallback = () => {
      if (!isTabHidden) {
        ctx.clearRect(0, 0, width, height);
        const cx = width > 1024 ? width * 0.68 : width * 0.5;
        const cy = height * 0.48;
        const scale = Math.min(width, height) * 0.19;

        // Draw floating particles
        ctx.fillStyle = 'rgba(230, 46, 58, 0.45)';
        dots.forEach((d) => {
          if (!prefersReducedMotion.matches) {
            d.y -= d.s * 0.0015;
            if (d.y < 0) d.y = 1;
          }
          ctx.beginPath();
          ctx.arc(d.x * width, d.y * height, d.r, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw orbital reticle circle
        ctx.strokeStyle = 'rgba(245, 158, 11, 0.22)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx + pointerX * 16, cy + pointerY * 16, scale * 1.35, 0, Math.PI * 2);
        ctx.stroke();

        // Project and draw 3D wireframe core
        if (!prefersReducedMotion.matches) {
          angleY += 0.008;
          angleX += 0.004;
        }
        const ry = angleY + pointerX * 0.35;
        const rx = angleX + pointerY * 0.25;

        const projected = verts.map(([vx, vy, vz]) => {
          // Rotate Y
          const x1 = vx * Math.cos(ry) - vz * Math.sin(ry);
          const z1 = vx * Math.sin(ry) + vz * Math.cos(ry);
          // Rotate X
          const y2 = vy * Math.cos(rx) - z1 * Math.sin(rx);
          const z2 = vy * Math.sin(rx) + z1 * Math.cos(rx);
          const persp = 3.5 / (3.5 - z2 * 0.4);
          return [cx + x1 * scale * persp, cy + y2 * scale * persp];
        });

        ctx.strokeStyle = 'rgba(230, 46, 58, 0.65)';
        ctx.lineWidth = 1.6;
        edges.forEach(([a, b]) => {
          ctx.beginPath();
          ctx.moveTo(projected[a][0], projected[a][1]);
          ctx.lineTo(projected[b][0], projected[b][1]);
          ctx.stroke();
        });
      }
      if (!prefersReducedMotion.matches) {
        requestAnimationFrame(drawFallback);
      }
    };

    drawFallback();
  }

  /* ========================================================================
     7. 3D PERSPECTIVE TILT, POINTER SPOTLIGHT & CUSTOM CURSOR
     ======================================================================== */
  function init3DTiltAndSpotlight() {
    const cursor = document.getElementById('customCursor');
    const panels = document.querySelectorAll('.hud-panel');
    const tiltCards = document.querySelectorAll('[data-tilt-card]');

    if (!isCoarsePointer.matches) {
      window.addEventListener('mousemove', (e) => {
        if (cursor && !prefersReducedMotion.matches) {
          cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }
      }, { passive: true });

      const interactiveEls = document.querySelectorAll('a, button, input, select, textarea, .filter-btn, .comms-roster-item');
      interactiveEls.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          if (cursor) cursor.classList.add('is-hovering');
        });
        el.addEventListener('mouseleave', () => {
          if (cursor) cursor.classList.remove('is-hovering');
        });
      });
    }

    // Pointer spotlight coordinates on .hud-panel
    panels.forEach((panel) => {
      panel.addEventListener('mousemove', (e) => {
        if (isCoarsePointer.matches) return;
        const rect = panel.getBoundingClientRect();
        panel.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        panel.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }, { passive: true });
    });

    // 3D Tilt on [data-tilt-card]
    tiltCards.forEach((card) => {
      const maxDeg = Number(card.getAttribute('data-tilt-max')) || 7;
      card.addEventListener('mousemove', (e) => {
        if (isCoarsePointer.matches || prefersReducedMotion.matches) return;
        const rect = card.getBoundingClientRect();
        const nx = (e.clientX - rect.left) / rect.width - 0.5;
        const ny = (e.clientY - rect.top) / rect.height - 0.5;
        const rotY = (nx * maxDeg * 2).toFixed(2);
        const rotX = (-ny * maxDeg * 2).toFixed(2);
        card.style.transform = `perspective(1200px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }, { passive: true });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ========================================================================
     8. NAVIGATION, SCROLL PROGRESS & MOBILE MENU OVERLAY
     ======================================================================== */
  function initNavigation() {
    const header = document.getElementById('siteHeader');
    const progressBar = document.getElementById('scrollProgressBar');
    const menuToggle = document.getElementById('mobileMenuToggle');
    const mobileOverlay = document.getElementById('mobileNavOverlay');
    const mobileClose = document.getElementById('mobileNavClose');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    const desktopLinks = document.querySelectorAll('.nav-link');
    const navSfxBtn = document.getElementById('navSfxToggle');

    if (navSfxBtn) {
      navSfxBtn.addEventListener('click', () => {
        SoundEngine.toggle();
      });
    }

    const setMobileMenuState = (open) => {
      if (!menuToggle || !mobileOverlay) return;
      menuToggle.setAttribute('aria-expanded', String(open));
      mobileOverlay.classList.toggle('is-open', open);
      mobileOverlay.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('menu-open', open);
      SoundEngine.playClick(open ? 620 : 440, 0.035);
      if (open && mobileClose) {
        setTimeout(() => mobileClose.focus(), 50);
      } else if (!open) {
        menuToggle.focus();
      }
    };

    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        setMobileMenuState(!isOpen);
      });
    }

    if (mobileClose) {
      mobileClose.addEventListener('click', () => setMobileMenuState(false));
    }

    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setMobileMenuState(false);
      });
    });

    // Close overlay on Escape & trap focus inside mobile menu when open
    document.addEventListener('keydown', (e) => {
      if (!mobileOverlay || !mobileOverlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setMobileMenuState(false);
        return;
      }
      if (e.key === 'Tab') {
        const focusables = mobileOverlay.querySelectorAll('a[href], button:not([disabled])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    // Scroll progress bar & header state
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (header) header.classList.toggle('is-scrolled', scrollTop > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Active section observer
    const sections = document.querySelectorAll('main section[id]');
    if ('IntersectionObserver' in window && sections.length) {
      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            desktopLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
            mobileLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, { rootMargin: '-35% 0px -55% 0px' });

      sections.forEach((sec) => navObserver.observe(sec));
    }
  }

  /* ========================================================================
     9. MEDIA VAULT: FILTERS, HTML5 VIDEO PLAYER & LIGHTBOX MODAL
     ======================================================================== */
  function initMediaVault() {
    // Category filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const vaultCards = document.querySelectorAll('.vault-card');
    const filterCountEl = document.getElementById('vaultActiveCount');

    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter') || 'all';
        SoundEngine.playClick(580, 0.03);
        filterBtns.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-selected', String(active));
        });

        let visibleCount = 0;
        vaultCards.forEach((card) => {
          const cardCats = (card.getAttribute('data-category') || '').split(' ');
          const match = category === 'all' || cardCats.includes(category);
          card.hidden = !match;
          if (match) visibleCount++;
        });

        if (filterCountEl) {
          filterCountEl.textContent = `SHOWING 0${visibleCount} VAULT SLOTS`;
        }
      });
    });

    // Local HTML5 Video Player Controls
    const video = document.getElementById('featuredReelVideo');
    const playBtn = document.getElementById('videoPlayBtn');
    const muteBtn = document.getElementById('videoMuteBtn');
    const fsBtn = document.getElementById('videoFsBtn');
    const scrubber = document.getElementById('videoScrubber');
    const timecode = document.getElementById('videoTimecode');
    const loadFileBtn = document.getElementById('loadLocalVideoBtn');
    const fileInput = document.getElementById('localVideoInput');

    const formatTime = (sec) => {
      if (!Number.isFinite(sec) || sec < 0) return '00:00';
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    if (video && playBtn) {
      playBtn.addEventListener('click', () => {
        SoundEngine.playClick(640, 0.03);
        if (video.paused) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });

      video.addEventListener('play', () => {
        playBtn.textContent = 'PAUSE';
      });
      video.addEventListener('pause', () => {
        playBtn.textContent = 'PLAY';
      });
      video.addEventListener('timeupdate', () => {
        const dur = video.duration || 4;
        if (scrubber) {
          scrubber.value = String((video.currentTime / dur) * 100);
        }
        if (timecode) {
          timecode.textContent = `${formatTime(video.currentTime)} / ${formatTime(dur)}`;
        }
      });
    }

    if (video && scrubber) {
      scrubber.addEventListener('input', () => {
        const dur = video.duration || 4;
        video.currentTime = (Number(scrubber.value) / 100) * dur;
      });
    }

    if (video && muteBtn) {
      muteBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? 'UNMUTE' : 'MUTE';
      });
    }

    if (video && fsBtn) {
      fsBtn.addEventListener('click', () => {
        if (video.requestFullscreen) {
          video.requestFullscreen().catch(() => {});
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        }
      });
    }

    if (loadFileBtn && fileInput && video) {
      loadFileBtn.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        video.src = url;
        video.play().catch(() => {});
      });
    }

    // Lightbox Modal Inspection
    const modal = document.getElementById('vaultModal');
    const modalTitle = document.getElementById('vaultModalTitle');
    const modalImg = document.getElementById('vaultModalImg');
    const modalDesc = document.getElementById('vaultModalDesc');
    const modalClose = document.getElementById('vaultModalClose');
    const inspectBtns = document.querySelectorAll('[data-inspect-slot]');

    const closeModal = () => {
      if (!modal) return;
      modal.hidden = true;
      document.body.classList.remove('modal-open');
    };

    inspectBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!modal) return;
        const title = btn.getAttribute('data-title') || 'Vault Preview';
        const img = btn.getAttribute('data-img') || '';
        const desc = btn.getAttribute('data-desc') || '';
        if (modalTitle) modalTitle.textContent = title;
        if (modalImg) {
          modalImg.src = img;
          modalImg.alt = title;
        }
        if (modalDesc) modalDesc.textContent = desc;
        modal.hidden = false;
        document.body.classList.add('modal-open');
        SoundEngine.playClick(700, 0.03);
        if (modalClose) modalClose.focus();
      });
    });

    if (modalClose) {
      modalClose.addEventListener('click', closeModal);
    }
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal && !modal.hidden) {
        closeModal();
      }
    });
  }

  /* ========================================================================
     10. ACHIEVEMENTS & STATS COUNTER ANIMATION
     ======================================================================== */
  function initAchievementsCounters() {
    const statGrid = document.getElementById('statsDashboardGrid');
    if (!statGrid) return;

    // Render from ACHIEVEMENTS_DATA so client can edit in one place
    statGrid.innerHTML = ACHIEVEMENTS_DATA.map((item) => {
      const initialVal = item.numericTarget !== null
        ? `${item.prefix || ''}0${item.suffix || ''}`
        : item.staticText;
      return `
        <article class="hud-panel hud-corners stat-panel reveal-on-scroll" data-tilt-card data-tilt-max="5">
          <div class="stat-panel__code">${item.code}</div>
          <div class="stat-panel__value" data-stat-id="${item.id}">${initialVal}</div>
          <h3 class="stat-panel__label">${item.label}</h3>
          <p class="stat-panel__detail">${item.detail}</p>
        </article>
      `;
    }).join('');

    const runCounter = (item) => {
      const el = statGrid.querySelector(`[data-stat-id="${item.id}"]`);
      if (!el || item.numericTarget === null) return;

      if (prefersReducedMotion.matches) {
        el.innerHTML = `${item.prefix || ''}${item.numericTarget.toFixed(item.decimals)}<span>${item.suffix || ''}</span>`;
        return;
      }

      const duration = 1300;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = (item.numericTarget * eased).toFixed(item.decimals);
        el.innerHTML = `${item.prefix || ''}${current}<span>${item.suffix || ''}</span>`;
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      let triggered = false;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            ACHIEVEMENTS_DATA.forEach(runCounter);
            obs.disconnect();
          }
        });
      }, { threshold: 0.25 });
      obs.observe(statGrid);
    } else {
      ACHIEVEMENTS_DATA.forEach(runCounter);
    }
  }

  /* ========================================================================
     11. COMMUNITY FEEDBACK — TYPING-STYLE ANIMATED ESPORTS COMMS TERMINAL
     ======================================================================== */
  function initCommsTerminal() {
    const activeEntries = COMMUNITY_FEEDBACK_DATA.filter((item) => item.active && !item.isPlaceholder);
    if (!activeEntries.length) return;

    const monogramEl = document.getElementById('commsAuthorMonogram');
    const handleEl = document.getElementById('commsAuthorHandle');
    const metaEl = document.getElementById('commsAuthorMeta');
    const platformEl = document.getElementById('commsPlatformTag');
    const typedTextEl = document.getElementById('commsTypedText');
    const counterEl = document.getElementById('commsCounterReadout');
    const rosterListEl = document.getElementById('commsRosterList');

    const prevBtn = document.getElementById('commsPrevBtn');
    const nextBtn = document.getElementById('commsNextBtn');
    const pauseBtn = document.getElementById('commsPauseBtn');
    const instantBtn = document.getElementById('commsInstantBtn');
    const sfxBtn = document.getElementById('commsSfxToggle');

    let currentIndex = 0;
    let charIndex = 0;
    let isPaused = false;
    let instantMode = prefersReducedMotion.matches;
    let typingTimer = null;
    let autoAdvanceTimer = null;

    // Populate clickable roster of all 24 verified entries
    if (rosterListEl) {
      rosterListEl.innerHTML = activeEntries.map((entry, idx) => `
        <li>
          <button type="button" class="comms-roster-item ${idx === 0 ? 'is-selected' : ''}" data-roster-idx="${idx}">
            <div class="comms-roster-item__top">
              <span class="comms-roster-item__handle">${entry.handle}</span>
              <span class="comms-roster-item__meta">${entry.meta}</span>
            </div>
            <div class="comms-roster-item__text">“${entry.message}”</div>
          </button>
        </li>
      `).join('');

      rosterListEl.querySelectorAll('[data-roster-idx]').forEach((btn) => {
        btn.addEventListener('click', () => {
          const idx = Number(btn.getAttribute('data-roster-idx'));
          SoundEngine.playClick(600, 0.03);
          selectMessage(idx);
        });
      });
    }

    const clearTimers = () => {
      if (typingTimer) {
        clearTimeout(typingTimer);
        typingTimer = null;
      }
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
        autoAdvanceTimer = null;
      }
    };

    const scheduleAutoAdvance = () => {
      clearTimers();
      if (isPaused) return;
      autoAdvanceTimer = setTimeout(() => {
        selectMessage((currentIndex + 1) % activeEntries.length);
      }, 3600);
    };

    const typeNextChar = () => {
      const entry = activeEntries[currentIndex];
      if (!entry || !typedTextEl) return;

      if (instantMode || prefersReducedMotion.matches) {
        typedTextEl.textContent = `“${entry.message}”`;
        scheduleAutoAdvance();
        return;
      }

      if (isPaused) return;

      const fullString = `“${entry.message}”`;
      if (charIndex <= fullString.length) {
        typedTextEl.textContent = fullString.slice(0, charIndex);
        if (charIndex % 2 === 1) {
          SoundEngine.playTypeTick();
        }
        charIndex++;
        typingTimer = setTimeout(typeNextChar, 30);
      } else {
        scheduleAutoAdvance();
      }
    };

    const selectMessage = (idx) => {
      clearTimers();
      currentIndex = (idx + activeEntries.length) % activeEntries.length;
      const entry = activeEntries[currentIndex];
      charIndex = 0;

      if (monogramEl) monogramEl.textContent = entry.monogram;
      if (handleEl) handleEl.textContent = entry.handle;
      if (metaEl) metaEl.textContent = entry.meta;
      if (platformEl) platformEl.textContent = entry.platform;
      if (counterEl) {
        counterEl.textContent = `MSG ${String(currentIndex + 1).padStart(2, '0')} / ${String(activeEntries.length).padStart(2, '0')} (25-SLOT BUFFER)`;
      }

      if (rosterListEl) {
        rosterListEl.querySelectorAll('[data-roster-idx]').forEach((btn, i) => {
          btn.classList.toggle('is-selected', i === currentIndex);
        });
      }

      if (instantMode || prefersReducedMotion.matches) {
        if (typedTextEl) typedTextEl.textContent = `“${entry.message}”`;
        scheduleAutoAdvance();
      } else {
        if (typedTextEl) typedTextEl.textContent = '';
        typeNextChar();
      }
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        SoundEngine.playClick(500, 0.03);
        selectMessage(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        SoundEngine.playClick(560, 0.03);
        selectMessage(currentIndex + 1);
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseBtn.setAttribute('aria-pressed', String(isPaused));
        pauseBtn.textContent = isPaused ? 'RESUME STREAM' : 'PAUSE STREAM';
        SoundEngine.playClick(520, 0.03);
        if (!isPaused) {
          typeNextChar();
        } else {
          clearTimers();
        }
      });
    }

    if (instantBtn) {
      instantBtn.addEventListener('click', () => {
        instantMode = !instantMode;
        instantBtn.setAttribute('aria-pressed', String(instantMode));
        instantBtn.textContent = instantMode ? 'MODE: INSTANT' : 'MODE: TYPING';
        SoundEngine.playClick(640, 0.03);
        selectMessage(currentIndex);
      });
    }

    if (sfxBtn) {
      sfxBtn.addEventListener('click', () => {
        SoundEngine.toggle();
      });
    }

    selectMessage(0);
  }

  /* ========================================================================
     12. CONTACT SECTION — MISSION BRIEFING COMMISSION TERMINAL
     Honest Static Workflow: Validates fields, builds a formatted Mission
     Brief, and provides Direct Instagram DM Copy + Configurable mailto:.
     ======================================================================== */
  function initContactTerminal() {
    const form = document.getElementById('commissionForm');
    if (!form) return;

    const resultBox = document.getElementById('briefResultBox');
    const resultPre = document.getElementById('briefResultPre');
    const copyIgBtn = document.getElementById('copyAndOpenIgBtn');
    const mailtoLink = document.getElementById('launchMailtoLink');
    const copyStatusEl = document.getElementById('briefCopyStatus');

    const fields = {
      name: {
        el: document.getElementById('clientName'),
        err: document.getElementById('clientNameError'),
        validate: (v) => v.trim().length >= 2 ? '' : 'Enter your name or callsign (min 2 characters).'
      },
      contact: {
        el: document.getElementById('clientContact'),
        err: document.getElementById('clientContactError'),
        validate: (v) => v.trim().length >= 3 ? '' : 'Enter a valid Instagram @handle or email address.'
      },
      projectType: {
        el: document.getElementById('projectType'),
        err: document.getElementById('projectTypeError'),
        validate: (v) => v.trim() !== '' ? '' : 'Select a project type for your edit.'
      },
      gameTitle: {
        el: document.getElementById('gameTitle'),
        err: document.getElementById('gameTitleError'),
        validate: (v) => v.trim() !== '' ? '' : 'Select the primary gaming title.'
      },
      details: {
        el: document.getElementById('projectDetails'),
        err: document.getElementById('projectDetailsError'),
        validate: (v) => v.trim().length >= 10 ? '' : 'Provide at least 10 characters describing your clips, song, or pacing.'
      }
    };

    Object.values(fields).forEach(({ el, err, validate }) => {
      if (!el) return;
      el.addEventListener('input', () => {
        const msg = validate(el.value);
        el.setAttribute('aria-invalid', String(Boolean(msg)));
        if (err) err.textContent = msg;
      });
    });

    let lastBriefText = '';

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Honeypot spam check
      const honeypot = document.getElementById('websiteUrlTrap');
      if (honeypot && honeypot.value.trim() !== '') return;

      let hasError = false;
      let firstInvalidEl = null;

      Object.values(fields).forEach(({ el, err, validate }) => {
        if (!el) return;
        const msg = validate(el.value);
        el.setAttribute('aria-invalid', String(Boolean(msg)));
        if (err) err.textContent = msg;
        if (msg && !hasError) {
          hasError = true;
          firstInvalidEl = el;
        }
      });

      if (hasError) {
        SoundEngine.playClick(300, 0.06);
        if (firstInvalidEl) firstInvalidEl.focus();
        return;
      }

      const budgetEl = document.getElementById('budgetRange');
      const nameVal = fields.name.el.value.trim();
      const contactVal = fields.contact.el.value.trim();
      const typeVal = fields.projectType.el.value.trim();
      const gameVal = fields.gameTitle.el.value.trim();
      const budgetVal = budgetEl && budgetEl.value.trim() ? budgetEl.value.trim() : 'Flexible / Discuss in DM';
      const detailsVal = fields.details.el.value.trim();

      lastBriefText = [
        '=== COMMISSION BRIEF FOR @STOIC0P ===',
        `Client Name: ${nameVal}`,
        `Contact (IG / Email): ${contactVal}`,
        `Project Type: ${typeVal}`,
        `Game Title: ${gameVal}`,
        `Budget Range: ${budgetVal}`,
        `Project Details: ${detailsVal}`,
        '====================================='
      ].join('\n');

      if (resultPre) resultPre.textContent = lastBriefText;
      if (resultBox) {
        resultBox.hidden = false;
        resultBox.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth', block: 'nearest' });
      }

      // Configure honest mailto link
      if (mailtoLink) {
        const subject = encodeURIComponent(`[Esports Edit Request] ${typeVal} — ${gameVal} (${nameVal})`);
        const body = encodeURIComponent(lastBriefText);
        const recipient = CREATOR_CONFIG.contactEmail || '';
        mailtoLink.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      }

      if (copyStatusEl) {
        copyStatusEl.textContent = CREATOR_CONFIG.contactEmail
          ? 'Brief generated! Choose Instagram DM or Email Client below to send directly to Bhargav.'
          : 'Brief generated! Because this is a static frontend, click "Copy Brief & Open Instagram" to paste directly into @stoic0p DM, or open your email app below.';
      }

      SoundEngine.playClick(740, 0.05);
    });

    if (copyIgBtn) {
      copyIgBtn.addEventListener('click', () => {
        if (!lastBriefText) return;
        const copyText = (text) => {
          if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
          }
          return Promise.resolve(fallbackCopy(text));
        };

        const fallbackCopy = (text) => {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (_) {}
          document.body.removeChild(ta);
        };

        copyText(lastBriefText).then(() => {
          if (copyStatusEl) {
            copyStatusEl.textContent = 'Copied to clipboard! Opening @stoic0p on Instagram...';
          }
          window.open(CREATOR_CONFIG.instagramUrl, '_blank', 'noopener,noreferrer');
        });
      });
    }
  }

  /* ========================================================================
     13. SCROLL REVEAL OBSERVER & BACK TO TOP
     ======================================================================== */
  function initScrollReveals() {
    const revealEls = document.querySelectorAll('.reveal-on-scroll');
    document.body.classList.add('js-ready');
    if (prefersReducedMotion.matches || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const checkVisible = () => {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      revealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < vh * 0.94 && rect.bottom > 0) {
          el.classList.add('is-visible');
        }
      });
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    revealEls.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', checkVisible, { passive: true });
    checkVisible();
  }

  /* ========================================================================
     14. INITIALIZE PORTFOLIO EXPERIENCE
     ======================================================================== */
  function bootPortfolio() {
    if (window.__stoicPortfolioBooted) return;
    window.__stoicPortfolioBooted = true;
    initNavigation();
    initHero3DScene();
    initAchievementsCounters();
    initMediaVault();
    initCommsTerminal();
    initContactTerminal();
    init3DTiltAndSpotlight();
    initScrollReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootPortfolio);
  } else {
    bootPortfolio();
  }
})();
