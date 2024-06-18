import {Form} from '../../components/form/form';
import validator from 'validator';
import {validate} from '../../components/validate/validate';

const sendData = new Form('POST');

const init = () => {
	if (document.querySelector('[data-login-form]')) {
		let email = false;
		let password = false;

		document.querySelector('input[type="email"]').addEventListener('input', (evt) => {
			email = validator.isEmail(evt.target.value);
			validate(email, evt.target);
		});

		document.querySelector('input[type="password"]').addEventListener('input', (evt) => {
			if (!validator.isEmpty(evt.target.value)) {
				password = validator.isAlphanumeric(evt.target.value);
			} else {
				password = false;
			}

			validate(password, evt.target);
		});

		document.querySelector('[data-login-form]').addEventListener('submit', (evt) => {
			evt.preventDefault();

			if (email && password) {
				sendData.send('https://my.loaderpro.ru/Main/auth_user/', document.querySelector('[data-login-form]'));
			}
		});
	}

	if (document.querySelector('[data-forgot]')) {
		sendData.init('https://my.loaderpro.ru/Main/replace_pass', document.querySelector('[data-forgot]'));
	}
};

export default {
	init,
};
