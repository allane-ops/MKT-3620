/* =========================================================
   ADDISON LANE WEBSITE NAVIGATION
   This file can be used across EVERY page.
========================================================= */


document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       PRIMARY NAVIGATION
    ====================================================== */

    const primaryNavigation = document.getElementById(
        "primary-navigation"
    );


    if (primaryNavigation) {

        primaryNavigation.innerHTML = `

            <a href="index.html">
                Home
            </a>

            <a href="about.html">
                About
            </a>

            <a href="experience.html">
                Experience
            </a>

            <a href="projects.html">
                Projects
            </a>

            <a href="portfolio.html">
                Portfolio
            </a>

            <a href="contact.html">
                Contact
            </a>

        `;

    }



    /* =====================================================
       SECONDARY NAVIGATION
    ====================================================== */

    const secondaryNavigation = document.getElementById(
        "secondary-navigation"
    );


    if (secondaryNavigation) {

        secondaryNavigation.innerHTML = `

            <a href="blog.html">
                Blog
            </a>

            <span>|</span>

            <a href="gallery.html">
                Gallery
            </a>

            <span>|</span>

            <a href="resources.html">
                Resources
            </a>

        `;

    }



    /* =====================================================
       LEFT SIDEBAR — EXPLORE
    ====================================================== */

    const sidebarNavigation = document.getElementById(
        "sidebar-navigation"
    );


    if (sidebarNavigation) {

        sidebarNavigation.innerHTML = `

            <a href="index.html">
                ♧ &nbsp; Home
            </a>

            <a href="about.html">
                About Me
            </a>

            <a href="experience.html">
                Experience
            </a>

            <a href="projects.html">
                Projects
            </a>

            <a href="portfolio.html">
                Portfolio
            </a>

            <a href="contact.html">
                Contact
            </a>

        `;

    }



    /* =====================================================
       LEFT SIDEBAR — MORE
    ====================================================== */

    const moreNavigation = document.getElementById(
        "more-navigation"
    );


    if (moreNavigation) {

        moreNavigation.innerHTML = `

            <a href="leadership.html">
                Leadership
            </a>

            <a href="events.html">
                Events
            </a>

            <a href="marketing.html">
                Marketing
            </a>

            <a href="gallery.html">
                Gallery
            </a>

        `;

    }



    /* =====================================================
       AUTOMATICALLY HIGHLIGHT CURRENT PAGE
    ====================================================== */

    const currentPage =
        window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();


    const allLinks =
        document.querySelectorAll("a");


    allLinks.forEach(function (link) {

        const linkPage =
            link
            .getAttribute("href")
            ?.split("/")
            .pop()
            .toLowerCase();


        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            link.classList.add("active");

        }

    });



    /* =====================================================
       MOBILE MENU SCROLL BEHAVIOR
    ====================================================== */

    const navigation =
        document.querySelector(
            ".primary-navigation"
        );


    if (navigation) {

        navigation.addEventListener(
            "wheel",
            function (event) {

                if (
                    window.innerWidth <= 800
                ) {

                    event.preventDefault();

                    navigation.scrollLeft +=
                        event.deltaY;

                }

            }
        );

    }


});
