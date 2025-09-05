const toggleBtn = document.getElementById('toggle-btn')
const toggleNav = document.getElementById('nav-toggle')

toggleBtn.addEventListener('click', () => {
    console.log('ola mundo')
    toggleNav.classList.toggle('hidden')
})