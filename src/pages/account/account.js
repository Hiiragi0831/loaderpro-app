import {Form} from '../../components/form/form';
import {Notyf} from 'notyf';

const init = () => {
	if (document.querySelector('[data-account-form]')) {
		let notyf = new Notyf();
		const form = document.querySelector('[data-account-form]');
		const sendData = new Form('POST');
		const password = form.querySelector('.password').querySelector('input');
		const passwordRepeat = form.querySelector('.password-repeat').querySelector('input');
		let change = false;

		const comparison = () => {
			if (password.value === passwordRepeat.value) {
				change = false;
			} else {
				change = true;
				notyf.error('Пароли не совпадают');
			}
		};

		password.addEventListener('change', () => {
			change = true;
			comparison();
		});

		passwordRepeat.addEventListener('change', () => {
			comparison();
		});

		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			if (!change) {
				sendData.send('https://my.loaderpro.ru/account/save/', form);
			} else {
				notyf.error('Пароли не совпадают');
			}
		});
	}
};

export default {
	init,
};
