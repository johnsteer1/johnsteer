// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Hamburger animation
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 60; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section, .hero');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to current section link
                const activeLink = document.querySelector(`a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });

    // Tab functionality for archive section
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.onclick.toString().match(/showTab\('(.+?)'\)/)[1];
            showTab(targetTab);
        });
    });

    // Initialize first tab as active
    showTab('youtube');
});

// Utility functions
function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 60;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

function showTab(tabName) {
    // Hide all tab panes
    const tabPanes = document.querySelectorAll('.tab-pane');
    tabPanes.forEach(pane => {
        pane.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show selected tab pane
    const selectedPane = document.getElementById(tabName);
    if (selectedPane) {
        selectedPane.classList.add('active');
    }

    // Add active class to selected button
    const selectedButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

// Dynamic content loading functions (for future LAYZ integration)
function loadContent(contentType, containerId) {
    // This will be replaced with actual API calls to load content
    const container = document.getElementById(containerId);
    
    // Placeholder for now - will be replaced with actual content loading
    if (container) {
        container.innerHTML = '<div class="content-card placeholder"><h3>Loading...</h3><p>Content will be loaded here by LAYZ framework.</p></div>';
    }
}

// Initialize content loading
document.addEventListener('DOMContentLoaded', function() {
    // These will be replaced with actual content loading calls
    // loadContent('vignettes', 'vignettes-grid');
    // loadContent('youtube', 'youtube-grid');
    // loadContent('papers', 'papers-grid');
    // loadContent('podcasts', 'podcasts-grid');
    // loadContent('gallery', 'gallery-grid');
});

// LAYZ integration hooks (for future development)
window.LAYZ = {
    // Content management functions
    addVignette: function(vignette) {
        // Add vignette to the vignettes section
        console.log('Adding vignette:', vignette);
    },
    
    addArchiveItem: function(item) {
        // Add item to appropriate archive section
        console.log('Adding archive item:', item);
    },
    
    addGalleryItem: function(item) {
        // Add item to gallery
        console.log('Adding gallery item:', item);
    },
    
    // Utility functions
    refresh: function() {
        // Refresh all content sections
        console.log('Refreshing content...');
    }
};

console.log('LAYZ-ready site initialized');