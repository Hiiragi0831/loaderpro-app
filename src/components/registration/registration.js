import {Form} from '../form/form';
const init = () => {
	if (document.querySelector('[data-registration-form]')) {
		const form = document.querySelector('[data-registration-form]');
		const sendData = new Form('POST');

		sendData.init('https://my.loaderpro.ru/Main/create_user/', form);
	}
};

export default {
	init,
};
