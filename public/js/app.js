const iconMenu = document.getElementById('menu')
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