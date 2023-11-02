import {Form} from '../form/form';
const init = () => {
	if (document.querySelector('[data-registration-form]')) {
		const form = document.querySelector('[data-registration-form]');
		const sendData = new Form('POST');

		form.addEventListener('submit', async (evt) => {
			evt.preventDefault();

			document.querySelectorAll('.form__checkbox').forEach((el) => {
				if (el.querySelector('input').checked) {
					const input = document.querySelector(`[name="${el.querySelector('input').dataset.name}"]`);
					input.value = el.querySelector('input').value;
				}
			});

			sendData.send('https://my.loaderpro.ru/Main/create_user/', form);
		});
	}
};

export default {
	init,
};
