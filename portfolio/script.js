const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu__list');

function toggleMenu() {
	hamburger.classList.toggle('open');
	menu.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);

