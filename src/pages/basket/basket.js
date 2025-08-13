import {Form} from '../../components/form/form';

const page = document.querySelector('.basket');
const sendForm = new Form('POST');

const radioInfo = (informationInfo) => {
	page.querySelector('.basket__information-radio').querySelectorAll('.form__radio').forEach((item) => {
		const condition = () => {
			if (item.querySelector('input').value === 'client' || item.querySelector('input').value === 'default') {
				informationInfo.classList.remove('is-hidden');
				informationInfo.querySelectorAll('input, select').forEach((i) => {
					i.disabled = false;
				});
				if (item.querySelector('input').value === 'client') {
					informationInfo.querySelectorAll('input').forEach((i) => {
						i.value = '';
					});
				}
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
};

const totalBasket = () => {
	let total = 0;
	page.querySelectorAll('.basket-product').forEach((item) => {
		total += Number(item.querySelector('.basket-product__total').dataset.productTotal);
	});
	page.querySelector('.basket__information-title span').innerHTML = `${total} ₽`;
};

const orderDel = () => {
	const fd = new FormData();

	if (page.querySelector('[data-basket-order]')) {
		if (!page.querySelectorAll('.basket-product').length) {
			fd.append('order_num', page.querySelector('input[name="order_num"]').value);
			sendForm.sendData(fd, '/Main/orders_delete', page);
		}
	}

	if (page.querySelector('[data-basket]')) {
		if (!page.querySelectorAll('.basket-product').length) {
			fd.append('basket_delete', '1');
			sendForm.sendData(fd, '/Main/basket_delete_callback', page);
		}
	}
};

const basketProduct = () => {
	page.querySelectorAll('.basket-product').forEach((item) => {
		if (item.querySelector('.basket-product__del')) {
			item.querySelector('.basket-product__del').addEventListener('click', (evt) => {
				evt.preventDefault();
				sendForm.send('/basket/basket_delete', item, page);
				item.remove();
				orderDel();
			});
		}

		item.querySelector('.basket-product__count input').addEventListener('change', (evt) => {
			evt.preventDefault();
			sendForm.send('/basket/basket_count_edit', item);
			const count = Number(item.querySelector('.basket-product__count input').value);
			const price = Number(item.querySelector('.basket-product__price').dataset.productPrice);
			const total = count * price;

			item.querySelector('.basket-product__total span').innerHTML = `${total} ₽`;
			item.querySelector('.basket-product__total').dataset.productTotal = `${total}`;
			totalBasket();
		});
	});
};
const init = () => {
	if (!page) {
		return;
	}

	basketProduct();
	radioInfo(page.querySelector('.basket__information-info'));

	if (page.querySelector('[data-basket]')) {
		sendForm.init('/basket/basket_add_orders', page.querySelector('[data-basket]'), document.querySelector('main'));
	}

	if (page.querySelector('[data-basket-order]')) {
		sendForm.init('/order/order_edit_orders', page.querySelector('[data-basket-order]'), document.querySelector('main'));
	}

	if (document.querySelector('.productEditing__form')) {
		document.querySelectorAll('.productEditing__form').forEach((i) => {
			sendForm.init('/Main/edit_product/', i);
		});
	}
};

export default {
	init,
};
