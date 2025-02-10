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


