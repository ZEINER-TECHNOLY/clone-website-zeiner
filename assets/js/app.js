import Swiper from "swiper"
import "swiper/css"
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {delay: 3000},
    pagination: {el: '.swiper-pagination'},
    navigation: {nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}
})



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