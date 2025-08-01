import {Form} from '../../components/form/form';

const page = document.querySelector('[data-page-user]');
const form = new Form('POST');

const init = () => {
	if (!page) {
		return;
	}

	form.init('/users/users_search', page.querySelector('[data-search]'), page.querySelector('.page__results'));

	page.querySelectorAll('input[name="admin"]').forEach((i) => {
		i.addEventListener('change', (e) => {
			e.preventDefault();
			const fd = new FormData();

			fd.append('admin', e.target.value);
			fd.append('checked', e.target.checked);
			form.sendData(fd, '/users/users_access_edit');
		});
	});

	page.querySelectorAll('input[name="access"]').forEach((i) => {
		i.addEventListener('change', (e) => {
			e.preventDefault();
			const fd = new FormData();

			fd.append('access', e.target.value);
			fd.append('checked', e.target.checked);
			form.sendData(fd, '/users/users_access_blocking');
		});
	});
};

export default {
	init,
};
