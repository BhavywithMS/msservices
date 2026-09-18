/* ===================================================
   MS SERVICES - JAVASCRIPT
   Features: Navbar, Hamburger, Scroll Animations,
             Carousel, Counter Animations, Portfolio
             Filters, Newsletter Form, Back to Top
   =================================================== */

'use strict';

// ─── UTILITY ────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

// ─── NAVBAR: SCROLL BEHAVIOUR & ACTIVE LINKS ────────
(function setupNavbar() {
    const navbar = $('#navbar');
    const navLinks = $$('.nav-link');

    // Add scrolled class when page scrolled
    const onScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // init state

    // Active link based on section in view
    const sections = $$('section[id]');

    const updateActiveLink = () => {
        const scrollY = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionH = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const link = $(`[href="#${sectionId}"]`, navbar);

            if (link && scrollY >= sectionTop && scrollY < sectionTop + sectionH) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();
})();

// ─── HAMBURGER MENU ──────────────────────────────────
(function setupHamburger() {
    const btn = $('#hamburgerBtn');
    const menu = $('#navMenu');
    if (!btn || !menu) return;

    const toggle = () => {
        const isOpen = menu.classList.toggle('open');
        btn.classList.toggle('active', isOpen);
        btn.setAttribute('aria-expanded', isOpen.toString());
        document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    btn.addEventListener('click', toggle);

    // Close on nav link click
    $$('.nav-link', menu).forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            btn.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', e => {
        if (!btn.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('open');
            btn.classList.remove('active');
            btn.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
})();

// ─── SMOOTH SCROLL ───────────────────────────────────
(function setupSmoothScroll() {
    $$('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = $(anchor.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const offset = 70; // navbar height
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });
})();

// ─── SCROLL REVEAL (INTERSECTION OBSERVER) ───────────
(function setupScrollReveal() {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Stagger children if they are siblings
                    const siblings = $$('.reveal', entry.target.parentElement);
                    const idx = siblings.indexOf(entry.target);
                    entry.target.style.transitionDelay = `${Math.min(idx * 80, 400)}ms`;
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    $$('.reveal').forEach(el => observer.observe(el));
})();

// ─── TESTIMONIALS CAROUSEL ───────────────────────────
(function setupCarousel() {
    const track = $('#testimonialsTrack');
    const prevBtn = $('#testimonialPrev');
    const nextBtn = $('#testimonialNext');
    const dotsContainer = $('#carouselDots');
    if (!track) return;

    const cards = $$('.testimonial-card', track);
    if (!cards.length) return;

    let current = 0;
    let autoplayTimer = null;
    const AUTOPLAY_DELAY = 4000;

    // Determine how many cards are visible per slide
    const getVisibleCount = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    };

    let visibleCount = getVisibleCount();
    const getTotalSlides = () => Math.max(1, cards.length - visibleCount + 1);

    // Generate dots
    const buildDots = () => {
        dotsContainer.innerHTML = '';
        const total = getTotalSlides();
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.className = `dot${i === current ? ' active' : ''}`;
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            dot.setAttribute('role', 'tab');
            dot.addEventListener('click', () => goTo(i));
            dotsContainer.appendChild(dot);
        }
    };

    const updateDots = () => {
        $$('.dot', dotsContainer).forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
    };

    const goTo = (index) => {
        const total = getTotalSlides();
        current = Math.max(0, Math.min(index, total - 1));
        const cardWidth = cards[0].offsetWidth + 24; // gap = 24px
        track.style.transform = `translateX(-${current * cardWidth}px)`;
        updateDots();
    };

    const next = () => goTo((current + 1) % getTotalSlides());
    const prev = () => goTo((current - 1 + getTotalSlides()) % getTotalSlides());

    const startAutoplay = () => {
        stopAutoplay();
        autoplayTimer = setInterval(next, AUTOPLAY_DELAY);
    };

    const stopAutoplay = () => {
        if (autoplayTimer) clearInterval(autoplayTimer);
    };

    prevBtn?.addEventListener('click', () => { prev(); startAutoplay(); });
    nextBtn?.addEventListener('click', () => { next(); startAutoplay(); });

    // Pause on hover
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // Touch / swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? next() : prev();
            startAutoplay();
        }
    });

    // Rebuild on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newCount = getVisibleCount();
            if (newCount !== visibleCount) {
                visibleCount = newCount;
                current = 0;
                buildDots();
            }
            goTo(current);
        }, 200);
    });

    // Keyboard navigation
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft') { prev(); startAutoplay(); }
        if (e.key === 'ArrowRight') { next(); startAutoplay(); }
    });

    buildDots();
    goTo(0);
    startAutoplay();
})();

// ─── COUNTER ANIMATIONS ──────────────────────────────
(function setupCounters() {
    const counters = $$('.stat-number[data-target]');
    if (!counters.length) return;

    const easeOutQuad = t => t * (2 - t);

    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 2000; // ms
        let startTime = null;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutQuad(progress);
            const value = Math.round(eased * target);
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
})();

// ─── PORTFOLIO FILTERS ───────────────────────────────
(function setupPortfolioFilters() {
    const filterBtns = $$('.filter-btn');
    const cards = $$('.portfolio-card');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                if (match) {
                    card.classList.remove('hidden');
                    // Re-trigger reveal animation
                    card.classList.remove('visible');
                    requestAnimationFrame(() => {
                        card.classList.add('visible');
                    });
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Mark all as visible initially (reveal observer may already handle it)
    cards.forEach(c => c.classList.add('visible'));
})();

// ─── NEWSLETTER FORM ─────────────────────────────────
(function setupNewsletterForm() {
    const form = $('#newsletterForm');
    const input = $('#emailInput');
    const success = $('#email-success');
    const error = $('#email-error');
    if (!form) return;

    const isValidEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

    const showMsg = (el, show) => {
        el.style.display = show ? 'flex' : 'none';
    };

    form.addEventListener('submit', e => {
        e.preventDefault();
        const val = input.value;

        // Reset messages
        showMsg(success, false);
        showMsg(error, false);
        input.style.borderColor = '';

        if (!isValidEmail(val)) {
            showMsg(error, true);
            input.focus();
            return;
        }

        // Simulate submission (replace with actual API call)
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Subscribing...';
        submitBtn.disabled = true;

        setTimeout(() => {
            showMsg(success, true);
            input.value = '';
            submitBtn.textContent = 'Subscribe';
            submitBtn.disabled = false;

            // Hide success after 5s
            setTimeout(() => showMsg(success, false), 5000);
        }, 1000);
    });

    // Clear error on input
    input.addEventListener('input', () => {
        showMsg(error, false);
    });
})();

// ─── BACK TO TOP BUTTON ───────────────────────────────
(function setupBackToTop() {
    const btn = $('#backToTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

// ─── PAGE LOAD: ensure hero is visible ────────────────
document.addEventListener('DOMContentLoaded', () => {
    // Trigger scroll once to set initial states
    window.dispatchEvent(new Event('scroll'));

    // Force portfolio cards visible after small delay
    setTimeout(() => {
        $$('.portfolio-card').forEach(c => c.classList.add('visible'));
    }, 500);
});
