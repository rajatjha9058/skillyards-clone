



    // Add modal functionality to the existing script
    document.addEventListener('DOMContentLoaded', function() {
        

        // Add modal functionality
        const modal = document.getElementById('career-modal');
        const closeBtn = document.getElementById('close-modal');
        const form = document.getElementById('career-form');

        // Function to show modal
        function showModal() {
            modal.classList.remove('hidden');
        }

        // Close modal functionality
        closeBtn.addEventListener('click', function() {
            modal.classList.add('hidden');
        });

        // Form submission handler
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const inputs = form.querySelectorAll('input, select, textarea');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('border-red-500');
                    isValid = false;
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (isValid) {
                // You might want to replace this with actual form submission logic
                alert('Form submitted successfully! Our team will contact you soon.');
                modal.classList.add('hidden');
            }
        });

        // Optional: Show modal after a delay or on specific events
        showModal();
    });













// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation Library
    AOS.init({
        once: false,
        duration: 800,
        offset: 100
    });


    // Initialize Swiper with Enhanced Features
    let progressBarInterval;
    const swiper = new Swiper('.heroSwiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 1000,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + ' w-3 h-3 bg-white inline-block rounded-full cursor-pointer mx-1 transition-all duration-300 hover:bg-yellow-400"></span>';
            },
        },
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        on: {
            init: function () {
                // Initialize progress bar for the swiper
                resetProgressBar();
                updateProgressBar();
            },
            slideChange: function() {
                resetProgressBar();
                updateProgressBar();
            },
        }
    });

    // Progress bar functions - FIXED
    function updateProgressBar() {
        const progressBar = document.getElementById('progressBar');
        if (!progressBar) return;
        
        // Clear any existing interval
        if (progressBarInterval) {
            clearInterval(progressBarInterval);
        }
        
        let width = 0;
        progressBar.style.width = '0%';
        
        const totalTime = 6000; // 6 seconds to match autoplay delay
        const intervalTime = 30; // Update every 30ms for smoother animation
        const increment = (100 * intervalTime) / totalTime; // Calculate correct increment
        
        // Update at regular intervals for smooth animation
        progressBarInterval = setInterval(() => {
            width += increment;
            
            if (width >= 100) {
                width = 100;
                clearInterval(progressBarInterval);
            }
            
            progressBar.style.width = width + '%';
        }, intervalTime);
    }

    function resetProgressBar() {
        const progressBar = document.getElementById('progressBar');
        if (!progressBar) return;
        
        if (progressBarInterval) {
            clearInterval(progressBarInterval);
        }
        progressBar.style.width = '0%';
    }

    // Custom navigation for Swiper
    const prevButton = document.querySelector('.swiper-button-prev-custom');
    const nextButton = document.querySelector('.swiper-button-next-custom');
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            swiper.slidePrev();
            resetProgressBar();
            updateProgressBar();
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            swiper.slideNext();
            resetProgressBar();
            updateProgressBar();
        });
    }

    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile Dropdown Toggles
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdownMenu = this.nextElementSibling;
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('hidden');
                
                // Toggle the chevron icon
                const icon = this.querySelector('i');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            }
        });
    });

    // Add pulse animation to buttons
    const pulseButtons = document.querySelectorAll('.pulse');
    
    pulseButtons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('animate-pulse');
        });
        
        button.addEventListener('mouseout', () => {
            button.classList.remove('animate-pulse');
        });
    });

    // Enhanced dropdown menu interaction
    const dropdownParents = document.querySelectorAll('.dropdown-parent');
    
    dropdownParents.forEach(parent => {
        const link = parent.querySelector('.nav-link');
        const dropdownMenu = parent.querySelector('.dropdown-menu');
        const icon = parent.querySelector('i');
        
        if (link && dropdownMenu) {
            // Handle mouse events
            parent.addEventListener('mouseenter', () => {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateY(0)';
                if (icon) icon.style.transform = 'rotate(180deg)';
            });
            
            parent.addEventListener('mouseleave', () => {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(10px)';
                if (icon) icon.style.transform = 'rotate(0)';
            });
            
            // Handle click event for touch devices
            link.addEventListener('click', function(e) {
                if (window.innerWidth < 1024) { // Only for tablet and below
                    e.preventDefault();
                    const isOpen = dropdownMenu.style.visibility === 'visible';
                    
                    // Close all other open dropdowns
                    dropdownParents.forEach(otherParent => {
                        if (otherParent !== parent) {
                            const otherMenu = otherParent.querySelector('.dropdown-menu');
                            const otherIcon = otherParent.querySelector('i');
                            if (otherMenu) {
                                otherMenu.style.opacity = '0';
                                otherMenu.style.visibility = 'hidden';
                                otherMenu.style.transform = 'translateY(10px)';
                            }
                            if (otherIcon) otherIcon.style.transform = 'rotate(0)';
                        }
                    });
                    
                    // Toggle current dropdown
                    if (isOpen) {
                        dropdownMenu.style.opacity = '0';
                        dropdownMenu.style.visibility = 'hidden';
                        dropdownMenu.style.transform = 'translateY(10px)';
                        if (icon) icon.style.transform = 'rotate(0)';
                    } else {
                        dropdownMenu.style.opacity = '1';
                        dropdownMenu.style.visibility = 'visible';
                        dropdownMenu.style.transform = 'translateY(0)';
                        if (icon) icon.style.transform = 'rotate(180deg)';
                    }
                }
            });
        }
    });

    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Lazy load images for better performance
    const images = document.querySelectorAll('img');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    const src = image.getAttribute('data-src');
                    if (src) {
                        image.src = src;
                        image.removeAttribute('data-src');
                    }
                    observer.unobserve(image);
                }
            });
        });
        
        images.forEach(img => {
            const src = img.getAttribute('src');
            if (src) {
                img.setAttribute('data-src', src);
                img.setAttribute('src', 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width%3D"1" height%3D"1"%2F%3E');
                imageObserver.observe(img);
            }
        });
    }

    // Enhanced AOS animations with fallback
    if (typeof AOS === 'undefined') {
        console.warn('AOS is not available. Creating fallback...');
        // Simple fallback for AOS
        const animateOnScroll = () => {
            const animatedElements = document.querySelectorAll('[data-aos]');
            
            animatedElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight * 0.8) {
                    element.classList.add('animated');
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Initialize fallback
        document.querySelectorAll('[data-aos]').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        });
        
        window.addEventListener('scroll', animateOnScroll);
        // Initial check
        animateOnScroll();
    }

    // Fix for hero images
    const fixHeroImages = () => {
        const heroImages = document.querySelectorAll('.hero-image');
        heroImages.forEach(img => {
            // Force image reload
            const src = img.getAttribute('src');
            if (src) {
                img.setAttribute('src', src + '?v=' + new Date().getTime());
            }
        });
    };
    
    // Call after a slight delay to ensure swiper is initialized
    setTimeout(fixHeroImages, 500);

    // Window resize handler for responsive features
    let resizeTimeout;
    window.addEventListener('resize', () => {
        // Debounce resize events
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Refresh swiper on window resize
            if (swiper) {
                swiper.update();
            }
            
            // Adjust navigation position based on screen size
            const navButtons = document.querySelectorAll('.custom-swiper-nav');
            navButtons.forEach(button => {
                if (window.innerWidth < 768) {
                    button.style.width = '40px';
                    button.style.height = '40px';
                } else {
                    button.style.width = '50px';
                    button.style.height = '50px';
                }
            });
        }, 200);
    });

    // Add accessibility features
    document.querySelectorAll('.nav-link, button, a').forEach(element => {
        if (!element.getAttribute('aria-label') && !element.textContent.trim()) {
            const icon = element.querySelector('i');
            if (icon) {
                const iconClass = icon.className;
                let ariaLabel = 'Button';
                
                if (iconClass.includes('fa-chevron-left')) ariaLabel = 'Previous Slide';
                if (iconClass.includes('fa-chevron-right')) ariaLabel = 'Next Slide';
                if (iconClass.includes('fa-times')) ariaLabel = 'Close';
                if (iconClass.includes('fa-comment')) ariaLabel = 'Chat Support';
                
                element.setAttribute('aria-label', ariaLabel);
            }
        }
        
        if (!element.getAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
    });

    // Preload critical images
    const preloadImages = () => {
        const imageUrls = [];
        
        // Get all slide image URLs
        document.querySelectorAll('.swiper-slide img').forEach(img => {
            const src = img.getAttribute('src');
            if (src && imageUrls.indexOf(src) === -1) {
                imageUrls.push(src);
            }
        });
        
        // Preload them
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    };
    
    preloadImages();
});
   







 // Initialize animations
 gsap.registerPlugin(ScrollTrigger);
    
 document.querySelectorAll('.animation-element').forEach((element) => {
   const delay = element.dataset.delay || 0;
   
   gsap.fromTo(
     element, 
     { y: 30, opacity: 0 },
     { 
       y: 0, 
       opacity: 1, 
       duration: 0.8,
       delay: parseFloat(delay),
       scrollTrigger: {
         trigger: element,
         start: "top 80%"
       }
     }
   );
 });

 // Add hover animations for feature cards
 document.querySelectorAll('.feature-card').forEach((card) => {
   card.addEventListener('mouseenter', () => {
     const icon = card.querySelector('.feature-icon');
     gsap.to(icon, { y: -5, scale: 1.1, duration: 0.3 });
   });
   
   card.addEventListener('mouseleave', () => {
     const icon = card.querySelector('.feature-icon');
     gsap.to(icon, { y: 0, scale: 1, duration: 0.3 });
   });
 });








  // Enhanced JavaScript for interactions
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.program-card');
    const cardContainer = document.querySelector('.grid');
    
    // Add staggered entrance animation for cards
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 120 * index);
    });
    
    // Add "focus" effect to highlight the hovered card
    cardContainer.addEventListener('mouseover', function(e) {
        const hoveredCard = e.target.closest('.program-card');
        if (hoveredCard) {
            cards.forEach(card => {
                if (card !== hoveredCard) {
                    card.classList.add('not-focused');
                }
            });
        }
    });
    
    cardContainer.addEventListener('mouseout', function(e) {
        const hoveredCard = e.target.closest('.program-card');
        if (hoveredCard) {
            cards.forEach(card => {
                card.classList.remove('not-focused');
            });
        }
    });
    
    // Reset all cards to normal state when mouse leaves the container
    cardContainer.addEventListener('mouseleave', function() {
        cards.forEach(card => {
            card.classList.remove('not-focused');
        });
    });
    
    // Add subtle parallax effect to card images on mouse movement
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const cardBounds = card.getBoundingClientRect();
            const mouseX = e.clientX - cardBounds.left;
            const mouseY = e.clientY - cardBounds.top;
            
            const cardCenterX = cardBounds.width / 2;
            const cardCenterY = cardBounds.height / 2;
            
            const offsetX = (mouseX - cardCenterX) / 20;
            const offsetY = (mouseY - cardCenterY) / 20;
            
            const cardImg = card.querySelector('.card-img');
            cardImg.style.transform = `scale(1.12) translate(${-offsetX}px, ${-offsetY}px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            const cardImg = card.querySelector('.card-img');
            cardImg.style.transform = 'scale(1)';
        });
    });
});











document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('videoSlider');
    const slides = document.querySelectorAll('.video-slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.indicator-dot');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Function to go to a specific slide
    function goToSlide(index) {
        if (index < 0) {
            index = slideCount - 1;
        } else if (index >= slideCount) {
            index = 0;
        }
        
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update active dot
        dots.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Previous slide
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        goToSlide(currentSlide - 1);
    });
    
    // Next slide
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        goToSlide(currentSlide + 1);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            goToSlide(currentSlide - 1);
        } else if (e.key === 'ArrowRight') {
            goToSlide(currentSlide + 1);
        }
    });
    
    // Indicator dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
        });
    });
    
    // Add animation to stars on hover
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        const stars = card.querySelectorAll('.star');
        
        card.addEventListener('mouseenter', () => {
            stars.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.4)';
                    star.style.color = '#FFA500';
                }, index * 50);
            });
        });
        
        card.addEventListener('mouseleave', () => {
            stars.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1)';
                    star.style.color = '#FFD700';
                }, index * 50);
            });
        });
    });
});













 // Adjust animation speed based on screen width
 function adjustLogoAnimationSpeed() {
    const partnerLogoSlides = document.querySelectorAll('.logos-slide');
    const animationDuration = window.innerWidth < 768 ? '30s' : '40s';
    
    partnerLogoSlides.forEach(logoSlideElement => {
        logoSlideElement.style.animationDuration = animationDuration;
    });
}

// Pause logo items when hovered
function configureLogoHoverInteractions() {
    const partnerLogoItems = document.querySelectorAll('.logo-item');
    
    partnerLogoItems.forEach(logoItemElement => {
        logoItemElement.addEventListener('mouseenter', () => {
            const parentLogoSlide = logoItemElement.closest('.logos-slide');
            if (parentLogoSlide) {
                parentLogoSlide.style.animationPlayState = 'paused';
            }
        });
        
        logoItemElement.addEventListener('mouseleave', () => {
            const parentLogoSlide = logoItemElement.closest('.logos-slide');
            if (parentLogoSlide) {
                parentLogoSlide.style.animationPlayState = 'running';
            }
        });
    });
}

// Pause animation when not in viewport for better performance
const logoSliderViewportObserver = new IntersectionObserver((observerEntries) => {
    observerEntries.forEach(observerEntry => {
        const logoSlideElement = observerEntry.target.querySelector('.logos-slide');
        if (logoSlideElement) {
            if (observerEntry.isIntersecting) {
                logoSlideElement.style.animationPlayState = 'running';
            } else {
                logoSlideElement.style.animationPlayState = 'paused';
            }
        }
    });
}, {threshold: 0.1});

// Run on load and resize
window.addEventListener('load', () => {
    adjustLogoAnimationSpeed();
    configureLogoHoverInteractions();
    document.querySelectorAll('.logos-container').forEach(containerElement => {
        logoSliderViewportObserver.observe(containerElement);
    });
});

window.addEventListener('resize', adjustLogoAnimationSpeed);















  // Create particles for each profile
document.addEventListener('DOMContentLoaded', function() {
    // Create particles for animated backgrounds
    const particleWrappers = document.querySelectorAll('.particle-wrapper');
    
    particleWrappers.forEach(wrapper => {
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle-dot');
            
            // Random positioning
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 5 + 3;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random animation delay
            particle.style.animationDelay = Math.random() * 4 + 's';
            
            // Random animation duration
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.5 + 0.1;
            
            wrapper.appendChild(particle);
        }
    });
    
    // 3D tilt effect
    const profileItems = document.querySelectorAll('.profile-item');
    
    profileItems.forEach(item => {
        // Add tilt class
        item.classList.add('tilt-effect');
        const content = item.querySelector('.profile-wrapper');
        content.classList.add('tilt-content');
        
        // Add mousemove event listener for tilt effect
        item.addEventListener('mousemove', e => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateY = (x - centerX) / 20;
            const rotateX = (centerY - y) / 20;
            
            content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        // Reset the transform on mouse leave
        item.addEventListener('mouseleave', () => {
            content.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    });
    
    // Enhanced hover effects for social icons
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            // Add a ripple effect
            const ripple = document.createElement('div');
            ripple.classList.add('btn-ripple');
            ripple.style.position = 'absolute';
            ripple.style.width = '100%';
            ripple.style.height = '100%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple-effect 0.6s linear';
            
            btn.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add scroll animation
    const animateOnScroll = () => {
        profileItems.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight * 0.8) {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    };
    
    // Set initial state for scroll animation
    profileItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Run animation on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Add keyframe animation for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-effect {
            0% {
                transform: scale(0);
                opacity: 1;
            }
            100% {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Interactive background effect on profile hover
document.querySelectorAll('.profile-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate distance from center (for radial movement)
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Update positions of background bubbles based on mouse position
        const bubbles = item.querySelectorAll('.bg-bubble');
        bubbles.forEach((bubble, index) => {
            // Different movement amount for each bubble
            const moveFactor = 0.03 * (index + 1);
            
            // Calculate how far from center as percentage
            const moveX = (x - centerX) * moveFactor;
            const moveY = (y - centerY) * moveFactor;
            
            // Apply transform adjustment
            bubble.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        });
    });
    
    // Reset positions when mouse leaves
    item.addEventListener('mouseleave', () => {
        const bubbles = item.querySelectorAll('.bg-bubble');
        bubbles.forEach(bubble => {
            bubble.style.transform = 'translate(-50%, -50%)';
        });
    });
});



















 // FAQ Toggle Functionality
 document.querySelectorAll('.faq-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const icon = toggle.querySelector('svg');
        const parentItem = toggle.closest('.faq-item');
        
        // Toggle content and icon
        content.classList.toggle('hidden');
        icon.classList.toggle('rotate-180');

        // Add interaction effects
        if (!content.classList.contains('hidden')) {
            parentItem.classList.add('ring-2', 'ring-yellow-300');
        } else {
            parentItem.classList.remove('ring-2', 'ring-yellow-300');
        }
    });
});
















 // Initialize Feather Icons
 feather.replace();

 // Particle Background Effect
 function createParticles() {
     const particleBg = document.getElementById('particle-bg');
     const colors = ['#805ad5', '#4a5568', '#2d3748'];

     for (let i = 0; i < 100; i++) {
         const particle = document.createElement('div');
         particle.classList.add('absolute', 'rounded-full');
         
         particle.style.width = `${Math.random() * 5}px`;
         particle.style.height = particle.style.width;
         particle.style.background = colors[Math.floor(Math.random() * colors.length)];
         
         particle.style.left = `${Math.random() * 100}%`;
         particle.style.top = `${Math.random() * 100}%`;
         
         particle.style.animation = `float ${5 + Math.random() * 10}s ease-in-out infinite`;
         
         particleBg.appendChild(particle);
     }
 }

 createParticles();

 // Interactive Program Items
 const programItems = document.querySelectorAll('.program-item');
 programItems.forEach(item => {
     item.addEventListener('mouseenter', (e) => {
         e.currentTarget.classList.add('bg-purple-900/30', 'text-purple-200');
     });
     item.addEventListener('mouseleave', (e) => {
         e.currentTarget.classList.remove('bg-purple-900/30', 'text-purple-200');
     });
 });