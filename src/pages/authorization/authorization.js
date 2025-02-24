import {Form} from '../../components/form/form';
import validator from 'validator';
import {validate} from '../../components/validate/validate';

const sendData = new Form('POST');

const init = () => {
	if (document.querySelector('[data-login-form]')) {
		let email = false;

		document.querySelector('input[type="email"]').addEventListener('input', (evt) => {
			email = validator.isEmail(evt.target.value);
			validate(email, evt.target);
		});

		document.querySelector('[data-login-form]').addEventListener('submit', (evt) => {
			evt.preventDefault();

			if (email) {
				sendData.send('/Main/auth_user/', document.querySelector('[data-login-form]'));
			}
		});
	}

	if (document.querySelector('[data-forgot]')) {
		sendData.init('/Main/replace_pass', document.querySelector('[data-forgot]'));
	}
};

export default {
	init,
};
