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

const carousel = document.getElementById('carousel');
let startX = 0;
let currentIndex = 0;
const totalSlides = carousel.children.length;

function goToSlide(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Detecta o início do toque
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;  // Pega a posição inicial do toque
});

// Detecta o movimento do toque
carousel.addEventListener('touchmove', (e) => {
    e.preventDefault();  // Evita o comportamento padrão de rolagem
});

// Detecta o fim do toque
carousel.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;  // Pega a posição final do toque
    const distance = startX - endX;  // Calcula a distância do deslize

    if (distance > 50) {
        // Deslizou para a esquerda (Próximo)
        currentIndex = (currentIndex + 1) % totalSlides;
    } else if (distance < -50) {
        // Deslizou para a direita (Anterior)
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    goToSlide(currentIndex);
});