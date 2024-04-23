import {Form} from '../../components/form/form';

const page = document.querySelector('[data-page-user]');
const form = new Form('POST');

const init = () => {
	if (!page) {
		return;
	}

	form.init('https://my.loaderpro.ru/users/users_search', page.querySelector('[data-search]'), page.querySelector('.page__results'));

	page.querySelectorAll('input[name="admin"]').forEach((i) => {
		i.addEventListener('change', (e) => {
			e.preventDefault();
			const fd = new FormData();

			fd.append('admin', e.target.value);
			fd.append('checked', e.target.checked);
			form.sendData(fd, 'https://my.loaderpro.ru/users/users_access_edit');
		});
	});
};

export default {
	init,
};
