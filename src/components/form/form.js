import {Notyf} from 'notyf';
import {Cookie} from '../cookies/cookies';
let notyf = new Notyf();

export class Form {
	constructor(method) {
		this.data = {};
		this.method = method;
		this.cookieJwt = new Cookie('jwt');
	}

	async sendForm(data, url) {
		console.log(JSON.stringify(data));
		try {
			return await fetch(url, {
				method: this.method,
				// headers: {
				// 	'Content-Type': 'application/json',
				// },
				body: JSON.stringify(data),
			});
		} catch (error) {
			return error;
		}
	}

	sendData(data, url) {
		console.log(url, data);
		this.sendForm(data, url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error();
			}).then((responseJson) => {
				this.onSuccess(responseJson);
			})
			.catch((error) => {
				this.onError(error);
			});
	}

	onSuccess(responseJson) {
		console.log('Ваша форма успешна отправлена', responseJson);
		if (responseJson.status === 'error') {
			notyf.error(responseJson.message);
		} else {
			notyf.success(responseJson.message);

			if (responseJson.jwt) {
				this.cookieJwt.set(responseJson.jwt, 1);
			}

			if (responseJson.url) {
				window.location.href = responseJson.url;
			}
		}
	}

	onError(error) {
		console.error('Произошла ошибка отправки', error);
		notyf.error('Произошла ошибка отправки');
	}

	send(action, target) {
		new FormData(target).forEach((value, key) => {
			this.data[key] = value;
		});

		this.sendData(this.data, action);
	}

	init(action, target) {
		target.addEventListener('submit', async (evt) => {
			evt.preventDefault();

			this.send(action, target);
		});
	}
}
