import {Form} from '../../components/form/form';

const init = () => {
	if (document.querySelector('[data-price-request]')) {
		const forms = document.querySelectorAll('[data-price-request]');

		forms.forEach((form) => {
			const sendData = new Form('POST');
			sendData.init('https://my.loaderpro.ru/Main/orders', form);
		});
	}
};

export default {
	init,
};
