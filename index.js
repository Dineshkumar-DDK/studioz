const menubtn = document.querySelector('#menu-btn');
const menuItems = document.querySelector('#menu-items');

menubtn.addEventListener('click',navToggle);

function navToggle(){
    menubtn.classList.toggle('open');
    menuItems.classList.toggle('flex');
    menuItems.classList.toggle('hidden');
}