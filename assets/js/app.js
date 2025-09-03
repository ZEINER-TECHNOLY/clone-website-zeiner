
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


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('icon-close');
const openIcon = document.getElementById('icon-open');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.contains("scale-y-100");

  if (isOpen) {
    // Fecha menu mobile
    navMenu.classList.remove("scale-y-100", "opacity-100");
    navMenu.classList.add("scale-y-0", "opacity-0");
    setTimeout(() => navMenu.classList.add("hidden"), 300);
    openIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  } else {
    // Abre menu mobile
    navMenu.classList.remove("hidden");
    setTimeout(() => {
      navMenu.classList.remove("scale-y-0", "opacity-0");
      navMenu.classList.add("scale-y-100", "opacity-100");
    }, 10);
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
});


//escrevendo texto 
document.addEventListener("DOMContentLoaded", () => {
  const text = "Inovação & Soluções";
  const target = document.getElementById("typewriter");
  let index = 0;

  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 190); // velocidade da digitação
    }
  }

  type();
});
