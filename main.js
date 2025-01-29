const navbar = document.getElementById('navbar');
const titleContainer = document.getElementById('title-container');
const content = document.getElementById('content');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const fadeStart = titleContainer.offsetHeight / 2;
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > fadeStart) {
        navbar.classList.remove('navbar-hidden');
        navbar.classList.add('navbar-visible');
        content.classList.add('visible');
    } else {
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
        content.classList.remove('visible');
    }

    if (scrollTop < lastScrollTop) {
        navbar.classList.remove('navbar-visible');
        navbar.classList.add('navbar-hidden');
    }

    lastScrollTop = scrollTop;
});

// Scroll to top on page refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Smooth scroll to section with offset
document.querySelector('.scroll-button').addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const offset = 50; // Adjust this value to set the space above the section
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = target.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
});
