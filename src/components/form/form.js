import {Notyf} from 'notyf';
import {Cookie} from '../cookies/cookies';
let notyf = new Notyf();

export class Form {
	constructor(method) {
		this.method = method;
		this.elappend = null;
		this.cookieJwt = new Cookie('jwt');
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
		console.log(url, data);
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

		notyf.success(responseJson.message);

		if (responseJson.html) {
			this.renderHtml(responseJson.html);
		} else if (responseJson.html === '') {
			this.elappend.innerHTML = '';
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
	}

	onError(error) {
		console.error('Произошла ошибка отправки', error);
		notyf.error('Произошла ошибка отправки');
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

			this.send(action, target, elappend);
		});

		this.setAttribute(target);
	}
}
