const hb = document.querySelector('.hamburger');
const menu = document.querySelector('body');

hb.addEventListener('click', function() {
	menu.classList.toggle('active');
})