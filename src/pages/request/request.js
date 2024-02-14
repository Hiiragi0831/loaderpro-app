const request = document.querySelector('.request');
const init = () => {
	if (!request) {
		return;
	}
	let object = {};

	new FormData(request.querySelector('.request__item')).forEach((value, key) => {
		object[key] = value;
	});
};

export default {
	init,
};
