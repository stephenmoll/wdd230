document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const nav = document.querySelector('nav');

    mobileMenuIcon.addEventListener('click', function () {
        nav.classList.toggle('open');
    });
});