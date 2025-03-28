const phrases = ['FULL-STACK DEVELOPER', 'FRONTEND SPECIALIST', 'BACKEND ENGINEER', 'WEB-APPLICATION DEVELOPER'];
const typingTextElement = document.getElementById('typing-text');
const cursorElement = document.getElementById('cursor');

function typeText(phrase) {
    return new Promise((resolve) => {
        let currentIndex = 0;
        let isDeleting = false;

        function type() {
            const currentPhrase = phrase;
            let displayText = currentPhrase.slice(0, currentIndex);

            typingTextElement.textContent = displayText;

            if (!isDeleting && currentIndex < currentPhrase.length) {
                currentIndex++;
                setTimeout(type, 100);
            } else if (isDeleting && currentIndex > 0) {
                currentIndex--;
                setTimeout(type, 50);
            } else if (!isDeleting && currentIndex === currentPhrase.length) {
                setTimeout(() => {
                    isDeleting = true;
                    setTimeout(type, 1000);
                }, 1500);
            } else if (isDeleting && currentIndex === 0) {
                isDeleting = false;
                resolve();
            }
        }

        type();
    });
}

// Cycle through phrases
async function cycleTyping() {
    while (true) {
        for (let phrase of phrases) {
            await typeText(phrase);
        }
    }
}

// Start typing animation when page loads
window.addEventListener('load', cycleTyping);












 // Number Counter Animation
 function animateNumber(element) {
    const target = +element.getAttribute('data-target');
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentNumber = Math.round(target * progress);

        element.textContent = currentNumber;

        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = target;
        }
    }, frameDuration);
}

// Trigger number animations when section is in view
const numberCounters = document.querySelectorAll('.number-counter');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumber(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe each counter
numberCounters.forEach(counter => {
    observer.observe(counter);
});

// Hover effects
const cards = document.querySelectorAll('.group > div');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('scale-105');
    });
    
    card.addEventListener('mouseleave', () => {
        card.classList.remove('scale-105');
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