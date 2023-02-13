const showMenu = document.querySelector('#hamburger');
const hideMenu = document.querySelector('#close-btn');
const navlinks = document.querySelector('.links');
showMenu.addEventListener('click', () => {
  navlinks.classList.add('show-nav');
  navlinks.classList.remove('hide-nav');
});
hideMenu.addEventListener('click', () => {
  navlinks.classList.add('hide-nav');
});
window.addEventListener('scroll', () => {
  navlinks.classList.add('hide-nav');
});
