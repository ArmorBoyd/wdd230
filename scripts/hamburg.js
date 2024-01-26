const hamButton = document.querySelector('#hamburger');
const nav = document.querySelector('nav');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Close navigation when switching to larger view
window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
        nav.classList.remove('open');
        hamButton.classList.remove('open');
    }
});
