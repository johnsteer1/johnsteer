// Video background handling
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('desktop-bg');
    const videoBackground = document.querySelector('.video-background');
    
    if (video) {
        // Handle video load success
        video.addEventListener('loadeddata', function() {
            console.log('Desktop background video loaded successfully');
        });
        
        // Handle video load error - fallback to gradient
        video.addEventListener('error', function() {
            console.log('Video failed to load, falling back to gradient');
            video.style.display = 'none';
            videoBackground.style.setProperty('background', 'linear-gradient(to bottom, #87CEEB 0%, #ffffff 50%, #7CFC00 100%)', 'important');
        });
        
        // Mobile optimization: hide video on mobile devices
        if (window.matchMedia('(max-width: 768px)').matches) {
            video.style.display = 'none';
            videoBackground.style.setProperty('background', 'linear-gradient(to bottom, #87CEEB 0%, #ffffff 50%, #7CFC00 100%)', 'important');
            console.log('Mobile device detected - using gradient background');
        }
        
        // Respect user's reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            video.style.display = 'none';
            videoBackground.style.setProperty('background', 'linear-gradient(to bottom, #87CEEB 0%, #ffffff 50%, #7CFC00 100%)', 'important');
            console.log('Reduced motion preference detected - using gradient background');
        }
        
        // Handle orientation changes on mobile
        window.addEventListener('orientationchange', function() {
            if (window.matchMedia('(max-width: 768px)').matches) {
                video.style.display = 'none';
                videoBackground.style.setProperty('background', 'linear-gradient(to bottom, #87CEEB 0%, #ffffff 50%, #7CFC00 100%)', 'important');
            }
        });
    }
});