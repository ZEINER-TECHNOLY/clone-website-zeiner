
const swiper = new Swiper('.swiper', {
    modules: [Swiper.Navigation, Swiper.Pagination], // se quiser, ou deixe sem
    loop: true,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const closeIcon = document.getElementById('icon-close')
const openIcon = document.getElementById('icon-open')

menuToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden')
    openIcon.classList.toggle('hidden', !isHidden)
    closeIcon.classList.toggle('hidden', isHidden)
})
