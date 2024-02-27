const page = document.querySelector('.basket');
const init = () => {
	if (!page) {
		return;
	}
	const informationInfo = page.querySelector('.basket__information-info');

	page.querySelectorAll('.basket__product').forEach((item) => {
		item.querySelector('.basket__product-del').addEventListener('click', (evt) => {
			evt.preventDefault();
			item.remove();
		});
	});

	page.querySelector('.basket__information-radio').querySelectorAll('.form__radio').forEach((item) => {
		item.querySelector('input').addEventListener('change', () => {
			if (item.querySelector('input').value === 'client') {
				informationInfo.classList.remove('is-hidden');
				informationInfo.querySelectorAll('input, select').forEach((i) => {
					i.disabled = false;
				});
			} else if (item.querySelector('input').value === 'default') {
				informationInfo.classList.add('is-hidden');
				informationInfo.querySelectorAll('input, select').forEach((i) => {
					i.disabled = true;
				});
			}
		});
	});
};

export default {
	init,
};
