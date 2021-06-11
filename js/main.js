let hamCheck = document.querySelector('#ham-menu');
let menu = document.querySelector('.menu-overlay');

hamCheck.addEventListener('click', () => {
	if (menu.classList.contains('hidden')) {
		menu.classList.remove('hidden');
		setTimeout(() => {
			menu.classList.add('circle-wipe');
		}, 10);

		document.body.style.overflow = 'hidden';
	} else {
		menu.classList.remove('circle-wipe');
		setTimeout(() => {
			menu.classList.add('hidden');
		}, 2000);

		document.body.style.overflow = 'auto';
	}
});
