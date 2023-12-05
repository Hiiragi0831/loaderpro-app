let countries = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antigua &amp; Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia',
	'Bosnia &amp; Herzegovina',
	'Botswana',
	'Brazil',
	'British Virgin Islands',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Cayman Islands',
	'Central Arfrican Republic',
	'Chad',
	'Chile',
	'China',
	'Colombia',
	'Congo',
	'Cook Islands',
	'Costa Rica',
	'Cote D Ivoire',
	'Croatia',
	'Cuba',
	'Curacao',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Falkland Islands',
	'Faroe Islands',
	'Fiji',
	'Finland',
	'France',
	'French Polynesia',
	'French West Indies',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guam',
	'Guatemala',
	'Guernsey',
	'Guinea',
	'Guinea Bissau',
	'Guyana',
	'Haiti',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Ireland',
	'Isle of Man',
	'Israel',
	'Italy',
	'Jamaica',
	'Japan',
	'Jersey',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Kosovo',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macau',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Mauritania',
	'Mauritius',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauro',
	'Nepal',
	'Netherlands',
	'Netherlands Antilles',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'North Korea',
	'Norway',
	'Oman',
	'Pakistan',
	'Palau',
	'Palestine',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Poland',
	'Portugal',
	'Puerto Rico',
	'Qatar',
	'Reunion',
	'Romania',
	'Russia',
	'Rwanda',
	'Saint Pierre &amp; Miquelon',
	'Samoa',
	'San Marino',
	'Sao Tome and Principe',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Korea',
	'South Sudan',
	'Spain',
	'Sri Lanka',
	'St Kitts &amp; Nevis',
	'St Lucia',
	'St Vincent',
	'Sudan',
	'Suriname',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	"Timor L'Este",
	'Togo',
	'Tonga',
	'Trinidad &amp; Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks &amp; Caicos',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom',
	'United States of America',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican City',
	'Venezuela',
	'Vietnam',
	'Virgin Islands (US)',
	'Yemen',
	'Zambia',
	'Zimbabwe',
];
const autocomplete = (input, data) => {
	function ciSearch(what = '', where = '') {
		return where.toUpperCase().search(what.toUpperCase());
	}

	input.classList.add('autocomplete-input');
	let wrap = document.createElement('div');
	wrap.className = 'autocomplete-wrap';
	input.parentNode.insertBefore(wrap, input);
	wrap.appendChild(input);

	let list = document.createElement('div');
	list.className = 'autocomplete-list';
	wrap.appendChild(list);

	let matches = [];
	let listItems = [];
	let focusedItem = -1;

	function setActive(active = true) {
		if (active) {
			wrap.classList.add('active');
		} else {
			wrap.classList.remove('active');
		}
	}

	function unfocusAllItems() {
		listItems.forEach((item) => {
			item.classList.remove('focused');
		});
	}

	// eslint-disable-next-line consistent-return
	function focusItem(index) {
		if (!listItems.length) {
			return false;
		}
		if (index > listItems.length - 1) {
			return focusItem(0);
		}
		if (index < 0) {
			return focusItem(listItems.length - 1);
		}
		focusedItem = index;
		unfocusAllItems();
		listItems[focusedItem].classList.add('focused');
	}
	// eslint-disable-next-line consistent-return
	function selectItem(index) {
		if (!listItems[index]) {
			return false;
		}
		input.value = listItems[index].innerText;
		setActive(false);
	}

	// eslint-disable-next-line consistent-return
	input.addEventListener('input', () => {
		let value = input.value;
		if (!value) {
			return setActive(false);
		}

		list.innerHTML = '';
		listItems = [];

		// eslint-disable-next-line consistent-return
		data.forEach((dataItem, index) => {
			let search = ciSearch(value, dataItem);
			if (search === -1) {
				return false;
			}
			matches.push(index);

			let parts = [
				dataItem.substr(0, search),
				dataItem.substr(search, value.length),
				dataItem.substr(search + value.length, dataItem.length - search - value.length),
			];

			let item = document.createElement('div');
			item.className = 'autocomplete-item';
			item.innerHTML = `${parts[0]}<strong>${parts[1]}</strong>${parts[2]}`;
			list.appendChild(item);
			listItems.push(item);

			item.addEventListener('click', () => {
				selectItem(listItems.indexOf(item));
			});
		});

		if (listItems.length > 0) {
			focusItem(0);
			setActive(true);
		} else {
			setActive(false);
		}
	});

	input.addEventListener('keydown', (e) => {
		let keyCode = e.keyCode;

		if (keyCode === 40) { // arrow down
			e.preventDefault();
			focusedItem++;
			focusItem(focusedItem);
		} else if (keyCode === 38) { // arrow up
			e.preventDefault();
			if (focusedItem > 0) {
				focusedItem--;
			}
			focusItem(focusedItem);
		} else if (keyCode === 27) { // escape
			setActive(false);
		} else if (keyCode === 13) { // enter
			selectItem(focusedItem);
		}
	});

	document.body.addEventListener('click', (e) => {
		if (!wrap.contains(e.target)) {
			setActive(false);
		}
	});
};

const init = () => {
	// autocomplete('#autocomplete', countries);
};

export default {
	init,
};
