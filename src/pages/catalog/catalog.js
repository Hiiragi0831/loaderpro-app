import {Form} from '../../components/form/form';
import {Cookie} from '../../components/cookies/cookies';

const catalog = document.querySelector('.catalog');

const loadMore = (selector) => {
	selector.addEventListener('submit', async (evt) => {
		evt.preventDefault();

		const fd = new FormData(selector);
		fd.append('jwt', new Cookie('jwt').get('jwt'));

		const sendData = () => {
			try {
				return fetch('/catalog/catalog_more', {
					method: 'POST',
					body: fd,
				});
			} catch (error) {
				console.error('Произошла ошибка отправки', error);

				return error;
			}
		};

		sendData().then((res) => {
			if (res.status === 200) {
				return res.json();
			}
			throw new Error();
		}).then((res) => {
			catalog.querySelector('.catalog__row').insertAdjacentHTML('beforeend', res.html);
			selector.querySelector("input[name='query_more']").value = res.count;
		});
	});
};

const init = () => {
	if (!catalog) {
		return;
	}

	const sendData = new Form('POST');
	const search = catalog.querySelector('[data-catalog-search]');
	const addProduct = document.querySelectorAll('[data-form-add]');
	const importFile = document.querySelector('[data-form-import]');
	const filter = catalog.querySelector('.catalog__filter');

	loadMore(catalog.querySelector('[data-more]'));

	sendData.init('/catalog/catalog_search', search, catalog.querySelector('.catalog__row'));

	addProduct.forEach((form) => {
		sendData.init('/catalog/catalog_product_create/', form);
	});

	sendData.init('/catalog/catalog_import_file/', importFile);

	filter.querySelectorAll('select, input').forEach((i) => {
		i.addEventListener('change', (evt) => {
			evt.preventDefault();
			sendData.send('/catalog/catalog_filters', filter, catalog.querySelector('.catalog__row'));
		});
	});
	sendData.init('/catalog/catalog_filters', filter, catalog.querySelector('.catalog__row'));
};

export default {
	init,
};
