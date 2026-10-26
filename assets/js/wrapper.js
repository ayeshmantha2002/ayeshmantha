/**
 * Sameera Ayeshmantha - Next-Level Portfolio Wrapper
 * High-Performance Vanilla JS Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Core Elements ---
  const iframe = document.getElementById('portfolioFrame');
  const preloader = document.getElementById('preloader');
  const progressFill = document.getElementById('progressFill');
  const statusText = document.getElementById('statusText');
  const deviceFrame = document.getElementById('deviceFrame');
  const floatingHud = document.getElementById('floatingHud');
  const hudCollapseBtn = document.getElementById('hudCollapseBtn');
  const fallbackOverlay = document.getElementById('fallbackOverlay');
  const shareModal = document.getElementById('shareModal');
  const toastNotice = document.getElementById('toastNotice');
  const toastMsg = document.getElementById('toastMsg');
  const copyUrlBtn = document.getElementById('copyUrlBtn');
  const shareUrlInput = document.getElementById('shareUrlInput');
  const qrCanvas = document.getElementById('qrCanvas');
  const fullscreenBtn = document.getElementById('fullscreenBtn');
  const refreshBtn = document.getElementById('refreshBtn');

  // Base Portfolio Target
  const BASE_URL = 'https://dev.pasindumsoyza.lk/';

  // --- 1. Deep Link & Route Resolution ---
  function resolveTargetUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    const pageParam = urlParams.get('p') || urlParams.get('page') || urlParams.get('view');
    const hash = window.location.hash;

    let target = BASE_URL;

    if (pageParam) {
      // Clean and append path
      const cleanPath = pageParam.replace(/^\/+/, '');
      target = BASE_URL + cleanPath;
    } else if (hash) {
      target = BASE_URL + hash;
    }

    return target;
  }

  const initialUrl = resolveTargetUrl();
  iframe.src = initialUrl;
  if (shareUrlInput) {
    shareUrlInput.value = window.location.href;
  }

  // --- 2. Preloader & Lifecycle Manager ---
  let progress = 10;
  let isIframeLoaded = false;
  let progressTimer = null;

  const statusSteps = [
    { at: 15, text: 'Establishing secure link to host...' },
    { at: 40, text: 'Handshaking with dev.pasindumsoyza.lk...' },
    { at: 70, text: 'Loading UI components & circuit canvas...' },
    { at: 90, text: 'Finalizing high-performance layout...' }
  ];

  function updateStatusMessage(val) {
    for (let i = statusSteps.length - 1; i >= 0; i--) {
      if (val >= statusSteps[i].at) {
        statusText.textContent = statusSteps[i].text;
        break;
      }
    }
  }

  // Simulated incremental progress while network request runs
  progressTimer = setInterval(() => {
    if (progress < 85) {
      progress += Math.floor(Math.random() * 8) + 4;
      if (progress > 85) progress = 85;
      progressFill.style.width = progress + '%';
      updateStatusMessage(progress);
    }
  }, 120);

  function finishLoading() {
    if (isIframeLoaded) return;
    isIframeLoaded = true;
    clearInterval(progressTimer);

    progressFill.style.width = '100%';
    statusText.textContent = 'Connection active • Ready';

    setTimeout(() => {
      preloader.classList.add('fade-out');
    }, 380);
  }

  // Event when iframe completes loading
  iframe.addEventListener('load', () => {
    finishLoading();
  });

  // Soft fallback timer (prevent infinite loading on slow 3G/satellite)
  setTimeout(() => {
    finishLoading();
  }, 4800);

  // Hard timeout fallback: if not reachable after 15 seconds, show fallback overlay
  setTimeout(() => {
    try {
      // If the iframe failed completely or host is down
      if (!isIframeLoaded) {
        fallbackOverlay.classList.add('active');
      }
    } catch (e) {
      // ignore
    }
  }, 15000);

  // --- 3. Device Viewport Mode Switcher ---
  const viewBtns = document.querySelectorAll('.hud-btn[data-view]');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-view');
      deviceFrame.setAttribute('data-view', mode);

      viewBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const modeNames = {
        desktop: 'Desktop Mode (Full 100vw)',
        tablet: 'Tablet Simulator (840px)',
        mobile: 'Mobile Simulator (390px)'
      };
      showToast('Switched to ' + (modeNames[mode] || mode));
    });
  });

  // --- 4. Fullscreen Controller ---
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
        showToast('Entered Fullscreen Mode');
      } else {
        document.exitFullscreen().catch(() => {});
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
        showToast('Exited Fullscreen Mode');
      }
    });

    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i>';
      } else {
        fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i>';
      }
    });
  }

  // --- 5. Iframe Refresh Controller ---
  if (refreshBtn) {
    refreshBtn.addEventListener('click', () => {
      const icon = refreshBtn.querySelector('i');
      if (icon) icon.classList.add('fa-spin');

      // Reload iframe
      try {
        iframe.contentWindow.location.reload();
      } catch (e) {
        iframe.src = iframe.src;
      }

      showToast('Refreshing portfolio...');
      setTimeout(() => {
        if (icon) icon.classList.remove('fa-spin');
      }, 900);
    });
  }

  // --- 6. Direct Standalone Launch ---
  const directBtn = document.getElementById('directBtn');
  if (directBtn) {
    directBtn.addEventListener('click', () => {
      window.open(BASE_URL, '_blank', 'noopener,noreferrer');
    });
  }

  // --- 7. HUD Collapse / Expand ---
  const savedHudState = localStorage.getItem('ayeshmantha_hud_minimized');
  if (savedHudState === 'true') {
    floatingHud.classList.add('minimized');
  }

  if (hudCollapseBtn) {
    hudCollapseBtn.addEventListener('click', () => {
      const isMin = floatingHud.classList.toggle('minimized');
      localStorage.setItem('ayeshmantha_hud_minimized', isMin);
      hudCollapseBtn.title = isMin ? 'Expand Controls' : 'Minimize Controls';
    });
  }

  // --- 8. Share & QR Code Modal ---
  const shareBtn = document.getElementById('shareBtn');
  const closeShareModal = document.getElementById('closeShareModal');
  const nativeShareBtn = document.getElementById('nativeShareBtn');

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      renderQrCode(window.location.href);
      shareModal.classList.add('active');
    });
  }

  if (closeShareModal) {
    closeShareModal.addEventListener('click', () => {
      shareModal.classList.remove('active');
    });
  }

  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
      shareModal.classList.remove('active');
    }
  });

  // Native Web Share API
  if (nativeShareBtn) {
    if (navigator.share) {
      nativeShareBtn.style.display = 'inline-flex';
      nativeShareBtn.addEventListener('click', () => {
        navigator.share({
          title: 'Sameera Ayeshmantha | Portfolio',
          text: 'Check out the portfolio of Sameera Ayeshmantha - Full Stack Software & Electronics Engineer.',
          url: window.location.href
        }).catch(() => {});
      });
    } else {
      nativeShareBtn.style.display = 'none';
    }
  }

  // Copy URL Button
  if (copyUrlBtn) {
    copyUrlBtn.addEventListener('click', () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        copyUrlBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        showToast('Link copied to clipboard!');
        setTimeout(() => {
          copyUrlBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy';
        }, 2200);
      }).catch(() => {
        // Fallback
        shareUrlInput.select();
        document.execCommand('copy');
        showToast('Link copied!');
      });
    });
  }

  // --- 9. Toast Notification Utility ---
  let toastTimeout = null;
  function showToast(message, duration = 2400) {
    if (!toastNotice) return;
    toastMsg.textContent = message;
    toastNotice.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastNotice.classList.remove('show');
    }, duration);
  }

  // --- 10. Fallback Reconnect Action ---
  const retryBtn = document.getElementById('retryBtn');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      fallbackOverlay.classList.remove('active');
      preloader.classList.remove('fade-out');
      progress = 20;
      progressFill.style.width = '20%';
      statusText.textContent = 'Reconnecting to host node...';
      iframe.src = BASE_URL + '?t=' + Date.now();
      isIframeLoaded = false;
    });
  }

  // --- 11. Lightweight QR Code Engine (Pure HTML5 Canvas) ---
  function renderQrCode(text) {
    if (!qrCanvas) return;
    const ctx = qrCanvas.getContext('2d');
    const size = 180;
    qrCanvas.width = size;
    qrCanvas.height = size;

    // Use an online QR service with fallback to styled pattern
    const qrImg = new Image();
    qrImg.crossOrigin = 'Anonymous';
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=' + encodeURIComponent(text) + '&color=0b0f19&bgcolor=ffffff';
    
    qrImg.onload = () => {
      ctx.drawImage(qrImg, 0, 0, size, size);
    };

    qrImg.onerror = () => {
      // Fallback elegant monogram pattern if offline
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#0ea5e9';
      ctx.fillRect(20, 20, 40, 40);
      ctx.fillRect(120, 20, 40, 40);
      ctx.fillRect(20, 120, 40, 40);
      ctx.fillStyle = '#0b0f19';
      ctx.font = 'bold 13px Poppins, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Sameera A.', size / 2, size / 2);
    };
  }

  // --- 12. Register Service Worker for PWA ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {
        // Silently catch registration on file:// protocol
      });
    });
  }
});
