import {Form} from '../../components/form/form';

const page = document.querySelector('.vehicle');
const sendForm = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}

	sendForm.init('https://my.loaderpro.ru/vehicle/vehicle_add', page.querySelector('.vehicle__form'));
};

export default {
	init,
};
