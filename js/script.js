const nav = document.querySelector('.nav_links')
const burger = document.querySelector('.burger')

function toggleMeny() { 
    nav.classList.toggle('nav_active')
    burger.classList.toggle('toggle')
}

burger.addEventListener('click', toggleMeny)