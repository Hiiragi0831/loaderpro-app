import {Form} from '../../components/form/form';
const sendData = new Form('POST');

const init = () => {
	if (document.querySelector('[data-login-form]')) {
		sendData.init('https://my.loaderpro.ru/Main/auth_user/', document.querySelector('[data-login-form]'));
	}
};

export default {
	init,
};
