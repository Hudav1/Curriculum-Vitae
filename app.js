const dropdown = document.querySelector('#dropdown-nav');
const menu = document.querySelector('#nav-menu');

dropdown.addEventListener('click', () => {
    menu.classList.toggle('disp');
});