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

	// бюджет - закупка - доп затраты - доставка
	margin.value = budget.value - purchase.value - additionalaccounts.value - delivery.value;
	// маржа / бюджет * 100
	marginpercent.value = margin.value / budget.value * 100;
};
const init = () => {
	if (!requestCard) {
		return;
	}

	const select = requestCard.querySelector('.request-card__select');
	select.dataset.color = select.querySelector('select').value;

	select.querySelector('select').addEventListener('change', (evt) => {
		select.dataset.color = evt.target.value;
	});

	marginCalc();
};

export default {
	init,
};
