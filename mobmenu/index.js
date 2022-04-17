
const menu = document.querySelector(".burger-menu");
let is_open = false; // Is open menu


let is_on_top = true;

let dur_fade = 100;

document.querySelector('.menu-btn').addEventListener('click',()=>{
    menu_toggle();

})

let menu_el = document.querySelector('.menu-mobile');
let menu_list_el = document.querySelectorAll('.menu-link');


function menu_toggle(){

        document.querySelector("#l-1").classList.toggle("open")
        document.querySelector("#l-2").classList.toggle("open")
        document.querySelector("#l-3").classList.toggle("open")

        document.querySelector(".menu-mobile").classList.toggle("open")

        document.querySelector(".menu-link:nth-child(1)").classList.toggle("open")
        document.querySelector(".menu-link:nth-child(2)").classList.toggle("open")
        document.querySelector(".menu-link:nth-child(3)").classList.toggle("open")
        document.querySelector(".menu-link:nth-child(4)").classList.toggle("open")
}




document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
        document.querySelector(".menu-container").style.height = '120px';
        document.querySelector(".menu-container").style.backgroundColor = 'rgba(255,255,255,0.7)';
        document.querySelector(".menu-mobile").style.marginTop = '120px';
        document.querySelector(".menu-container").position = 'fixed';//
    }
    if (document.documentElement.scrollTop <= 0) {
        document.querySelector(".menu-container").style.height = '170px';
        document.querySelector(".menu-container").style.backgroundColor = 'rgba(255,255,255,1)';
        document.querySelector(".menu-mobile").style.marginTop = '170px';
        document.querySelector(".menu-container").position = 'fixed';
    }
});