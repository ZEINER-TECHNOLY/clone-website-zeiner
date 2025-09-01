//configurando o navbar para mobile
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const closeIcon = document.getElementById('icon-close')
const openIcon = document.getElementById('icon-open')

menuToggle.addEventListener('click', (event) => {

    const isHidden = mobileMenu.classList.toggle('hidden')
    if (isHidden) {
        openIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
    } else {
        openIcon.classList.add('hidden')
        closeIcon.classList.remove('hidden')
    }

})

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const carousel = document.getElementById('carousel');
let currentIndex = 0;
const totalSlides = carousel.children.length;

function goToSlide(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
});

