const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
})