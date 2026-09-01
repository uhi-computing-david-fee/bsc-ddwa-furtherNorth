const menuToggle = document.querySelector('.menu-toggle');
const menuLabel = document.querySelector('.menu-label');
const menuLinks = document.querySelectorAll('.primary-nav a');
const main = document.querySelector('main');
const footer = document.querySelector('footer');


menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === "true";
    isOpen ? closeMenu() : openMenu();
});

function openMenu() {
    menuToggle.setAttribute("aria-expanded", true);
    menuLabel.textContent = "Close";
    document.body.classList.add("menu-open"); // use to prevent background scrolling
    main.inert = true; // take elements out of keyboard and interaction flow
    footer.inert = true;
}

function closeMenu() {
    menuToggle.setAttribute("aria-expanded", false);
    menuLabel.textContent = "Menu";
    document.body.classList.remove("menu-open"); 
    main.inert = false; 
    footer.inert = false;
}

// close menu with ESC key
document.addEventListener('keydown', (e) => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === "true";
    if (e.key === 'Escape' && isOpen) {
        closeMenu();
    }
});

// close menu when any link is clicked
menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});