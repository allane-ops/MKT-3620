document.addEventListener("DOMContentLoaded", () => {

    const navContainer = document.getElementById("navigation-container");

    navContainer.innerHTML = `
        <nav class="primary-nav">
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="projects.html">Projects</a>
            <a href="portfolio.html">Portfolio</a>
            <a href="contact.html">Contact</a>
        </nav>

        <nav class="secondary-nav">
            <a href="blog.html">Blog</a>
            <a href="gallery.html">Gallery</a>
            <a href="resources.html">Resources</a>
        </nav>
    `;

    // Highlight the page the visitor is currently on
    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const links = navContainer.querySelectorAll("a");

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

});
