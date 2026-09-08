/* =====================================================
   ADDISON LANE WEBSITE
   Navigation JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* =================================================
       HIGHLIGHT CURRENT PAGE
    ================================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks =
        document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /* =================================================
       LEFT SIDEBAR CURRENT PAGE
    ================================================= */

    const sidebarLinks =
        document.querySelectorAll(".side-link");

    sidebarLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        /*
         * Remove anchors such as #section
         */

        const cleanLink =
            linkPage.split("#")[0];

        if (cleanLink === currentPage) {

            link.classList.add("active");

        }

    });


    /* =================================================
       SMOOTH SCROLLING FOR SAME-PAGE LINKS
    ================================================= */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetID =
                this.getAttribute("href");

            if (
                targetID &&
                targetID !== "#"
            ) {

                const target =
                    document.querySelector(targetID);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    /* =================================================
       FADE-IN EFFECT
    ================================================= */

    const fadeElements =
        document.querySelectorAll(
            ".hero-container, .welcome-section, .featured-item"
        );

    fadeElements.forEach(function (element, index) {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(10px)";

        element.style.transition =
            "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(function () {

            element.style.opacity = "1";

            element.style.transform =
                "translateY(0)";

        }, 100 + (index * 80));

    });


    /* =================================================
       HERO IMAGE ERROR CHECK
    ================================================= */

    const heroImage =
        document.querySelector(".hero-image");

    if (heroImage) {

        heroImage.addEventListener(
            "error",
            function () {

                console.warn(
                    "Hero image could not be loaded. " +
                    "Make sure your image is located at " +
                    "images/addison-photo.jpg"
                );

            }
        );

    }

});
