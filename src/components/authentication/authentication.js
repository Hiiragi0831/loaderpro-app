import {Notyf} from 'notyf';

let notyf = new Notyf();
const sendForm = async (data) => {
	try {
		return await fetch('/auth/api/login.php', {
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
	const loginForm = document.querySelector('[data-login-form]');
	// При отправке формы входа
	loginForm.addEventListener('submit', async (evt) => {
		evt.preventDefault();

		let object = {};

		new FormData(loginForm).forEach((value, key) => {
			object[key] = value;
		});

		sendForm(object)
			.then((response) => {
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
