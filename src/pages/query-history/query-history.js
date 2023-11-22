import {Form} from '../../components/form/form';

const init = () => {
	if (document.querySelector('[data-query-history]')) {
		const form = document.querySelector('[data-query-history]');
		const sendData = new Form('POST');

		sendData.init('https://my.loaderpro.ru/query_history/search_history', form, document.querySelector('.query__box-items'));
	}
};

export default {
	init,
};
