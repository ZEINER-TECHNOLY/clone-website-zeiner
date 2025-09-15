/**
 * const iconMenu = document.getElementById('menu')
const listItems = document.querySelector('ul')

iconMenu.addEventListener('click', (e) => {

    if (iconMenu.classList.contains('fa-bars')) {
        iconMenu.classList.replace('fa-bars', 'fa-xmark')
        listItems.classList.remove('hidden')
        setTimeout(() => {

            listItems.classList.remove('opacity-0', 'scale-y-0')
            listItems.classList.add('opacity-100', 'scale-y-100')

        }, 10)
    } else {

        iconMenu.classList.replace('fa-xmark', 'fa-bars')

        listItems.classList.remove('opacity-100', 'scale-y-100')
        listItems.classList.add('opacity-0', 'scale-y-0')
        setTimeout(() => {
            listItems.classList.add('hidden')

        }, 300)
    }
})

 */

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerBars = menuBtn.querySelectorAll('div');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;

    // Animar o menu hamburguer (transformando em "X")
    menuBtn.classList.toggle('hamburger-open');

    // Mostrar/ocultar o menu mobile com animação
    if (menuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('animate-slideDown');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-slideDown');
    }
});
