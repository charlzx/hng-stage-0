// Update the current time in milliseconds
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}

// Initialize time on page load and keep it in sync
const TIME_UPDATE_INTERVAL = 100; // ms
updateTime();
setInterval(updateTime, TIME_UPDATE_INTERVAL);

// Avatar upload functionality (optional enhancement)
function setupAvatarUpload() {
    const avatar = document.querySelector('[data-testid="test-user-avatar"]');
    
    if (avatar) {
        // Make avatar clickable to change image
        avatar.style.cursor = 'pointer';
        avatar.setAttribute('title', 'Click to change avatar');
        
        avatar.addEventListener('click', () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            
            input.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                        avatar.src = event.target.result;
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            input.click();
        });
    }
}

// Initialize avatar upload functionality
setupAvatarUpload();

// Ensure all external links have proper security attributes
document.addEventListener('DOMContentLoaded', () => {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        // Ensure security attributes are set
        if (!link.getAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});
