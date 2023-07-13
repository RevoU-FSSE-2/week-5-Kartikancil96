// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger').onclick = () => {
    navbarNav.classList.toggle('active');
};

const hamburGer = document.querySelector('#hamburger');

document.addEventListener('click', function (e) {
    if (!hamburGer.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
