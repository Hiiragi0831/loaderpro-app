import {Form} from '../../components/form/form';
import {Notyf} from 'notyf';
let notyf = new Notyf({
	duration: 5000,
	position: {
		x: 'right',
		y: 'top',
	},
});

const init = () => {
	if (document.querySelector('[data-account-form]')) {
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
				sendData.send('/account/save/', form);
			} else {
				notyf.error('Пароли не совпадают');
			}
		});
	}
};

export default {
	init,
};
