const page = document.querySelector('[data-list-orders]');
const init = () => {
	if (!page) {
		return;
	}

	document.querySelector('.notyf').classList.add('is-hidden');
};

export default {
	init,
};
