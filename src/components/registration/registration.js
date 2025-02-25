import {Form} from '../form/form';
import {validateCount} from '../validate/validate';
// import validator from 'validator';
const sendData = new Form('POST');

const init = () => {
	if (document.querySelector('[data-registration-form]')) {
		const form = document.querySelector('[data-registration-form]');

		form.querySelectorAll('.form__checkbox').forEach((el) => {
			el.addEventListener('change', () => {
				if (el.querySelector('input').checked) {
					const input = document.querySelector(`[name="${el.querySelector('input').dataset.name}"]`);
					input.value = el.querySelector('input').value;
				} else {
					const input = document.querySelector(`[name="${el.querySelector('input').dataset.name}"]`);
					input.value = '';
				}
			});
		});

		const formName = form.querySelector('input[name="firstname"]');
		validateCount(formName, 20);

		sendData.init('/Main/create_user/', form);
		// form.addEventListener('submit', (evt) => {
		// 	evt.preventDefault();
		// 	const firstname = validator.isAlphanumeric(formName.value, ['ru-RU'], {ignore: '-'});
		// 	console.log(firstname);
		//
		// 	sendData.send('/Main/create_user/', form);
		// });
	}
};

export default {
	init,
};
