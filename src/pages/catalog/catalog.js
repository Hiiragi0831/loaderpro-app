import {Form} from '../../components/form/form';

const catalog = document.querySelector('.catalog');

const init = () => {
	if (!catalog) {
		return;
	}

	const sendData = new Form('POST');
	const loadMore = catalog.querySelector('[data-more]');
	const search = catalog.querySelector('[data-catalog-search]');
	const addProduct = document.querySelectorAll('[data-form-add]');
	const importFile = document.querySelector('[data-form-import]');
	const filter = catalog.querySelector('.catalog__filter');

	sendData.init('/catalog/catalog_more', loadMore, catalog.querySelector('.catalog__row'));
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
