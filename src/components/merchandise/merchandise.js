import {Form} from '../form/form';

const merchandise = document.querySelector('.merchandise');
const formSend = new Form('POST');
const init = () => {
	if (!merchandise) {
		return;
	}
	document.querySelectorAll('.merchandise').forEach((item) => {
		formSend.init('https://my.loaderpro.ru/basket/basket_add', item);
	});
};

export default {
	init,
};
