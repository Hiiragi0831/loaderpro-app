import {uploadFileImg} from '../../components/input-file/js/init-upload';
import {Form} from '../../components/form/form';
import {Notyf} from 'notyf';

const request = document.querySelector('.request');
const dataItem = {};
const submitForm = new Form('POST');
const notyf = new Notyf({
	duration: 5000,
	position: {
		x: 'right',
		y: 'top',
	},
});

const renderItem = () => {
	const clone = request.querySelector('#request-item').content.cloneNode(true);

	clone.querySelector('input[name="titleparts"]').value = dataItem.titleparts;
	clone.querySelector('input[name="numparts"]').value = dataItem.numparts;
	clone.querySelector('input[name="count"]').value = dataItem.count;
	clone.querySelector('input[name="comment"]').value = dataItem.comment;
	clone.querySelector('.request__item-comment').textContent = dataItem.comment;
	uploadFileImg(clone.querySelector('[data-upload="file-img"]'));
	request.querySelector('.request__items').append(clone);
};

const getData = () => {
	const form = request.querySelector('.request__request');
	form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		new FormData(evt.target).forEach((value, key) => {
			dataItem[key] = value;
		});

		if (dataItem.titleparts && dataItem.count) {
			renderItem();
			form.reset();
			if (request.querySelector('.request__data').classList.contains('is-hidden')) {
				request.querySelector('.request__data').classList.remove('is-hidden');
			}
			request.querySelector('.request__data').querySelectorAll('.request__item').forEach((i) => {
				i.querySelector('.button-delete').addEventListener('click', (e) => {
					e.preventDefault();
					i.remove();
				});
			});
		} else {
			notyf.error('Обязательные поля не заполнены');
		}
	});
};

const buildFormData = (formData, data, parentKey) => {
	if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File) && !(data instanceof Blob)) {
		Object.keys(data).forEach((key) => {
			buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
		});
	} else {
		const value = data == null ? '' : data;

		formData.append(parentKey, value);
	}
};

const sendData = () => {
	let formsDate = [];
	const formData = new FormData();

	request.querySelector('.request__data').querySelectorAll('.request__item').forEach((item) => {
		let obj = {};
		new FormData(item).forEach((value, key) => {
			obj[key] = value;
		});
		formsDate.push(obj);
	});

	buildFormData(formData, formsDate);

	submitForm.sendData(formData, 'https://my.loaderpro.ru/pz_request/pz_request_orders', document.querySelector('main'));

	formData.forEach((i, k) => {
		console.log(k, i);
	});
};

const init = () => {
	if (!request) {
		return;
	}

	getData();
	request.querySelector('.request__send').addEventListener('click', () => {
		sendData();
	});
};

export default {
	init,
};
