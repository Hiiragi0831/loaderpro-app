import {uploadFileImg} from '../../components/input-file/js/init-upload';

const request = document.querySelector('.request');
const data = {};

const renderItem = () => {
	const clone = request.querySelector('#request-item').content.cloneNode(true);

	clone.querySelector('input[name="titleparts"]').value = data.titleparts;
	clone.querySelector('input[name="numparts"]').value = data.numparts;
	clone.querySelector('input[name="count"]').value = data.count;
	clone.querySelector('input[name="comment"]').value = data.comment;
	clone.querySelector('.request__item-comment').textContent = data.comment;
	uploadFileImg(clone.querySelector('[data-upload="file-img"]'));

	request.querySelector('.request__items').append(clone);
};
const getData = () => {
	request.querySelector('.request__request').addEventListener('submit', (evt) => {
		evt.preventDefault();

		new FormData(evt.target).forEach((value, key) => {
			data[key] = value;
		});

		renderItem();
	});
};

const sendData = () => {
	let object = {};
	new FormData(request.querySelector('.request__item')).forEach((value, key) => {
		object[key] = value;
	});
};

const init = () => {
	if (!request) {
		return;
	}

	getData();
	sendData();
};

export default {
	init,
};
