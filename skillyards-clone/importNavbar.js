class SkillyardsHeaderLoader {
    constructor() {
        // Dependencies to load
        this.dependencies = [
            'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
        ];
    }

    // Load required external stylesheets and scripts
    async loadDependencies() {
        const loadStylesheet = (href) => {
            return new Promise((resolve, reject) => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            });
        };

        try {
            for (const dependency of this.dependencies) {
                await loadStylesheet(dependency);
            }
        } catch (error) {
            console.error('Failed to load dependencies:', error);
        }
    }

    // Create header HTML
    async loadHeaderHTML() {
        const headerHTML = `
        <!-- Top Bar -->
        <header class="bg-gray-800 text-white py-1 px-4">
            <div class="container mx-auto flex justify-end items-center space-x-4 text-sm">
                <a href="#" class="hover:text-yellow-400 transition duration-300">Verify Certificate</a>
                <a href="#" class="hover:text-yellow-400 transition duration-300">Download Brochure</a>
                <a href="#" class="hover:text-yellow-400 transition duration-300">Aptitude Test</a>
                <a href="tel:+917060100562" class="hover:text-yellow-400 transition duration-300">
                    <i class="fas fa-phone-alt text-yellow-400 mr-1"></i> +91 7060100562
                </a>
                <a href="mailto:info@skillyards.com" class="hover:text-yellow-400 transition duration-300">
                    <i class="fas fa-envelope text-yellow-400 mr-1"></i> info@skillyards.com
                </a>
            </div>
        </header>

        <nav class="bg-white py-3 shadow-md sticky top-0 z-50">
            <div class="container mx-auto flex flex-wrap justify-between items-center px-4">
                <!-- Logo -->
                <a href="#" class="flex items-center">
                    <img src="./assets/front_weblogo.webp" alt="Skillyards Logo" class="h-12">
                </a>
        
                <!-- Enhanced Desktop Menu -->
                <div class="hidden md:flex space-x-6">
                    <a href="Home.html" class="nav-link font-medium">Home</a>
                    <a href="#" class="nav-link font-medium">Study</a>
                    
                    <!-- OJT Dropdown -->
                    <div class="dropdown-parent relative group">
                        <a href="#" class="nav-link font-medium flex items-center">
                            OJT <i class="fas fa-chevron-down ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                        </a>
                        <div class="dropdown-menu absolute top-full left-0 bg-white shadow-lg rounded-md w-64 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">Full-Stack Foundation</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">Full-Stack Development</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">Front-End Development</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">Back-End Development</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">UI/UX Designing Program</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">Advanced Digital Marketing Program</a>
                        </div>
                    </div>
                    
                    <!-- OJD Dropdown -->
                    <div class="dropdown-parent relative group">
                        <a href="#" class="nav-link font-medium flex items-center">
                            OJD <i class="fas fa-chevron-down ml-1 text-xs transition-transform duration-300 group-hover:rotate-180"></i>
                        </a>
                        <div class="dropdown-menu absolute top-full left-0 bg-white shadow-lg rounded-md w-64 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">BCA Degree Program</a>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 transition duration-200">MCA Degree Program</a>
                        </div>
                    </div>
                    
                    <a href="ClubFacilation.html" class="nav-link font-medium">Club Facilitation</a>
                    <a href="#" class="nav-link font-medium">Blogs</a>
                    <a href="#" class="nav-link font-medium">Team</a>
                    <a href="#" class="nav-link font-medium">About us</a>
                    <a href="#" class="nav-link font-medium">Contact us</a>
                    <a href="#" class="nav-link font-medium">Assignment</a>
                </div>
        
                <!-- Mobile Menu Button -->
                <button class="md:hidden rounded-md p-2 hover:bg-gray-100 focus:outline-none transition duration-300" id="mobile-menu-button">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
    
            <!-- Mobile Menu (Hidden by default) -->
            <div class="md:hidden hidden bg-white w-full border-t" id="mobile-menu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">Home</a>
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">Study</a>
                    
                    <button class="mobile-dropdown-toggle flex justify-between w-full px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">
                        OJT <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="hidden pl-4 mobile-dropdown-menu">
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">Full-Stack Foundation</a>
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">Full-Stack Development</a>
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">Front-End Development</a>
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">Back-End Development</a>
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">UI/UX Designing Program</a>
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">Advanced Digital Marketing Program</a>
                    </div>
                    
                    <button class="mobile-dropdown-toggle flex justify-between w-full px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">
                        OJD <i class="fas fa-chevron-down"></i>
                    </button>
                    <div class="hidden pl-4 mobile-dropdown-menu">
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">BCA Degree Program</a>
                        <a href="#" class="block px-3 py-2 hover:bg-gray-100 rounded-md transition duration-200">MCA Degree Program</a>
                    </div>
                    
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">Club Facilitation</a>
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">Blogs</a>
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">Team</a>
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">About us</a>
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">Contact us</a>
                    <a href="#" class="block px-3 py-2 font-medium hover:bg-gray-100 rounded-md transition duration-200">Assignment</a>
                </div>
            </div>
        </nav>
        `;

        return headerHTML;
    }

    // Setup mobile menu interactivity
    setupMobileMenuInteractivity() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');

        // Mobile menu toggle
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Mobile dropdown toggles
        mobileDropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const dropdownMenu = e.currentTarget.nextElementSibling;
                const chevronIcon = e.currentTarget.querySelector('.fa-chevron-down');
                
                dropdownMenu.classList.toggle('hidden');
                chevronIcon.classList.toggle('rotate-180');
            });
        });
    }

    // Inject custom styles
    injectCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
        /* Enhanced Navigation Hover Effects */
        .nav-link {
            position: relative;
            padding-bottom: 4px;
            transition: color 0.3s ease;
        }

        .nav-link::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: #EAB308;
            transition: width 0.3s ease, left 0.3s ease;
            transform-origin: bottom left;
        }

        .nav-link:hover::after {
            width: 100%;
        }

        .nav-link:hover {
            color: #EAB308;
        }

        /* Dropdown Menu Animation */
        .dropdown-menu {
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s;
            display: block !important;
        }

        .dropdown-parent:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        `;
        document.head.appendChild(style);
    }

    // Main initialization method
    async init(targetElementId = 'header-container') {
        // Load dependencies
        await this.loadDependencies();

        // Find or create target container
        let headerContainer = document.getElementById(targetElementId);
        if (!headerContainer) {
            headerContainer = document.createElement('div');
            headerContainer.id = targetElementId;
            document.body.insertBefore(headerContainer, document.body.firstChild);
        }

        // Load and inject header HTML
        const headerHTML = await this.loadHeaderHTML();
        headerContainer.innerHTML = headerHTML;

        // Setup mobile menu interactivity
        this.setupMobileMenuInteractivity();

        // Inject custom styles
        this.injectCustomStyles();
    }
}

// Usage Example
document.addEventListener('DOMContentLoaded', () => {
    const headerLoader = new SkillyardsHeaderLoader();
    headerLoader.init(); // This will prepend the header to a container with id 'header-container'
});

















































// Skillyards Footer Loader
class SkillyardsFooterLoader {
    constructor() {
        // Ensure Feather Icons and other dependencies are loaded
        this.dependencies = [
            'https://unpkg.com/feather-icons',
            'https://cdn.tailwindcss.com'
        ];
    }

    // Load required external scripts
    async loadDependencies() {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        try {
            for (const dependency of this.dependencies) {
                await loadScript(dependency);
            }
        } catch (error) {
            console.error('Failed to load dependencies:', error);
        }
    }

    // Create particle background effect
    createParticles() {
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

    // Add interactive effects to program items
    setupProgramItemInteractivity() {
        const programItems = document.querySelectorAll('.program-item');
        programItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                e.currentTarget.classList.add('bg-purple-900/30', 'text-purple-200');
            });
            item.addEventListener('mouseleave', (e) => {
                e.currentTarget.classList.remove('bg-purple-900/30', 'text-purple-200');
            });
        });
    }

    // Load footer HTML
    async loadFooterHTML() {
        // You can replace this with your preferred method of loading footer HTML
        const footerHTML = `
        <footer class="bg-animated text-white py-16 px-6 relative overflow-hidden mt-10">
            <!-- Particle Background Layer -->
            <div id="particle-bg" class="absolute inset-0 opacity-20 pointer-events-none"></div>

            <div class="container mx-auto grid md:grid-cols-4 gap-8 relative z-10">
                <!-- Skillyards Column -->
                <div class="space-y-6">
                    <h3 class="text-3xl font-bold text-purple-300 mb-4 transform transition-all hover:text-purple-200">
                        Skillyards
                    </h3>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Empowering the next generation of developers with cutting-edge training and education.
                    </p>
                    
                    <!-- Social Icons -->
                    <div class="flex space-x-6 mt-6">
                        <a href="#" class="social-icon text-blue-400 transform transition-all duration-300 hover:text-blue-200">
                            <i data-feather="facebook" class="w-8 h-8"></i>
                        </a>
                        <a href="#" class="social-icon text-sky-400 transform transition-all duration-300 hover:text-sky-200">
                            <i data-feather="twitter" class="w-8 h-8"></i>
                        </a>
                        <a href="#" class="social-icon text-pink-400 transform transition-all duration-300 hover:text-pink-200">
                            <i data-feather="instagram" class="w-8 h-8"></i>
                        </a>
                        <a href="#" class="social-icon text-blue-600 transform transition-all duration-300 hover:text-blue-300">
                            <i data-feather="linkedin" class="w-8 h-8"></i>
                        </a>
                    </div>
                </div>

                <!-- Training Programs Column -->
                <div>
                    <h4 class="text-xl font-semibold text-purple-300 mb-6">Training Programs</h4>
                    <ul id="training-programs" class="space-y-4">
                        <li class="program-item text-gray-300 text-sm glowing-border py-2 px-3 rounded-lg cursor-pointer hover:bg-purple-900/30">
                            Full-Stack Foundation Program
                        </li>
                        <li class="program-item text-gray-300 text-sm glowing-border py-2 px-3 rounded-lg cursor-pointer hover:bg-purple-900/30">
                            Full-Stack Development Program
                        </li>
                        <li class="program-item text-gray-300 text-sm glowing-border py-2 px-3 rounded-lg cursor-pointer hover:bg-purple-900/30">
                            Front-End Development Program
                        </li>
                        <li class="program-item text-gray-300 text-sm glowing-border py-2 px-3 rounded-lg cursor-pointer hover:bg-purple-900/30">
                            Back-End Development Program
                        </li>
                        <li class="program-item text-gray-300 text-sm glowing-border py-2 px-3 rounded-lg cursor-pointer hover:bg-purple-900/30">
                            UI/UX Designing Program
                        </li>
                    </ul>
                </div>

                <!-- Degree Programs Column -->
                <div>
                    <h4 class="text-xl font-semibold text-purple-300 mb-6">Degree Programs</h4>
                    <ul class="space-y-4">
                        <li class="text-gray-300 text-sm glowing-border py-2 px-3 rounded-lg cursor-pointer hover:bg-purple-900/30">
                            BCA Degree Program
                        </li>
                        <li class="text-gray-300 text-sm glowing-border py-2 px-3 rounded-lg cursor-pointer hover:bg-purple-900/30">
                            MCA Degree Program
                        </li>
                    </ul>
                </div>

                <!-- Contact Us Column -->
                <div>
                    <h4 class="text-xl font-semibold text-purple-300 mb-6">Contact Us</h4>
                    <div class="space-y-4">
                        <div class="flex items-start space-x-4 text-gray-300 text-sm glowing-border p-3 rounded-lg group">
                            <i data-feather="map-pin" class="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300"></i>
                            <span>Head Office: OC 840-841, Gaur City Centre, Greater Noida</span>
                        </div>
                        
                        <div class="flex items-start space-x-4 text-gray-300 text-sm glowing-border p-3 rounded-lg group">
                            <i data-feather="map-pin" class="w-10 h-10 text-purple-400 group-hover:scale-110 transition duration-300"></i>
                            <span>Branch Office: D-24, Gailana Rd, behind St. Conrad's School, Nirbhay Nagar, Agra, Uttar Pradesh 282007</span>
                        </div>

                        <div class="flex items-start space-x-4 text-gray-300 text-sm glowing-border p-3 rounded-lg group">
                            <i data-feather="phone" class="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300"></i>
                            <span>+91 7060100561-62-63</span>
                        </div>
                        <div class="flex items-start space-x-4 text-gray-300 text-sm glowing-border p-3 rounded-lg group">
                            <i data-feather="mail" class="w-6 h-6 text-purple-400 group-hover:scale-110 transition duration-300"></i>
                            <span>info@skillyards.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="mt-12 pt-6 border-t border-purple-700/30 text-center relative z-10 ">
                <div id="copyright" class="text-sm text-gray-400 animate-pulse">
                    © 2025 Skillyards. All rights reserved. 
                </div>
                <div class="text-xs mt-2 text-gray-500">
                    Made by SN Digitech
                </div>
            </div>
        </footer>
        `;

        return footerHTML;
    }

    // Main method to initialize and inject footer
    async init(targetElementId = 'footer-container') {
        // Load dependencies first
        await this.loadDependencies();

        // Find or create target container
        let footerContainer = document.getElementById(targetElementId);
        if (!footerContainer) {
            footerContainer = document.createElement('div');
            footerContainer.id = targetElementId;
            document.body.appendChild(footerContainer);
        }

        // Load and inject footer HTML
        const footerHTML = await this.loadFooterHTML();
        footerContainer.innerHTML = footerHTML;

        // Initialize Feather Icons
        feather.replace();

        // Create particle effect
        this.createParticles();

        // Setup program item interactivity
        this.setupProgramItemInteractivity();
    }
}

// Usage Example
document.addEventListener('DOMContentLoaded', () => {
    const footerLoader = new SkillyardsFooterLoader();
    footerLoader.init(); // This will append the footer to a container with id 'footer-container'
});

// Optional: Custom Animation for Floating Particles
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}
`;
document.head.appendChild(style);