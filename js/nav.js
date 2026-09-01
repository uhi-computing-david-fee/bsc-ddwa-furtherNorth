const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
});