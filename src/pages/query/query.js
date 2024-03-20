import {Form} from '../../components/form/form';
import {Notyf} from 'notyf';

const queryBox = document.querySelector('[data-query]');
const querysBox = document.querySelector('[data-querys]');
let notyf = new Notyf({
	duration: 5000,
	position: {
		x: 'right',
		y: 'top',
	},
});

const deleteQuery = () => {
	querysBox.querySelector('.form').querySelectorAll('.form__group').forEach((el) => {
		el.querySelector('[name="delete"]').addEventListener('click', () => {
			el.remove();
		});
	});
};

const formGroup = (data) => {
	const clone = querysBox.querySelector('template').content.cloneNode(true);
	clone.querySelector('input[name="brand"]').value = data.brand;
	clone.querySelector('input[name="numparts"]').value = data.numparts;
	clone.querySelector('input[name="count"]').value = data.count;

	querysBox.querySelector('.form .form__main').append(clone);

	deleteQuery();
};

const addQuery = () => {
	let object = {};
	let trigger = true;

	queryBox.querySelector('.form').addEventListener('submit', (evt) => {
		evt.preventDefault();
		trigger = true;

		new FormData(evt.target).forEach((value, key) => {
			object[key] = value;

			if (!value) {
				trigger = false;
			}
		});

		if (trigger) {
			formGroup(object);
			queryBox.querySelector('.form').querySelectorAll('input').forEach((el) => {
				el.value = '';
			});
			notyf.success('Успешно добавлено в список');
		} else {
			notyf.error('Обязательные поля не заполнены');
		}
	});
};

const importFile = () => {
	const form = document.querySelector('[data-form-import]');
	const sendForm = new Form('POST');

	sendForm.init('https://my.loaderpro.ru/Main/import_file_xls/', form, document.querySelector('main'));
};

const init = () => {
	if (document.querySelector('[data-query]')) {
		let data = [];
		const form = new Form('POST');

		addQuery();
		importFile();

		querysBox.querySelector('.form').querySelector('[type="submit"]').addEventListener('click', (evt) => {
			evt.preventDefault();

			querysBox.querySelector('.form').querySelectorAll('.form__group').forEach((el) => {
				let dannie = {};

				new FormData(el).forEach((value, key) => {
					dannie[key] = value;
				});

				data.push(dannie);
			});

			form.sendData(JSON.stringify(data), 'https://my.loaderpro.ru/Main/orders/', document.querySelector('.query'));
		});
	}
};

export default {
	init,
};
