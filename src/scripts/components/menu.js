let menu    = document.getElementById('menu');
let header  = document.querySelector('header');
let nav     = document.querySelector('nav');
let b       = document.querySelector('b');
let exit    = document.querySelector('.exit');
let hr      = document.querySelector('hr'); 

function closeMenu() {
    menu.classList.remove('navOpen');
    menu.classList.add('nav');
    header.classList.remove('openMenu');
    nav.style.display = 'none';
}

function openMenu() {
    menu.classList.remove('nav');
    menu.classList.add('navOpen');
    header.classList.add('openMenu');
    nav.style.display = 'flex';
}

menu.onclick = function (event) {
    let target = event.target;
    
    if ( (target == b) || (target == exit) || (target.classList.contains('firstLine') ) || (target.classList.contains('secondLine') ) ){
        if (menu.classList.contains('nav')){
            openMenu();
        } else {
            closeMenu();
        }

    } return;
}

header.onclick = function (event) {
    let target = event.target;

    if(target.tagName != "A") return;
    closeMenu();
}