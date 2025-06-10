
//hamburger menu
const hamburger = document.getElementById('hamburger');
const navlinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
navlinks.classList.toggle('show');
});


// slide-up animation for contact form
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
});


// scroll spy
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
let current = '';
sections.forEach(section => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.clientHeight;
  if (window.scrollY >= sectionTop - sectionHeight / 2) {
    current = section.getAttribute('id');
  }
});

navLinks.forEach(link => {
  link.classList.remove('active');
  if (link.getAttribute('href').includes(current)) {
    link.classList.add('active');
  }
});
});