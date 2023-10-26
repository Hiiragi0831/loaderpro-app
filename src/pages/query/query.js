import {Form} from '../../components/form/form';

const addQuery = () => {
	const queryBox = document.querySelector('[data-query]');
	const querysBox = document.querySelector('[data-querys]');
	let object = {};

	const formGroup = (data) => {
		const clone = querysBox.querySelector('template').content.cloneNode(true);
		clone.querySelector('input[name="brand"]').value = data.brand;
		clone.querySelector('input[name="numparts"]').value = data.numparts;
		clone.querySelector('input[name="count"]').value = data.count;

		querysBox.querySelector('.form .form__main').append(clone);
	};

	queryBox.querySelector('.form').addEventListener('submit', (evt) => {
		evt.preventDefault();
		new FormData(evt.target).forEach((value, key) => {
			object[key] = value;
		});

		formGroup(object);
	});
};

const init = () => {
	if (document.querySelector('[data-items-request]')) {
		const forms = document.querySelectorAll('[data-items-request]');
		addQuery();

		forms.forEach((item) => {
			const form = new Form('POST');
			form.init('https://my.loaderpro.ru/Main/orders', item);
		});
	}
};

export default {
	init,
};
