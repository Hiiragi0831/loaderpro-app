import {Form} from '../form/form';

const init = () => {
	if (document.querySelector('[data-login-form]')) {
		const form = document.querySelector('[data-login-form]');
		const sendData = new Form('POST');

		sendData.init('https://my.loaderpro.ru/Main/auth_user/', form);
	}
};

export default {
	init,
};
