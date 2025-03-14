import {Form} from '../../components/form/form';
import {Cookie} from '../../components/cookies/cookies';
const requestCard = document.querySelector('.request-card');
const sendForm = new Form('POST');

const marginCalc = () => {
	const margin = requestCard.querySelector('[name="margin"]');
	const marginpercent = requestCard.querySelector('[name="marginpercent"]');
	const budget = requestCard.querySelector('[name="budget"]');
	const purchase = requestCard.querySelector('[name="purchase"]');
	const additionalaccounts = requestCard.querySelector('[name="additionalaccounts"]');
	const delivery = requestCard.querySelector('[name="delivery"]');

	margin.disabled = true;
	marginpercent.disabled = true;

	const formula = () => {
		margin.value = budget.value - purchase.value - additionalaccounts.value - delivery.value;
		// маржа / бюджет * 100
		marginpercent.value = Math.round(margin.value / budget.value * 100 * 10) / 10;
	};

	formula();

	[budget, purchase, additionalaccounts, delivery].forEach((i) => {
		i.addEventListener('change', () => {
			formula();
		});
	});
};

const colorChange = () => {
	const select = requestCard.querySelector('.request-card__select');
	select.dataset.color = select.querySelector('select').value;

	select.querySelector('select').addEventListener('change', (evt) => {
		select.dataset.color = evt.target.value;
	});
};
// eslint-disable-next-line
const typeChange = (modal) => {
	const type = modal.querySelector('[name="type"]');
	const category = modal.querySelector('[name="category"]');

	category.addEventListener('change', (i) => {
		const jwt = new Cookie('jwt');
		const fd = new FormData();

		fd.append('jwt', jwt.get('jwt'));
		fd.append('value', i.target.value);

		const fe = fetch('/Main/category_type/', {
			method: 'POST',
			body: fd,
		});

		fe.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error();
		}).then((responseJson) => {
			console.log(responseJson);
			type.innerHTML = responseJson.html;
		}).catch((error) => {
			console.log(error);
		});
	});
};

const sendData = () => {
	sendForm.init('/request_card/request_card_save/', requestCard.querySelector('[data-request-card]'));
};

const importXls = () => {
	if (document.querySelector('[data-form-import]')) {
		sendForm.init('/request_card/request_card_import_xls/', document.querySelector('[data-form-import]'));
	}
};

const exportFile = () => {
	if (document.querySelector('[data-export]')) {
		sendForm.init('/request_card/request_card_export_file/', document.querySelector('[data-export]'));
	}
};

const addProduct = () => {
	sendForm.init('/request_card/request_card_product_create/', document.querySelector('[data-add-product]'));
};

const editProduct = () => {
	const forms = document.querySelectorAll('[data-edit-product]');

	forms.forEach((form) => {
		sendForm.init('/request_card/request_card_product_edit/', form);
	});
};

const init = () => {
	if (!requestCard) {
		return;
	}

	colorChange();
	marginCalc();
	sendData();
	editProduct();
	importXls();
	exportFile();
	addProduct();
};

export default {
	init,
};
