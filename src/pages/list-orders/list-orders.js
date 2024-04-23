import {Form} from '../../components/form/form';

const page = document.querySelector('[data-list-orders]');
const sendForm = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}

	let tabId = null;

	sendForm.init('https://my.loaderpro.ru/basket/basket_search', page.querySelector('[data-search]'), page.querySelector('.page__results'));

	page.querySelector('.page__tab').querySelectorAll('.navtab__item').forEach((i, id) => {
		i.addEventListener('click', (e) => {
			const fd = new FormData();
			e.preventDefault();
			tabId = id;
			fd.append('order_status', id);
			sendForm.sendData(fd, 'https://my.loaderpro.ru/list_orders/list_order_status_result', page.querySelector('.page__results'));
		});
	});

	document.addEventListener('status', () => {
		console.log('status');
		page.querySelector('.navtab__item.is-active').classList.remove('is-active');
		page.querySelector('.page__tab').querySelectorAll('.navtab__item').forEach((i, id) => {
			if (id === tabId) {
				i.classList.add('is-active');
			}
		});
	});
};

export default {
	init,
};
