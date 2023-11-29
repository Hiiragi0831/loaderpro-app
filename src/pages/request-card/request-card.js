const requestCard = document.querySelector('.request-card');
const init = () => {
	if (!requestCard) {
		return;
	}

	const select = requestCard.querySelector('.request-card__select');
	select.dataset.color = select.querySelector('select').value;

	select.querySelector('select').addEventListener('change', (evt) => {
		select.dataset.color = evt.target.value;
	});
};

export default {
	init,
};
