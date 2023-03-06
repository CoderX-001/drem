// VARIABLES
const navBar = document.querySelector('.nav-link');
const navToggler = document.querySelector('.submenu');

navToggler.addEventListener('click', () => {
  navBar.classList.contains('hidden') ? navBar.classList.replace('hidden', 'flex') : navBar.classList.replace('flex', 'hidden');
})