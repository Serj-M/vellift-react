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
    description: "Вал КВШ (с коническими посадками)",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.716414.001",
    img: "/img_details/МЖИГ.716414.001.jpg"
  },
  {
    id: 2,
    winch: "sgr11",
    title: "Вал червячный",
    description: "Передаточное число - 48",
    type: "SGR11,SGR11ЧР",
    consist: "Редуктор",
    designation: "А138.6-2-48-0001",
    img: "/img_details/А138.6-2-48-0001.jpg"
  },
  {
    id: 3,
    winch: "sgr11",
    title: "Вентилятор",
    description: "Вентилятор охлаждение электродвигателя",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 4,
    winch: "sgr11",
    title: "Втулка",
    description: "Упорная втулка пружины тормоза",
    type: "SGR11, SGR11ЧР, SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 5,
    winch: "sgr11",
    title: "Гайка",
    description: "Гайка упорная пружины тормоза в пластиковом корпусе",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 6,
    winch: "sgr11",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.726325.006",
    img: "/img_details/МЖИГ.726325.006.jpg"
  },
  {
    id: 7,
    winch: "sgr11",
    title: "Кольцо",
    description: "Кольцо дистанционное конусное, ? 66 мм",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.712141.002",
    img: "/img_details/МЖИГ.712141.002-01.jpg"
  },
  {
    id: 8,
    winch: "sgr11",
    title: "Корпус редуктора",
    description: "Корпус цельнолитой",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.731378.002",
    img: "/img_details/МЖИГ.731378.002.jpg"
  },
  {
    id: 9,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка крепления подшипника 6009",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.712428.001",
    img: "/img_details/МЖИГ.712428.001.jpg"
  },
  {
    id: 10,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка крепления подшипника 212",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711342.012",
    img: "/img_details/МЖИГ.711342.012.jpg"
  },
  {
    id: 11,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка крепления дуплексного(спаренного) подшипника 6211",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047",
    img: "/img_details/МЖИГ.711142.047.jpg"
  },
  {
    id: 12,
    winch: "sgr11",
    title: "Крышка",
    description: "Крышка с маслозаливной горловиной",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.735225.001",
    img: "/img_details/МЖИГ.735225.001.jpg"
  },
  {
    id: 13,
    winch: "sgr11",
    title: "Ограничитель сбрасывания канатов",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.304275.004",
    img: "/img_details/МЖИГ.304275.004.jpg"
  },
  {
    id: 14,
    winch: "sgr11",
    title: "Ось",
    description: "Ось крепления рычага тормоза",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "МЖИГ.715311.011",
    img: "/img_details/МЖИГ.715311.011.jpg"
  },
  {
    id: 15,
    winch: "sgr11",
    title: "Пробка",
    description: "Пробка слива масла",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.713511.006",
    img: "/img_details/МЖИГ.713511.006.jpg"
  },
  {
    id: 16,
    winch: "sgr11",
    title: "Прокладка",
    description: "Прокладка резиновая, ? 145 мм",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.754154.022",
    img: "/img_details/МЖИГ.754154.022.jpg"
  },
  {
    id: 17,
    winch: "sgr11",
    title: "Прокладка",
    description: "Прокладка резиновая, размер 296 х 136 мм",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.754142.025",
    img: "/img_details/МЖИГ.754142.025.jpg"
  },
  {
    id: 18,
    winch: "sgr11",
    title: "Прокладка",
    description: "Прокладка резиновая, ? 115 мм",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.754154.024",
    img: "/img_details/МЖИГ.754154.024.jpg"
  },
  {
    id: 19,
    winch: "sgr11",
    title: "Подшипник",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "6211 2RS1DBGA",
    img: "/img_details/6211 2RS1DBGA.jpg"
  },
  {
    id: 20,
    winch: "sgr11",
    title: "Подшипник",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: 6009,
    img: "/img_details/6009.jpg"
  },
  {
    id: 21,
    winch: "sgr11",
    title: "Подшипник",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "6304ZZ.P5Q5",
    img: "/img_details/6304ZZ.P5Q5.jpg"
  },
  {
    id: 22,
    winch: "sgr11",
    title: "Подшипник",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Рдуктор",
    designation: "N212.TVPP5Q5",
    img: "/img_details/N212.TVPP5Q5.jpg"
  },
  {
    id: 23,
    winch: "sgr11",
    title: "Пружина",
    description: "Пружина тормоза",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.005",
    img: "/img_details/0411.1386SGR.09.005.jpg"
  },
  {
    id: 24,
    winch: "sgr11",
    title: "Рычага тормоза",
    description: "Тормозные накладки в комплекте",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000-01",
    img: "/img_details/ПО377.00.00.000-01.jpg"
  },
  {
    id: 25,
    winch: "sgr11",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания лебедки",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.305654.001",
    img: "/img_details/МЖИГ.305654.001.jpg"
  },
  {
    id: 26,
    winch: "sgr11",
    title: "Скоба",
    description: "Скоба подъема и перемещения лебедки",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.745232.010",
    img: "/img_details/МЖИГ.745232.010.jpg"
  },
  {
    id: 27,
    winch: "sgr11",
    title: "Стержень",
    description: "Стержень крепления пружин тормоза",
    type: "SGR11, SGR11ЧР",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.024",
    img: "/img_details/МЖИГ.715511.024.jpg"
  },
  {
    id: 28,
    winch: "sgr11",
    title: "Червячное колесо",
    description: "Передаточное число - 48",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "А138.6-5-48-0001",
    img: "/img_details/А138.6-5-48-0001.jpg"
  },
  {
    id: 29,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба крепления подшипника 6009",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-01",
    img: "/img_details/МЖИГ.711312.005-01.jpg"
  },
  {
    id: 30,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба крепления ротора электродвигателя",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.711342.013",
    img: "/img_details/МЖИГ.711342.013.jpg"
  },
  {
    id: 31,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба стопорная, ?",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.741314.007",
    img: "/img_details/МЖИГ.741314.007.jpg"
  },
  {
    id: 32,
    winch: "sgr11",
    title: "Шайба",
    description: "Шайба крепления КВШ",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005",
    img: "/img_details/МЖИГ.711312.005.jpg"
  },
  {
    id: 33,
    winch: "sgr11",
    title: "Шайба стопорная",
    description: "Шайба стопорная болтов крепления шайб МЖИГ.711312.005-01, МЖИГ.711312.005",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.741314.006",
    img: "/img_details/МЖИГ.741314.006.jpg"
  },
  {
    id: 34,
    winch: "sgr11",
    title: "Шкив канатоведущий",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.712695.011",
    img: "/img_details/МЖИГ.712695.011.jpg"
  },
  {
    id: 35,
    winch: "sgr11",
    title: "Шкив тормозной",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711196.003",
    img: "/img_details/МЖИГ.711196.003.jpg"
  },
  {
    id: 36,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации ротора электродвигателя на червячном валу",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.006",
    img: "/img_details/0411.1386SGR.01.006.jpg"
  },
  {
    id: 37,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации тормозного шкива на червячном валу",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.006-01",
    img: "/img_details/0411.1386SGR.01.006-01.jpg"
  },
  {
    id: 38,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации червячного колеса и КВШ на тихоходном валу",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.007",
    img: "/img_details/0411.1386SGR.01.007.jpg"
  },
  {
    id: 39,
    winch: "sgr11",
    title: "Шпонка",
    description: "Шпонка фиксации вентилятора охлаждения на втулке ротора электродвигателя",
    type: "SGR11, SGR11ЧР",
    consist: "Привод",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 40,
    winch: "sgr11",
    title: "Щуп(маслоуказатель)",
    description: "",
    type: "SGR11, SGR11ЧР",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025",
    img: "/img_details/0411.1386SGR.01.025.jpg"
  },
  {
    id: 41,
    winch: "sgr11",
    title: "Электродвигатель АДЛ-5,2С",
    description: "",
    type: "SGR11",
    consist: "Лебедка",
    designation: "МЖИГ.526211.002",
    img: "/img_details/МЖИГ.526211.002.jpg"
  },
  {
    id: 42,
    winch: "sgr11",
    title: "Электромагнит ЭМ-2",
    description: "Электромагнит тормоза лебедки",
    type: "SGR11, SGR11ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.684411.004",
    img: "/img_details/МЖИГ.684411.004.jpg"
  },
  {
    id: 43,
    winch: "sgr16",
    title: "Болт",
    description: "Болт крепления рычага тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 44,
    winch: "sgr16",
    title: "Вал",
    description: "вал тихоходный",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 45,
    winch: "sgr16",
    title: "Вал червячный",
    description: "",
    type: "SGR31, SGR31ЧР, SGR16,",
    consist: "Редуктор",
    designation: "А160-2-22-0001",
    img: "/img_details/А160-2-22-0001.jpg"
  },
  {
    id: 46,
    winch: "sgr16",
    title: "Вентилятор",
    description: "охлаждение эл.двигателя",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 47,
    winch: "sgr16",
    title: "Втулка",
    description: "крепление вентилятора и стяжки ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 48,
    winch: "sgr16",
    title: "Втулка",
    description: "на стержень",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 49,
    winch: "sgr16",
    title: "Гайка",
    description: "пласт.корпус на стержень",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 50,
    winch: "sgr16",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060",
    img: "/img_details/0621.1600SGR.00.060.jpg"
  },
  {
    id: 51,
    winch: "sgr16",
    title: "Кольцо",
    description: "кольцо конусное",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 52,
    winch: "sgr16",
    title: "Корпус редуктора",
    description: "зав.пр-а",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 53,
    winch: "sgr16",
    title: "Крышка",
    description: "крышка крепления подшипника 3211(противоположная сторона от КВШ)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 54,
    winch: "sgr16",
    title: "Крышка",
    description: "со стороны квш (под манжету)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 55,
    winch: "sgr16",
    title: "Крышка",
    description: "крышка крепления дуплексного(спаренного) подшипника",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 56,
    winch: "sgr16",
    title: "Крышка",
    description: "крышка маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 57,
    winch: "sgr16",
    title: "Крышка",
    description: "Крышка защиты обмотки статора электродвигателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 58,
    winch: "sgr16",
    title: "Ограничитель сбрасывания канатов",
    description: "",
    type: "SGR22, SGR22ЧР, SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.304275.003",
    img: "/img_details/МЖИГ.304275.003.jpg"
  },
  {
    id: 59,
    winch: "sgr16",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711452.011",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 60,
    winch: "sgr16",
    title: "Пробка",
    description: "Сливная",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 61,
    winch: "sgr16",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711422.001",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 62,
    winch: "sgr16",
    title: "Прокладка",
    description: "Для крышки маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 63,
    winch: "sgr16",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-2RS1DBGA",
    img: "/img_details/6214-2RS1DBGA.jpg"
  },
  {
    id: 64,
    winch: "sgr16",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216.P6Q6(P5Q5)K",
    img: "/img_details/N216.P6Q6(P5Q5)K.jpg"
  },
  {
    id: 65,
    winch: "sgr16",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "3211.P6Q6(P5Q5)",
    img: "/img_details/3211.P6Q6(P5Q5).jpg"
  },
  {
    id: 66,
    winch: "sgr16",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6007ZZ.P5Q5",
    img: "/img_details/6007ZZ.P5Q5.jpg"
  },
  {
    id: 67,
    winch: "sgr16",
    title: "Пружина",
    description: "Пружина тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0621.1600SGR.09.005",
    img: "/img_details/0621.1600SGR.09.005.jpg"
  },
  {
    id: 68,
    winch: "sgr16",
    title: "Рычаг тормоза",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 69,
    winch: "sgr16",
    title: "Сервисный комплект",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 70,
    winch: "sgr16",
    title: "Стержень",
    description: "для торм. Уст",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 71,
    winch: "sgr16",
    title: "Стойка",
    description: "для штурвала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 72,
    winch: "sgr16",
    title: "Червячное колесо",
    description: "",
    type: "SGR31, SGR31ЧР, SGR16",
    consist: "Редуктор",
    designation: "А160-5-22-0001",
    img: "/img_details/А160-5-22-0001.jpg"
  },
  {
    id: 73,
    winch: "sgr16",
    title: "Шайба",
    description: "крепление подш.3211 тихоходного вала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 74,
    winch: "sgr16",
    title: "Шайба стопорная",
    description: "крепление шайб 0621.1600SGR.01.008/-01;МЖИГ.711312.005-02/-03",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 75,
    winch: "sgr16",
    title: "Шайба",
    description: "крепление КВШ",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 76,
    winch: "sgr16",
    title: "Шайба стопорная",
    description: "крепление ротора/стяжка пакета",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 77,
    winch: "sgr16",
    title: "Шкив канатоведущий",
    description: "КВШ",
    type: "SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.712695.016",
    img: "/img_details/МЖИГ.712695.016.jpg"
  },
  {
    id: 78,
    winch: "sgr16",
    title: "Шкив тормозной",
    description: "",
    type: "SGR26,  SGR31ЧР, SGR16, SGR22ЧР,SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 79,
    winch: "sgr16",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 80,
    winch: "sgr16",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 81,
    winch: "sgr16",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 82,
    winch: "sgr16",
    title: "Шпонка",
    description: "втулка ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 83,
    winch: "sgr16",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 84,
    winch: "sgr16",
    title: "Штурвал",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 85,
    winch: "sgr16",
    title: "Щуп(маслоуказатель)",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 86,
    winch: "sgr16",
    title: "Электродвигатель ДЧР-8,5",
    description: "",
    type: "SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002",
    img: "/img_details/МЖИГ.526311.002.jpg"
  },
  {
    id: 87,
    winch: "sgr16",
    title: "Электромагнит ЭМ-1",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 88,
    winch: "sgr22",
    title: "Болт",
    description: "Болт крепления рычага тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 89,
    winch: "sgr22",
    title: "Вал",
    description: "Вал тихоходный(с коническими посадками)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 90,
    winch: "sgr22",
    title: "Вал червячный",
    description: "",
    type: "SGR22, SGR22ЧР",
    consist: "Редуктор",
    designation: "А160-2-48-0001",
    img: "/img_details/А160-2-48-0001.jpg"
  },
  {
    id: 91,
    winch: "sgr22",
    title: "Вентилятор",
    description: "охлаждение эл.двигателя",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 92,
    winch: "sgr22",
    title: "Втулка",
    description: "крепление вентилятора и стяжки ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 93,
    winch: "sgr22",
    title: "Втулка",
    description: "на стержень",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 94,
    winch: "sgr22",
    title: "Гайка",
    description: "пласт.корпус на стержень",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 95,
    winch: "sgr22",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060",
    img: "/img_details/0621.1600SGR.00.060.jpg"
  },
  {
    id: 96,
    winch: "sgr22",
    title: "Кольцо",
    description: "Кольцо конусное",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 97,
    winch: "sgr22",
    title: "Корпус редуктора",
    description: "зав.пр-а",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 98,
    winch: "sgr22",
    title: "Крышка",
    description: "крышка крепления подшипника 3211(противоположная сторона от КВШ)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 99,
    winch: "sgr22",
    title: "Крышка",
    description: "со стороны квш (под манжету)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 100,
    winch: "sgr22",
    title: "Крышка",
    description: "крышка крепления дуплексного(спаренного) подшипника",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 101,
    winch: "sgr22",
    title: "Крышка",
    description: "крышка  маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 102,
    winch: "sgr22",
    title: "Крышка",
    description: "крышка защиты обмотки статора электродвигателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 103,
    winch: "sgr22",
    title: "Ограничитель сбрасывания канатов",
    description: "",
    type: "SGR22, SGR22ЧР, SGR16",
    consist: "Лебедка",
    designation: "МЖИГ.304275.003",
    img: "/img_details/МЖИГ.304275.003.jpg"
  },
  {
    id: 104,
    winch: "sgr22",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711422.001",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 105,
    winch: "sgr22",
    title: "Пробка",
    description: "Сливная",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 106,
    winch: "sgr22",
    title: "Прокладка",
    description: "Для крышки маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 107,
    winch: "sgr22",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711452.011",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 108,
    winch: "sgr22",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-2RS1DBGA",
    img: "/img_details/6214-2RS1DBGA.jpg"
  },
  {
    id: 109,
    winch: "sgr22",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216.P6Q6(P5Q5)K",
    img: "/img_details/N216.P6Q6(P5Q5)K.jpg"
  },
  {
    id: 110,
    winch: "sgr22",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "3211.P6Q6(P5Q5)",
    img: "/img_details/3211.P6Q6(P5Q5).jpg"
  },
  {
    id: 111,
    winch: "sgr22",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6007ZZ.P5Q5",
    img: "/img_details/6007ZZ.P5Q5.jpg"
  },
  {
    id: 112,
    winch: "sgr22",
    title: "Пружина",
    description: "Пружина тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0621.1600SGR.09.005",
    img: "/img_details/0621.1600SGR.09.005.jpg"
  },
  {
    id: 113,
    winch: "sgr22",
    title: "Рычаг тормоза",
    description: "Тормозные накладки в комплекте",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 114,
    winch: "sgr22",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания лебедки",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 115,
    winch: "sgr22",
    title: "Стержень",
    description: "для торм.уст.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 116,
    winch: "sgr22",
    title: "Стойка",
    description: "для штурвала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 117,
    winch: "sgr22",
    title: "Червячное колесо",
    description: "",
    type: "SGR22, SGR22ЧР",
    consist: "Редуктор",
    designation: "А160-5-48-0001",
    img: "/img_details/А160-5-48-0001.jpg"
  },
  {
    id: 118,
    winch: "sgr22",
    title: "Шайба",
    description: "крепление подш.3211 тихоходного вала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 119,
    winch: "sgr22",
    title: "Шайба стопорная",
    description: "крепление ротора/стяжка пакета",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 120,
    winch: "sgr22",
    title: "Шайба",
    description: "крепление КВШ",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 121,
    winch: "sgr22",
    title: "Шайба стопорная",
    description: "крепление шайб 0621.1600SGR.01.008/-01;МЖИГ.711312.005-02/-03",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 122,
    winch: "sgr22",
    title: "Шкив канатоведущий",
    description: "КВШ",
    type: "SGR22, SGR22ЧР",
    consist: "Лебедка",
    designation: "МЖИГ.712695.022",
    img: "/img_details/МЖИГ.712695.022.jpg"
  },
  {
    id: 123,
    winch: "sgr22",
    title: "Шкив тормозной",
    description: "",
    type: "SGR22,  SGR31",
    consist: "Редуктор",
    designation: "МЖИГ.304232.013",
    img: "/img_details/МЖИГ.304232.013.jpg"
  },
  {
    id: 124,
    winch: "sgr22",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 125,
    winch: "sgr22",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 126,
    winch: "sgr22",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 127,
    winch: "sgr22",
    title: "Шпонка",
    description: "втулка ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 128,
    winch: "sgr22",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 129,
    winch: "sgr22",
    title: "Штурвал",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 130,
    winch: "sgr22",
    title: "Щуп(маслоуказатель)",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 131,
    winch: "sgr22",
    title: "Электродвигатель ДЧР-8,5/2,1",
    description: "",
    type: "SGR22",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002-02",
    img: "/img_details/МЖИГ.526311.002-02.jpg"
  },
  {
    id: 132,
    winch: "sgr22",
    title: "Электромагнит ЭМ-1",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 133,
    winch: "sgr26",
    title: "Вентилятор",
    description: "охлаждение эл.двигателя",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.632558.003",
    img: "/img_details/МЖИГ.632558.003.jpg"
  },
  {
    id: 134,
    winch: "sgr26",
    title: "Втулка",
    description: "крепление вентилятора и стяжки ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.713444.001",
    img: "/img_details/МЖИГ.713444.001.jpg"
  },
  {
    id: 135,
    winch: "sgr26",
    title: "Втулка",
    description: "на стержень",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.001",
    img: "/img_details/0411.1386SGR.09.001.jpg"
  },
  {
    id: 136,
    winch: "sgr26",
    title: "Гайка",
    description: "пласт.корпус на стержень",
    type: "SGR11, SGR11ЧР,SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.1386SGR.09.003",
    img: "/img_details/0411.1386SGR.09.003.jpg"
  },
  {
    id: 137,
    winch: "sgr26",
    title: "Болт",
    description: "болт крепления рычага тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 138,
    winch: "sgr26",
    title: "Вал",
    description: "вал тихоходный",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 139,
    winch: "sgr26",
    title: "Вал червячный",
    description: "",
    type: "SGR26,  SGR36",
    consist: "Редукутор",
    designation: "А160-2-13,67-0001",
    img: "/img_details/А160-2-13,67-0001.jpg"
  },
  {
    id: 140,
    winch: "sgr26",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060",
    img: "/img_details/0621.1600SGR.00.060.jpg"
  },
  {
    id: 141,
    winch: "sgr26",
    title: "Кольцо",
    description: "Кольцо конусное",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 142,
    winch: "sgr26",
    title: "Корпус редуктора",
    description: "зав.пр-а",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 143,
    winch: "sgr26",
    title: "Крышка",
    description: "крышка крепления подшипника 3211(противоположная сторона от КВШ)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 144,
    winch: "sgr26",
    title: "Крышка",
    description: "со стороны квш (под манжету)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 145,
    winch: "sgr26",
    title: "Крышка",
    description: "крышка крепления дуплексного(спаренного) подшипника",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 146,
    winch: "sgr26",
    title: "Крышка",
    description: "крышка маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 147,
    winch: "sgr26",
    title: "Крышка",
    description: "Крышка защиты обмотки статора электродвигателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 148,
    winch: "sgr26",
    title: "Ограничитель сбрасывания канатов",
    description: "",
    type: "SGR31, SGR31ЧР, SGR26,  SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.304275.003",
    img: "/img_details/МЖИГ.304275.003.jpg"
  },
  {
    id: 149,
    winch: "sgr26",
    title: "Прокладка",
    description: "для крышки МЖИГ.711452.011",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 150,
    winch: "sgr26",
    title: "Пробка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 151,
    winch: "sgr26",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711422.001",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редууктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 152,
    winch: "sgr26",
    title: "Прокладка",
    description: "для крышки маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 153,
    winch: "sgr26",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-2RS1DBGA",
    img: "/img_details/6214-2RS1DBGA.jpg"
  },
  {
    id: 154,
    winch: "sgr26",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216.P6Q6(P5Q5)K",
    img: "/img_details/N216.P6Q6(P5Q5)K.jpg"
  },
  {
    id: 155,
    winch: "sgr26",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "3211.P6Q6(P5Q5)",
    img: "/img_details/3211.P6Q6(P5Q5).jpg"
  },
  {
    id: 156,
    winch: "sgr26",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6007ZZ.P5Q5",
    img: "/img_details/6007ZZ.P5Q5.jpg"
  },
  {
    id: 157,
    winch: "sgr26",
    title: "Пружина",
    description: "Пружина тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0621.1600SGR.09.005",
    img: "/img_details/0621.1600SGR.09.005.jpg"
  },
  {
    id: 158,
    winch: "sgr26",
    title: "Рычаг тормоза",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 159,
    winch: "sgr26",
    title: "Сервисный комплект",
    description: "Сервисный комплект принудительного ручного растормаживания лебедки",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 160,
    winch: "sgr26",
    title: "Стержень",
    description: "для торм. Уст",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 161,
    winch: "sgr26",
    title: "Стойка",
    description: "для штурвала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 162,
    winch: "sgr26",
    title: "Червячное колесо",
    description: "",
    type: "SGR26,  SGR36",
    consist: "Редуктор",
    designation: "А160-5-13,67-0001",
    img: "/img_details/А160-5-13,67-0001.jpg"
  },
  {
    id: 163,
    winch: "sgr26",
    title: "Шайба",
    description: "крепление подш.3211 тихоходного вала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 164,
    winch: "sgr26",
    title: "Шайба стопорная",
    description: "крепление шайб 0621.1600SGR.01.008/-01;МЖИГ.711312.005-02/-03",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 165,
    winch: "sgr26",
    title: "Шайба",
    description: "крепление квш",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 166,
    winch: "sgr26",
    title: "Шайба стопорная",
    description: "крепление ротора/стяжка пакета",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 167,
    winch: "sgr26",
    title: "Шкив канатоведущий",
    description: "КВШ",
    type: "SGR26",
    consist: "Лебедка",
    designation: "МЖИГ.712695.026",
    img: "/img_details/МЖИГ.712695.026.jpg"
  },
  {
    id: 168,
    winch: "sgr26",
    title: "Шкив тормозной",
    description: "",
    type: "SGR26, SGR31ЧР, SGR16, SGR36,SGR22ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 169,
    winch: "sgr26",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 170,
    winch: "sgr26",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 171,
    winch: "sgr26",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 172,
    winch: "sgr26",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 173,
    winch: "sgr26",
    title: "Шпонка",
    description: "втулка ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 174,
    winch: "sgr26",
    title: "Штурвал",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 175,
    winch: "sgr26",
    title: "Щуп(маслоуказатель)",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 176,
    winch: "sgr26",
    title: "Электродвигатель АН225D4НЛБТ",
    description: "",
    type: "SGR26",
    consist: "Лебедка",
    designation: "АН225D4НЛБТ",
    img: "/img_details/АН225D4НЛБТ.jpg"
  },
  {
    id: 177,
    winch: "sgr26",
    title: "Электромагнит ЭМ-1",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 178,
    winch: "sgr31",
    title: "Болт",
    description: "болт крепления рычага тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 179,
    winch: "sgr31",
    title: "Вал",
    description: "Вал тихоходный(с коническими посадками)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 180,
    winch: "sgr31",
    title: "Вал червячный",
    description: "",
    type: "SGR31,  SGR16, SGR31ЧР",
    consist: "Редуктор",
    designation: "А160-2-22-0001",
    img: "/img_details/А160-2-22-0001.jpg"
  },
  {
    id: 181,
    winch: "sgr31",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060",
    img: "/img_details/0621.1600SGR.00.060.jpg"
  },
  {
    id: 182,
    winch: "sgr31",
    title: "Кольцо",
    description: "кольцо конусное",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 183,
    winch: "sgr31",
    title: "Корпус редуктора",
    description: "зав.пр-а",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 184,
    winch: "sgr31",
    title: "Крышка",
    description: "крышка крепления подшипника 3211(противоположная сторона от КВШ)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 185,
    winch: "sgr31",
    title: "Крышка",
    description: "со стороны квш (под манжету)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 186,
    winch: "sgr31",
    title: "Крышка",
    description: "крышка крепления дуплексного(спаренного) подшипника",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 187,
    winch: "sgr31",
    title: "Крышка",
    description: "крышка маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 188,
    winch: "sgr31",
    title: "Крышка",
    description: "Крышка защиты обмотки статора электродвигателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 189,
    winch: "sgr31",
    title: "Ограничитель сбрасывания канатов",
    description: "",
    type: "SGR31, SGR36, SGR31 ЧР, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.304275.002",
    img: "/img_details/МЖИГ.304275.002.jpg"
  },
  {
    id: 190,
    winch: "sgr31",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711452.011",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 191,
    winch: "sgr31",
    title: "Пробка",
    description: "Сливная",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 192,
    winch: "sgr31",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711422.001",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 193,
    winch: "sgr31",
    title: "Прокладка",
    description: "для крышки маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 194,
    winch: "sgr31",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-2RS1DBGA",
    img: "/img_details/6214-2RS1DBGA.jpg"
  },
  {
    id: 195,
    winch: "sgr31",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216.P6Q6(P5Q5)K",
    img: "/img_details/N216.P6Q6(P5Q5)K.jpg"
  },
  {
    id: 196,
    winch: "sgr31",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "3211.P6Q6(P5Q5)",
    img: "/img_details/3211.P6Q6(P5Q5).jpg"
  },
  {
    id: 197,
    winch: "sgr31",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6007ZZ.P5Q5",
    img: "/img_details/6007ZZ.P5Q5.jpg"
  },
  {
    id: 198,
    winch: "sgr31",
    title: "Пружина",
    description: "Пружина тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0621.1600SGR.09.005",
    img: "/img_details/0621.1600SGR.09.005.jpg"
  },
  {
    id: 199,
    winch: "sgr31",
    title: "Рычаг тормоза",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 200,
    winch: "sgr31",
    title: "Сервисный комплект",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 201,
    winch: "sgr31",
    title: "Стержень",
    description: "для торм. Уст",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 202,
    winch: "sgr31",
    title: "Стойка",
    description: "для штурвала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 203,
    winch: "sgr31",
    title: "Червячное колесо",
    description: "",
    type: "SGR31, SGR16",
    consist: "Редуктор",
    designation: "А160-5-22-0001",
    img: "/img_details/А160-5-22-0001.jpg"
  },
  {
    id: 204,
    winch: "sgr31",
    title: "Шайба",
    description: "крепление подш.3211 тихоходного вала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 205,
    winch: "sgr31",
    title: "Шайба стопорная",
    description: "крепление шайб 0621.1600SGR.01.008/-01;МЖИГ.711312.005-02/-03",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 206,
    winch: "sgr31",
    title: "Шайба",
    description: "крепление КВШ",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 207,
    winch: "sgr31",
    title: "Шайба стопорная",
    description: "крепление ротора/стяжка пакета",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 208,
    winch: "sgr31",
    title: "Шкив канатоведущий",
    description: "КВШ",
    type: "SGR31,   SGR31ЧР, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.712695.031",
    img: "/img_details/МЖИГ.712695.031.jpg"
  },
  {
    id: 209,
    winch: "sgr31",
    title: "Шкив тормозной",
    description: "",
    type: "SGR22, SGR31",
    consist: "Редуктор",
    designation: "МЖИГ.304232.013",
    img: "/img_details/МЖИГ.304232.013.jpg"
  },
  {
    id: 210,
    winch: "sgr31",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 211,
    winch: "sgr31",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 212,
    winch: "sgr31",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 213,
    winch: "sgr31",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 214,
    winch: "sgr31",
    title: "Шпонка",
    description: "втулка ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 215,
    winch: "sgr31",
    title: "Штурвал",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 216,
    winch: "sgr31",
    title: "Щуп(маслоуказатель)",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 217,
    winch: "sgr31",
    title: "Электродвигатель ДЧР-8,5/2,1",
    description: "",
    type: "SGR31",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002-02",
    img: "/img_details/МЖИГ.526311.002-02.jpg"
  },
  {
    id: 218,
    winch: "sgr31",
    title: "Электромагнит ЭМ-1",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  },
  {
    id: 219,
    winch: "sgr36",
    title: "Болт",
    description: "болт крепления рычага тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.758127.002",
    img: "/img_details/МЖИГ.758127.002.jpg"
  },
  {
    id: 220,
    winch: "sgr36",
    title: "Вал",
    description: "Вал тихоходный(с коническими посадками)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.716414.002",
    img: "/img_details/МЖИГ.716414.002.jpg"
  },
  {
    id: 221,
    winch: "sgr36",
    title: "Вал червячный",
    description: "",
    type: "SGR26, SGR36",
    consist: "Редуктор",
    designation: "А160-2-13,67-0001",
    img: "/img_details/А160-2-13,67-0001.jpg"
  },
  {
    id: 222,
    winch: "sgr36",
    title: "Кожух",
    description: "Защитный кожух вентилятора охлаждения",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.060",
    img: "/img_details/0621.1600SGR.00.060.jpg"
  },
  {
    id: 223,
    winch: "sgr36",
    title: "Кольцо",
    description: "Кольцо конусное",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.712141.003",
    img: "/img_details/МЖИГ.712141.003.jpg"
  },
  {
    id: 224,
    winch: "sgr36",
    title: "Корпус редуктора",
    description: "зав.пр-а",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.731378.003",
    img: "/img_details/МЖИГ.731378.003.jpg"
  },
  {
    id: 225,
    winch: "sgr36",
    title: "Крышка",
    description: "крышка крепления подшипника 3211(противоположная сторона от КВШ)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711422.001",
    img: "/img_details/МЖИГ.711422.001.jpg"
  },
  {
    id: 226,
    winch: "sgr36",
    title: "Крышка",
    description: "со стороны квш (под манжету)",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711452.011",
    img: "/img_details/МЖИГ.711452.011.jpg"
  },
  {
    id: 227,
    winch: "sgr36",
    title: "Крышка",
    description: "крышка крепления дуплексного(спаренного) подшипника",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711142.047-01",
    img: "/img_details/МЖИГ.711142.047-01.jpg"
  },
  {
    id: 228,
    winch: "sgr36",
    title: "Крышка",
    description: "крышка  маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.735225.002",
    img: "/img_details/МЖИГ.735225.002.jpg"
  },
  {
    id: 229,
    winch: "sgr36",
    title: "Крышка",
    description: "крышка защиты обмотки статора электродвигателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "МЖИГ.725163.001",
    img: "/img_details/МЖИГ.725163.001.jpg"
  },
  {
    id: 230,
    winch: "sgr36",
    title: "Ограничитель сбрасывания канатов",
    description: "",
    type: "SGR31, SGR36,SGR31ЧР, SGR26",
    consist: "Лебедка",
    designation: "МЖИГ.304275.002",
    img: "/img_details/МЖИГ.304275.002.jpg"
  },
  {
    id: 231,
    winch: "sgr36",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711452.011",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.025",
    img: "/img_details/МЖИГ.754154.025.jpg"
  },
  {
    id: 232,
    winch: "sgr36",
    title: "Пробка",
    description: "сливная",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.713511.008",
    img: "/img_details/МЖИГ.713511.008.jpg"
  },
  {
    id: 233,
    winch: "sgr36",
    title: "Прокладка",
    description: "Для крышки МЖИГ.711422.001",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754154.023",
    img: "/img_details/МЖИГ.754154.023.jpg"
  },
  {
    id: 234,
    winch: "sgr36",
    title: "Прокладка",
    description: "Для крышки маслоуказателя",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.754142.026",
    img: "/img_details/МЖИГ.754142.026.jpg"
  },
  {
    id: 235,
    winch: "sgr36",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6214-2RS1DBGA",
    img: "/img_details/6214-2RS1DBGA.jpg"
  },
  {
    id: 236,
    winch: "sgr36",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "N216.P6Q6(P5Q5)K",
    img: "/img_details/N216.P6Q6(P5Q5)K.jpg"
  },
  {
    id: 237,
    winch: "sgr36",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "3211.P6Q6(P5Q5)",
    img: "/img_details/3211.P6Q6(P5Q5).jpg"
  },
  {
    id: 238,
    winch: "sgr36",
    title: "Подшипник",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "6007ZZ.P5Q5",
    img: "/img_details/6007ZZ.P5Q5.jpg"
  },
  {
    id: 239,
    winch: "sgr36",
    title: "Пружина",
    description: "Пружина тормоза",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0621.1600SGR.09.005",
    img: "/img_details/0621.1600SGR.09.005.jpg"
  },
  {
    id: 240,
    winch: "sgr36",
    title: "Рычаг тормоза",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "ПО377.00.00.000",
    img: "/img_details/ПО377.00.00.000.jpg"
  },
  {
    id: 241,
    winch: "sgr36",
    title: "Сервисный комплект",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.305654.002",
    img: "/img_details/МЖИГ.305654.002.jpg"
  },
  {
    id: 242,
    winch: "sgr36",
    title: "Стержень",
    description: "для торм.уст.",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "МЖИГ.715511.025",
    img: "/img_details/МЖИГ.715511.025.jpg"
  },
  {
    id: 243,
    winch: "sgr36",
    title: "Стойка",
    description: "для штурвала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711424.001",
    img: "/img_details/МЖИГ.711424.001.jpg"
  },
  {
    id: 244,
    winch: "sgr36",
    title: "Червячное колесо",
    description: "",
    type: "SGR26, SGR36",
    consist: "Редуктор",
    designation: "А160-5-13,67-0001",
    img: "/img_details/А160-5-13,67-0001.jpg"
  },
  {
    id: 245,
    winch: "sgr36",
    title: "Шайба",
    description: "крепление подш.3211 тихоходного вала",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.711312.005-02",
    img: "/img_details/МЖИГ.711312.005-02.jpg"
  },
  {
    id: 246,
    winch: "sgr36",
    title: "Шайба стопорная",
    description: "крепление шайб 0621.1600SGR.01.008/-01;МЖИГ.711312.005-02/-03",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "МЖИГ.741314.008",
    img: "/img_details/МЖИГ.741314.008.jpg"
  },
  {
    id: 247,
    winch: "sgr36",
    title: "Шайба",
    description: "крепление КВШ",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.711312.005-03",
    img: "/img_details/МЖИГ.711312.005-03.jpg"
  },
  {
    id: 248,
    winch: "sgr36",
    title: "Шайба стопорная",
    description: "крепление ротора/стяжка пакета",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.50.006",
    img: "/img_details/0621.1600SGR.50.006.jpg"
  },
  {
    id: 249,
    winch: "sgr36",
    title: "Шкив канатоведущий",
    description: "КВШ",
    type: "SGR31, SGR31ЧР,SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.712695.031",
    img: "/img_details/МЖИГ.712695.031.jpg"
  },
  {
    id: 250,
    winch: "sgr36",
    title: "Шкив тормозной",
    description: "",
    type: "SGR26,SGR31ЧР, SGR16, SGR36,SGR22ЧР",
    consist: "Редуктор",
    designation: "МЖИГ.711196.009",
    img: "/img_details/МЖИГ.711196.009.jpg"
  },
  {
    id: 251,
    winch: "sgr36",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.022",
    img: "/img_details/0621.1600SGR.01.022.jpg"
  },
  {
    id: 252,
    winch: "sgr36",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Привод",
    designation: "0621.1600SGR.01.021-03",
    img: "/img_details/0621.1600SGR.01.021-03.jpg"
  },
  {
    id: 253,
    winch: "sgr36",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-02",
    img: "/img_details/0621.1600SGR.01.021-02.jpg"
  },
  {
    id: 254,
    winch: "sgr36",
    title: "Шпонка",
    description: "втулка ротора",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0411.1386SGR.00.053",
    img: "/img_details/0411.1386SGR.00.053.jpg"
  },
  {
    id: 255,
    winch: "sgr36",
    title: "Шпонка",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0621.1600SGR.01.021-01",
    img: "/img_details/0621.1600SGR.01.021-01.jpg"
  },
  {
    id: 256,
    winch: "sgr36",
    title: "Штурвал",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "0621.1600SGR.00.020",
    img: "/img_details/0621.1600SGR.00.020.jpg"
  },
  {
    id: 257,
    winch: "sgr36",
    title: "Щуп(маслоуказатель)",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Редуктор",
    designation: "0411.1386SGR.01.025-01",
    img: "/img_details/0411.1386SGR.01.025-01.jpg"
  },
  {
    id: 258,
    winch: "sgr36",
    title: "Электродвигатель ДЧР-15",
    description: "",
    type: "SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.526311.002-01",
    img: "/img_details/МЖИГ.526311.002-01.jpg"
  },
  {
    id: 259,
    winch: "sgr36",
    title: "Электромагнит ЭМ-1",
    description: "",
    type: "SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Лебедка",
    designation: "МЖИГ.684411.002",
    img: "/img_details/МЖИГ.684411.002.jpg"
  }
]

export default dataDetail;
