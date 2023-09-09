let navElements = document.getElementById("main-nav").children;

for (let c of navElements) {
    let anchorElement = c.getElementsByTagName("a")[0];

    anchorElement.addEventListener("mouseenter", function () {
        showNavIcon(c);
    });

    anchorElement.addEventListener("mouseleave", function () {
        hideNavIcon(c);
    });
}

function showNavIcon(liElement) {
    let navIcon = liElement.getElementsByTagName("img")[0];

    if (navIcon) {
        navIcon.classList.add("hide-element")
        navIcon.classList.add("show-element")

        navIcon.style.transition = 'all 1s ease';
        navIcon.style.transform = 'translateY(45px) rotate(90deg)';
    }
}

function hideNavIcon(liElement) {
    let navIcon = liElement.getElementsByTagName("img")[0];

    if (navIcon) {
        navIcon.classList.remove("show-element")
        navIcon.classList.add("hide-element")

        navIcon.style.transform = 'translateY(0)';
    }
}
