// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

if (hamburger) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        if (hamburger) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Close menu when clicking outside navbar
document.addEventListener('click', function(event) {
    const isClickInsideNav = navbar && navbar.contains(event.target);
    const isClickOnHamburger = hamburger && hamburger.contains(event.target);
    
    if (!isClickInsideNav && !isClickOnHamburger && hamburger && document.body.classList.contains('menu-open')) {
        hamburger.classList.remove('active');
        navbar.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for reaching out! I will get back to you soon.');
        this.reset();
    });
}

// Button click handler - scroll to gallery
const btnPrimary = document.querySelector('.btn-primary');
if (btnPrimary) {
    btnPrimary.addEventListener('click', function() {
        document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
    });
}

// Gallery item click - could expand to lightbox in the future
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Placeholder for future lightbox functionality
        console.log('Gallery item clicked');
    });
});

console.log('The Workery artist portfolio loaded successfully!');
