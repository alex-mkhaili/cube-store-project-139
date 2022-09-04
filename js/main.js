const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav-container');

mobileNavButton.addEventListener('click', function() {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll')
})

const messageSendBtn = document.getElementById('message-send-btn');

messageSendBtn.addEventListener('click', function() {
    alert('Your message has been successfully sent.');
})