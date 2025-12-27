// Mobile navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = e.target.querySelector('input[type="text"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const service = e.target.querySelector('select').value;
    const message = e.target.querySelector('textarea').value;
    
    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
        `Hello J&A Blancas! I'm interested in your services.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n` +
        `Message: ${message}`
    );
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/8723334958?text=${whatsappMessage}`, '_blank');
    
    // Show success message
    const button = e.target.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Message sent! Opening WhatsApp...';
    button.style.background = '#4caf50';
    
    // Reset form after 3 seconds
    setTimeout(() => {
        e.target.reset();
        button.textContent = originalText;
        button.style.background = '';
    }, 3000);
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 10px 30px rgba(44, 95, 45, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
    });
});
