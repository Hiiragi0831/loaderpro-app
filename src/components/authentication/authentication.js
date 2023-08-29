import {Notyf} from 'notyf';

let notyf = new Notyf();
const sendForm = async (data) => {
	let response = await fetch('/auth/api/login.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return response.json();
};
const init = () => {
	const loginForm = document.querySelector('[data-login-form]');
	// При отправке формы входа
	loginForm.addEventListener('submit', (evt) => {
		evt.preventDefault();

		let object = {};

		new FormData(loginForm).forEach((value, key) => {
			object[key] = value;
		});

		sendForm(object)
			.then((response) => {
				notyf.success(response.message);
				console.log('then', response);
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
