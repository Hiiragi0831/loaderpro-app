import {Form} from '../../components/form/form';
import {Notyf} from 'notyf';

const init = () => {
	if (document.querySelector('[data-account-form]')) {
		let notyf = new Notyf();
		const form = document.querySelector('[data-account-form]');
		const sendData = new Form('POST');
		const password = form.querySelector('.password').querySelector('input');
		const passwordRepeat = form.querySelector('.password-repeat').querySelector('input');
		let change = false;

		password.addEventListener('change', () => {
			change = true;
		});

		passwordRepeat.addEventListener('change', () => {
			if (password.value === passwordRepeat.value) {
				change = false;
			} else {
				change = true;
				notyf.error('Пароли не совпадают');
			}
		});

		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
			if (!change) {
				sendData.send('https://api.loaderpro.ru/account/save/', form);
			} else {
				notyf.error('Пароли не совпадают');
			}
		});
	}
};

export default {
	init,
};

// $('body').on('click', '.row-notifications', function(){
// 	var noteid = $(this).attr('data-id');
// 	var urlsite = window.location.pathname+'/note_read/';
// 	$(this).attr('style', 'opacity: 0.5;');
//
// 	$.ajax({
// 		type: "POST",
// 		url: urlsite,
// 		data: {
// 			'noteid': noteid
// 		}
// 	});
// });
