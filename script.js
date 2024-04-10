// JavaScript functionality (if needed)
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation for contact form
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        let isValid = true;

        if (!nameInput.value.trim()) {
            isValid = false;
            nameInput.classList.add('error');
        } else {
            nameInput.classList.remove('error');
        }

        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            isValid = false;
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }

        if (!messageInput.value.trim()) {
            isValid = false;
            messageInput.classList.add('error');
        } else {
            messageInput.classList.remove('error');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
