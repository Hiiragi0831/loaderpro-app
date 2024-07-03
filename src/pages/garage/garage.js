import {Form} from '../../components/form/form';

const page = document.querySelector('.garage');
const sendData = new Form('POST');
const init = () => {
	if (!page) {
		return;
	}

	sendData.init('/garage/garage_search ', page.querySelector('[data-garage-search]'), page.querySelector('.garage__items'))

	;
};

export default {
	init,
};
