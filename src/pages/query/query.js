const addItem = (container) => {
	container.addEventListener('submit', (e) => {
		e.preventDefault();

		let object = {};

		new FormData(container).forEach((value, key) => {
			object[key] = value;
		});
	});
};

const renderItems = () => {

}
const init = () => {
	if (document.querySelector('.query')) {
		addItem(document.querySelector('[data-price-request]'));
	}
};

export default {
	init,
};
