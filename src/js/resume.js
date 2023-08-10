function initializeSlideMenu() {
    const checkbox = document.getElementById('image-checkbox');
    const slideMenu = document.querySelector('.slide-menu');
    let windowWidth = window.innerWidth;

    const setSlideMenuHeight = () => {
        if (windowWidth < 992) {
            slideMenu.style.height = checkbox.checked ? '330px' : '0px';
        } else {
            slideMenu.style.height = '0px';
            checkbox.checked = false;
        }
    };

    checkbox.addEventListener('change', setSlideMenuHeight);

    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        setSlideMenuHeight();
    });
}
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});


window.addEventListener('DOMContentLoaded', initializeSlideMenu);
