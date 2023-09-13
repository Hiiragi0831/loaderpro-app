import {Notyf} from 'notyf';
import {Cookie} from '../cookies/cookies';

let notyf = new Notyf();
const sendForm = async (data) => {
	try {
		return await fetch('https://api.loaderpro.ru/auth/api/login.php', {
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
	if (document.querySelector('[data-login-form]')) {
		const form = document.querySelector('[data-login-form]');
		const jwt = new Cookie('jwt');
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
					if (responseJson.status === '401') {
						notyf.error(responseJson.message);
					} else {
						notyf.success(responseJson.message);
						jwt.set(responseJson.jwt, 1);
					}

					console.log('then', responseJson);
				})
				.catch((error) => {
					notyf.error(error.message);
					console.log('catch', error);
				});
		});
	}
};

export default {
	init,
};
