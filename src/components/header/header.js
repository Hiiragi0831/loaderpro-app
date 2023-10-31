import {Form} from '../form/form';

const init = () => {
	if (document.querySelector('.header')) {
		const form = document.querySelector('[data-header-request]');
		const sendData = new Form('POST');

		sendData.init('https://my.loaderpro.ru/Main/orders/', form);
	}
};

export default {
	init,
};
