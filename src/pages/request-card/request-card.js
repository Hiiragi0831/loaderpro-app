const requestCard = document.querySelector('.request-card');
const colors = {
	'status-0': 'grey',
	'status-1': 'blue-1',
	'status-2': 'blue-2',
	'status-3': 'blue-3',
	'status-4': 'blue-4',
	'status-5': 'green',
};

const colorSet = (colors, target) => {
	for (let value of Object.keys(colors)) {
		console.log(value);
	}

	for (let value of Object.values(colors)) {
		console.log(value);
	}
};
const init = () => {
	if (!requestCard) {
		return;
	}

	const select = requestCard.querySelector('.request-card__select');
	// colorSet(colors, select);

	select.addEventListener('change', (evt) => {
		// colorSet(colors, select);
		select.dataset.color = evt.target.value;
	});
};

export default {
	init,
};
