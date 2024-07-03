import {Form} from '../../components/form/form';

const init = () => {
	if (document.querySelector('[data-query-history]')) {
		const sendData = new Form('POST');

		sendData.init(
			'/query_history/search_history',
			document.querySelector('[data-query-history]'),
			document.querySelector('.query__box-items'),
		);

		// sendData.init(
		// 	'/query_history/preview_next',
		// 	document.querySelector('[data-more-query-h] [data-more]'),
		// 	document.querySelector('[data-more-query-h] .query__box'),
		// );
	}
};

export default {
	init,
};
