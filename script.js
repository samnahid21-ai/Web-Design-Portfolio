// script.js

// Smooth Scrolling
const scrollLinks = document.querySelectorAll('a.scroll');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Project Card Hover Effects
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.classList.add('hover');
    });
    card.addEventListener('mouseout', () => {
        card.classList.remove('hover');
    });
});

// Navigation Functionality
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
