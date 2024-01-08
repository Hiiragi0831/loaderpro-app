import {Notyf} from 'notyf';
import {Cookie} from '../cookies/cookies';
let notyf = new Notyf();

export class Form {
	constructor(method) {
		this.data = {};
		this.method = method;
		this.elappend = null;
		this.cookieJwt = new Cookie('jwt');
	}

	async sendForm(data, url) {
		console.log(JSON.stringify(data));
		try {
			return await fetch(url, {
				method: this.method,
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

	convertStringToHTML(htmlString) {
		const parser = new DOMParser();
		const html = parser.parseFromString(htmlString, 'text/html');

		return html.body;
	}

	renderHtml(html) {
		this.elappend.innerHTML = '';
		this.elappend.append(this.convertStringToHTML(html));
	}

	onSuccess(responseJson) {
		console.log('Ваша форма успешна отправлена', responseJson);
		if (responseJson.status === 'error') {
			notyf.error(responseJson.message);
		} else {
			notyf.success(responseJson.message);

			if (responseJson.html) {
				this.renderHtml(responseJson.html);
			}

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

	fileUpload(files, action, type) {
		if (files.length === 0) {
			this.sendData(this.data, action);
		}

		// Create FormData instance
		const fd = new FormData();

		// Iterate over all selected files
		Array.from(files).forEach((file) => {
			if (type === 'image') {
				fd.append('images[]', file, file.name);
			} else {
				fd.append('file', file, file.name);
			}
		});

		// Create XHR rquest
		const xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.onload = () => {
			console.log(xhr.response);
			this.data.filepath = xhr.response.filepath;
		};
		xhr.open('POST', action);
		xhr.send(fd);

		this.sendData(this.data, action);
	}

	send(action, target) {
		const fd = new FormData(target);
		let check = true;

		fd.forEach((value, key) => {
			this.data[key] = value;
		});
		this.data.jwt = this.cookieJwt.get('jwt');

		if (target.querySelector('[name="images[]"]')) {
			check = false;
			this.fileUpload(target.querySelector('[type="file"]').files, action, 'image');
		}

		if (target.querySelector('[name="upload-file"]')) {
			check = false;
			this.fileUpload(target.querySelector('[type="file"]').files, action, 'file');
		}

		if (check) {
			this.sendData(this.data, action);
		}
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

	init(action, target, elappend, parameter) {
		target.addEventListener('submit', async (evt) => {
			evt.preventDefault();

			this.send(action, target);
		});

		this.elappend = elappend;
		this.data.parameter = parameter;

		this.setAttribute(target);
	}
}
