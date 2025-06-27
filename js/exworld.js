document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const logo = document.getElementById('logo-img');

    function toggleHeaderOnScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            logo.src = "../assets/logo-dark.svg";
        } else {
            header.classList.remove('scrolled');
            logo.src = "../assets/logo-light.svg";
        }
    }

    window.addEventListener('scroll', toggleHeaderOnScroll);
    toggleHeaderOnScroll();

    AOS.init({ duration: 1000, once: true });
});
