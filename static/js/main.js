// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Close alert messages
    const closeButtons = document.querySelectorAll('.close-alert');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.animation = 'slideInRight 0.3s reverse';
            setTimeout(() => {
                this.parentElement.remove();
            }, 300);
        });
    });
    
    // Auto-hide flash messages after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.animation = 'slideInRight 0.3s reverse';
            setTimeout(() => {
                alert.remove();
            }, 300);
        }, 5000);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .portfolio-item, .testimonial-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
});
