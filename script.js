// Mobile menu toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav-links').style.display = 'none';
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});

// Button click handler - scroll to gallery
document.querySelector('.btn-primary').addEventListener('click', function() {
    document.querySelector('#gallery').scrollIntoView({ behavior: 'smooth' });
});

// Gallery item click - could expand to lightbox in the future
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Placeholder for future lightbox functionality
        console.log('Gallery item clicked');
    });
});

console.log('The Workery artist portfolio loaded successfully!');
