/* =====================================
   REUSABLE WEBSITE NAVIGATION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    const navigation = `
        <nav class="primary-nav">
            <ul>
                <li>
                    <a href="index.html">Home</a>
                </li>

                <li>
                    <a href="about.html">About</a>
                </li>

                <li>
                    <a href="projects.html">Projects</a>
                </li>

                <li>
                    <a href="portfolio.html">Portfolio</a>
                </li>

                <li>
                    <a href="contact.html">Contact</a>
                </li>
            </ul>
        </nav>

        <nav class="secondary-nav">
            <ul>
                <li>
                    <a href="news.html">News</a>
                </li>

                <li>
                    <a href="resources.html">Resources</a>
                </li>

                <li>
                    <a href="gallery.html">Gallery</a>
                </li>
            </ul>
        </nav>
    `;

    const navigationContainer =
        document.getElementById("navigation-container");

    if (navigationContainer) {
        navigationContainer.innerHTML = navigation;
    }


    /* =====================================
       ACTIVE PAGE
    ===================================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks =
        document.querySelectorAll("#navigation-container a");

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });

});
