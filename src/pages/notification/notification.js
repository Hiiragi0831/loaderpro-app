import {Form} from '../../components/form/form';

const listener = () => {
	document.querySelectorAll('.notification').forEach((el) => {
		el.addEventListener('click', () => {
			const sendData = new Form('POST');
			const fd = new FormData();

			fd.append('noteid', el.dataset.id);

			if (el.dataset.read === '0') {
				sendData.sendData(fd, '/notifications/note_read');
				el.dataset.read = 1;
			}

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
