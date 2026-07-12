// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        // Make text dark when scrolled on white background
        document.querySelectorAll('.navbar a, .navbar i').forEach(el => {
            el.style.color = '#000';
        });
    } else {
        navbar.classList.remove('scrolled');
        // Reset text color to white
        document.querySelectorAll('.navbar a, .navbar i').forEach(el => {
            el.style.color = '';
        });
    }
});

// Mobile menu toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
mobileBtn.addEventListener('click', () => {
    alert('Mobile menu clicked! In a full implementation, this would open a sidebar.');
});
