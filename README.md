<div align="center">

# 🌐 Sameera Ayeshmantha — Official Portfolio Portal

<p align="center">
  <b>High-Performance, Full-Bleed Web Gateway for Sameera Ayeshmantha's Engineering Portfolio</b>
</p>

[![Live GitHub Pages](https://img.shields.io/badge/GitHub_Pages-LIVE%20PORTAL-0ea5e9?style=for-the-badge&logo=githubpages&logoColor=white)](https://ayeshmantha2002.github.io/ayeshmantha/)
[![Primary Server](https://img.shields.io/badge/Primary_Host-dev.pasindumsoyza.lk-8b5cf6?style=for-the-badge&logo=nginx&logoColor=white)](https://dev.pasindumsoyza.lk/)
[![University](https://img.shields.io/badge/University-Moratuwa-10b981?style=for-the-badge&logo=mortarboard&logoColor=white)](https://uom.lk/)
[![PWA](https://img.shields.io/badge/PWA-Installable-f59e0b?style=for-the-badge&logo=pwa&logoColor=white)](https://ayeshmantha2002.github.io/ayeshmantha/)
[![License](https://img.shields.io/badge/License-MIT-f43f5e?style=for-the-badge)](LICENSE)

<br/>

<a href="https://ayeshmantha2002.github.io/ayeshmantha/">
  <img src="https://avatars.githubusercontent.com/u/115178836?v=4" width="130" height="130" style="border-radius: 50%; border: 3px solid #0ea5e9; box-shadow: 0 0 25px rgba(14, 165, 233, 0.4);" alt="Sameera Ayeshmantha Avatar" />
</a>

<h3>Sameera Ayeshmantha</h3>
<p>
  <b>Electronics & Telecommunication Engineering Undergraduate</b><br/>
  <i>Institute of Technology, University of Moratuwa</i><br/>
  Full Stack Software Engineer • IoT & Industrial Automation • Embedded Systems
</p>

<p>
  <a href="https://ayeshmantha2002.github.io/ayeshmantha/"><strong>Explore Live Portfolio »</strong></a>
  &nbsp;•&nbsp;
  <a href="https://www.linkedin.com/in/sameera-ayeshmantha-943304399/">Connect on LinkedIn</a>
  &nbsp;•&nbsp;
  <a href="mailto:ayeshmantha2002@gmail.com">Send an Email</a>
</p>

</div>

---

## 📌 Overview

This repository hosts the official **GitHub Pages Web Portal** (`https://ayeshmantha2002.github.io/ayeshmantha/`).

It serves as a clean, high-performance gateway that securely and seamlessly embeds Sameera's full-stack portfolio (hosted on the primary server at `dev.pasindumsoyza.lk`). Built with zero bloated dependencies, it delivers an instant, edge-to-edge native application experience with custom cyber aesthetics, full mobile optimization, and rich SEO previews.

---

## ⚡ Engineering & Architecture Highlights

```
                                      ┌──────────────────────────────────────────────────────────┐
                                      │  User visits:                                            │
                                      │  https://ayeshmantha2002.github.io/ayeshmantha/          │
                                      └─────────────────────────┬────────────────────────────────┘
                                                                │
                                                                ▼
                                      ┌──────────────────────────────────────────────────────────┐
                                      │  Client Shell (GitHub Pages Gateway)                     │
                                      │  - Animated Cyber Microchip Preloader                    │
                                      │  - PWA Service Worker (Offline Shell Caching)            │
                                      │  - OpenGraph / Social Metadata & Schema.org JSON-LD       │
                                      │  - Zero-Margin 100dvh Dynamic Viewport Engine            │
                                      └─────────────────────────┬────────────────────────────────┘
                                                                │
                                                                ▼
                                      ┌──────────────────────────────────────────────────────────┐
                                      │  Secure Native Full-Bleed Embed Layer                    │
                                      │  https://dev.pasindumsoyza.lk/                           │
                                      │  - Full Hardware Permissions (Clipboard, Fullscreen, etc.)│
                                      │  - Fail-Safe Network Delay Auto-Recovery                 │
                                      └──────────────────────────────────────────────────────────┘
```

### 1. 🌟 Full-Bleed Native Experience
- Zero iframe borders, zero nested scrollbars.
- `100dvh` dynamic height calculation ensures seamless scrolling without clipping on modern iOS Safari and Android Chrome address bars.
- Complete hardware and browser feature delegation:
  ```html
  allow="camera; microphone; geolocation; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
  ```

### 2. ⚡ Cyber Circuit Preloader
- Modern SVG microchip with dual-speed orbiting neon glow rings.
- Real-time staged handshake status (`Connecting to node`, `Initializing circuit components`, `Ready`).
- Smooth cubic-bezier 0.4s fade-out once the primary server delivers the document.

### 3. 🔍 Complete Social SEO & OpenGraph Optimization
- Instant rich preview cards on **WhatsApp**, **LinkedIn**, **Twitter/X**, and **Facebook** when sharing the GitHub Pages link.
- Structured **JSON-LD Schema (Person)** highlighting University of Moratuwa education, engineering disciplines, and verified social profiles.

### 4. 📱 Progressive Web App (PWA) Installable
- Includes `manifest.webmanifest` and a lightweight `sw.js` Service Worker.
- Visitors can tap **"Install App"** on Android, iOS, or Chrome/Edge to save the portfolio directly to their home screen as a standalone application.

### 5. 🛡️ Deep Linking & SPA Route Handling (`404.html`)
- If a visitor accesses a direct route or subpage (e.g., `?p=view/projects.php` or section hash `#contact`), the gateway automatically maps and routes the iframe to the exact requested module.

### 6. 🚨 Fail-Safe Delay Recovery
- In the event that the primary server is undergoing maintenance or delayed over poor networks, a fallback screen gracefully appears with direct reconnection and social contact channels.

---

## 🚀 Deployment & GitHub Pages Setup

This repository is pre-configured with **GitHub Actions CI/CD** (`.github/workflows/pages.yml`) for automated deployments.

### How to Verify GitHub Pages:
1. Open the repository on GitHub: [ayeshmantha2002/ayeshmantha](https://github.com/ayeshmantha2002/ayeshmantha).
2. Click on **Settings** > **Pages** (in the left navigation).
3. Under **Build and deployment** > **Source**:
   - Choose **GitHub Actions** (recommended for automatic workflow deployment).
   - *Or* choose **Deploy from a branch** -> branch: `main` / folder: `/(root)`.
4. Your website is instantly live at:
   👉 **[https://ayeshmantha2002.github.io/ayeshmantha/](https://ayeshmantha2002.github.io/ayeshmantha/)**

---

## 🛠️ Technology Stack

<div align="center">

| Layer | Technologies |
|---|---|
| **Frontend Shell** | HTML5 Semantic, Modern CSS3 Variables, Vanilla JavaScript (ES6+) |
| **Aesthetics** | Cyber Dark Architecture (`#0b0f19`), Glassmorphism, CSS Hardware Acceleration |
| **Hosting & CI/CD** | GitHub Pages, GitHub Actions (`deploy-pages@v4`) |
| **Application Layer** | Progressive Web App (PWA), Service Worker (`sw.js`), Web App Manifest |
| **Target Server** | Apache / PHP 7.3+ (Host: `https://dev.pasindumsoyza.lk/`) |

</div>

---

## 📬 Contact & Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sameera_Ayeshmantha-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sameera-ayeshmantha-943304399/)
[![GitHub](https://img.shields.io/badge/GitHub-ayeshmantha2002-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ayeshmantha2002)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat_Directly-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/94711596479)
[![Email](https://img.shields.io/badge/Email-ayeshmantha2002@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ayeshmantha2002@gmail.com)
[![Facebook](https://img.shields.io/badge/Facebook-Connect-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/ayeshmantha2002/)

<br/>
<sub>Designed & Engineered with ❤️ for Sameera Ayeshmantha • University of Moratuwa</sub>

</div>