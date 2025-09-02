
const swiper = new Swiper('.swiper', {
    //modules: [Swiper.Navigation, Swiper.Pagination], // se quiser, ou deixe sem
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

// Swiper dos Parceiros (scroll automático horizontal)
const partnerSwiper = new Swiper('.partner-swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 3000, // velocidade contínua
  freeMode: true,
  freeModeMomentum: false,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
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
