const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

ScrollReveal().reveal('.skill', { interval: 500, delay: 200, easing: "ease-out", scale: 1.2 });
ScrollReveal().reveal('.services-box', { interval: 500, delay: 200, easing: "ease-out", scale: 1.2 });
ScrollReveal({ distance: '100px' });;
ScrollReveal().reveal('.contact-form', { origin: 'left' });
ScrollReveal().reveal('.leftSection', { origin: 'left' });
ScrollReveal().reveal('.rightSection', { origin: 'right' });
ScrollReveal().reveal('.about-right', { interval: 500, delay: 200, easing: "ease-out", scale: 1.2 });
ScrollReveal().reveal('.about-left', { interval: 500, delay: 200, easing: "ease-out", scale: 1.2 });
ScrollReveal().reveal('.about-right', { scale: 2, origin: 'bottom' });

