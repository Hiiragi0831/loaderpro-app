import {Notyf} from 'notyf';
import {Cookie} from '../../components/cookies/cookies';

let notyf = new Notyf();

const sendForm = async (data) => {
	try {
		return await fetch('https://api.loaderpro.ru/Main/orders', {
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

const addItem = (container) => {
	container.addEventListener('submit', (e) => {
		e.preventDefault();
		const jwt = new Cookie('jwt');

		let object = {};

		new FormData(container).forEach((value, key) => {
			object[key] = value;
		});

		object.jwt = jwt.get('jwt');

		console.log(object);

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

					// barba.go(responseJson.url);
				}

				console.log('then', responseJson);
			})
			.catch((error) => {
				notyf.error(error.message);
				console.log('catch', error);
			});
	});
};
const init = () => {
	if (document.querySelector('.query')) {
		addItem(document.querySelector('[data-price-request]'));
	}
};

export default {
	init,
};
