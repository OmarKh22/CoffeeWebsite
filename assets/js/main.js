/*=============== LOADER ===============*/


/*=============== SHOW MENU ===============*/
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navClose.addEventListener('click', ()=>{
    navMenu.classList.remove('show-menu')
});

navToggle.addEventListener('click', ()=>{
    navMenu.classList.add('show-menu')
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    navMenu.classList.remove('show-menu')
}
navLink.forEach( n => n.addEventListener('click',linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById("header")
    if(this.scrollY>=50) header.classList.add('scroll-header');
    else  header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)
/*=============== MIXITUP FILTER PRODUCTS ===============*/
var mixer = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */ 
mixer.filter('.delecacies')

/* Link active products */ 
const linkProducts = document.querySelectorAll('.products__item')
function activeProducts(){
    linkProducts.forEach(x=>x.classList.remove('active__products'))
    this.classList.add('active__products')
}
linkProducts.forEach(x=>x.addEventListener('click', activeProducts))
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = document.getElementById("scroll__up")
function ScrollUp(){
    if(this.scrollY>=500) scrollUp.classList.add('show__scroll');
    else(scrollUp.classList.remove('show__scroll'))
}
window.addEventListener('scroll', ScrollUp);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
