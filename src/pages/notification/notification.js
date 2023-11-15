import {Form} from '../../components/form/form';

const listener = () => {
	document.querySelectorAll('.notification__item').forEach((el) => {
		el.addEventListener('click', () => {
			const sendData = new Form('POST');
			const noteid = el.dataset.id;
			const object = {
				noteid,
			};

			sendData.sendData(object, 'https://my.loaderpro.ru/notifications/note_read');
			el.classList.remove('is-new');
		});
	});
};

const init = () => {
	if (document.querySelector('.notification')) {
		listener();
	}
};

export default {
	init,
};
