/**
 * PUNTO PIZZA 3 — Main Application Logic
 * Vanilla ES6 JavaScript: i18n, Dark Mode, Accordion, Slider, Live Status, Lightbox
 */

(function () {
  'use strict';

  // State Management
  let currentLang = localStorage.getItem('punto_pizza_lang') || 'it';
  let currentTheme = localStorage.getItem('punto_pizza_theme') || 'light';
  let activeCategoryId = APP_DATA.menuCategories[0].id;
  let currentReviewIdx = 0;
  let reviewInterval = null;

  // DOM Elements
  const header = document.getElementById('site-header');
  const currentYearSpan = document.getElementById('current-year');
  const langItBtn = document.getElementById('lang-it-btn');
  const langEnBtn = document.getElementById('lang-en-btn');
  const mobileNavDrawer = document.getElementById('mobile-nav-drawer');
  const burgerOpenIcon = document.getElementById('burger-open-icon');
  const burgerCloseIcon = document.getElementById('burger-close-icon');

  // --- Initializer ---
  function init() {
    // 1. Setup Theme
    applyTheme(currentTheme);

    // 2. Setup Language
    setLanguage(currentLang, false);

    // 3. Render Static/Dynamic Sections
    renderSpecialties();
    renderMenuAccordion();
    renderReviews();
    renderGallery();
    renderOpeningHours();
    updateLiveStatus();

    // 4. Update Current Year
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }

    // 5. Setup Scroll Listeners & Observers
    setupScrollEffects();
    setupIntersectionObserver();

    // 6. Setup Reviews Timer (6s auto-slide)
    startReviewAutoplay();

    // 7. Update Live Status Every Minute
    setInterval(updateLiveStatus, 60000);

    // 8. ESC key for Lightbox & Mobile Menu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
        closeMobileMenu();
      }
    });
  }

  // --- Theme Management ---
  window.toggleTheme = function () {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('punto_pizza_theme', currentTheme);
    applyTheme(currentTheme);
  };

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  // --- Language Management (i18n) ---
  window.setLanguage = function (lang, updateState = true) {
    if (lang !== 'it' && lang !== 'en') lang = 'it';
    currentLang = lang;
    if (updateState) {
      localStorage.setItem('punto_pizza_lang', currentLang);
    }

    // Update active button classes
    if (langItBtn && langEnBtn) {
      langItBtn.classList.toggle('active', currentLang === 'it');
      langEnBtn.classList.toggle('active', currentLang === 'en');
    }

    // Translate all data-i18n elements
    const dict = APP_DATA.translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const keyPath = el.getAttribute('data-i18n');
      const text = getNestedTranslation(dict, keyPath);
      if (text !== undefined) {
        el.textContent = text;
      }
    });

    // Re-render components with language sensitive texts
    renderSpecialties();
    renderMenuAccordion();
    renderOpeningHours();
    updateLiveStatus();
  };

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((prev, curr) => {
      if (prev && prev[curr] !== undefined) return prev[curr];
      return undefined;
    }, obj);
  }

  // --- Render Specialties Cards ---
  function renderSpecialties() {
    const container = document.getElementById('specialties-cards-container');
    if (!container) return;

    container.innerHTML = APP_DATA.signatureDishes
      .map((dish) => {
        const desc = currentLang === 'en' ? dish.descEn : dish.descIt;
        return `
        <article class="specialty-card">
          <div class="specialty-img-container">
            <img src="${dish.image}" alt="${dish.name}" loading="lazy" />
            <div class="specialty-overlay"></div>
            <div class="specialty-info">
              <h3 class="specialty-title">${dish.name}</h3>
              <p class="specialty-desc">${desc}</p>
            </div>
          </div>
        </article>
      `;
      })
      .join('');
  }

  // --- Render Menu Accordion ---
  function renderMenuAccordion() {
    const container = document.getElementById('menu-accordion-container');
    if (!container) return;

    container.innerHTML = APP_DATA.menuCategories
      .map((cat) => {
        const isActive = cat.id === activeCategoryId;
        const catName = cat.name[currentLang] || cat.name.it;

        const itemsHtml = cat.items
          .map(
            (item) => `
          <li class="menu-item-row">
            <div class="menu-item-info">
              <p class="menu-item-name">${item.name}</p>
              <p class="menu-item-ingredients">${item.ingredients}</p>
            </div>
            <span class="menu-item-dots"></span>
            <span class="menu-item-price">€ ${item.price}</span>
          </li>
        `
          )
          .join('');

        // Lucide FolderOpen (active) or FileText (inactive)
        const iconSvg = isActive
          ? `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2" /></svg>`
          : `<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>`;

        return `
        <div class="menu-category-group ${isActive ? 'active' : ''}" id="cat-group-${cat.id}">
          <button class="menu-category-header" onclick="toggleCategory('${cat.id}')" aria-expanded="${isActive}">
            <div class="menu-category-left">
              <span class="category-icon-box">
                ${iconSvg}
              </span>
              <span class="category-name">${catName}</span>
              <span class="category-count">(${cat.items.length})</span>
            </div>
            <!-- Lucide ChevronDown -->
            <svg class="chevron-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div class="menu-category-body">
            <ul class="menu-items-grid">
              ${itemsHtml}
            </ul>
          </div>
        </div>
      `;
      })
      .join('');
  }

  window.toggleCategory = function (catId) {
    if (activeCategoryId === catId) {
      activeCategoryId = null;
    } else {
      activeCategoryId = catId;
    }
    renderMenuAccordion();
  };

  // --- Reviews Slider Engine ---
  function renderReviews() {
    const sliderBox = document.getElementById('reviews-slider-box');
    const dotsContainer = document.getElementById('reviews-dots');
    if (!sliderBox || !dotsContainer) return;

    // Render Review Slides
    sliderBox.innerHTML = APP_DATA.reviews
      .map((rev, idx) => {
        const isActive = idx === currentReviewIdx;
        
        // Lucide Star
        const starsHtml = Array.from({ length: 5 })
          .map(
            (_, sIdx) => `
          <svg class="star-icon ${sIdx < rev.rating ? 'filled' : ''}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${sIdx < rev.rating ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        `
          )
          .join('');

        return `
        <div class="review-slide ${isActive ? 'active' : ''}" data-index="${idx}">
          <!-- Lucide Quote -->
          <svg class="quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
            <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
          </svg>
          <p class="review-text">"${rev.text}"</p>
          <div class="review-meta">
            <div class="review-stars">${starsHtml}</div>
            <p class="review-author">${rev.author}</p>
            <p class="review-time">${rev.time} · Google</p>
          </div>
        </div>
      `;
      })
      .join('');

    // Render Dots
    dotsContainer.innerHTML = APP_DATA.reviews
      .map(
        (_, idx) => `
      <button class="review-dot ${idx === currentReviewIdx ? 'active' : ''}" onclick="goToReview(${idx})" aria-label="Review ${idx + 1}"></button>
    `
      )
      .join('');
  }

  window.nextReview = function () {
    currentReviewIdx = (currentReviewIdx + 1) % APP_DATA.reviews.length;
    renderReviews();
  };

  window.prevReview = function () {
    currentReviewIdx = (currentReviewIdx - 1 + APP_DATA.reviews.length) % APP_DATA.reviews.length;
    renderReviews();
  };

  window.goToReview = function (idx) {
    currentReviewIdx = idx;
    renderReviews();
  };

  function startReviewAutoplay() {
    if (reviewInterval) clearInterval(reviewInterval);
    reviewInterval = setInterval(() => {
      currentReviewIdx = (currentReviewIdx + 1) % APP_DATA.reviews.length;
      renderReviews();
    }, 6000);
  }

  // --- Render Gallery Bento Grid ---
  function renderGallery() {
    const grid = document.getElementById('gallery-bento-grid');
    if (!grid) return;

    grid.innerHTML = APP_DATA.gallery
      .map(
        (item) => `
      <div class="gallery-item ${item.span}" onclick="openLightbox('${item.src}')">
        <img src="${item.src}" alt="PUNTO PIZZA creazione" loading="lazy" />
        <div class="gallery-overlay"></div>
      </div>
    `
      )
      .join('');
  }

  // --- Live Open / Closed Schedule Engine ---
  function isRestaurantOpenNow() {
    const now = new Date();
    const day = now.getDay(); // 0 = Sun, 1 = Mon, 2 = Tue, 3 = Wed, 4 = Thu, 5 = Fri, 6 = Sat

    // Check closed days (Wednesday = 3)
    if (APP_DATA.schedule.closedDays.includes(day)) {
      return false;
    }

    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    return APP_DATA.schedule.intervals.some(
      (interval) => currentMinutes >= interval.start && currentMinutes <= interval.end
    );
  }

  function updateLiveStatus() {
    const badge = document.getElementById('live-status-badge');
    const statusText = document.getElementById('live-status-text');
    if (!badge || !statusText) return;

    const isOpen = isRestaurantOpenNow();
    const dict = APP_DATA.translations[currentLang].location;

    if (isOpen) {
      badge.classList.remove('closed');
      badge.classList.add('open');
      statusText.textContent = dict.open || 'Aperto ora';
    } else {
      badge.classList.remove('open');
      badge.classList.add('closed');
      statusText.textContent = dict.closed || 'Chiuso ora';
    }
  }

  function renderOpeningHours() {
    const container = document.getElementById('hours-list-container');
    if (!container) return;

    const dict = APP_DATA.translations[currentLang].location;
    const days = dict.days || ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
    
    // Day order for display (Mon - Sun -> indices 1, 2, 3, 4, 5, 6, 0)
    const dayOrder = [1, 2, 3, 4, 5, 6, 0];
    const todayIndex = new Date().getDay();

    container.innerHTML = dayOrder
      .map((dayIdx) => {
        const dayName = days[dayIdx === 0 ? 6 : dayIdx - 1];
        const isToday = dayIdx === todayIndex;
        const isClosedDay = APP_DATA.schedule.closedDays.includes(dayIdx);
        const hoursString = isClosedDay ? (dict.wednesdayNote || 'Chiuso') : (dict.hours || '11:30–14:00 · 17:30–23:00');

        return `
        <div class="hours-row ${isToday ? 'current-day' : ''}">
          <span>${dayName} ${isToday ? '•' : ''}</span>
          <span>${hoursString}</span>
        </div>
      `;
      })
      .join('');
  }

  // --- Scroll Effects & Intersection Observer ---
  function setupScrollEffects() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  function setupIntersectionObserver() {
    const sections = document.querySelectorAll('.fade-in-section');
    if (!('IntersectionObserver' in window)) {
      sections.forEach((s) => s.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // --- Mobile Menu Toggle ---
  window.toggleMobileMenu = function () {
    const isOpen = mobileNavDrawer.classList.toggle('open');
    if (burgerOpenIcon && burgerCloseIcon) {
      burgerOpenIcon.style.display = isOpen ? 'none' : 'block';
      burgerCloseIcon.style.display = isOpen ? 'block' : 'none';
    }
  };

  window.closeMobileMenu = function () {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('open');
      if (burgerOpenIcon && burgerCloseIcon) {
        burgerOpenIcon.style.display = 'block';
        burgerCloseIcon.style.display = 'none';
      }
    }
  };

  // --- Lightbox Modal ---
  window.openLightbox = function (src) {
    const modal = document.getElementById('lightbox-modal');
    const img = document.getElementById('lightbox-img');
    if (modal && img) {
      img.src = src;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeLightbox = function (e) {
    if (e && e.target && e.target.id === 'lightbox-img') return;
    const modal = document.getElementById('lightbox-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  // Run on DOM Ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
