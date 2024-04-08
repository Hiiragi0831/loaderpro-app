import {Form} from '../../components/form/form';

const page = document.querySelector('[data-list-orders]');
const sendForm = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}

	sendForm.init('https://my.loaderpro.ru/basket/basket_search', page.querySelector('[data-search]'), page.querySelector('.page__results'));

	page.querySelector('.page__tab').querySelectorAll('.navtab__item').forEach((i, id) => {
		i.addEventListener('click', (e) => {
			e.preventDefault();
			console.log(i, id);
			sendForm.sendData(id, 'https://my.loaderpro.ru/list_orders/list_order_status_result', page.querySelector('.page__results'));
		});
	});
};

export default {
	init,
};
