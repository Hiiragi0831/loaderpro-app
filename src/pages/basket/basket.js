import {Form} from '../../components/form/form';

const page = document.querySelector('.basket');
const sendForm = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}
	const informationInfo = page.querySelector('.basket__information-info');

	page.querySelectorAll('.basket-product').forEach((item) => {
		item.querySelector('.basket-product__del').addEventListener('click', (evt) => {
			evt.preventDefault();
			sendForm.send('https://my.loaderpro.ru/basket/basket_delete', item);
			item.remove();
		});

		item.querySelector('.basket-product__count input').addEventListener('change', (evt) => {
			evt.preventDefault();
			sendForm.send('https://my.loaderpro.ru/basket/basket_count_edit', item);
		});
	});

	page.querySelector('.basket__information-radio').querySelectorAll('.form__radio').forEach((item) => {
		const condition = () => {
			if (item.querySelector('input').value === 'client') {
				informationInfo.classList.remove('is-hidden');
				informationInfo.querySelectorAll('input, select').forEach((i) => {
					i.disabled = false;
				});
			} else {
				informationInfo.classList.add('is-hidden');
				informationInfo.querySelectorAll('input, select').forEach((i) => {
					i.disabled = true;
				});
			}
		};

		if (item.querySelector('input').checked) {
			condition();
		}
		item.querySelector('input').addEventListener('change', () => {
			condition();
		});
	});

	if (page.querySelector('[data-basket]')) {
		sendForm.init('https://my.loaderpro.ru/basket/basket_add_orders', page.querySelector('[data-basket]'), document.querySelector('main'));
	}

	if (page.querySelector('[data-basket-order]')) {
		sendForm.init('https://my.loaderpro.ru/order/order_edit_orders', page.querySelector('[data-basket-order]'));
	}

	if (document.querySelector('.productEditing__form')) {
		document.querySelectorAll('.productEditing__form').forEach((i) => {
			sendForm.init('https://my.loaderpro.ru/Main/edit_product/', i);
		});
	}
};

export default {
	init,
};
