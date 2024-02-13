import {Form} from '../../components/form/form';

const catalog = document.querySelector('.catalog');

const init = () => {
	if (!catalog) {
		return;
	}

	const sendData = new Form('POST');
	const loadMore = catalog.querySelector('[data-more]');
	const search = catalog.querySelector('[data-catalog-search]');
	const addProduct = document.querySelectorAll('.productEditing__form');
	const importFile = document.querySelector('[data-form-import]');
	const filter = catalog.querySelector('.catalog__filter');

	sendData.init('https://my.loaderpro.ru/catalog/catalog_more', loadMore, catalog.querySelector('.catalog__row'));
	sendData.init('https://my.loaderpro.ru/catalog/catalog_search', search, catalog.querySelector('.catalog__row'));

	addProduct.forEach((form) => {
		sendData.init('https://my.loaderpro.ru/Main/edit_product/', form);
	});

	sendData.init('https://my.loaderpro.ru/Main/import_file_xls/', importFile);

	filter.querySelectorAll('select').forEach((i) => {
		i.addEventListener('change', (evt) => {
			evt.preventDefault();
			sendData.send('https://my.loaderpro.ru/catalog/catalog_filters', filter);
		});
	});
};

export default {
	init,
};
