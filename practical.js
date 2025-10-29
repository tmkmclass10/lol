// Create animated background with floating objects and anime character
document.addEventListener('DOMContentLoaded', () => {
    // Create animated background container
    const animatedBackground = document.createElement('div');
    animatedBackground.className = 'animated-background';
    document.body.appendChild(animatedBackground);

    // Create floating educational objects
    function createFloatingObjects() {
        const objects = [
            { emoji: '📚', size: 40, duration: 20 },
            { emoji: '✏️', size: 30, duration: 18 },
            { emoji: '📝', size: 35, duration: 22 },
            { emoji: '📖', size: 45, duration: 25 },
            { emoji: '🔍', size: 25, duration: 15 },
            { emoji: '📐', size: 30, duration: 19 },
            { emoji: '🧪', size: 35, duration: 21 },
            { emoji: '🔬', size: 40, duration: 23 },
            { emoji: '💡', size: 30, duration: 17 },
            { emoji: '📊', size: 35, duration: 24 }
        ];
        
        objects.forEach((obj, index) => {
            const floatingObject = document.createElement('div');
            floatingObject.className = 'floating-object';
            floatingObject.textContent = obj.emoji;
            floatingObject.style.fontSize = `${obj.size}px`;
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            floatingObject.style.left = `${posX}%`;
            floatingObject.style.top = `${posY}%`;
            
            // Random animation duration and delay
            floatingObject.style.animationDuration = `${obj.duration}s`;
            floatingObject.style.animationDelay = `${Math.random() * 5}s`;
            
            // Random rotation
            floatingObject.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            animatedBackground.appendChild(floatingObject);
        });
    }
    
    // Create anime character
    function createAnimeCharacter() {
        const animeCharacter = document.createElement('div');
        animeCharacter.className = 'anime-character moving-character';
        
        // Character body
        const characterBody = document.createElement('div');
        characterBody.className = 'character-body';
        
        // Character face
        const characterFace = document.createElement('div');
        characterFace.className = 'character-face';
        
        // Character eyes
        const characterEyes = document.createElement('div');
        characterEyes.className = 'character-eyes';
        
        const leftEye = document.createElement('div');
        leftEye.className = 'eye';
        
        const rightEye = document.createElement('div');
        rightEye.className = 'eye';
        
        characterEyes.appendChild(leftEye);
        characterEyes.appendChild(rightEye);
        
        // Character mouth
        const characterMouth = document.createElement('div');
        characterMouth.className = 'character-mouth';
        
        characterFace.appendChild(characterEyes);
        characterFace.appendChild(characterMouth);
        
        // Character arms
        const characterArms = document.createElement('div');
        characterArms.className = 'character-arms';
        
        const leftArm = document.createElement('div');
        leftArm.className = 'arm arm-left';
        
        const rightArm = document.createElement('div');
        rightArm.className = 'arm arm-right';
        
        characterArms.appendChild(leftArm);
        characterArms.appendChild(rightArm);
        
        // Character message
        const characterMessage = document.createElement('div');
        characterMessage.className = 'character-message';
        characterMessage.textContent = 'Hi! Need help with your studies?';
        
        // Assemble character
        characterBody.appendChild(characterFace);
        characterBody.appendChild(characterArms);
        animeCharacter.appendChild(characterBody);
        animeCharacter.appendChild(characterMessage);
        
        // Add click event to change message
        const messages = [
            'Hi! Need help with your studies?',
            'Keep up the good work!',
            'You\'re doing great!',
            'Study hard, succeed!',
            'Learning is fun!',
            'You\'ve got this!',
            'Knowledge is power!'
        ];
        
        animeCharacter.addEventListener('click', () => {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            characterMessage.textContent = randomMessage;
            
            // Show message temporarily
            characterMessage.style.opacity = '1';
            characterMessage.style.transform = 'translateY(0)';
            
            setTimeout(() => {
                characterMessage.style.opacity = '0';
                characterMessage.style.transform = 'translateY(10px)';
            }, 3000);
        });
        
        // Add character to body
        document.body.appendChild(animeCharacter);
        
        // Add interaction with buttons
        setTimeout(() => {
            const buttons = document.querySelectorAll('button, .download-btn');
            
            if (buttons.length > 0) {
                buttons.forEach(button => {
                    button.addEventListener('mouseenter', () => {
                        // Move character near the button
                        const buttonRect = button.getBoundingClientRect();
                        animeCharacter.style.transition = 'all 1s ease';
                        animeCharacter.style.bottom = `${window.innerHeight - buttonRect.top + 20}px`;
                        animeCharacter.style.right = `${window.innerWidth - buttonRect.right - 40}px`;
                        
                        // Change message
                        characterMessage.textContent = 'Click this button!';
                        characterMessage.style.opacity = '1';
                        characterMessage.style.transform = 'translateY(0)';
                    });
                    
                    button.addEventListener('mouseleave', () => {
                        // Reset character position after a delay
                        setTimeout(() => {
                            animeCharacter.style.transition = '';
                            animeCharacter.style.bottom = '';
                            animeCharacter.style.right = '';
                            
                            // Reset message
                            characterMessage.style.opacity = '0';
                            characterMessage.style.transform = 'translateY(10px)';
                        }, 2000);
                    });
                });
            }
        }, 1000);
    }
    
    // Initialize animations
    createFloatingObjects();
});

// Download functionality
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const files = btn.dataset.files.split(',');
        const downloadLinks = btn.nextElementSibling;
        
        // Toggle the download links visibility
        downloadLinks.classList.toggle('show');
        
        // Update button text based on state
        if (downloadLinks.classList.contains('show')) {
            btn.textContent = `Hide download links (${files.length} images)`;
        } else {
            btn.textContent = `Download ${files.length} images`;
        }
    });
});

// Alternative function for direct downloads (if needed)
function downloadFiles(fileIds) {
    // Due to browser security restrictions, we can only reliably download one file at a time
    // So we'll download the first file and let the user download the rest manually
    if (fileIds.length > 0) {
        const a = document.createElement("a");
        a.href = "https://drive.google.com/uc?export=download&id=" + fileIds[0];
        a.download = "";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Show a message if there are more files
        if (fileIds.length > 1) {
            setTimeout(() => {
                alert(`First image downloaded. Please click on the individual links to download the remaining ${fileIds.length - 1} images.`);
            }, 500);
        }
    }
}