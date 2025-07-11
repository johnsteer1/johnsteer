function showMessage() {
    const messageElement = document.getElementById('message');
    const button = document.querySelector('.cta-button');
    
    if (messageElement.classList.contains('hidden')) {
        messageElement.classList.remove('hidden');
        messageElement.classList.add('show');
        button.textContent = 'Hide Message';
    } else {
        messageElement.classList.remove('show');
        messageElement.classList.add('hidden');
        button.textContent = 'Say Hello';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const greeting = document.querySelector('.greeting');
    
    greeting.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    greeting.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer p');
    footer.textContent = `© ${currentYear} John Steer`;
});