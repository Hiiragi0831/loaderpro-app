import {Form} from '../../components/form/form';

const init = () => {
	if (document.querySelector('[data-query-history]')) {
		const form = document.querySelector('[data-query-history]');
		const sendData = new Form('POST');

		sendData.init('https://my.loaderpro.ru/query_history/search_history', form, document.querySelector('.query__box-items'));

		const more = document.querySelector('[data-more-query-h] [data-more]');
		const moreForm = new Form('POST');

		moreForm.init('https://my.loaderpro.ru/query_history/preview_next', more, document.querySelector('[data-more-query-h] .query__box'));
	}
};

export default {
	init,
};
