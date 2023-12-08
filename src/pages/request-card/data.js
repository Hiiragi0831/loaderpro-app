const typeData = [
	{
		category: 'category-0',
		options: ['Двигатели в сборе и части двигателя', 'Система охлаждения двигателя', 'Кривошипно-шатунный механизм', 'Газораспределительный механизм', 'Запчасти привода гидронасоса', 'Топливная система двигателя', 'Система впуска/выпуска', 'Электрооборудование двигателя', 'Прокладки и уплотнения двигателя', 'Детали корпуса двигателя', 'Система смазки двигателя', 'Выхлопная система двигателя', 'Масла и смазки', 'Другие детали двигателя'],
	}, {
		category: 'category-1',
		options: ['Радиаторы', 'Патрубки радиатора', 'Бачки расширительные', 'Другие запчасти системы охлаждения'],
	}, {
		category: 'category-2',
		options: ['Фильтры масляные', 'Фильтры воздушные', 'Фильтры топливные', 'Фильтры гидравлические', 'Фильтры АКПП', 'Фильтры газовые', 'Другие фильтры'],
	}, {
		category: 'category-3',
		options: ['Прокладки и уплотнения ВМ', 'Полуоси и суппорта', 'Сальники и сапуны', 'Ступицы ВМ', 'Шестерни ведущего моста', 'Другие детали ВМ'],
	}, {
		category: 'category-4',
		options: ['Прокладки и уплотнения УМ', 'Тяги рулевые', 'Кулаки поворотные', 'Пальцы рулевые', 'Наконечники рулевые', 'Ступицы УМ', 'Балки УМ', 'Втулки УМ', 'Кардан рулевого управления', 'Опоры УМ', 'Шкворни и оси УМ', 'Рычаги рулевые', 'УМ в сборе', 'Другие детали УМ'],
	}, {
		category: 'category-5',
		options: ['Зеркала для погрузчиков', 'Кабины для погрузчиков', 'Детали корпуса', 'Механизм стеклоочистителя', 'Педали и рычаги', 'Переключатели подрулевые', 'Сиденья', 'Тросы сцепления и газа', 'Упоры газовые', 'Глушители', 'Выхлопные трубы', 'Другие детали корпуса'],
	}, {
		category: 'category-6',
		options: ['Вкладыши', 'Оси, пальцы, скобы', 'Ремкомплекты и сальники', 'Ролики и подшипники', 'Цепи грузоподъёмные', 'Другие запчасти мачт'],
	}, {
		category: 'category-7',
		options: ['Корзины сцепления', 'Диски сцепления', 'Цилиндр сцепления главный', 'Цилиндр сцепления рабочий', 'Диски КПП', 'Прокладки и сальники КПП', 'Насосы КПП', 'Гидротрансформаторы', 'Валы карданные КПП', 'Электромагнитный клапан АКПП', 'Шестерни КПП', 'Щупы АКПП', 'Опоры КПП', 'Тросы и тяги управления КПП', 'Другие детали трансмиссии'],
	}, {
		category: 'category-8',
		options: ['Цилиндры гидравлические', 'Насосы гидравлические', 'Вал ведущий', 'Вал карданный', 'Распределитель гидралический', 'Шланги гидравлические, патрубки', 'Клапаны гидравлические', 'Сальники и ремкомплекты', 'Другие запчасти гидравлики'],
	}, {
		category: 'category-9',
		options: ['Цилиндры гидравлические', 'Насосы гидравлические', 'Вал ведущий', 'Вал карданный', 'Распределитель гидралический', 'Шланги гидравлические, патрубки', 'Клапаны гидравлические', 'Сальники и ремкомплекты', 'Другие запчасти гидравлики'],
	}, {
		category: 'category-9',
		options: ['Цилиндры тормозные главные', 'Цилиндры тормозные рабочие', 'Колодки тормозные', 'Трубки тормозные', 'Барабаны тормозные', 'Пластины фрикционные', 'Рычаги стояночного тормоза', 'Тросы тормоза', 'Другие детали тормозной системы'],
	}, {
		category: 'category-10',
		options: ['Редукторы рулевые', 'Сальники, манжеты, ремкомплекты', 'Колесо рулевое', 'Колонка рулевая', 'Цилиндр рулевой', 'Усилители руля', 'Шток рулевого цилиндра', 'Электродвигатель рулевого управления', 'Другие запчасти шасси'],
	}, {
		category: 'category-11',
		options: ['Батареи аккумуляторные', 'Замки зажигания', 'Выключатели массы', 'Кабели и провода', 'Соединители', 'Контакторы', 'Микропереключатели', 'Панель приборов', 'Потенциометры', 'Блоки предохранителей', 'Предохранители', 'Реле', 'Транзисторы', 'Электродвигатели', 'Детали электродвигателя', 'Электровентиляторы', 'Другие запчасти электрики'],
	}, {
		category: 'category-12',
		options: ['Шины пневматические', 'Шинокомплекты', 'Шины цельнолитые', 'Шины бандажные', 'Камеры и ободные ленты', 'Колеса полиуретановые', 'Цепи противоскольжения'],
	}, {
		category: 'category-13',
		options: ['Вилы и удлинители', 'Захваты', 'Устройство бокового смещения', 'Другое навесное оборудование'],
	}, {
		category: 'category-14',
		options: ['Наборы сервисные'],
	}, {
		category: 'category-15',
		options: ['Оборудование газовое', 'Лампочки', 'Маячки проблесковые', 'Фары передние', 'Фонари габаритов', 'Фонари задние'],
	},
];

export default typeData;