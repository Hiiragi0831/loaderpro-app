import {Form} from '../../components/form/form';

const formGroup = (object) => {
	console.log(object);
	// let formGroup = document.createElement('div');
	// formGroup.classList.add('form__group');
	// item.querySelector('template').content.cloneNode(true)
};

const addQuery = () => {
	const queryBox = document.querySelector('[data-query]');
	const querysBox = document.querySelector('[data-querys]');
	let object = {};

	queryBox.querySelector('.form').addEventListener('submit', (evt) => {
		evt.preventDefault();
		new FormData(evt.target).forEach((value, key) => {
			object[key] = value;
		});

		formGroup(object);
		querysBox.querySelector('.form .form__main').append(queryBox.querySelector('.form__group').cloneNode(true));
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
