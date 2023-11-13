import {Form} from '../../components/form/form';

const init = () => {
	if (document.querySelector('[data-query-history]')) {
		const form = document.querySelector('[data-query-history]');
		const sendData = new Form('POST');

		sendData.init('https://my.loaderpro.ru/Main/query-history/', form);
	}
};

export default {
	init,
};
