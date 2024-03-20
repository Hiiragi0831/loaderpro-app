import {Form} from '../../components/form/form';

const page = document.querySelector('[data-list-orders]');
const sendForm = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}

	sendForm.init('https://my.loaderpro.ru/basket/basket_search', page.querySelector('[data-search]'), page.querySelector('.page__results'));
};

export default {
	init,
};
