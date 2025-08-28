//configurando o navbar para mobile
const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')
const closeIcon = document.getElementById('icon-close')
const openIcon = document.getElementById('icon-open')

menuToggle.addEventListener('click', (event) => {
    
    const isHidden = mobileMenu.classList.toggle('hidden')
    if(isHidden){
        openIcon.classList.remove('hidden')
        closeIcon.classList.add('hidden')
    }else{
        openIcon.classList.add('hidden')
        closeIcon.classList.remove('hidden')
    }

})

