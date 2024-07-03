import {Form} from '../../components/form/form';

const page = document.querySelector('.vehicle');
const sendForm = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}

	if (page.querySelector('.vehicle__form')) {
		sendForm.init('/vehicle/vehicle_add', page.querySelector('.vehicle__form'), document.querySelector('main'));
	}

	if (page.querySelector('.pz_vehicle__form')) {
		sendForm.init('/pz_vehicle/vehicle_add', page.querySelector('.pz_vehicle__form'), document.querySelector('main'));
	}
};

export default {
	init,
};
