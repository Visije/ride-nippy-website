/* =========================================================
   RIDE NIPPY PRIVATE LIMITED
   HOMEPAGE ANIMATION & INTERACTION SYSTEM
   ========================================================= */

document.documentElement.classList.add("js-motion");


/* =========================================================
   1. INITIALISE WEBSITE
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    initializeFooterYear();

    initializeMobileNavigation();

    initializeScrollAnimations();

    initializeHeroAnimations();

    initializeProductInteractions();

    initializeRangeMarquee();

    initializeSmoothScrolling();

});


/* =========================================================
   2. AUTOMATIC FOOTER COPYRIGHT YEAR
   ========================================================= */

function initializeFooterYear() {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}


/* =========================================================
   3. MOBILE NAVIGATION
   ========================================================= */

function initializeMobileNavigation() {

    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (!menuButton || !navigation) return;


    function closeMenu() {

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute("aria-label", "Open navigation");

        navigation.classList.remove("is-open");

        document.body.classList.remove("menu-open");

    }


    menuButton.addEventListener("click", function () {

        const isOpen =
            menuButton.getAttribute("aria-expanded") === "true";

        menuButton.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Open navigation" : "Close navigation"
        );

        navigation.classList.toggle("is-open", !isOpen);

        document.body.classList.toggle("menu-open", !isOpen);

    });


    // Close menu after clicking a navigation link

    navigation.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", closeMenu);

    });


    // Close menu when switching to desktop screen size

    window.addEventListener("resize", function () {

        if (window.innerWidth > 820) {
            closeMenu();
        }

    });


    // Close menu when pressing Escape

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

}


/* =========================================================
   4. SCROLL REVEAL ANIMATIONS
   ========================================================= */

function initializeScrollAnimations() {

    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) return;


    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    if (prefersReducedMotion) {

        revealElements.forEach(function (element) {

            element.classList.add("is-visible");

        });

        return;

    }


    // Use GSAP when available

    if (window.gsap && window.ScrollTrigger) {

        gsap.registerPlugin(ScrollTrigger);


        gsap.utils.toArray(".reveal").forEach(function (element, index) {

            gsap.fromTo(
                element,

                {
                    autoAlpha: 0,
                    y: 28
                },

                {
                    autoAlpha: 1,
                    y: 0,

                    duration: 0.85,

                    delay: (index % 3) * 0.06,

                    ease: "power2.out",

                    scrollTrigger: {

                        trigger: element,

                        start: "top 88%",

                        once: true

                    }

                }

            );

        });

        return;

    }


    // Fallback when GSAP is unavailable

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(

            function (entries, currentObserver) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("is-visible");

                        currentObserver.unobserve(entry.target);

                    }

                });

            },

            {
                threshold: 0.12,

                rootMargin: "0px 0px -35px 0px"
            }

        );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    } else {

        revealElements.forEach(function (element) {

            element.classList.add("is-visible");

        });

    }

}


/* =========================================================
   5. HERO ANIMATIONS
   ========================================================= */

function initializeHeroAnimations() {

    const hero = document.querySelector(".hero");

    if (!hero) return;


    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;


    // Subtle mouse movement effect on desktop

    if (window.innerWidth > 900) {

        const floatingElements = hero.querySelectorAll(
            ".floating-leaf, .floating-spice, .hero-stamp"
        );


        hero.addEventListener("mousemove", function (event) {

            const rect = hero.getBoundingClientRect();

            const mouseX = (
                event.clientX - rect.left
            ) / rect.width;

            const mouseY = (
                event.clientY - rect.top
            ) / rect.height;


            const moveX = (mouseX - 0.5) * 14;

            const moveY = (mouseY - 0.5) * 14;


            floatingElements.forEach(function (element, index) {

                const strength = (index + 1) * 0.35;

                element.style.translate =
                    `${moveX * strength}px ${moveY * strength}px`;

            });

        });


        hero.addEventListener("mouseleave", function () {

            floatingElements.forEach(function (element) {

                element.style.translate = "";

            });

        });

    }


    // Hero image parallax using GSAP

    if (window.gsap && window.ScrollTrigger && window.innerWidth > 700) {

        gsap.to(".hero-photo", {

            yPercent: 9,

            ease: "none",

            scrollTrigger: {

                trigger: ".hero",

                start: "top top",

                end: "bottom top",

                scrub: 0.7

            }

        });

    }

}


/* =========================================================
   6. PRODUCT CATEGORY INTERACTIONS
   ========================================================= */

function initializeProductInteractions() {

    const categoryCards = document.querySelectorAll(".category-card");

    if (!categoryCards.length) return;


    categoryCards.forEach(function (card) {

        const image = card.querySelector("img");

        if (!image) return;


        // Accessible hover and focus interaction

        card.addEventListener("mouseenter", function () {

            card.classList.add("is-hovered");

        });


        card.addEventListener("mouseleave", function () {

            card.classList.remove("is-hovered");

        });


        card.addEventListener("focus", function () {

            card.classList.add("is-hovered");

        });


        card.addEventListener("blur", function () {

            card.classList.remove("is-hovered");

        });

    });


    // Staggered entrance animation

    if (window.gsap && window.ScrollTrigger) {

        gsap.from(".category-card", {

            y: 32,

            autoAlpha: 0,

            duration: 0.75,

            stagger: 0.09,

            ease: "power2.out",

            scrollTrigger: {

                trigger: ".category-grid",

                start: "top 82%",

                once: true

            }

        });

    }

}


/* =========================================================
   7. CONTINUOUS PRODUCT RANGE MARQUEE
   ========================================================= */

function initializeRangeMarquee() {

    const rangeTrack = document.querySelector(".range-track");

    if (!rangeTrack) return;


    rangeTrack.addEventListener("mouseenter", function () {

        rangeTrack.style.animationPlayState = "paused";

    });


    rangeTrack.addEventListener("mouseleave", function () {

        rangeTrack.style.animationPlayState = "running";

    });


    rangeTrack.addEventListener("focusin", function () {

        rangeTrack.style.animationPlayState = "paused";

    });


    rangeTrack.addEventListener("focusout", function () {

        rangeTrack.style.animationPlayState = "running";

    });

}


/* =========================================================
   8. SMOOTH ANCHOR SCROLLING
   ========================================================= */

function initializeSmoothScrolling() {

    const anchorLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    anchorLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID = link.getAttribute("href");

            if (!targetID || targetID === "#") return;


            const target = document.querySelector(targetID);

            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({

                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",

                block: "start"

            });

        });

    });

}


/* =========================================================
   9. CLEANUP ON PAGE VISIBILITY CHANGE
   ========================================================= */

document.addEventListener("visibilitychange", function () {

    const rangeTrack = document.querySelector(".range-track");

    if (!rangeTrack) return;


    if (document.hidden) {

        rangeTrack.style.animationPlayState = "paused";

    } else {

        rangeTrack.style.animationPlayState = "running";

    }

});


/* =========================================================
   END OF RIDE NIPPY ANIMATION SYSTEM
   ========================================================= */
