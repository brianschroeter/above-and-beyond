'use strict';

/**
 * Above & Beyond - Animation Controller
 * Handles scroll-based animations and header effects
 */

(function() {
    // Configuration
    const CONFIG = {
        // Intersection Observer options
        observerOptions: {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        },
        // Header scroll threshold (pixels)
        headerScrollThreshold: 50,
        // Debounce delay for scroll events (ms)
        scrollDebounceDelay: 10
    };

    // DOM Elements cache
    let header = null;
    let animatedElements = null;

    /**
     * Initialize all animations when DOM is ready
     */
    function init() {
        // Cache DOM elements
        header = document.querySelector('header');
        animatedElements = document.querySelectorAll(
            '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
        );

        // Initialize features
        initScrollAnimations();
        initHeaderScrollEffect();
        initParallaxEffects();

        // Log initialization (dev only)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('[Animations] Initialized with', animatedElements.length, 'animated elements');
        }
    }

    /**
     * Initialize Intersection Observer for scroll animations
     */
    function initScrollAnimations() {
        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Make all elements visible immediately
            animatedElements.forEach(el => el.classList.add('visible'));
            return;
        }

        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add visible class with a slight delay for staggered effect
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);

                    // Unobserve after animation (one-time animation)
                    observer.unobserve(entry.target);
                }
            });
        }, CONFIG.observerOptions);

        // Observe all animated elements
        animatedElements.forEach(el => observer.observe(el));
    }

    /**
     * Initialize header scroll effect
     * Adds shadow and background blur when scrolled
     */
    function initHeaderScrollEffect() {
        if (!header) return;

        let ticking = false;
        let lastScrollY = window.scrollY;

        function updateHeader() {
            const scrollY = window.scrollY;

            if (scrollY > CONFIG.headerScrollThreshold) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }

            lastScrollY = scrollY;
            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(updateHeader);
                ticking = true;
            }
        }

        // Initial check
        updateHeader();

        // Listen for scroll
        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /**
     * Initialize subtle parallax effects for hero sections
     */
    function initParallaxEffects() {
        const heroSection = document.querySelector('.hero-parallax');
        if (!heroSection) return;

        // Check for reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }

        let ticking = false;

        function updateParallax() {
            const scrollY = window.scrollY;
            const heroHeight = heroSection.offsetHeight;

            if (scrollY < heroHeight) {
                const yOffset = scrollY * 0.3;
                heroSection.style.transform = `translateY(${yOffset}px)`;
            }

            ticking = false;
        }

        function onScroll() {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
    }

    /**
     * Animate counter numbers (for stats sections)
     * Usage: Add data-count="100" to element
     */
    function animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        if (!counters.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.count, 10);
                    const duration = parseInt(counter.dataset.duration, 10) || 2000;
                    const suffix = counter.dataset.suffix || '';
                    const prefix = counter.dataset.prefix || '';

                    animateValue(counter, 0, target, duration, prefix, suffix);
                    observer.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    /**
     * Animate a number from start to end
     */
    function animateValue(element, start, end, duration, prefix, suffix) {
        const startTime = performance.now();
        const range = end - start;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out-cubic)
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.round(start + range * easeProgress);
            element.textContent = prefix + currentValue.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    /**
     * Stagger animation for child elements
     * Usage: Add .stagger-children to parent, children will animate sequentially
     */
    function initStaggerAnimations() {
        const staggerParents = document.querySelectorAll('.stagger-children');

        staggerParents.forEach(parent => {
            const children = parent.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');

            children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 100}ms`;
            });
        });
    }

    /**
     * Reveal elements on scroll with custom threshold
     * Usage: Add data-reveal-threshold="0.3" for 30% visibility trigger
     */
    function initCustomRevealThresholds() {
        const customElements = document.querySelectorAll('[data-reveal-threshold]');

        customElements.forEach(element => {
            const threshold = parseFloat(element.dataset.revealThreshold) || 0.1;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        element.classList.add('visible');
                        observer.unobserve(element);
                    }
                });
            }, { threshold });

            observer.observe(element);
        });
    }

    /**
     * Smooth scroll to anchor with offset for fixed header
     */
    function initSmoothScrollWithOffset() {
        const headerHeight = header ? header.offsetHeight : 0;

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;

                e.preventDefault();

                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = targetPosition - headerHeight - 20;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            animateCounters();
            initStaggerAnimations();
            initCustomRevealThresholds();
        });
    } else {
        init();
        animateCounters();
        initStaggerAnimations();
        initCustomRevealThresholds();
    }

    // Export for external use if needed
    window.AboveBeyondAnimations = {
        refresh: init,
        animateCounters: animateCounters
    };

})();
