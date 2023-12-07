import typeData from './data';
const requestCard = document.querySelector('.request-card');

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

const typeChange = (modal) => {
	const type = modal.querySelector('[name="type"]');
	const category = modal.querySelector('[name="category"]');

	category.addEventListener('change', (i) => {
		type.innerHTML = '';

		typeData.forEach((data) => {
			const options = [];

			data.options.forEach((text, index) => {
				options.push(`<option value="type-${index}" label="${text}">type-${index}</option>`);
			});

			if (i.target.value === data.category) {
				type.innerHTML = options.join('');
			}
		});
	});
};

const init = () => {
	if (!requestCard) {
		return;
	}

	colorChange();
	marginCalc();

	document.querySelectorAll('.modal').forEach((i) => {
		typeChange(i);
	});
};

export default {
	init,
};
