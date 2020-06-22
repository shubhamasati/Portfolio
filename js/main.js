const menuBtn = document.querySelector('.menu-btn');
const hamBurger = document.querySelector('.menu-btn__burger');

const nav= document.querySelector('nav')
const menuNav = document.querySelector('.nav-menu')

const navItems = document.querySelectorAll('.nav-menu__link')


var showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu){
        hamBurger.classList.add('open');
        nav.classList.add('open')
        menuNav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'));
        showMenu = true
    }
    else{
        hamBurger.classList.remove('open')
        nav.classList.remove('open')
        menuNav.classList.remove('open')
        navItems.forEach(item => item.classList.remove('open'))
        showMenu = false;
    }
}
