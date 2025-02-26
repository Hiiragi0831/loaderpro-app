import {Form} from '../../components/form/form';

const page = document.querySelector('[data-list-orders]');
const sendForm = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}

	document.querySelector('.notyf').classList.add('is-hidden');

	sendForm.init('/basket/basket_search', page.querySelector('[data-search]'), page.querySelector('.page__results'));

	page.querySelector('.page__tab').querySelectorAll('.navtab__item').forEach((i, id) => {
		i.addEventListener('click', (e) => {
			e.preventDefault();

			const fd = new FormData();
			page.querySelector('.navtab__item.is-active').classList.remove('is-active');
			i.classList.add('is-active');
			fd.append('order_status', id + 1);
			sendForm.sendData(fd, '/list_orders/list_order_status_result', page.querySelector('.page__results'));
		});
	});
};

export default {
	init,
};
