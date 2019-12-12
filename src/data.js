/*const dataDetail = [
  {id:1, title:"Деталь 1", description:"Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал. Содержит мелкие части", type:"SGR11", consist:"Тормозная система", author:"Стоян Стефанов", price: 750},
  {id:5, title:"Деталь 2", description:"Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.", type:"SGR10, SGR11", consist:"Редуктор", author:"Алекс Бэнкс, Ева Порсело", price: 950},
  {id:6, title:"Деталь 3333333 333333 33333333333", description:"Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.", type:"SGR10, SGR11, SGR16", consist:"Двигатель", author:"Robin Wieruch", price: 1300},
  {id:8, title:"Ограничитель сбрасывания канатов", description:"Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.", type:"SGR10, SGR11, SGR16", consist:"Двигатель", author:"Николас Закас"},
  {id:9, title:"Деталь 5 5 5 5 555555 5 5 5 5 5555 5555", description:"Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.", type:"SGR10, SGR11, SGR16, SGR22, SGR26, SGR31, SGR36", consist:"Корпус", author:"Крис Аквино, Тодд Ганди", price: 2200},
];

export default dataDetail;*/

const dataDetail = [
  {
    id: 1,
    winch: "sgr11",
    title: "Вал",
    description: "Вал (тихоходный) КВШ. Установочные размеры под подшипники Ø45 мм и Ø60 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.716414.001",
    img: "/img_details/МЖИГ.716414.001.jpg"
  },
  {
    id: 2,
    winch: "sgr11",
    title: "Вентилятор",
    description: "Вентилятор охлаждения электродвигателя.\nВнутренний диаметр втулки вентилятора -  Ø72 мм.\nНаружный диаметр – Ø342 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 3,
    winch: "sgr11",
    title: "Втулка",
    description: "Упорная втулка пружины тормоза.\nВнутренний диаметр втулки -  Ø9 мм.\nНаружный диаметр заходной части - Ø15 мм. \nНаружный диаметр упорного торца – Ø25 мм.",
    type: "SGR11, SGR11ЧР, SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 4,
    winch: "sgr11",
    title: "Гайка",
    description: "Гайка упорная пружины тормоза в пластиковом корпусе.\nДиаметр резьбы -  М14 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 5,
    winch: "sgr11",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения.\nНаружный диаметр  - Ø389 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.726325.006",
    img: "/img_details/МЖИГ.726325.006.jpg"
  },
  {
    id: 6,
    winch: "sgr11",
    title: "Кольцо",
    description: "Кольцо дистанционное конусное.\nВнутренний диаметр – Ø45 мм.\nНаружный диаметр – Ø66 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.712141.002",
    img: "/img_details/МЖИГ.712141.002.jpg"
  },
  {
    id: 7,
    winch: "sgr11",
    title: "Корпус редуктора",
    description: "Корпус редуктора.\nМежосевое расстояние – 138.6 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.731378.002",
    img: "/img_details/МЖИГ.731378.002.jpg"
  },
  {
    id: 8,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка крепления подшипника 6009.\nУстановочный наружный диаметр – Ø75 мм.\nНаружный диаметр - Ø121 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.712428.001",
    img: "/img_details/МЖИГ.712428.001.jpg"
  },
  {
    id: 9,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка крепления подшипника 212.\nВнутренний диаметр – Ø75 мм.\nНаружный диаметр - Ø121 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711342.012",
    img: "/img_details/МЖИГ.711342.012.jpg"
  },
  {
    id: 10,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка крепления дуплексного (спаренного) подшипника 6211.\nВнутренний диаметр – Ø89 мм.\nНаружный диаметр - Ø145 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047",
    img: "/img_details/МЖИГ.711142.047.jpg"
  },
  {
    id: 11,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка с маслозаливной горловиной.\nГабаритные размеры: 300х142 мм.\nШесть отверстий – Ø 9 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.735225.001",
    img: "/img_details/МЖИГ.735225.001.jpg"
  },
  {
    id: 12,
    winch: "sgr11",
    title: "Ограничитель сбрасывания канатов",
    description: "Ограничитель сбрасывания канатов.\nГабаритные размеры: 537х108 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.304275.004",
    img: "/img_details/МЖИГ.304275.004.jpg"
  },
  {
    id: 13,
    winch: "sgr11",
    title: "Ось",
    description: "Ось крепления рычага тормоза.\nНаружный диаметр – Ø30 мм.\nДлина – 95 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "МЖИГ.715311.011",
    img: "/img_details/МЖИГ.715311.011.jpg"
  },
  {
    id: 14,
    winch: "sgr11",
    title: "Пробка",
    description: "Пробка слива масла.\nДиаметр резьбы -  М12 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.713511.006",
    img: "/img_details/МЖИГ.713511.006.jpg"
  },
  {
    id: 15,
    winch: "sgr11",
    title: "Прокладка",
    description: "Прокладка резиновая.\nНаружный диаметр - Ø145 мм.\nВнутренний диаметр - Ø110 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.754154.022",
    img: "/img_details/МЖИГ.754154.022.jpg"
  },
  {
    id: 16,
    winch: "sgr11",
    title: "Прокладка",
    description: "Прокладка резиновая.\nГабаритные размеры: 296х136 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.754142.025",
    img: "/img_details/МЖИГ.754142.025.jpg"
  },
  {
    id: 17,
    winch: "sgr11",
    title: "Прокладка",
    description: "Прокладка резиновая.\nНаружный диаметр - Ø115 мм.\nВнутренний диаметр – Ø76 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.754154.024",
    img: "/img_details/МЖИГ.754154.024.jpg"
  },
  {
    id: 18,
    winch: "sgr11",
    title: "Подшипник",
    description: "Подшипник шариковый радиально упорный, дуплексный.\nНаружный диаметр - Ø100 мм.\nВнутренний диаметр – Ø55 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "6211-Z-RSR N13BA-L138 C4",
    img: "/img_details/6211-Z-RSR N13BA-L138 C4.jpg"
  },
  {
    id: 19,
    winch: "sgr11",
    title: "Подшипник",
    description: "Подшипник шариковый радиальный однорядный. \nНаружный диаметр – Ø75 мм.\nВнутренний диаметр – Ø45 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: 6009,
    img: "/img_details/6009.jpg"
  },
  {
    id: 20,
    winch: "sgr11",
    title: "Подшипник",
    description: "Подшипник шариковый радиальный однорядный. \nНаружный диаметр – Ø52 мм.\nВнутренний диаметр – Ø20 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "6304-ZZ",
    img: "/img_details/6304-ZZ.jpg"
  },
  {
    id: 21,
    winch: "sgr11",
    title: "Подшипник",
    description: "Подшипник роликовый радиальный однорядный. \nНаружный диаметр – Ø110 мм.\nВнутренний диаметр – Ø60 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "N212",
    img: "/img_details/N212.jpg"
  },
  {
    id: 22,
    winch: "sgr11",
    title: "Пружина",
    description: "Пружина тормоза.\nНаружный диаметр – Ø26,2 мм.\nВнутренний диаметр – Ø18 мм.\nДлина – 70,5 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.005",
    img: "/img_details/0411.1386SGR.09.005.jpg"
  },
  {
    id: 23,
    winch: "sgr11",
    title: "Рычага тормоза",
    description: "Рычаг тормоза, тормозные накладки в комплекте.",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000-01",
    img: "/img_details/ПО377.00.00.000-01.jpg"
  },
  {
    id: 24,
    winch: "sgr11",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания.\nВ комплекте: \nструбцина – 2 шт.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.305654.001",
    img: "/img_details/МЖИГ.305654.001.jpg"
  },
  {
    id: 25,
    winch: "sgr11",
    title: "Скоба",
    description: "Скоба подъема и перемещения лебедки.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.745232.010",
    img: "/img_details/МЖИГ.745232.010.jpg"
  },
  {
    id: 26,
    winch: "sgr11",
    title: "Стержень",
    description: "Стержень крепления пружины тормоза.\nДиаметр резьбы – М14 мм.\nДлина – 245 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.024",
    img: "/img_details/МЖИГ.715511.024.jpg"
  },
  {
    id: 27,
    winch: "sgr11",
    title: "Червячная пара\n138,6/48",
    description: "Межосевое расстояние – 138,6 мм.\nПередаточное число – 48.\nВ комплекте:\nчервячное колесо МЖИГ.303812.004;\nчервячный вал МЖИГ.722552.004.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "138,6-48",
    img: "/img_details/138,6-48.jpg"
  },
  {
    id: 28,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба крепления подшипника 6009.\nНаружный диаметр – Ø55 мм.\nТри отверстия – Ø10,5 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-01",
    img: "/img_details/МЖИГ.711312.005-01.jpg"
  },
  {
    id: 29,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба крепления ротора электродвигателя.\nНаружный диаметр – Ø67 мм.\nВнутренний диаметр – Ø17 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.711342.013",
    img: "/img_details/МЖИГ.711342.013.jpg"
  },
  {
    id: 30,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба стопорная.\nГабаритные размеры: 50х36 мм.\nДва отверстия – Ø5 мм и Ø17 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.741314.007",
    img: "/img_details/МЖИГ.741314.007.jpg"
  },
  {
    id: 31,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба крепления КВШ.\nНаружный диаметр – Ø65 мм.\nТри отверстия – Ø10,5 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005",
    img: "/img_details/МЖИГ.711312.005.jpg"
  },
  {
    id: 32,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба стопорная.\nГабаритные размеры: 51х48 мм.\nТри отверстия – Ø11 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.741314.006",
    img: "/img_details/МЖИГ.741314.006.jpg"
  },
  {
    id: 33,
    winch: "sgr11",
    title: "Шкив канатоведущий",
    description: "Шкив канатоведущий.\nНаружный диаметр – Ø620 мм.\nЧисло и диаметр ручьев (шт. / мм): 3х10",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.712695.011",
    img: "/img_details/МЖИГ.712695.011.jpg"
  },
  {
    id: 34,
    winch: "sgr11",
    title: "Шкив тормозной",
    description: "Шкив тормозной.\nНаружный диаметр – Ø328 мм.\nВнутренний диаметр – Ø55 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711196.003",
    img: "/img_details/МЖИГ.711196.003.jpg"
  },
  {
    id: 35,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации ротора на червячном валу.\nГабаритные размеры: 70х12х8 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.006",
    img: "/img_details/0411.1386SGR.01.006.jpg"
  },
  {
    id: 36,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации тормозного шкива на червячном валу.\nГабаритные размеры: 70х14х9 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.006-01",
    img: "/img_details/0411.1386SGR.01.006-01.jpg"
  },
  {
    id: 37,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации червячного колеса на тихоходном валу.\nГабаритные размеры: 50х18х11 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.007",
    img: "/img_details/0411.1386SGR.01.007.jpg"
  },
  {
    id: 38,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации вентилятора охлаждения на втулке ротора электродвигателя.\nГабаритные размеры: 32х12х8 мм",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 39,
    winch: "sgr11",
    title: "Щуп",
    description: "Щуп контроля уровня масла в редукторе.\nДлина стержня: 155мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025",
    img: "/img_details/0411.1386SGR.01.025.jpg"
  },
  {
    id: 40,
    winch: "sgr11",
    title: "Электродвигатель АДЛ-5,2С",
    description: "Тип электродвигателя: асинхронный.\nНапряжение питания: 380 В.\nНоминальная частота тока: 50 Гц.\nСинхронная частота вращения (большая/малая): 1500/375 об/мин.\nНоминальный ток: 13,5 А.\nНоминальная мощность 5,2/1,3 кВт.\nНаправление вращения: реверсивное.\nНоминальный режим по ГОСТ Р 52776-2007: S4.\nПродолжительность включения: 40%.\nЧисло включений в час: 150.\nКласс изоляции: F (155°С).\nСтепень защиты: IP11.",
    type: "SGR11",
    consist: "Лебедка",
    designation: "МЖИГ.526211.002",
    img: "/img_details/МЖИГ.526211.002.jpg"
  },
  {
    id: 41,
    winch: "sgr11",
    title: "Электромагнит ЭМ-2",
    description: "Электромагнит тормоза лебедки.\nНапряжение питания - 220В постоянного тока.",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.684411.004",
    img: "/img_details/МЖИГ.684411.004.jpg"
  },
  {
    id: 42,
    winch: "sgr16",
    title: "Болт",
    description: "Болт крепления рычага тормоза.\nНаружный диаметр: Ø30 мм.\nДиаметр резьбы: М20 мм.\nДлина: 115 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 43,
    winch: "sgr16",
    title: "Вал",
    description: "Вал (тихоходный) КВШ. Установочные размеры под подшипники Ø55 мм и Ø80 мм.\nДлина: 402 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 44,
    winch: "sgr16",
    title: "Вентилятор",
    description: "Вентилятор охлаждения электродвигателя.\nВнутренний диаметр втулки вентилятора:  Ø72 мм.\nНаружный диаметр: Ø342 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 45,
    winch: "sgr16",
    title: "Втулка",
    description: "Втулка крепления вентилятора, стяжки ротора.\nНаружный диаметр под втулку вентилятора: Ø72 мм.\nНаружный диаметр под ротор: Ø65 мм.\nДлина: 94 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 46,
    winch: "sgr16",
    title: "Втулка",
    description: "Упорная втулка пружины тормоза.\nВнутренний диаметр втулки: Ø9 мм.\nНаружный диаметр заходной части: Ø15 мм. \nНаружный диаметр упорного торца: Ø25 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 47,
    winch: "sgr16",
    title: "Гайка",
    description: "Гайка упорная пружины тормоза в пластиковом корпусе.\nДиаметр резьбы: М14 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 48,
    winch: "sgr16",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения.\nНаружный диаметр: Ø389 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060-01",
    img: "/img_details/0621.1600SGR.00.060-01.jpg"
  },
  {
    id: 49,
    winch: "sgr16",
    title: "Кольцо",
    description: "Кольцо дистанционное конусное.\nВнутренний диаметр: Ø55 мм.\nНаружный диаметр: Ø87 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 50,
    winch: "sgr16",
    title: "Корпус редуктора",
    description: "Корпус редуктора.\nМежосевое расстояние: 160 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 51,
    winch: "sgr16",
    title: "Крышка",
    description: "Крышка крепления подшипника 3211.\nУстановочный диаметр: Ø100 мм.\nГабаритные размеры: 146х37 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 52,
    winch: "sgr16",
    title: "Крышка",
    description: "Крышка крепления подшипника N216.\nУстановочный диаметр: Ø140 мм.\nГабаритные размеры: 184х18 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 53,
    winch: "sgr16",
    title: "Крышка",
    description: "Крышка крепления дуплексного подшипника.\nВнутренний диаметр: Ø145 мм.\nНаружный диаметр: Ø170 мм.\nШесть отверстий: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 54,
    winch: "sgr16",
    title: "Крышка",
    description: "Крышка с маслозаливной горловиной.\nГабаритные размеры: 330х207 мм.\nСемь отверстий: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 55,
    winch: "sgr16",
    title: "Крышка",
    description: "Крышка электродвигателя.\nВнутренний диаметр: Ø200 мм.\nНаружный диаметр: Ø370 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 56,
    winch: "sgr16",
    title: "Ограничитель сбрасывания канатов",
    description: "Ограничитель сбрасывания канатов.\nГабаритные размеры: 560х268,5 мм.",
    type: "SGR22, SGR22ЧР, SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.304275.003",
    img: "/img_details/МЖИГ.304275.003.jpg"
  },
  {
    id: 57,
    winch: "sgr16",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø101 мм.\nНаружный диаметр: Ø144 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 58,
    winch: "sgr16",
    title: "Пробка",
    description: "Пробка слива масла.\nДиаметр резьбы: М24 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 59,
    winch: "sgr16",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø142 мм.\nНаружный диаметр: Ø182 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 60,
    winch: "sgr16",
    title: "Прокладка",
    description: "Прокладка резиновая.\nГабаритные размеры: 331х205 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 61,
    winch: "sgr16",
    title: "Подшипник",
    description: "Подшипник шариковый радиально упорный, дуплексный.\nНаружный диаметр: Ø125 мм.\nВнутренний диаметр: Ø70 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-Z-RSR N13BA-L138 C4",
    img: "/img_details/6214-Z-RSR N13BA-L138 C4.jpg"
  },
  {
    id: 62,
    winch: "sgr16",
    title: "Подшипник",
    description: "Подшипник роликовый радиальный однорядный. \nНаружный диаметр: Ø140 мм.\nВнутренний диаметр: Ø80 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216",
    img: "/img_details/N216.jpg"
  },
  {
    id: 63,
    winch: "sgr16",
    title: "Подшипник",
    description: "Подшипник шариковый радиально-упорный двухрядный. \nНаружный диаметр: Ø100мм.\nВнутренний диаметр: Ø55 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 3211,
    img: "/img_details/3211.jpg"
  },
  {
    id: 64,
    winch: "sgr16",
    title: "Подшипник",
    description: "Подшипник шариковый радиальный однорядный. \nНаружный диаметр: Ø62 мм.\nВнутренний диаметр: Ø35 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 6007,
    img: "/img_details/6007.jpg"
  },
  {
    id: 65,
    winch: "sgr16",
    title: "Пружина",
    description: "Пружина тормоза.\nНаружный диаметр: Ø31,2 мм.\nВнутренний диаметр: Ø21,7 мм.\nДлина: 93 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "00356-179300-009",
    img: "/img_details/00356-179300-009.jpg"
  },
  {
    id: 66,
    winch: "sgr16",
    title: "Рычаг тормоза",
    description: "Рычаг тормоза, тормозные накладки в комплекте.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 67,
    winch: "sgr16",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания.\nВ комплекте: \nструбцина – 2 шт.\nРычаг ручного растормаживания – 1 шт.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 68,
    winch: "sgr16",
    title: "Стержень",
    description: "Стержень крепления пружины тормоза.\nДиаметр резьбы: М14 мм.\nДлина: 280 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 69,
    winch: "sgr16",
    title: "Стойка",
    description: "Стойка для установки штурвала.\nГабаритные размеры: 72х57 мм.\nЧетыре отверстия: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 70,
    winch: "sgr16",
    title: "Червячная пара  160/22",
    description: "Межосевое расстояние: 160 мм.\nПередаточное число: 22.\nВ комплекте:\nчервячное колесо А160-5-22-0001;\nчервячный вал А160-2-22-0001.",
    type: "SGR31, SGR31ЧР, SGR16",
    consist: "Редуктор",
    designation: "160-22",
    img: "/img_details/160-22.jpg"
  },
  {
    id: 71,
    winch: "sgr16",
    title: "Шайба",
    description: "Шайба крепления подшипника 6009.\nНаружный диаметр: Ø69 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 72,
    winch: "sgr16",
    title: "Шайба",
    description: "Шайба стопорная.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 73,
    winch: "sgr16",
    title: "Шайба",
    description: "Шайба крепления КВШ.\nНаружный диаметр: Ø98 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 74,
    winch: "sgr16",
    title: "Шайба",
    description: "Шайба крепления ротора электродвигателя.\nНаружный диаметр: Ø67 мм.\nВнутренний диаметр: Ø17 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 75,
    winch: "sgr16",
    title: "Шкив канатоведущий",
    description: "Шкив канатоведущий.\nНаружный диаметр: Ø620 мм.\nЧисло и диаметр ручьев (шт. / мм): 4х10",
    type: "SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.712695.016",
    img: "/img_details/МЖИГ.712695.016.jpg"
  },
  {
    id: 76,
    winch: "sgr16",
    title: "Шкив тормозной",
    description: "Шкив тормозной.\nНаружный диаметр: Ø376 мм.\nВнутренний диаметр: Ø65 мм.",
    type: "SGR26,  SGR31ЧР, SGR16, SGR22ЧР,SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 77,
    winch: "sgr16",
    title: "Шпонка",
    description: "Шпонка фиксации червячного колеса на тихоходном валу.\nГабаритные размеры: 64х22х14 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 78,
    winch: "sgr16",
    title: "Шпонка",
    description: "Шпонка фиксации втулки в роторе.\nГабаритные размеры: 23х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 79,
    winch: "sgr16",
    title: "Шпонка",
    description: "Шпонка фиксации тормозного шкива на червячном валу.\nГабаритные размеры: 80х14х9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 80,
    winch: "sgr16",
    title: "Шпонка",
    description: "Шпонка фиксации вентилятора охлаждения.\nГабаритные размеры: 32х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 81,
    winch: "sgr16",
    title: "Шпонка",
    description: "Шпонка фиксации ротора на червячном валу.\nГабаритные размеры: 70х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 82,
    winch: "sgr16",
    title: "Штурвал",
    description: "Штурвал ручной доводки кабины.\nНаружный диаметр: Ø600 мм.\nУстановочный размер втулки: 20х20 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 83,
    winch: "sgr16",
    title: "Щуп",
    description: "Щуп контроля уровня масла в редукторе.\nДлина стержня: 120 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 84,
    winch: "sgr16",
    title: "Электродвигатель ДЧР-8,5",
    description: "Тип электродвигателя: асинхронный.\nНапряжение питания: 380 В.\nНоминальная частота тока: 50 Гц.\nСинхронная частота вращения: 1500 об/мин.\nНоминальный ток: 22 А.\nНоминальная мощность 8,5 кВт.\nНаправление вращения: реверсивное.\nКласс изоляции: F (155°С).\nСтепень защиты: IP11.",
    type: "SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002",
    img: "/img_details/МЖИГ.526311.002.jpg"
  },
  {
    id: 85,
    winch: "sgr16",
    title: "Электромагнит ЭМ-1",
    description: "Электромагнит тормоза лебедки.\nНапряжение питания - 220В постоянного тока.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 86,
    winch: "sgr22",
    title: "Болт",
    description: "Болт крепления рычага тормоза.\nНаружный диаметр: Ø30 мм.\nДиаметр резьбы: М20 мм.\nДлина: 115 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 87,
    winch: "sgr22",
    title: "Вал",
    description: "Вал (тихоходный) КВШ. Установочные размеры под подшипники Ø55 мм и Ø80 мм.\nДлина: 402 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 88,
    winch: "sgr22",
    title: "Вентилятор",
    description: "Вентилятор охлаждения электродвигателя.\nВнутренний диаметр втулки вентилятора:  Ø72 мм.\nНаружный диаметр: Ø342 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 89,
    winch: "sgr22",
    title: "Втулка",
    description: "Втулка крепления вентилятора, стяжки ротора.\nНаружный диаметр под втулку вентилятора: Ø72 мм.\nНаружный диаметр под ротор: Ø65 мм.\nДлина: 94 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 90,
    winch: "sgr22",
    title: "Втулка",
    description: "Упорная втулка пружины тормоза.\nВнутренний диаметр втулки: Ø9 мм.\nНаружный диаметр заходной части: Ø15 мм. \nНаружный диаметр упорного торца: Ø25 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 91,
    winch: "sgr22",
    title: "Гайка",
    description: "Гайка упорная пружины тормоза в пластиковом корпусе.\nДиаметр резьбы: М14 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 92,
    winch: "sgr22",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения.\nНаружный диаметр: Ø389 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060-01",
    img: "/img_details/0621.1600SGR.00.060-01.jpg"
  },
  {
    id: 93,
    winch: "sgr22",
    title: "Кольцо",
    description: "Кольцо дистанционное конусное.\nВнутренний диаметр: Ø55 мм.\nНаружный диаметр: Ø87 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 94,
    winch: "sgr22",
    title: "Корпус редуктора",
    description: "Корпус редуктора.\nМежосевое расстояние: 160 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 95,
    winch: "sgr22",
    title: "Крышка",
    description: "Крышка крепления подшипника 3211.\nУстановочный диаметр: Ø100 мм.\nГабаритные размеры: 146х37 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 96,
    winch: "sgr22",
    title: "Крышка",
    description: "Крышка крепления подшипника N216.\nУстановочный диаметр: Ø140 мм.\nГабаритные размеры: 184х18 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 97,
    winch: "sgr22",
    title: "Крышка",
    description: "Крышка крепления дуплексного подшипника.\nВнутренний диаметр: Ø145 мм.\nНаружный диаметр: Ø170 мм.\nШесть отверстий: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 98,
    winch: "sgr22",
    title: "Крышка",
    description: "Крышка с маслозаливной горловиной.\nГабаритные размеры: 330х207 мм.\nСемь отверстий: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 99,
    winch: "sgr22",
    title: "Крышка",
    description: "Крышка электродвигателя.\nВнутренний диаметр: Ø200 мм.\nНаружный диаметр: Ø370 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 100,
    winch: "sgr22",
    title: "Ограничитель сбрасывания канатов",
    description: "Ограничитель сбрасывания канатов.\nГабаритные размеры: 560х268,5 мм.",
    type: "SGR22, SGR22ЧР, SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.304275.003",
    img: "/img_details/МЖИГ.304275.003.jpg"
  },
  {
    id: 101,
    winch: "sgr22",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø142 мм.\nНаружный диаметр: Ø182 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 102,
    winch: "sgr22",
    title: "Пробка",
    description: "Пробка слива масла.\nДиаметр резьбы: М24 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 103,
    winch: "sgr22",
    title: "Прокладка",
    description: "Прокладка резиновая.\nГабаритные размеры: 331х205 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 104,
    winch: "sgr22",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø101 мм.\nНаружный диаметр: Ø144 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 105,
    winch: "sgr22",
    title: "Подшипник",
    description: "Подшипник шариковый радиально упорный, дуплексный.\nНаружный диаметр: Ø125 мм.\nВнутренний диаметр: Ø70 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-Z-RSR N13BA-L138 C4",
    img: "/img_details/6214-Z-RSR N13BA-L138 C4.jpg"
  },
  {
    id: 106,
    winch: "sgr22",
    title: "Подшипник",
    description: "Подшипник роликовый радиальный однорядный. \nНаружный диаметр: Ø140 мм.\nВнутренний диаметр: Ø80 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216",
    img: "/img_details/N216.jpg"
  },
  {
    id: 107,
    winch: "sgr22",
    title: "Подшипник",
    description: "Подшипник шариковый радиально-упорный двухрядный. \nНаружный диаметр: Ø100мм.\nВнутренний диаметр: Ø55 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 3211,
    img: "/img_details/3211.jpg"
  },
  {
    id: 108,
    winch: "sgr22",
    title: "Подшипник",
    description: "Подшипник шариковый радиальный однорядный. \nНаружный диаметр: Ø62 мм.\nВнутренний диаметр: Ø35 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 6007,
    img: "/img_details/6007.jpg"
  },
  {
    id: 109,
    winch: "sgr22",
    title: "Пружина",
    description: "Пружина тормоза.\nНаружный диаметр: Ø31,2 мм.\nВнутренний диаметр: Ø21,7 мм.\nДлина: 93 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "00356-179300-009",
    img: "/img_details/00356-179300-009.jpg"
  },
  {
    id: 110,
    winch: "sgr22",
    title: "Рычаг тормоза",
    description: "Рычаг тормоза, тормозные накладки в комплекте.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 111,
    winch: "sgr22",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания.\nВ комплекте: \nструбцина – 2 шт.\nРычаг ручного растормаживания – 1 шт.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 112,
    winch: "sgr22",
    title: "Стержень",
    description: "Стержень крепления пружины тормоза.\nДиаметр резьбы: М14 мм.\nДлина: 280 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 113,
    winch: "sgr22",
    title: "Стойка",
    description: "Стойка для установки штурвала.\nГабаритные размеры: 72х57 мм.\nЧетыре отверстия: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 114,
    winch: "sgr22",
    title: "Червячная пара\n160/48",
    description: "Межосевое расстояние: 160 мм.\nПередаточное число: 48.\nВ комплекте:\nчервячное колесо МЖИГ.303812.005;\nчервячный вал МЖИГ.722552.005.",
    type: "SGR22, SGR22ЧР",
    consist: "Редуктор",
    designation: "160-48",
    img: "/img_details/160-48.jpg"
  },
  {
    id: 115,
    winch: "sgr22",
    title: "Шайба",
    description: "Шайба крепления подшипника 6009.\nНаружный диаметр: Ø69 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 116,
    winch: "sgr22",
    title: "Шайба",
    description: "Шайба крепления ротора электродвигателя.\nНаружный диаметр: Ø67 мм.\nВнутренний диаметр: Ø17 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 117,
    winch: "sgr22",
    title: "Шайба",
    description: "Шайба крепления КВШ.\nНаружный диаметр: Ø98 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 118,
    winch: "sgr22",
    title: "Шайба",
    description: "Шайба стопорная.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 119,
    winch: "sgr22",
    title: "Шкив канатоведущий",
    description: "Шкив канатоведущий.\nНаружный диаметр: Ø620 мм.\nЧисло и диаметр ручьев (шт. / мм): 4х12",
    type: "SGR22, SGR22ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.712695.022",
    img: "/img_details/МЖИГ.712695.022.jpg"
  },
  {
    id: 120,
    winch: "sgr22",
    title: "Шкив тормозной",
    description: "Шкив тормозной.\nНаружный диаметр: Ø376 мм.\nВнутренний диаметр: Ø65 мм.",
    type: "SGR22,  SGR31",
    consist: "Редуктор",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 121,
    winch: "sgr22",
    title: "Шпонка",
    description: "Шпонка фиксации червячного колеса на тихоходном валу.\nГабаритные размеры: 64х22х14 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 122,
    winch: "sgr22",
    title: "Шпонка",
    description: "Шпонка фиксации втулки в роторе.\nГабаритные размеры: 23х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 123,
    winch: "sgr22",
    title: "Шпонка",
    description: "Шпонка фиксации тормозного шкива на червячном валу.\nГабаритные размеры: 80х14х9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 124,
    winch: "sgr22",
    title: "Шпонка",
    description: "Шпонка фиксации вентилятора охлаждения.\nГабаритные размеры: 32х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 125,
    winch: "sgr22",
    title: "Шпонка",
    description: "Шпонка фиксации ротора на червячном валу.\nГабаритные размеры: 70х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 126,
    winch: "sgr22",
    title: "Штурвал",
    description: "Штурвал ручной доводки кабины.\nНаружный диаметр: Ø600 мм.\nУстановочный размер втулки: 20х20 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 127,
    winch: "sgr22",
    title: "Щуп",
    description: "Щуп контроля уровня масла в редукторе.\nДлина стержня: 120 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 128,
    winch: "sgr22",
    title: "Электродвигатель ДЧР-8,5",
    description: "Тип электродвигателя: асинхронный.\nНапряжение питания: 380 В.\nНоминальная частота тока: 50 Гц.\nСинхронная частота вращения (большая/малая): 1500 об/мин.\nНоминальный ток: 22 А.\nНоминальная мощность 8,5 кВт.\nНаправление вращения: реверсивное.\nКласс изоляции: F (155°С).\nСтепень защиты: IP11.",
    type: "SGR22",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002",
    img: "/img_details/МЖИГ.526311.002.jpg"
  },
  {
    id: 129,
    winch: "sgr22",
    title: "Электромагнит ЭМ-1",
    description: "Электромагнит тормоза лебедки.\nНапряжение питания - 220В постоянного тока.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 130,
    winch: "sgr26",
    title: "Вентилятор",
    description: "Вентилятор охлаждения электродвигателя.\nВнутренний диаметр втулки вентилятора:  Ø72 мм.\nНаружный диаметр: Ø342 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 131,
    winch: "sgr26",
    title: "Втулка",
    description: "Втулка крепления вентилятора, стяжки ротора.\nНаружный диаметр под втулку вентилятора: Ø72 мм.\nНаружный диаметр под ротор: Ø65 мм.\nДлина: 94 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 132,
    winch: "sgr26",
    title: "Втулка",
    description: "Упорная втулка пружины тормоза.\nВнутренний диаметр втулки: Ø9 мм.\nНаружный диаметр заходной части: Ø15 мм. \nНаружный диаметр упорного торца: Ø25 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 133,
    winch: "sgr26",
    title: "Гайка",
    description: "Гайка упорная пружины тормоза в пластиковом корпусе.\nДиаметр резьбы: М14 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 134,
    winch: "sgr26",
    title: "Болт",
    description: "Болт крепления рычага тормоза.\nНаружный диаметр: Ø30 мм.\nДиаметр резьбы: М20 мм.\nДлина: 115 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 135,
    winch: "sgr26",
    title: "Вал",
    description: "Вал (тихоходный) КВШ. Установочные размеры под подшипники Ø55 мм и Ø80 мм.\nДлина: 402 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 136,
    winch: "sgr26",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения.\nНаружный диаметр: Ø389 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060-01",
    img: "/img_details/0621.1600SGR.00.060-01.jpg"
  },
  {
    id: 137,
    winch: "sgr26",
    title: "Кольцо",
    description: "Кольцо дистанционное конусное.\nВнутренний диаметр: Ø55 мм.\nНаружный диаметр: Ø87 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 138,
    winch: "sgr26",
    title: "Корпус редуктора",
    description: "Корпус редуктора.\nМежосевое расстояние: 160 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 139,
    winch: "sgr26",
    title: "Крышка",
    description: "Крышка крепления подшипника 3211.\nУстановочный диаметр: Ø100 мм.\nГабаритные размеры: 146х37 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 140,
    winch: "sgr26",
    title: "Крышка",
    description: "Крышка крепления подшипника N216.\nУстановочный диаметр: Ø140 мм.\nГабаритные размеры: 184х18 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 141,
    winch: "sgr26",
    title: "Крышка",
    description: "Крышка крепления дуплексного подшипника.\nВнутренний диаметр: Ø145 мм.\nНаружный диаметр: Ø170 мм.\nШесть отверстий: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 142,
    winch: "sgr26",
    title: "Крышка",
    description: "Крышка с маслозаливной горловиной.\nГабаритные размеры: 330х207 мм.\nСемь отверстий: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 143,
    winch: "sgr26",
    title: "Крышка",
    description: "Крышка электродвигателя.\nВнутренний диаметр: Ø200 мм.\nНаружный диаметр: Ø370 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 144,
    winch: "sgr26",
    title: "Ограничитель сбрасывания канатов",
    description: "Ограничитель сбрасывания канатов.\nГабаритные размеры: 560х268,5 мм.",
    type: "SGR31, SGR31ЧР, SGR26,  SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.304275.003",
    img: "/img_details/МЖИГ.304275.003.jpg"
  },
  {
    id: 145,
    winch: "sgr26",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø101 мм.\nНаружный диаметр: Ø144 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 146,
    winch: "sgr26",
    title: "Пробка",
    description: "Пробка слива масла.\nДиаметр резьбы: М24 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 147,
    winch: "sgr26",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø142 мм.\nНаружный диаметр: Ø182 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 148,
    winch: "sgr26",
    title: "Прокладка",
    description: "Прокладка резиновая.\nГабаритные размеры: 331х205 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 149,
    winch: "sgr26",
    title: "Подшипник",
    description: "Подшипник шариковый радиально упорный, дуплексный.\nНаружный диаметр: Ø125 мм.\nВнутренний диаметр: Ø70 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-Z-RSR N13BA-L138 C4",
    img: "/img_details/6214-Z-RSR N13BA-L138 C4.jpg"
  },
  {
    id: 150,
    winch: "sgr26",
    title: "Подшипник",
    description: "Подшипник роликовый радиальный однорядный. \nНаружный диаметр: Ø140 мм.\nВнутренний диаметр: Ø80 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216",
    img: "/img_details/N216.jpg"
  },
  {
    id: 151,
    winch: "sgr26",
    title: "Подшипник",
    description: "Подшипник шариковый радиально-упорный двухрядный. \nНаружный диаметр: Ø100мм.\nВнутренний диаметр: Ø55 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 3211,
    img: "/img_details/3211.jpg"
  },
  {
    id: 152,
    winch: "sgr26",
    title: "Подшипник",
    description: "Подшипник шариковый радиальный однорядный. \nНаружный диаметр: Ø62 мм.\nВнутренний диаметр: Ø35 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 6007,
    img: "/img_details/6007.jpg"
  },
  {
    id: 153,
    winch: "sgr26",
    title: "Пружина",
    description: "Пружина тормоза.\nНаружный диаметр: Ø31,2 мм.\nВнутренний диаметр: Ø21,7 мм.\nДлина: 93 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "00356-179300-009",
    img: "/img_details/00356-179300-009.jpg"
  },
  {
    id: 154,
    winch: "sgr26",
    title: "Рычаг тормоза",
    description: "Рычаг тормоза, тормозные накладки в комплекте.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 155,
    winch: "sgr26",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания.\nВ комплекте: \nструбцина – 2 шт.\nРычаг ручного растормаживания – 1 шт.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 156,
    winch: "sgr26",
    title: "Стержень",
    description: "Стержень крепления пружины тормоза.\nДиаметр резьбы: М14 мм.\nДлина: 280 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 157,
    winch: "sgr26",
    title: "Стойка",
    description: "Стойка для установки штурвала.\nГабаритные размеры: 72х57 мм.\nЧетыре отверстия: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 158,
    winch: "sgr26",
    title: "Червячная пара\n160/13 2/3",
    description: "Межосевое расстояние: 160 мм.\nПередаточное число: 13 2/3.\nВ комплекте:\nчервячное колесо А160-5-13,67-0001;\nчервячный вал А160-2-13,67-0001.",
    type: "SGR26,  SGR36",
    consist: "Редуктор",
    designation: "160-13 2-3",
    img: "/img_details/160-13 2-3.jpg"
  },
  {
    id: 159,
    winch: "sgr26",
    title: "Шайба",
    description: "Шайба крепления подшипника 6009.\nНаружный диаметр: Ø69 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36,",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 160,
    winch: "sgr26",
    title: "Шайба",
    description: "Шайба стопорная.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 161,
    winch: "sgr26",
    title: "Шайба",
    description: "Шайба крепления КВШ.\nНаружный диаметр: Ø98 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 162,
    winch: "sgr26",
    title: "Шайба",
    description: "Шайба крепления ротора электродвигателя.\nНаружный диаметр: Ø67 мм.\nВнутренний диаметр: Ø17 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 163,
    winch: "sgr26",
    title: "Шкив канатоведущий",
    description: "Шкив канатоведущий.\nНаружный диаметр: Ø575 мм.\nЧисло и диаметр ручьев (шт. / мм): 4х10",
    type: "SGR26",
    consist: "Лебедка",
    designation: "МЖИГ.712695.026",
    img: "/img_details/МЖИГ.712695.026.jpg"
  },
  {
    id: 164,
    winch: "sgr26",
    title: "Шкив тормозной",
    description: "Шкив тормозной.\nНаружный диаметр: Ø376 мм.\nВнутренний диаметр: Ø65 мм.",
    type: "SGR26, SGR31ЧР, SGR16, SGR36,SGR22ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 165,
    winch: "sgr26",
    title: "Шпонка",
    description: "Шпонка фиксации червячного колеса на тихоходном валу.\nГабаритные размеры: 64х22х14 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 166,
    winch: "sgr26",
    title: "Шпонка",
    description: "Шпонка фиксации втулки в роторе.\nГабаритные размеры: 23х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 167,
    winch: "sgr26",
    title: "Шпонка",
    description: "Шпонка фиксации тормозного шкива на червячном валу.\nГабаритные размеры: 80х14х9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 168,
    winch: "sgr26",
    title: "Шпонка",
    description: "Шпонка фиксации ротора на червячном валу.\nГабаритные размеры: 70х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 169,
    winch: "sgr26",
    title: "Шпонка",
    description: "Шпонка фиксации вентилятора охлаждения.\nГабаритные размеры: 32х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 170,
    winch: "sgr26",
    title: "Штурвал",
    description: "Штурвал ручной доводки кабины.\nНаружный диаметр: Ø600 мм.\nУстановочный размер втулки: 20х20 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 171,
    winch: "sgr26",
    title: "Щуп",
    description: "Щуп контроля уровня масла в редукторе.\nДлина стержня: 120 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 172,
    winch: "sgr26",
    title: "Электродвигатель АН225D4НЛБТ",
    description: "Тип электродвигателя: асинхронный.\nНапряжение питания: 380 В.\nНоминальная частота тока: 50 Гц.\nСинхронная частота вращения (большая/малая): 1500 об/мин.\nНоминальная мощность 10 кВт.\nНаправление вращения: реверсивное.\nКласс изоляции: F (155°С).",
    type: "SGR26",
    consist: "Лебедка",
    designation: "АН225D4НЛБТ",
    img: "/img_details/АН225D4НЛБТ.jpg"
  },
  {
    id: 173,
    winch: "sgr26",
    title: "Электромагнит ЭМ-1",
    description: "Электромагнит тормоза лебедки.\nНапряжение питания - 220В постоянного тока.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 174,
    winch: "sgr31",
    title: "Болт",
    description: "Болт крепления рычага тормоза.\nНаружный диаметр: Ø30 мм.\nДиаметр резьбы: М20 мм.\nДлина: 115 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 175,
    winch: "sgr31",
    title: "Вал",
    description: "Вал (тихоходный) КВШ. Установочные размеры под подшипники Ø55 мм и Ø80 мм.\nДлина: 402 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 176,
    winch: "sgr31",
    title: "Вентилятор",
    description: "Вентилятор охлаждения электродвигателя.\nВнутренний диаметр втулки вентилятора:  Ø72 мм.\nНаружный диаметр: Ø342 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 177,
    winch: "sgr31",
    title: "Втулка",
    description: "Втулка крепления вентилятора, стяжки ротора.\nНаружный диаметр под втулку вентилятора: Ø72 мм.\nНаружный диаметр под ротор: Ø65 мм.\nДлина: 94 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 178,
    winch: "sgr31",
    title: "Втулка",
    description: "Упорная втулка пружины тормоза.\nВнутренний диаметр втулки: Ø9 мм.\nНаружный диаметр заходной части: Ø15 мм. \nНаружный диаметр упорного торца: Ø25 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 179,
    winch: "sgr31",
    title: "Гайка",
    description: "Гайка упорная пружины тормоза в пластиковом корпусе.\nДиаметр резьбы: М14 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 180,
    winch: "sgr31",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения.\nНаружный диаметр: Ø389 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060-01",
    img: "/img_details/0621.1600SGR.00.060-01.jpg"
  },
  {
    id: 181,
    winch: "sgr31",
    title: "Кольцо",
    description: "Кольцо дистанционное конусное.\nВнутренний диаметр: Ø55 мм.\nНаружный диаметр: Ø87 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 182,
    winch: "sgr31",
    title: "Корпус редуктора",
    description: "Корпус редуктора.\nМежосевое расстояние: 160 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 183,
    winch: "sgr31",
    title: "Крышка",
    description: "Крышка крепления подшипника 3211.\nУстановочный диаметр: Ø100 мм.\nГабаритные размеры: 146х37 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 184,
    winch: "sgr31",
    title: "Крышка",
    description: "Крышка крепления подшипника N216.\nУстановочный диаметр: Ø140 мм.\nГабаритные размеры: 184х18 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 185,
    winch: "sgr31",
    title: "Крышка",
    description: "Крышка крепления дуплексного подшипника.\nВнутренний диаметр: Ø145 мм.\nНаружный диаметр: Ø170 мм.\nШесть отверстий: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 186,
    winch: "sgr31",
    title: "Крышка",
    description: "Крышка с маслозаливной горловиной.\nГабаритные размеры: 330х207 мм.\nСемь отверстий: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 187,
    winch: "sgr31",
    title: "Крышка",
    description: "Крышка электродвигателя.\nВнутренний диаметр: Ø200 мм.\nНаружный диаметр: Ø370 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 188,
    winch: "sgr31",
    title: "Ограничитель сбрасывания канатов",
    description: "Ограничитель сбрасывания канатов.\nГабаритные размеры: 520х268,5 мм.",
    type: "SGR31, SGR36, SGR31ЧР, SGR26",
    consist: "Лебедка",
    designation: "МЖИГ.304275.002",
    img: "/img_details/МЖИГ.304275.002.jpg"
  },
  {
    id: 189,
    winch: "sgr31",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø101 мм.\nНаружный диаметр: Ø144 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 190,
    winch: "sgr31",
    title: "Пробка",
    description: "Пробка слива масла.\nДиаметр резьбы: М24 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 191,
    winch: "sgr31",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø142 мм.\nНаружный диаметр: Ø182 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 192,
    winch: "sgr31",
    title: "Прокладка",
    description: "Прокладка резиновая.\nГабаритные размеры: 331х205 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 193,
    winch: "sgr31",
    title: "Подшипник",
    description: "Подшипник шариковый радиально упорный, дуплексный.\nНаружный диаметр: Ø125 мм.\nВнутренний диаметр: Ø70 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-Z-RSR N13BA-L138 C4",
    img: "/img_details/6214-Z-RSR N13BA-L138 C4.jpg"
  },
  {
    id: 194,
    winch: "sgr31",
    title: "Подшипник",
    description: "Подшипник роликовый радиальный однорядный. \nНаружный диаметр: Ø140 мм.\nВнутренний диаметр: Ø80 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216",
    img: "/img_details/N216.jpg"
  },
  {
    id: 195,
    winch: "sgr31",
    title: "Подшипник",
    description: "Подшипник шариковый радиально-упорный двухрядный. \nНаружный диаметр: Ø100мм.\nВнутренний диаметр: Ø55 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 3211,
    img: "/img_details/3211.jpg"
  },
  {
    id: 196,
    winch: "sgr31",
    title: "Подшипник",
    description: "Подшипник шариковый радиальный однорядный. \nНаружный диаметр: Ø62 мм.\nВнутренний диаметр: Ø35 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 6007,
    img: "/img_details/6007.jpg"
  },
  {
    id: 197,
    winch: "sgr31",
    title: "Пружина",
    description: "Пружина тормоза.\nНаружный диаметр: Ø31,2 мм.\nВнутренний диаметр: Ø21,7 мм.\nДлина: 93 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "00356-179300-009",
    img: "/img_details/00356-179300-009.jpg"
  },
  {
    id: 198,
    winch: "sgr31",
    title: "Рычаг тормоза",
    description: "Рычаг тормоза, тормозные накладки в комплекте.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 199,
    winch: "sgr31",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания.\nВ комплекте: \nструбцина – 2 шт.\nРычаг ручного растормаживания – 1 шт.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 200,
    winch: "sgr31",
    title: "Стержень",
    description: "Стержень крепления пружины тормоза.\nДиаметр резьбы: М14 мм.\nДлина: 280 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 201,
    winch: "sgr31",
    title: "Стойка",
    description: "Стойка для установки штурвала.\nГабаритные размеры: 72х57 мм.\nЧетыре отверстия: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 202,
    winch: "sgr31",
    title: "Червячная пара\n160 / 22",
    description: "Межосевое расстояние: 160 мм.\nПередаточное число: 22.\nВ комплекте:\nчервячное колесо А160-5-22-0001;\nчервячный вал А160-2-22-0001.",
    type: "SGR31, SGR16",
    consist: "Редуктор",
    designation: "160-22",
    img: "/img_details/160-22.jpg"
  },
  {
    id: 203,
    winch: "sgr31",
    title: "Шайба",
    description: "Шайба крепления подшипника 6009.\nНаружный диаметр: Ø69 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 204,
    winch: "sgr31",
    title: "Шайба",
    description: "Шайба стопорная.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 205,
    winch: "sgr31",
    title: "Шайба",
    description: "Шайба крепления КВШ.\nНаружный диаметр: Ø98 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 206,
    winch: "sgr31",
    title: "Шайба",
    description: "Шайба крепления ротора электродвигателя.\nНаружный диаметр: Ø67 мм.\nВнутренний диаметр: Ø17 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 207,
    winch: "sgr31",
    title: "Шкив канатоведущий",
    description: "Шкив канатоведущий.\nНаружный диаметр: Ø575 мм.\nЧисло и диаметр ручьев (шт. / мм): 5х10",
    type: "SGR31, SGR31ЧР, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.712695.031",
    img: "/img_details/МЖИГ.712695.031.jpg"
  },
  {
    id: 208,
    winch: "sgr31",
    title: "Шкив тормозной",
    description: "Шкив тормозной.\nНаружный диаметр: Ø376 мм.\nВнутренний диаметр: Ø65 мм.",
    type: "SGR22, SGR31",
    consist: "Редуктор",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 209,
    winch: "sgr31",
    title: "Шпонка",
    description: "Шпонка фиксации червячного колеса на тихоходном валу.\nГабаритные размеры: 64х22х14 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 210,
    winch: "sgr31",
    title: "Шпонка",
    description: "Шпонка фиксации втулки в роторе.\nГабаритные размеры: 23х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 211,
    winch: "sgr31",
    title: "Шпонка",
    description: "Шпонка фиксации тормозного шкива на червячном валу.\nГабаритные размеры: 80х14х9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 212,
    winch: "sgr31",
    title: "Шпонка",
    description: "Шпонка фиксации ротора на червячном валу.\nГабаритные размеры: 70х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 213,
    winch: "sgr31",
    title: "Шпонка",
    description: "Шпонка фиксации вентилятора охлаждения.\nГабаритные размеры: 32х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 214,
    winch: "sgr31",
    title: "Штурвал",
    description: "Штурвал ручной доводки кабины.\nНаружный диаметр: Ø600 мм.\nУстановочный размер втулки: 20х20 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 215,
    winch: "sgr31",
    title: "Щуп",
    description: "Щуп контроля уровня масла в редукторе.\nДлина стержня: 120 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 216,
    winch: "sgr31",
    title: "Электродвигатель ДЧР-8,5",
    description: "Тип электродвигателя: асинхронный.\nНапряжение питания: 380 В.\nНоминальная частота тока: 50 Гц.\nСинхронная частота вращения (большая/малая): 1500 об/мин.\nНоминальный ток: 22 А.\nНоминальная мощность 8,5 кВт.\nНаправление вращения: реверсивное.\nКласс изоляции: F (155°С).\nСтепень защиты: IP11.",
    type: "SGR31",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002",
    img: "/img_details/МЖИГ.526311.002.jpg"
  },
  {
    id: 217,
    winch: "sgr31",
    title: "Электромагнит ЭМ-1",
    description: "Электромагнит тормоза лебедки.\nНапряжение питания - 220В постоянного тока.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 218,
    winch: "sgr36",
    title: "Болт",
    description: "Болт крепления рычага тормоза.\nНаружный диаметр: Ø30 мм.\nДиаметр резьбы: М20 мм.\nДлина: 115 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 219,
    winch: "sgr36",
    title: "Вал",
    description: "Вал (тихоходный) КВШ. Установочные размеры под подшипники Ø55 мм и Ø80 мм.\nДлина: 402 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 220,
    winch: "sgr36",
    title: "Вентилятор",
    description: "Вентилятор охлаждения электродвигателя.\nВнутренний диаметр втулки вентилятора:  Ø72 мм.\nНаружный диаметр: Ø342 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 221,
    winch: "sgr36",
    title: "Втулка",
    description: "Втулка крепления вентилятора, стяжки ротора.\nНаружный диаметр под втулку вентилятора: Ø72 мм.\nНаружный диаметр под ротор: Ø65 мм.\nДлина: 94 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 222,
    winch: "sgr36",
    title: "Втулка",
    description: "Упорная втулка пружины тормоза.\nВнутренний диаметр втулки: Ø9 мм.\nНаружный диаметр заходной части: Ø15 мм. \nНаружный диаметр упорного торца: Ø25 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 223,
    winch: "sgr36",
    title: "Гайка",
    description: "Гайка упорная пружины тормоза в пластиковом корпусе.\nДиаметр резьбы: М14 мм.",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 224,
    winch: "sgr36",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения.\nНаружный диаметр: Ø389 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060-01",
    img: "/img_details/0621.1600SGR.00.060-01.jpg"
  },
  {
    id: 225,
    winch: "sgr36",
    title: "Кольцо",
    description: "Кольцо дистанционное конусное.\nВнутренний диаметр: Ø55 мм.\nНаружный диаметр: Ø87 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 226,
    winch: "sgr36",
    title: "Корпус редуктора",
    description: "Корпус редуктора.\nМежосевое расстояние: 160 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 227,
    winch: "sgr36",
    title: "Крышка",
    description: "Крышка крепления подшипника 3211.\nУстановочный диаметр: Ø100 мм.\nГабаритные размеры: 146х37 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 228,
    winch: "sgr36",
    title: "Крышка",
    description: "Крышка крепления подшипника N216.\nУстановочный диаметр: Ø140 мм.\nГабаритные размеры: 184х18 мм.\nТри отверстия: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 229,
    winch: "sgr36",
    title: "Крышка",
    description: "Крышка крепления дуплексного подшипника.\nВнутренний диаметр: Ø145 мм.\nНаружный диаметр: Ø170 мм.\nШесть отверстий: Ø11 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 230,
    winch: "sgr36",
    title: "Крышка",
    description: "Крышка с маслозаливной горловиной.\nГабаритные размеры: 330х207 мм.\nСемь отверстий: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 231,
    winch: "sgr36",
    title: "Крышка",
    description: "Крышка электродвигателя.\nВнутренний диаметр: Ø200 мм.\nНаружный диаметр: Ø370 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 232,
    winch: "sgr36",
    title: "Ограничитель сбрасывания канатов",
    description: "Ограничитель сбрасывания канатов.\nГабаритные размеры: 520х268,5 мм.",
    type: "SGR31, SGR36,SGR31ЧР, SGR26",
    consist: "Лебедка",
    designation: "МЖИГ.304275.002",
    img: "/img_details/МЖИГ.304275.002.jpg"
  },
  {
    id: 233,
    winch: "sgr36",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø101 мм.\nНаружный диаметр: Ø144 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 234,
    winch: "sgr36",
    title: "Пробка",
    description: "Пробка слива масла.\nДиаметр резьбы: М24 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 235,
    winch: "sgr36",
    title: "Прокладка",
    description: "Прокладка резиновая.\nВнутренний диаметр: Ø142 мм.\nНаружный диаметр: Ø182 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 236,
    winch: "sgr36",
    title: "Прокладка",
    description: "Прокладка резиновая.\nГабаритные размеры: 331х205 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 237,
    winch: "sgr36",
    title: "Подшипник",
    description: "Подшипник шариковый радиально упорный, дуплексный.\nНаружный диаметр: Ø125 мм.\nВнутренний диаметр: Ø70 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-Z-RSR N13BA-L138 C4",
    img: "/img_details/6214-Z-RSR N13BA-L138 C4.jpg"
  },
  {
    id: 238,
    winch: "sgr36",
    title: "Подшипник",
    description: "Подшипник роликовый радиальный однорядный. \nНаружный диаметр: Ø140 мм.\nВнутренний диаметр: Ø80 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216",
    img: "/img_details/N216.jpg"
  },
  {
    id: 239,
    winch: "sgr36",
    title: "Подшипник",
    description: "Подшипник шариковый радиально-упорный двухрядный. \nНаружный диаметр: Ø100мм.\nВнутренний диаметр: Ø55 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 3211,
    img: "/img_details/3211.jpg"
  },
  {
    id: 240,
    winch: "sgr36",
    title: "Подшипник",
    description: "Подшипник шариковый радиальный однорядный. \nНаружный диаметр: Ø62 мм.\nВнутренний диаметр: Ø35 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: 6007,
    img: "/img_details/6007.jpg"
  },
  {
    id: 241,
    winch: "sgr36",
    title: "Пружина",
    description: "Пружина тормоза.\nНаружный диаметр: Ø31,2 мм.\nВнутренний диаметр: Ø21,7 мм.\nДлина: 93 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "00356-179300-009",
    img: "/img_details/00356-179300-009.jpg"
  },
  {
    id: 242,
    winch: "sgr36",
    title: "Рычаг тормоза",
    description: "Рычаг тормоза, тормозные накладки в комплекте.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 243,
    winch: "sgr36",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания.\nВ комплекте: \nструбцина – 2 шт.\nРычаг ручного растормаживания – 1 шт.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 244,
    winch: "sgr36",
    title: "Стержень",
    description: "Стержень крепления пружины тормоза.\nДиаметр резьбы: М14 мм.\nДлина: 280 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 245,
    winch: "sgr36",
    title: "Стойка",
    description: "Стойка для установки штурвала.\nГабаритные размеры: 72х57 мм.\nЧетыре отверстия: Ø 9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 246,
    winch: "sgr36",
    title: "Червячная пара\n160/13 2/3",
    description: "Межосевое расстояние: 160 мм.\nПередаточное число: 13 2/3.\nВ комплекте:\nчервячное колесо А160-5-13,67-0001;\nчервячный вал А160-2-13,67-0001.",
    type: "SGR26, SGR36,13VTR ZAA9676 B15,13VTR ZAA9676 B16",
    consist: "Редуктор",
    designation: "160-13 2-3",
    img: "/img_details/160-13 2-3.jpg"
  },
  {
    id: 247,
    winch: "sgr36",
    title: "Шайба",
    description: "Шайба крепления подшипника 6009.\nНаружный диаметр: Ø69 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 248,
    winch: "sgr36",
    title: "Шайба",
    description: "Шайба стопорная.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 249,
    winch: "sgr36",
    title: "Шайба",
    description: "Шайба крепления КВШ.\nНаружный диаметр: Ø98 мм.\nТри отверстия: Ø13 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 250,
    winch: "sgr36",
    title: "Шайба",
    description: "Шайба крепления ротора электродвигателя.\nНаружный диаметр: Ø67 мм.\nВнутренний диаметр: Ø17 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 251,
    winch: "sgr36",
    title: "Шкив канатоведущий",
    description: "Шкив канатоведущий.\nНаружный диаметр: Ø575 мм.\nЧисло и диаметр ручьев (шт. / мм): 5х10",
    type: "SGR31, SGR31ЧР,SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.712695.031",
    img: "/img_details/МЖИГ.712695.031.jpg"
  },
  {
    id: 252,
    winch: "sgr36",
    title: "Шкив тормозной",
    description: "Шкив тормозной.\nНаружный диаметр: Ø376 мм.\nВнутренний диаметр: Ø65 мм.",
    type: "SGR26,SGR31ЧР, SGR16, SGR36,SGR22ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 253,
    winch: "sgr36",
    title: "Шпонка",
    description: "Шпонка фиксации червячного колеса на тихоходном валу.\nГабаритные размеры: 64х22х14 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 254,
    winch: "sgr36",
    title: "Шпонка",
    description: "Шпонка фиксации втулки в роторе.\nГабаритные размеры: 23х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 255,
    winch: "sgr36",
    title: "Шпонка",
    description: "Шпонка фиксации тормозного шкива на червячном валу.\nГабаритные размеры: 80х14х9 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 256,
    winch: "sgr36",
    title: "Шпонка",
    description: "Шпонка фиксации вентилятора охлаждения.\nГабаритные размеры: 32х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 257,
    winch: "sgr36",
    title: "Шпонка",
    description: "Шпонка фиксации ротора на червячном валу.\nГабаритные размеры: 70х12х8 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 258,
    winch: "sgr36",
    title: "Штурвал",
    description: "Штурвал ручной доводки кабины.\nНаружный диаметр: Ø600 мм.\nУстановочный размер втулки: 20х20 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 259,
    winch: "sgr36",
    title: "Щуп",
    description: "Щуп контроля уровня масла в редукторе.\nДлина стержня: 120 мм.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 260,
    winch: "sgr36",
    title: "Электродвигатель ДЧР-15",
    description: "Тип электродвигателя: асинхронный.\nНапряжение питания: 380 В.\nНоминальная частота тока: 50 Гц.\nСинхронная частота вращения (большая/малая): 1500 об/мин.\nНоминальный ток: 36 А.\nНоминальная мощность 15 кВт.\nНаправление вращения: реверсивное.\nКласс изоляции: F (155°С).\nСтепень защиты: IP11.",
    type: "SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002-01",
    img: "/img_details/МЖИГ.526311.002-01.jpg"
  },
  {
    id: 261,
    winch: "sgr36",
    title: "Электромагнит ЭМ-1",
    description: "Электромагнит тормоза лебедки.\nНапряжение питания - 220В постоянного тока.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 262,
    winch: "sgr11",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: универсальное.\nДля рамы с межосевым расстоянием по канатам: 770мм.\nГабаритные размеры:762х976х150 мм",
    type: "SGR11, SGR11ЧР",
    consist: "Рама",
    designation: "МЖИГ.305115.005",
    img: "/img_details/МЖИГ.305115.005.jpg"
  },
  {
    id: 263,
    winch: "sgr11",
    title: "Ось",
    description: "Ось отводного блока.\nНаружный диаметр: Ø50 мм.\nДлина: 325 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Рама",
    designation: "0621.1600SGR.03.013",
    img: "/img_details/0621.1600SGR.03.013.jpg"
  },
  {
    id: 264,
    winch: "sgr11",
    title: "Отводной блок",
    description: "Блок отводной.\nНаружный диаметр: Ø435 мм.\nЧисло и диаметр ручьев (шт. / мм): 3х10",
    type: "SGR11, SGR11ЧР",
    consist: "Рама",
    designation: "У-001.00.473",
    img: "/img_details/У-001.00.473.jpg"
  },
  {
    id: 265,
    winch: "sgr11",
    title: "Амортизатор",
    description: "Амортизатор рамы лебедки лифтовой.\nГабаритные размеры:120х120х40 мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Рама",
    designation: "001.02.00.044Н",
    img: "/img_details/001.02.00.044Н.jpg"
  },
  {
    id: 266,
    winch: "sgr11",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 400кг.\nМежосевое расстояние по канатам: 770мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Рама",
    designation: "МЖИГ.301228.034",
    img: "/img_details/МЖИГ.301228.034.jpg"
  },
  {
    id: 267,
    winch: "sgr11",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность: 400кг.\nМежосевое расстояние по канатам: 770мм.",
    type: "SGR11, SGR11ЧР",
    consist: "Рама",
    designation: "МЖИГ.301228.034-01",
    img: "/img_details/МЖИГ.301228.034-01.jpg"
  },
  {
    id: 268,
    winch: "sgr16",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 400кг.\nМежосевое расстояние по канатам: 770мм.",
    type: "SGR16",
    consist: "Рама",
    designation: "МЖИГ.301224.017",
    img: "/img_details/МЖИГ.301224.017.jpg"
  },
  {
    id: 269,
    winch: "sgr16",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность: 400кг.\nМежосевое расстояние по канатам: 770мм.",
    type: "SGR16",
    consist: "Рама",
    designation: "МЖИГ.301224.017-01",
    img: "/img_details/МЖИГ.301224.017.jpg"
  },
  {
    id: 270,
    winch: "sgr16",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: универсальное.\nДля рамы с межосевым расстоянием по канатам: 775мм.\nГабаритные размеры:984х825х210 мм",
    type: "SGR16",
    consist: "Рама",
    designation: "МЖИГ.305115.004",
    img: "/img_details/МЖИГ.305115.004.jpg"
  },
  {
    id: 271,
    winch: "sgr16",
    title: "Отводной блок",
    description: "Блок отводной.\nНаружный диаметр: Ø435 мм.\nЧисло и диаметр ручьев (шт. / мм): 4х10",
    type: "SGR16",
    consist: "Рама",
    designation: "МЖИГ.711655.001-04",
    img: "/img_details/МЖИГ.711655.001-04.jpg"
  },
  {
    id: 272,
    winch: "sgr16",
    title: "Ось",
    description: "Ось отводного блока.\nНаружный диаметр: Ø50 мм.\nДлина: 325 мм.",
    type: "SGR16",
    consist: "Рама",
    designation: "0621.1600SGR.03.013",
    img: "/img_details/0621.1600SGR.03.013.jpg"
  },
  {
    id: 273,
    winch: "sgr16",
    title: "Амортизатор",
    description: "Амортизатор рамы лебедки лифтовой.\nГабаритные размеры:120х120х40 мм.",
    type: "SGR16",
    consist: "Рама",
    designation: "001.02.00.044Н",
    img: "/img_details/001.02.00.044Н.jpg"
  },
  {
    id: 274,
    winch: "sgr22",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 630кг.\nМежосевое расстояние по канатам: 775мм.",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.301228.037-02",
    img: "/img_details/МЖИГ.301228.037-02.jpg"
  },
  {
    id: 275,
    winch: "sgr22",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность: 630кг.\nМежосевое расстояние по канатам: 775мм.",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.301228.037-03",
    img: "/img_details/МЖИГ.301228.037-03.jpg"
  },
  {
    id: 276,
    winch: "sgr22",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 630кг.\nМежосевое расстояние по канатам: 930мм.",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.301228.037",
    img: "/img_details/МЖИГ.301228.037.jpg"
  },
  {
    id: 277,
    winch: "sgr22",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность: 630кг.\nМежосевое расстояние по канатам: 930мм.",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.301228.037-01",
    img: "/img_details/МЖИГ.301228.037-01.jpg"
  },
  {
    id: 278,
    winch: "sgr22",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: универсальное.\nДля рамы с межосевым расстоянием по канатам: 775мм.\nГабаритные размеры:984х825х210 мм",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.305115.004",
    img: "/img_details/МЖИГ.305115.004.jpg"
  },
  {
    id: 279,
    winch: "sgr22",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: правое.\nДля рамы с межосевым расстоянием по канатам: 930 мм.\nГабаритные размеры:1144х825х210 мм",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.305115.003",
    img: "/img_details/МЖИГ.305115.003.jpg"
  },
  {
    id: 280,
    winch: "sgr22",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: левое.\nДля рамы с межосевым расстоянием по канатам: 930 мм.\nГабаритные размеры: 1144х825х210 мм",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.305115.003-01",
    img: "/img_details/МЖИГ.305115.003-01.jpg"
  },
  {
    id: 281,
    winch: "sgr22",
    title: "Отводной блок",
    description: "Блок отводной.\nНаружный диаметр: Ø510 мм.\nЧисло и диаметр ручьев (шт. / мм): 4х12",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "МЖИГ.711655.001-03",
    img: "/img_details/МЖИГ.711655.001-03.jpg"
  },
  {
    id: 282,
    winch: "sgr22",
    title: "Ось",
    description: "Ось отводного блока.\nНаружный диаметр: Ø50 мм.\nДлина: 325 мм.",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "0621.1600SGR.03.013",
    img: "/img_details/0621.1600SGR.03.013.jpg"
  },
  {
    id: 283,
    winch: "sgr22",
    title: "Амортизатор",
    description: "Амортизатор рамы лебедки лифтовой.\nГабаритные размеры:120х120х40 мм",
    type: "SGR22,SGR22ЧР",
    consist: "Рама",
    designation: "001.02.00.044Н",
    img: "/img_details/001.02.00.044Н.jpg"
  },
  {
    id: 284,
    winch: "sgr26",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 630кг.\nМежосевое расстояние по канатам: 770мм.",
    type: "SGR26",
    consist: "Рама",
    designation: "МЖИГ.301224.017-02",
    img: "/img_details/МЖИГ.301224.017-02.jpg"
  },
  {
    id: 285,
    winch: "sgr26",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность: 630кг.\nМежосевое расстояние по канатам: 770мм.",
    type: "SGR26",
    consist: "Рама",
    designation: "МЖИГ.301224.017-03",
    img: "/img_details/МЖИГ.301224.017-03.jpg"
  },
  {
    id: 286,
    winch: "sgr26",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: универсальное.\nДля рамы с межосевым расстоянием по канатам: 775мм.\nГабаритные размеры:984х825х210 мм",
    type: "SGR26",
    consist: "Рама",
    designation: "МЖИГ.305115.004",
    img: "/img_details/МЖИГ.305115.004.jpg"
  },
  {
    id: 287,
    winch: "sgr26",
    title: "Отводной блок",
    description: "Блок отводной.\nНаружный диаметр: Ø435 мм.\nЧисло и диаметр ручьев (шт. / мм): 4х10",
    type: "SGR26",
    consist: "Рама",
    designation: "0411.1386SGR.03.010-003",
    img: "/img_details/0411.1386SGR.03.010-003.jpg"
  },
  {
    id: 288,
    winch: "sgr26",
    title: "Ось",
    description: "Ось отводного блока.\nНаружный диаметр: Ø50 мм.\nДлина: 325 мм.",
    type: "SGR26",
    consist: "Рама",
    designation: "0621.1600SGR.03.013",
    img: "/img_details/0621.1600SGR.03.013.jpg"
  },
  {
    id: 289,
    winch: "sgr26",
    title: "Амортизатор",
    description: "Амортизатор рамы лебедки лифтовой.\nГабаритные размеры:120х120х40 мм",
    type: "SGR26",
    consist: "Рама",
    designation: "001.02.00.044Н",
    img: "/img_details/001.02.00.044Н.jpg"
  },
  {
    id: 290,
    winch: "sgr31",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 1000 кг.\nМежосевое расстояние по канатам: 775мм.",
    type: "SGR31",
    consist: "Рама",
    designation: "МЖИГ.301224.017-06",
    img: "/img_details/МЖИГ.301224.017-06.jpg"
  },
  {
    id: 291,
    winch: "sgr31",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность:1000 кг.\nМежосевое расстояние по канатам: 775мм.",
    type: "SGR31",
    consist: "Рама",
    designation: "МЖИГ.301224.017-07",
    img: "/img_details/МЖИГ.301224.017-07.jpg"
  },
  {
    id: 292,
    winch: "sgr31",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 1000 кг.\nМежосевое расстояние по канатам: 930мм.",
    type: "SGR31",
    consist: "Рама",
    designation: "МЖИГ.301224.017-08",
    img: "/img_details/МЖИГ.301224.017-08.jpg"
  },
  {
    id: 293,
    winch: "sgr31",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность: 1000 кг.\nМежосевое расстояние по канатам: 930мм.",
    type: "SGR31",
    consist: "Рама",
    designation: "МЖИГ.301224.017-09",
    img: "/img_details/МЖИГ.301224.017-09.jpg"
  },
  {
    id: 294,
    winch: "sgr31",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: универсальное.\nДля рамы с межосевым расстоянием по канатам: 775мм.\nГабаритные размеры:984х825х210 мм",
    type: "SGR31",
    consist: "Рама",
    designation: "МЖИГ.305115.004",
    img: "/img_details/МЖИГ.305115.004.jpg"
  },
  {
    id: 295,
    winch: "sgr31",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: правое.\nДля рамы с межосевым расстоянием по канатам: 930 мм.\nГабаритные размеры:1144х825х210 мм",
    type: "SGR31",
    consist: "Рама",
    designation: "МЖИГ.305115.003",
    img: "/img_details/МЖИГ.305115.003.jpg"
  },
  {
    id: 296,
    winch: "sgr31",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: левое.\nДля рамы с межосевым расстоянием по канатам: 930 мм.\nГабаритные размеры: 1144х825х210 мм",
    type: "SGR31",
    consist: "Рама",
    designation: "МЖИГ.305115.003-01",
    img: "/img_details/МЖИГ.305115.003-01.jpg"
  },
  {
    id: 297,
    winch: "sgr31",
    title: "Отводной блок",
    description: "Блок отводной.\nНаружный диаметр: Ø435 мм.\nЧисло и диаметр ручьев (шт. / мм): 5х10",
    type: "SGR31",
    consist: "Рама",
    designation: "0621.1600SGR.03.010-004",
    img: "/img_details/0621.1600SGR.03.010-004.jpg"
  },
  {
    id: 298,
    winch: "sgr31",
    title: "Ось",
    description: "Ось отводного блока.\nНаружный диаметр: Ø50 мм.\nДлина: 325 мм.",
    type: "SGR31",
    consist: "Рама",
    designation: "0621.1600SGR.03.013",
    img: "/img_details/0621.1600SGR.03.013.jpg"
  },
  {
    id: 299,
    winch: "sgr31",
    title: "Амортизатор",
    description: "Амортизатор рамы лебедки лифтовой.\nГабаритные размеры:120х120х40 мм",
    type: "SGR31",
    consist: "Рама",
    designation: "001.02.00.044Н",
    img: "/img_details/001.02.00.044Н.jpg"
  },
  {
    id: 300,
    winch: "sgr36",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 1000 кг.\nМежосевое расстояние по канатам: 775мм.",
    type: "SGR36",
    consist: "Рама",
    designation: "МЖИГ.301224.017-06",
    img: "/img_details/МЖИГ.301224.017-06.jpg"
  },
  {
    id: 301,
    winch: "sgr36",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность:1000 кг.\nМежосевое расстояние по канатам: 775мм.",
    type: "SGR36",
    consist: "Рама",
    designation: "МЖИГ.301224.017-07",
    img: "/img_details/МЖИГ.301224.017-07.jpg"
  },
  {
    id: 302,
    winch: "sgr36",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: правое.\nГрузоподъемность: 1000 кг.\nМежосевое расстояние по канатам: 930мм.",
    type: "SGR36",
    consist: "Рама",
    designation: "МЖИГ.301224.017-08",
    img: "/img_details/МЖИГ.301224.017-08.jpg"
  },
  {
    id: 303,
    winch: "sgr36",
    title: "Рама в сборе",
    description: "Рама под лебедку лифтовую в сборе.\nИсполнение: левое.\nГрузоподъемность: 1000 кг.\nМежосевое расстояние по канатам: 930мм.",
    type: "SGR36",
    consist: "Рама",
    designation: "МЖИГ.301224.017-09",
    img: "/img_details/МЖИГ.301224.017-09.jpg"
  },
  {
    id: 304,
    winch: "sgr36",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: универсальное.\nДля рамы с межосевым расстоянием по канатам: 775мм.\nГабаритные размеры:984х825х210 мм",
    type: "SGR36",
    consist: "Рама",
    designation: "МЖИГ.305115.004",
    img: "/img_details/МЖИГ.305115.004.jpg"
  },
  {
    id: 305,
    winch: "sgr36",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: правое.\nДля рамы с межосевым расстоянием по канатам: 930 мм.\nГабаритные размеры:1144х825х210 мм",
    type: "SGR36",
    consist: "Рама",
    designation: "МЖИГ.305115.003",
    img: "/img_details/МЖИГ.305115.003.jpg"
  },
  {
    id: 306,
    winch: "sgr36",
    title: "Ограждение",
    description: "Ограждение КВШ рамы лифтовой лебедки.\nИсполнение: левое.\nДля рамы с межосевым расстоянием по канатам: 930 мм.\nГабаритные размеры: 1144х825х210 мм",
    type: "SGR36",
    consist: "Рама",
    designation: "МЖИГ.305115.003-01",
    img: "/img_details/МЖИГ.305115.003-01.jpg"
  },
  {
    id: 307,
    winch: "sgr36",
    title: "Отводной блок",
    description: "Блок отводной.\nНаружный диаметр: Ø435 мм.\nЧисло и диаметр ручьев (шт. / мм): 5х10",
    type: "SGR36",
    consist: "Рама",
    designation: "0621.1600SGR.03.010-004",
    img: "/img_details/0621.1600SGR.03.010-004.jpg"
  },
  {
    id: 308,
    winch: "sgr36",
    title: "Ось",
    description: "Ось отводного блока.\nНаружный диаметр: Ø50 мм.\nДлина: 325 мм.",
    type: "SGR36",
    consist: "Рама",
    designation: "0621.1600SGR.03.013",
    img: "/img_details/0621.1600SGR.03.013.jpg"
  },
  {
    id: 309,
    winch: "sgr36",
    title: "Амортизатор",
    description: "Амортизатор рамы лебедки лифтовой.\nГабаритные размеры:120х120х40 мм",
    type: "SGR36",
    consist: "Рама",
    designation: "001.02.00.044Н",
    img: "/img_details/001.02.00.044Н.jpg"
  }
]

export default dataDetail;
