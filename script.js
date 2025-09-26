// Your existing JS code
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    hamburgerMenu.querySelectorAll('span').forEach((line, index) => {
        line.style.transform = navLinks.classList.contains('active')
            ? `translateX(${index * 5}px)`
            : 'translateX(0)';
    });
});

// New code for animated background with educational objects and anime character
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
    }
    
    // Initialize animations
    createFloatingObjects();
    
    // Add interaction with buttons
    function addCharacterInteraction() {
        const buttons = document.querySelectorAll('button, .download-btn');
        const animeCharacter = document.querySelector('.anime-character');
        
        if (buttons.length > 0 && animeCharacter) {
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    // Move character near the button
                    const buttonRect = button.getBoundingClientRect();
                    animeCharacter.style.transition = 'all 1s ease';
                    animeCharacter.style.bottom = `${window.innerHeight - buttonRect.top + 20}px`;
                    animeCharacter.style.right = `${window.innerWidth - buttonRect.right - 40}px`;
                    
                    // Change message
                    const characterMessage = animeCharacter.querySelector('.character-message');
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
                        const characterMessage = animeCharacter.querySelector('.character-message');
                        characterMessage.style.opacity = '0';
                        characterMessage.style.transform = 'translateY(10px)';
                    }, 2000);
                });
            });
        }
    }
    
    // Add interaction after a short delay to ensure everything is loaded
    setTimeout(addCharacterInteraction, 1000);
});