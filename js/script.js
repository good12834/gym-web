   // Navbar scroll effect
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.querySelector('.navbar').style.padding = '10px 0';
        document.querySelector('.navbar').style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
      } else {
        document.querySelector('.navbar').style.padding = '15px 0';
        document.querySelector('.navbar').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      }
    });
    
    // Fade in animation on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInOnScroll = function() {
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', fadeInOnScroll);
    
    // Initialize fade elements
    document.querySelectorAll('.service-card, .pricing-card, .blog-card, .testimonial-card').forEach(el => {
      el.classList.add('fade-in');
    });
    
    // Trigger initial check
    fadeInOnScroll();