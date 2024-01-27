document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuIcon = document.getElementById('mobileMenuIcon');
    const nav = document.querySelector('nav');
    const closeMenuButton = document.getElementById('closeMenu');
    const googleMap = document.getElementById('googleMap')

    mobileMenuIcon.addEventListener('click', function () {
        nav.classList.toggle('open');
        closeMenuButton.style.display = 'block';
        googleMap.style.display = 'block'; 
    });

    closeMenuButton.addEventListener('click', function () {
        nav.classList.remove('open');
        closeMenuButton.style.display = 'none';
        googleMap.style.display = 'none'; 
    });
});
