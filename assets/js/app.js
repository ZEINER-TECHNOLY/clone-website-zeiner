//configurando o navbar para mobile
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')

menuToggle.addEventListener('click', (event) => {
    mobileMenu.classList.toggle('hidden')
})

