import {Notyf} from 'notyf';

let notyf = new Notyf();
const sendForm = async (data) => {
	try {
		return await fetch('https://api.loaderpro.ru/auth/api/create_user.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
	} catch (error) {
		return error;
	}
};
const init = () => {
	const form = document.querySelector('[data-registration-form]');
	// При отправке формы входа
	form.addEventListener('submit', async (evt) => {
		evt.preventDefault();

		let object = {};

		new FormData(form).forEach((value, key) => {
			object[key] = value;
		});

		sendForm(object)
			.then((response) => {
				console.log('then', response);
				if (response.ok) {
					return response.json();
				}
				throw new Error('Something went wrong');
			})
			.then((responseJson) => {
				notyf.success(responseJson.message);
				console.log('then', responseJson);
			})
			.catch((error) => {
				notyf.error(error.message);
				console.log('catch', error);
			});
	});
};

export default {
	init,
};
