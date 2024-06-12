import {Form} from '../../components/form/form';
const sendData = new Form('POST');

const init = () => {
	if (document.querySelector('[data-login-form]')) {
		sendData.init('https://my.loaderpro.ru/Main/auth_user/', document.querySelector('[data-login-form]'));
	}

	if (document.querySelector('[data-forgot]')) {
		sendData.init('https://my.loaderpro.ru/Main/replace_pass', document.querySelector('[data-forgot]'));
	}
};

export default {
	init,
};
