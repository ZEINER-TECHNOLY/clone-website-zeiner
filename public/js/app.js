/**
 * const iconMenu = document.getElementById('menu')
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

 */

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const hamburgerBars = menuBtn.querySelectorAll('div');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;

    // Animar o menu hamburguer (transformando em "X")
    menuBtn.classList.toggle('hamburger-open');

    // Mostrar/ocultar o menu mobile com animação
    if (menuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('animate-slideDown');
    } else {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-slideDown');
    }
});

// Filtro de categorias
const categoriaSelect = document.getElementById('categoria');
categoriaSelect.addEventListener('change', function () {
    // Aqui você pode adicionar o código para filtrar os cursos com base na categoria selecionada.
    console.log('Categoria selecionada: ', this.value);
});

// Busca por nome de curso
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function () {
    // Aqui você pode adicionar o código para buscar os cursos conforme o texto digitado.
    console.log('Buscando por: ', this.value);
});


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const answer = document.querySelector(`#${this.id}-answer`);
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
        } else {
            answer.classList.add('hidden');
        }
    });
});

document.querySelectorAll('.w-full').forEach(button => {
    button.addEventListener('click', function () {
        const answer = this.nextElementSibling;
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            answer.classList.add('block');
        } else {
            answer.classList.remove('block');
            answer.classList.add('hidden');
        }
    });
});

//
const observar = new IntersectionObserver((events) => {
    events.forEach(event => {
        if (event.isIntersecting) {
            event.target.classList.remove('opacity-0', 'translate-x-[-100%]')
            event.target.classList.add('opacity-100', 'translate-x-0')
        }
    })
}, { threshold: 0.5 })

const teste = document.getElementById('card')
console.log(teste)

observar.observe(teste)
if (teste) {
    observar.observe(teste);
}

const teste1 = document.getElementById('card')

teste1.addEventListener('click', () => {
    console.log("Estados Unidos de America")
})