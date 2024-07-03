import {Form} from '../form/form';

const mobileMenu = () => {
	const burger = document.querySelector('.header__burger');

	burger.addEventListener('click', (evt) => {
		evt.preventDefault();
		document.querySelector('.header-mobile').classList.toggle('is-active');
	});
};

const init = () => {
	if (document.querySelector('.header')) {
		const form = document.querySelector('[data-header-request]');
		const sendData = new Form('POST');

		sendData.init('/Main/orders/', form, document.querySelector('main'));

		mobileMenu();
	}
};

export default {
	init,
};
