/**
 * Sameera Ayeshmantha - Seamless Portfolio Wrapper
 * High-Performance Vanilla JS Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Core Elements ---
  const iframe = document.getElementById('portfolioFrame');
  const preloader = document.getElementById('preloader');
  const progressFill = document.getElementById('progressFill');
  const statusText = document.getElementById('statusText');
  const fallbackOverlay = document.getElementById('fallbackOverlay');
  const retryBtn = document.getElementById('retryBtn');

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

  // Soft fallback timer (prevent infinite loading on slow connections)
  setTimeout(() => {
    finishLoading();
  }, 4800);

  // Hard timeout fallback: if not reachable after 15 seconds, show fallback overlay
  setTimeout(() => {
    try {
      if (!isIframeLoaded) {
        fallbackOverlay.classList.add('active');
      }
    } catch (e) {
      // ignore
    }
  }, 15000);

  // --- 3. Fallback Reconnect Action ---
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

  // --- 4. Register Service Worker for PWA ---
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {
        // Silently catch registration on file:// protocol
      });
    });
  }
});
