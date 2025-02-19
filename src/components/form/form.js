import {Notyf} from 'notyf';
import {Cookie} from '../cookies/cookies';
let notyf = new Notyf({
	duration: 5000,
	position: {
		x: 'right',
		y: 'top',
	},
});

export class Form {
	constructor(method) {
		this.method = method;
		this.target = null;
		this.elappend = null;
		this.cookieJwt = new Cookie('jwt');
		this.evt = new Event('statusSuccess', {
			bubbles: true,
			cancelable: false,
		});
	}

	async sendForm(data, url) {
		try {
			return await fetch(url, {
				method: this.method,
				body: data,
			});
		} catch (error) {
			return error;
		}
	}

	sendData(data, url, elappend) {
		if (elappend) {
			this.elappend = elappend;
		}
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

	renderHtml(html) {
		this.elappend.innerHTML = '';
		this.elappend.insertAdjacentHTML('beforeend', html);
	}

	onSuccess(responseJson) {
		console.log('Ваша форма успешна отправлена', responseJson);

		if (responseJson.status === 'error') {
			notyf.error(responseJson.message);

			if (responseJson.html === '') {
				this.elappend.innerHTML = '';

				if (this.elappend.parentElement.querySelector('[data-more]')) {
					this.elappend.parentElement.querySelector('[data-more]').classList.add('is-hidden');
				}
			}

			return;
		}
		document.dispatchEvent(this.evt);

		notyf.success(responseJson.message);

		if (responseJson.html) {
			this.renderHtml(responseJson.html);
		} else if (responseJson.html === '') {
			this.elappend.innerHTML = '';
		}

		if (responseJson.updateData) {
			// eslint-disable-next-line guard-for-in
			for (const key in responseJson.updateData) {
				if (key === 'image') {
					console.log(key, responseJson.updateData[key]);
				}
				this.target.querySelector(`input[name=${key}]`).value = responseJson.updateData[key];
			}
		}

		if (responseJson.count) {
			this.elappend.parentElement.querySelector('[data-more]').querySelector('[name="query_more"]').value = responseJson.count;
		}

		if (responseJson.link) {
			window.location.href = responseJson.link;
		}

		if (responseJson.count === 0) {
			this.elappend.parentElement.querySelector('[data-more]').classList.add('is-hidden');
		}

		if (responseJson.jwt) {
			this.cookieJwt.set(responseJson.jwt, 1);
		}

		if (responseJson.url) {
			window.location.href = responseJson.url;
		}

		if (responseJson.vehicle_id) {
			const vehicleId = new Cookie('vehicle_id');
			vehicleId.set(responseJson.vehicle_id, 1);
		}

		if (responseJson.basket) {
			document.querySelector('.header__basket .header__icon span').innerHTML = responseJson.basket.count;
			document.querySelector('.header__basket b').innerHTML = `${responseJson.basket.sum} ₽`;
		}
		if (this.target) {
			this.target.querySelector('[type="submit"]').disabled = false;
			this.target.querySelector('[type="submit"]').classList.remove('is-loading');
		}
	}

	onError(error) {
		console.error('Произошла ошибка отправки', error);
		notyf.error('Произошла ошибка отправки');
		if (this.target) {
			this.target.querySelector('[type="submit"]').disabled = false;
			this.target.querySelector('[type="submit"]').classList.remove('is-loading');
		}
	}

	send(action, target, elappend) {
		const fd = new FormData(target);
		fd.append('jwt', this.cookieJwt.get('jwt'));
		this.sendData(fd, action, elappend);
	}

	setAttribute(target) {
		const labels = target.querySelectorAll('label');

		labels.forEach((i) => {
			if (i.dataset.required) {
				i.querySelector('input').required = true;
			}

			if (i.dataset.disabled) {
				i.querySelector('input').disabled = true;
			}
		});
	}

	init(action, target, elappend) {
		target.addEventListener('submit', async (evt) => {
			evt.preventDefault();
			this.target = target;
			this.target.querySelector('[type="submit"]').classList.add('is-loading');
			this.target.querySelector('[type="submit"]').disabled = true;
			this.send(action, target, elappend);
		});

		this.setAttribute(target);
	}
}
