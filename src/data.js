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
    winch: "sgr10",
    title: "тест деталь 1",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.041",
    img: "./img_details/0411.138SGR.01.041.jpg"
  },
  {
    id: 2,
    winch: "sgr10",
    title: "тест деталь 1",
    description: "Вентилятор охлаждение электродвигателя.",
    type: "SGR10, SGR10ЧР, SGR11, SGR11ЧР, SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.042",
    img: "./img_details/0411.138SGR.01.042.jpg"
  },
  {
    id: 3,
    winch: "sgr10",
    title: "Ограничитель сбрасывания канатов",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Лебедка",
    designation: "0411.138SGR.01.043",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 4,
    winch: "sgr10",
    title: "тест гдеталь 4",
    description: "Вентилятор охлаждение электродвигателя",
    type: "SGR10, SGR10ЧР, SGR11, SGR11ЧР, SGR22, SGR22ЧР, SGR26, SGR31, SGR31ЧР, SGR16, SGR36",
    consist: "",
    designation: "0411.138SGR.01.044",
    img: "./img_details/0411.138SGR.01.044.jpg"
  },
  {
    id: 5,
    winch: "sgr10",
    title: "123 деталь 5",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.045",
    img: "./img_details/0411.138SGR.01.045.jpg"
  },
  {
    id: 6,
    winch: "sgr10",
    title: "123 едеталь 6",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.046",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 7,
    winch: "sgr10",
    title: "123 едеталь 7",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.047",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 8,
    winch: "sgr10",
    title: "веллифт едеталь 8",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.048",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 9,
    winch: "sgr10",
    title: "веллифт едеталь 9",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.049",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 10,
    winch: "sgr10",
    title: "веллифт едеталь 10",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.050",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 11,
    winch: "sgr10",
    title: "веллифт едеталь 11",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.051",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 12,
    winch: "sgr10",
    title: "веллифт едеталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.052",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 13,
    winch: "sgr10",
    title: "веллифт едеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.053",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 14,
    winch: "sgr10",
    title: "веллифт едеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.054",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 15,
    winch: "sgr10",
    title: "веллифт едеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.055",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 16,
    winch: "sgr10",
    title: "веллифт едеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.056",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 17,
    winch: "sgr10",
    title: "веллифт едеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.057",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 18,
    winch: "sgr10",
    title: "веллифт едеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.058",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 19,
    winch: "sgr10",
    title: "веллифт едеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.059",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 20,
    winch: "sgr10",
    title: "веллифт едеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.060",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 21,
    winch: "sgr10",
    title: "веллифт едеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.061",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 22,
    winch: "sgr10",
    title: "веллифт едеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.062",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 23,
    winch: "sgr10",
    title: "веллифт едеталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.063",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 24,
    winch: "sgr10",
    title: "веллифт едеталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.064",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 25,
    winch: "sgr10",
    title: "веллифт едеталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.065",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 26,
    winch: "sgr10",
    title: "веллифт едеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.066",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 27,
    winch: "sgr10",
    title: "веллифт едеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.067",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 28,
    winch: "sgr10",
    title: "веллифт едеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.068",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 29,
    winch: "sgr10",
    title: "веллифт едеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.069",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 30,
    winch: "sgr10",
    title: "веллифт едеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.070",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 31,
    winch: "sgr10",
    title: "веллифт едеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.071",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 32,
    winch: "sgr10",
    title: "веллифт едеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.072",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 33,
    winch: "sgr10",
    title: "веллифт едеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.073",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 34,
    winch: "sgr10",
    title: "веллифт едеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.074",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 35,
    winch: "sgr10",
    title: "веллифт едеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.075",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 36,
    winch: "sgr10",
    title: "веллифт едеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.076",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 37,
    winch: "sgr10",
    title: "веллифт едеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.077",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 38,
    winch: "sgr10",
    title: "веллифт едеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.078",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 39,
    winch: "sgr10",
    title: "веллифт едеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.079",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 40,
    winch: "sgr10",
    title: "веллифт едеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.080",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 41,
    winch: "sgr10",
    title: "веллифт едеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.081",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 42,
    winch: "sgr10",
    title: "веллифт едеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.082",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 43,
    winch: "sgr10",
    title: "веллифт едеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.083",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 44,
    winch: "sgr10",
    title: "веллифт едеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.084",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 45,
    winch: "sgr10",
    title: "веллифт едеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.085",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 46,
    winch: "sgr10",
    title: "веллифт едеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.086",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 47,
    winch: "sgr10",
    title: "веллифт едеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.087",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 48,
    winch: "sgr10",
    title: "веллифт едеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.088",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 49,
    winch: "sgr10",
    title: "веллифт едеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.089",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 50,
    winch: "sgr10",
    title: "веллифт едеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.090",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 51,
    winch: "sgr11",
    title: "адеталь 2",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.091",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 52,
    winch: "sgr11",
    title: "бдеталь 3",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.092",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 53,
    winch: "sgr11",
    title: "вдеталь 4",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.093",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 54,
    winch: "sgr11",
    title: "гдеталь 5",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.094",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 55,
    winch: "sgr11",
    title: "деталь 6",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.095",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 56,
    winch: "sgr11",
    title: "едеталь 10",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.096",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 57,
    winch: "sgr11",
    title: "едеталь 11",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.097",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 58,
    winch: "sgr11",
    title: "едеталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.098",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 59,
    winch: "sgr11",
    title: "едеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.099",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 60,
    winch: "sgr11",
    title: "здеталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.100",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 61,
    winch: "sgr11",
    title: "здеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.101",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 62,
    winch: "sgr11",
    title: "идеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.102",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 63,
    winch: "sgr11",
    title: "кдеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.103",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 64,
    winch: "sgr11",
    title: "кдеталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.104",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 65,
    winch: "sgr11",
    title: "кдеталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.105",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 66,
    winch: "sgr11",
    title: "кдеталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.106",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 67,
    winch: "sgr11",
    title: "кдеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.107",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 68,
    winch: "sgr11",
    title: "кдеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.108",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 69,
    winch: "sgr11",
    title: "кдеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.109",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 70,
    winch: "sgr11",
    title: "кдеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.110",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 71,
    winch: "sgr11",
    title: "кдеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.111",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 72,
    winch: "sgr11",
    title: "лдеталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.112",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 73,
    winch: "sgr11",
    title: "лдеталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.113",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 74,
    winch: "sgr11",
    title: "мдеталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.114",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 75,
    winch: "sgr11",
    title: "ндеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.115",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 76,
    winch: "sgr11",
    title: "одеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.116",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 77,
    winch: "sgr11",
    title: "одеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.117",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 78,
    winch: "sgr11",
    title: "пдеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.118",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 79,
    winch: "sgr11",
    title: "пдеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.119",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 80,
    winch: "sgr11",
    title: "рдеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.120",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 81,
    winch: "sgr11",
    title: "рдеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.121",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 82,
    winch: "sgr11",
    title: "рдеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.122",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 83,
    winch: "sgr11",
    title: "сдеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.123",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 84,
    winch: "sgr11",
    title: "сдеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.124",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 85,
    winch: "sgr11",
    title: "тдеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.125",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 86,
    winch: "sgr11",
    title: "тдеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.126",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 87,
    winch: "sgr11",
    title: "тдеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.127",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 88,
    winch: "sgr11",
    title: "тдеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.128",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 89,
    winch: "sgr11",
    title: "тдеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.129",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 90,
    winch: "sgr11",
    title: "тдеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.130",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 91,
    winch: "sgr11",
    title: "тдеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.131",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 92,
    winch: "sgr11",
    title: "тдеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.132",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 93,
    winch: "sgr11",
    title: "тдеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.133",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 94,
    winch: "sgr11",
    title: "тдеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.134",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 95,
    winch: "sgr11",
    title: "тдеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.135",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 96,
    winch: "sgr11",
    title: "тдеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.136",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 97,
    winch: "sgr11",
    title: "тдеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.137",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 98,
    winch: "sgr11",
    title: "тдеталь 64",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.138",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 99,
    winch: "sgr11",
    title: "тдеталь 65",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.139",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 100,
    winch: "sgr11",
    title: "тдеталь 66",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.140",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 101,
    winch: "sgr16",
    title: "адеталь 3",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.141",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 102,
    winch: "sgr16",
    title: "бдеталь 4",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.142",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 103,
    winch: "sgr16",
    title: "вдеталь 5",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.143",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 104,
    winch: "sgr16",
    title: "гдеталь 6",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.144",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 105,
    winch: "sgr16",
    title: "деталь 7",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.145",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 106,
    winch: "sgr16",
    title: "едеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.146",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 107,
    winch: "sgr16",
    title: "едеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.147",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 108,
    winch: "sgr16",
    title: "едеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.148",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 109,
    winch: "sgr16",
    title: "едеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.149",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 110,
    winch: "sgr16",
    title: "здеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.150",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 111,
    winch: "sgr16",
    title: "здеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.151",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 112,
    winch: "sgr16",
    title: "идеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.152",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 113,
    winch: "sgr16",
    title: "кдеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.153",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 114,
    winch: "sgr16",
    title: "кдеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.154",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 115,
    winch: "sgr16",
    title: "кдеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.155",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 116,
    winch: "sgr16",
    title: "кдеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.156",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 117,
    winch: "sgr16",
    title: "кдеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.157",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 118,
    winch: "sgr16",
    title: "кдеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.158",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 119,
    winch: "sgr16",
    title: "кдеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.159",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 120,
    winch: "sgr16",
    title: "кдеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.160",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 121,
    winch: "sgr16",
    title: "кдеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.161",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 122,
    winch: "sgr16",
    title: "лдеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.162",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 123,
    winch: "sgr16",
    title: "лдеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.163",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 124,
    winch: "sgr16",
    title: "мдеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.164",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 125,
    winch: "sgr16",
    title: "ндеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.165",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 126,
    winch: "sgr16",
    title: "одеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.166",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 127,
    winch: "sgr16",
    title: "одеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.167",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 128,
    winch: "sgr16",
    title: "пдеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.168",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 129,
    winch: "sgr16",
    title: "пдеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.169",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 130,
    winch: "sgr16",
    title: "рдеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.170",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 131,
    winch: "sgr16",
    title: "рдеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.171",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 132,
    winch: "sgr16",
    title: "рдеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.172",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 133,
    winch: "sgr16",
    title: "сдеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.173",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 134,
    winch: "sgr16",
    title: "сдеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.174",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 135,
    winch: "sgr16",
    title: "тдеталь 67",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.175",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 136,
    winch: "sgr16",
    title: "тдеталь 68",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.176",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 137,
    winch: "sgr16",
    title: "тдеталь 69",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.177",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 138,
    winch: "sgr16",
    title: "тдеталь 70",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.178",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 139,
    winch: "sgr16",
    title: "тдеталь 71",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.179",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 140,
    winch: "sgr16",
    title: "тдеталь 72",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.180",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 141,
    winch: "sgr16",
    title: "тдеталь 73",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.181",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 142,
    winch: "sgr16",
    title: "тдеталь 74",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.182",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 143,
    winch: "sgr16",
    title: "тдеталь 75",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.183",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 144,
    winch: "sgr16",
    title: "тдеталь 76",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.184",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 145,
    winch: "sgr16",
    title: "тдеталь 77",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.185",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 146,
    winch: "sgr16",
    title: "тдеталь 78",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.186",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 147,
    winch: "sgr16",
    title: "тдеталь 79",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.187",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 148,
    winch: "sgr16",
    title: "тдеталь 80",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.188",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 149,
    winch: "sgr16",
    title: "тдеталь 81",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.189",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 150,
    winch: "sgr16",
    title: "тдеталь 82",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.190",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 151,
    winch: "sgr22",
    title: "адеталь 4",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.191",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 152,
    winch: "sgr22",
    title: "бдеталь 5",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.192",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 153,
    winch: "sgr22",
    title: "вдеталь 6",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.193",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 154,
    winch: "sgr22",
    title: "гдеталь 7",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.194",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 155,
    winch: "sgr22",
    title: "деталь 8",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.195",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 156,
    winch: "sgr22",
    title: "едеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.196",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 157,
    winch: "sgr22",
    title: "едеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.197",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 158,
    winch: "sgr22",
    title: "едеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.198",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 159,
    winch: "sgr22",
    title: "едеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.199",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 160,
    winch: "sgr22",
    title: "здеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.200",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 161,
    winch: "sgr22",
    title: "здеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.201",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 162,
    winch: "sgr22",
    title: "идеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.202",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 163,
    winch: "sgr22",
    title: "кдеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.203",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 164,
    winch: "sgr22",
    title: "кдеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.204",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 165,
    winch: "sgr22",
    title: "кдеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.205",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 166,
    winch: "sgr22",
    title: "кдеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.206",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 167,
    winch: "sgr22",
    title: "кдеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.207",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 168,
    winch: "sgr22",
    title: "кдеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.208",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 169,
    winch: "sgr22",
    title: "кдеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.209",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 170,
    winch: "sgr22",
    title: "кдеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.210",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 171,
    winch: "sgr22",
    title: "кдеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.211",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 172,
    winch: "sgr22",
    title: "лдеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.212",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 173,
    winch: "sgr22",
    title: "лдеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.213",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 174,
    winch: "sgr22",
    title: "мдеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.214",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 175,
    winch: "sgr22",
    title: "ндеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.215",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 176,
    winch: "sgr22",
    title: "одеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.216",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 177,
    winch: "sgr22",
    title: "одеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.217",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 178,
    winch: "sgr22",
    title: "пдеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.218",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 179,
    winch: "sgr22",
    title: "пдеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.219",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 180,
    winch: "sgr22",
    title: "рдеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.220",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 181,
    winch: "sgr22",
    title: "рдеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.221",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 182,
    winch: "sgr22",
    title: "рдеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.222",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 183,
    winch: "sgr22",
    title: "сдеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.223",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 184,
    winch: "sgr22",
    title: "сдеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.224",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 185,
    winch: "sgr22",
    title: "тдеталь 83",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.225",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 186,
    winch: "sgr22",
    title: "тдеталь 84",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.226",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 187,
    winch: "sgr22",
    title: "тдеталь 85",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.227",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 188,
    winch: "sgr22",
    title: "тдеталь 86",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.228",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 189,
    winch: "sgr22",
    title: "тдеталь 87",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.229",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 190,
    winch: "sgr22",
    title: "тдеталь 88",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.230",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 191,
    winch: "sgr22",
    title: "тдеталь 89",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.231",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 192,
    winch: "sgr22",
    title: "тдеталь 90",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.232",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 193,
    winch: "sgr22",
    title: "тдеталь 91",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.233",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 194,
    winch: "sgr22",
    title: "тдеталь 92",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.234",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 195,
    winch: "sgr22",
    title: "тдеталь 93",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.235",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 196,
    winch: "sgr22",
    title: "тдеталь 94",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.236",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 197,
    winch: "sgr22",
    title: "тдеталь 95",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.237",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 198,
    winch: "sgr22",
    title: "тдеталь 96",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.238",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 199,
    winch: "sgr22",
    title: "тдеталь 97",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.239",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 200,
    winch: "sgr22",
    title: "тдеталь 98",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.240",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 201,
    winch: "sgr26",
    title: "адеталь 5",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.241",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 202,
    winch: "sgr26",
    title: "бдеталь 6",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.242",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 203,
    winch: "sgr26",
    title: "вдеталь 7",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.243",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 204,
    winch: "sgr26",
    title: "гдеталь 8",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.244",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 205,
    winch: "sgr26",
    title: "деталь 9",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.245",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 206,
    winch: "sgr26",
    title: "едеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.246",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 207,
    winch: "sgr26",
    title: "едеталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.247",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 208,
    winch: "sgr26",
    title: "едеталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.248",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 209,
    winch: "sgr26",
    title: "едеталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.249",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 210,
    winch: "sgr26",
    title: "здеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.250",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 211,
    winch: "sgr26",
    title: "здеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.251",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 212,
    winch: "sgr26",
    title: "идеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.252",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 213,
    winch: "sgr26",
    title: "кдеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.253",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 214,
    winch: "sgr26",
    title: "кдеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.254",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 215,
    winch: "sgr26",
    title: "кдеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.255",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 216,
    winch: "sgr26",
    title: "кдеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.256",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 217,
    winch: "sgr26",
    title: "кдеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.257",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 218,
    winch: "sgr26",
    title: "кдеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.258",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 219,
    winch: "sgr26",
    title: "кдеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.259",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 220,
    winch: "sgr26",
    title: "кдеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.260",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 221,
    winch: "sgr26",
    title: "кдеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.261",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 222,
    winch: "sgr26",
    title: "лдеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.262",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 223,
    winch: "sgr26",
    title: "лдеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.263",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 224,
    winch: "sgr26",
    title: "мдеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.264",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 225,
    winch: "sgr26",
    title: "ндеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.265",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 226,
    winch: "sgr26",
    title: "одеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.266",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 227,
    winch: "sgr26",
    title: "одеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.267",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 228,
    winch: "sgr26",
    title: "пдеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.268",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 229,
    winch: "sgr26",
    title: "пдеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.269",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 230,
    winch: "sgr26",
    title: "рдеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.270",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 231,
    winch: "sgr26",
    title: "рдеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.271",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 232,
    winch: "sgr26",
    title: "рдеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.272",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 233,
    winch: "sgr26",
    title: "сдеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.273",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 234,
    winch: "sgr26",
    title: "сдеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.274",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 235,
    winch: "sgr26",
    title: "тдеталь 99",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.275",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 236,
    winch: "sgr26",
    title: "тдеталь 100",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.276",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 237,
    winch: "sgr26",
    title: "тдеталь 101",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.277",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 238,
    winch: "sgr26",
    title: "тдеталь 102",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.278",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 239,
    winch: "sgr26",
    title: "тдеталь 103",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.279",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 240,
    winch: "sgr26",
    title: "тдеталь 104",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.280",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 241,
    winch: "sgr26",
    title: "тдеталь 105",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.281",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 242,
    winch: "sgr26",
    title: "тдеталь 106",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.282",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 243,
    winch: "sgr26",
    title: "тдеталь 107",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.283",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 244,
    winch: "sgr26",
    title: "тдеталь 108",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.284",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 245,
    winch: "sgr26",
    title: "тдеталь 109",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.285",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 246,
    winch: "sgr26",
    title: "тдеталь 110",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.286",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 247,
    winch: "sgr26",
    title: "тдеталь 111",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.287",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 248,
    winch: "sgr26",
    title: "тдеталь 112",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.288",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 249,
    winch: "sgr26",
    title: "тдеталь 113",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.289",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 250,
    winch: "sgr26",
    title: "тдеталь 114",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.290",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 251,
    winch: "sgr33",
    title: "адеталь 6",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.291",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 252,
    winch: "sgr33",
    title: "бдеталь 7",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.292",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 253,
    winch: "sgr33",
    title: "вдеталь 8",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.293",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 254,
    winch: "sgr33",
    title: "гдеталь 9",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.294",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 255,
    winch: "sgr33",
    title: "деталь 10",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.295",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 256,
    winch: "sgr33",
    title: "едеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.296",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 257,
    winch: "sgr33",
    title: "едеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.297",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 258,
    winch: "sgr33",
    title: "едеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.298",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 259,
    winch: "sgr33",
    title: "едеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.299",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 260,
    winch: "sgr33",
    title: "здеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.300",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 261,
    winch: "sgr33",
    title: "здеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.301",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 262,
    winch: "sgr33",
    title: "идеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.302",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 263,
    winch: "sgr33",
    title: "кдеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.303",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 264,
    winch: "sgr33",
    title: "кдеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.304",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 265,
    winch: "sgr33",
    title: "кдеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.305",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 266,
    winch: "sgr33",
    title: "кдеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.306",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 267,
    winch: "sgr33",
    title: "кдеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.307",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 268,
    winch: "sgr33",
    title: "кдеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.308",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 269,
    winch: "sgr33",
    title: "кдеталь 64",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.309",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 270,
    winch: "sgr33",
    title: "кдеталь 65",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.310",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 271,
    winch: "sgr33",
    title: "кдеталь 66",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.311",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 272,
    winch: "sgr33",
    title: "лдеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.312",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 273,
    winch: "sgr33",
    title: "лдеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.313",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 274,
    winch: "sgr33",
    title: "мдеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.314",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 275,
    winch: "sgr33",
    title: "ндеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.315",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 276,
    winch: "sgr33",
    title: "одеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.316",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 277,
    winch: "sgr33",
    title: "одеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.317",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 278,
    winch: "sgr33",
    title: "пдеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.318",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 279,
    winch: "sgr33",
    title: "пдеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.319",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 280,
    winch: "sgr33",
    title: "рдеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.320",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 281,
    winch: "sgr33",
    title: "рдеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.321",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 282,
    winch: "sgr33",
    title: "рдеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.322",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 283,
    winch: "sgr33",
    title: "сдеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.323",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 284,
    winch: "sgr33",
    title: "сдеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.324",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 285,
    winch: "sgr33",
    title: "тдеталь 115",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.325",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 286,
    winch: "sgr33",
    title: "тдеталь 116",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.326",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 287,
    winch: "sgr33",
    title: "тдеталь 117",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.327",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 288,
    winch: "sgr33",
    title: "тдеталь 118",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.328",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 289,
    winch: "sgr33",
    title: "тдеталь 119",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.329",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 290,
    winch: "sgr33",
    title: "тдеталь 120",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.330",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 291,
    winch: "sgr33",
    title: "тдеталь 121",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.331",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 292,
    winch: "sgr33",
    title: "тдеталь 122",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.332",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 293,
    winch: "sgr33",
    title: "тдеталь 123",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.333",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 294,
    winch: "sgr33",
    title: "тдеталь 124",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.334",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 295,
    winch: "sgr33",
    title: "тдеталь 125",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.335",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 296,
    winch: "sgr33",
    title: "тдеталь 126",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.336",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 297,
    winch: "sgr33",
    title: "тдеталь 127",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.337",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 298,
    winch: "sgr33",
    title: "тдеталь 128",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.338",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 299,
    winch: "sgr33",
    title: "тдеталь 129",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.339",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 300,
    winch: "sgr33",
    title: "тдеталь 130",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.340",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 301,
    winch: "sgr33",
    title: "адеталь 7",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.341",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 302,
    winch: "sgr33",
    title: "бдеталь 8",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.342",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 303,
    winch: "sgr33",
    title: "вдеталь 9",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.343",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 304,
    winch: "sgr33",
    title: "гдеталь 10",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.344",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 305,
    winch: "sgr33",
    title: "деталь 11",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.345",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 306,
    winch: "sgr33",
    title: "едеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.346",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 307,
    winch: "sgr33",
    title: "едеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.347",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 308,
    winch: "sgr33",
    title: "едеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.348",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 309,
    winch: "sgr33",
    title: "едеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.349",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 310,
    winch: "sgr33",
    title: "здеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.350",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 311,
    winch: "sgr33",
    title: "здеталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.351",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 312,
    winch: "sgr33",
    title: "идеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.352",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 313,
    winch: "sgr33",
    title: "кдеталь 67",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.353",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 314,
    winch: "sgr33",
    title: "кдеталь 68",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.354",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 315,
    winch: "sgr33",
    title: "кдеталь 69",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.355",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 316,
    winch: "sgr33",
    title: "кдеталь 70",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.356",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 317,
    winch: "sgr33",
    title: "кдеталь 71",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.357",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 318,
    winch: "sgr33",
    title: "кдеталь 72",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.358",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 319,
    winch: "sgr33",
    title: "кдеталь 73",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.359",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 320,
    winch: "sgr33",
    title: "кдеталь 74",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.360",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 321,
    winch: "sgr33",
    title: "кдеталь 75",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.361",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 322,
    winch: "sgr33",
    title: "лдеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.362",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 323,
    winch: "sgr33",
    title: "лдеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.363",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 324,
    winch: "sgr33",
    title: "мдеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.364",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 325,
    winch: "sgr33",
    title: "ндеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.365",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 326,
    winch: "sgr33",
    title: "одеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.366",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 327,
    winch: "sgr33",
    title: "одеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.367",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 328,
    winch: "sgr33",
    title: "пдеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.368",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 329,
    winch: "sgr33",
    title: "пдеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.369",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 330,
    winch: "sgr33",
    title: "рдеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.370",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 331,
    winch: "sgr33",
    title: "рдеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.371",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 332,
    winch: "sgr33",
    title: "рдеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.372",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 333,
    winch: "sgr33",
    title: "сдеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.373",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 334,
    winch: "sgr33",
    title: "сдеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.374",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 335,
    winch: "sgr33",
    title: "тдеталь 131",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.375",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 336,
    winch: "sgr33",
    title: "тдеталь 132",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.376",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 337,
    winch: "sgr33",
    title: "тдеталь 133",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.377",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 338,
    winch: "sgr33",
    title: "тдеталь 134",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.378",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 339,
    winch: "sgr33",
    title: "тдеталь 135",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.379",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 340,
    winch: "sgr33",
    title: "тдеталь 136",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.380",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 341,
    winch: "sgr33",
    title: "тдеталь 137",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.381",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 342,
    winch: "sgr33",
    title: "тдеталь 138",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.382",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 343,
    winch: "sgr33",
    title: "тдеталь 139",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.383",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 344,
    winch: "sgr33",
    title: "тдеталь 140",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.384",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 345,
    winch: "sgr33",
    title: "тдеталь 141",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.385",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 346,
    winch: "sgr33",
    title: "тдеталь 142",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.386",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 347,
    winch: "sgr33",
    title: "тдеталь 143",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.387",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 348,
    winch: "sgr33",
    title: "тдеталь 144",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.388",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 349,
    winch: "sgr33",
    title: "тдеталь 145",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.389",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 350,
    winch: "sgr33",
    title: "тдеталь 146",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.390",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 351,
    winch: "sgr33",
    title: "адеталь 8",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.391",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 352,
    winch: "sgr31",
    title: "бдеталь 9",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.392",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 353,
    winch: "sgr33",
    title: "вдеталь 10",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.393",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 354,
    winch: "sgr33",
    title: "гдеталь 11",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.394",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 355,
    winch: "sgr33",
    title: "деталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.395",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 356,
    winch: "sgr33",
    title: "едеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.396",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 357,
    winch: "sgr33",
    title: "едеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.397",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 358,
    winch: "sgr33",
    title: "едеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.398",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 359,
    winch: "sgr33",
    title: "едеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.399",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 360,
    winch: "sgr33",
    title: "здеталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.400",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 361,
    winch: "sgr33",
    title: "здеталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.401",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 362,
    winch: "sgr33",
    title: "идеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.402",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 363,
    winch: "sgr33",
    title: "кдеталь 76",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.403",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 364,
    winch: "sgr33",
    title: "кдеталь 77",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.404",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 365,
    winch: "sgr33",
    title: "кдеталь 78",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.405",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 366,
    winch: "sgr33",
    title: "кдеталь 79",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.406",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 367,
    winch: "sgr33",
    title: "кдеталь 80",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.407",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 368,
    winch: "sgr33",
    title: "кдеталь 81",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.408",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 369,
    winch: "sgr33",
    title: "кдеталь 82",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.409",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 370,
    winch: "sgr33",
    title: "кдеталь 83",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.410",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 371,
    winch: "sgr33",
    title: "кдеталь 84",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.411",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 372,
    winch: "sgr33",
    title: "лдеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.412",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 373,
    winch: "sgr33",
    title: "лдеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.413",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 374,
    winch: "sgr33",
    title: "мдеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.414",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 375,
    winch: "sgr33",
    title: "ндеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.415",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 376,
    winch: "sgr33",
    title: "одеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.416",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 377,
    winch: "sgr33",
    title: "одеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.417",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 378,
    winch: "sgr33",
    title: "пдеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.418",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 379,
    winch: "sgr33",
    title: "пдеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.419",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 380,
    winch: "sgr33",
    title: "рдеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.420",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 381,
    winch: "sgr33",
    title: "рдеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.421",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 382,
    winch: "sgr33",
    title: "рдеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.422",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 383,
    winch: "sgr33",
    title: "сдеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.423",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 384,
    winch: "sgr33",
    title: "сдеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.424",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 385,
    winch: "sgr33",
    title: "тдеталь 147",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.425",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 386,
    winch: "sgr33",
    title: "тдеталь 148",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.426",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 387,
    winch: "sgr33",
    title: "тдеталь 149",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.427",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 388,
    winch: "sgr33",
    title: "тдеталь 150",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.428",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 389,
    winch: "sgr33",
    title: "тдеталь 151",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.429",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 390,
    winch: "sgr33",
    title: "тдеталь 152",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.430",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 391,
    winch: "sgr33",
    title: "тдеталь 153",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.431",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 392,
    winch: "sgr33",
    title: "тдеталь 154",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.432",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 393,
    winch: "sgr33",
    title: "тдеталь 155",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.433",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 394,
    winch: "sgr33",
    title: "тдеталь 156",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.434",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 395,
    winch: "sgr33",
    title: "тдеталь 157",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.435",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 396,
    winch: "sgr33",
    title: "тдеталь 158",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.436",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 397,
    winch: "sgr33",
    title: "тдеталь 159",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.437",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 398,
    winch: "sgr33",
    title: "тдеталь 160",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.438",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 399,
    winch: "sgr33",
    title: "тдеталь 161",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.439",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 400,
    winch: "sgr33",
    title: "тдеталь 162",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.440",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 401,
    winch: "sgr36",
    title: "адеталь 9",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.441",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 402,
    winch: "sgr36",
    title: "бдеталь 10",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.442",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 403,
    winch: "sgr36",
    title: "вдеталь 11",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.443",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 404,
    winch: "sgr36",
    title: "гдеталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.444",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 405,
    winch: "sgr36",
    title: "деталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.445",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 406,
    winch: "sgr36",
    title: "едеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.446",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 407,
    winch: "sgr36",
    title: "едеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.447",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 408,
    winch: "sgr36",
    title: "едеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.448",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 409,
    winch: "sgr36",
    title: "едеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.449",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 410,
    winch: "sgr36",
    title: "здеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.450",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 411,
    winch: "sgr36",
    title: "здеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.451",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 412,
    winch: "sgr36",
    title: "идеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.452",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 413,
    winch: "sgr36",
    title: "кдеталь 85",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.453",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 414,
    winch: "sgr36",
    title: "кдеталь 86",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.454",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 415,
    winch: "sgr36",
    title: "кдеталь 87",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.455",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 416,
    winch: "sgr36",
    title: "кдеталь 88",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.456",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 417,
    winch: "sgr36",
    title: "кдеталь 89",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.457",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 418,
    winch: "sgr36",
    title: "кдеталь 90",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.458",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 419,
    winch: "sgr36",
    title: "кдеталь 91",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.459",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 420,
    winch: "sgr36",
    title: "кдеталь 92",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.460",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 421,
    winch: "sgr36",
    title: "кдеталь 93",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.461",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 422,
    winch: "sgr36",
    title: "лдеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.462",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 423,
    winch: "sgr36",
    title: "лдеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.463",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 424,
    winch: "sgr36",
    title: "мдеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.464",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 425,
    winch: "sgr36",
    title: "ндеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.465",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 426,
    winch: "sgr36",
    title: "одеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.466",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 427,
    winch: "sgr36",
    title: "одеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.467",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 428,
    winch: "sgr36",
    title: "пдеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.468",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 429,
    winch: "sgr36",
    title: "пдеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.469",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 430,
    winch: "sgr36",
    title: "рдеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.470",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 431,
    winch: "sgr36",
    title: "рдеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.471",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 432,
    winch: "sgr36",
    title: "рдеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.472",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 433,
    winch: "sgr36",
    title: "сдеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.473",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 434,
    winch: "sgr36",
    title: "сдеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.474",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 435,
    winch: "sgr36",
    title: "тдеталь 163",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.475",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 436,
    winch: "sgr36",
    title: "тдеталь 164",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.476",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 437,
    winch: "sgr36",
    title: "тдеталь 165",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.477",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 438,
    winch: "sgr36",
    title: "тдеталь 166",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.478",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 439,
    winch: "sgr36",
    title: "тдеталь 167",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.479",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 440,
    winch: "sgr36",
    title: "тдеталь 168",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.480",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 441,
    winch: "sgr36",
    title: "тдеталь 169",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.481",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 442,
    winch: "sgr36",
    title: "тдеталь 170",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.482",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 443,
    winch: "sgr36",
    title: "тдеталь 171",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.483",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 444,
    winch: "sgr36",
    title: "тдеталь 172",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.484",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 445,
    winch: "sgr36",
    title: "тдеталь 173",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.485",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 446,
    winch: "sgr36",
    title: "тдеталь 174",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.486",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 447,
    winch: "sgr36",
    title: "тдеталь 175",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.487",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 448,
    winch: "sgr36",
    title: "тдеталь 176",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.488",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 449,
    winch: "sgr36",
    title: "тдеталь 177",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.489",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 450,
    winch: "sgr36",
    title: "тдеталь 178",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.490",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 451,
    winch: "sgr36",
    title: "адеталь 10",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.491",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 452,
    winch: "sgr36",
    title: "бдеталь 11",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.492",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 453,
    winch: "sgr36",
    title: "вдеталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.493",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 454,
    winch: "sgr36",
    title: "гдеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.494",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 455,
    winch: "sgr36",
    title: "деталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.495",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 456,
    winch: "sgr36",
    title: "едеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.496",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 457,
    winch: "sgr36",
    title: "едеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.497",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 458,
    winch: "sgr36",
    title: "едеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.498",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 459,
    winch: "sgr36",
    title: "едеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.499",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 460,
    winch: "sgr36",
    title: "здеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.500",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 461,
    winch: "sgr36",
    title: "здеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.501",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 462,
    winch: "sgr36",
    title: "идеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.502",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 463,
    winch: "sgr36",
    title: "кдеталь 94",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.503",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 464,
    winch: "sgr36",
    title: "кдеталь 95",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.504",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 465,
    winch: "sgr36",
    title: "кдеталь 96",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.505",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 466,
    winch: "sgr36",
    title: "кдеталь 97",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.506",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 467,
    winch: "sgr36",
    title: "кдеталь 98",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.507",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 468,
    winch: "sgr36",
    title: "кдеталь 99",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.508",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 469,
    winch: "sgr36",
    title: "кдеталь 100",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.509",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 470,
    winch: "sgr36",
    title: "кдеталь 101",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.510",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 471,
    winch: "sgr36",
    title: "кдеталь 102",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.511",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 472,
    winch: "sgr36",
    title: "лдеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.512",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 473,
    winch: "sgr36",
    title: "лдеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.513",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 474,
    winch: "sgr36",
    title: "мдеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.514",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 475,
    winch: "sgr36",
    title: "ндеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.515",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 476,
    winch: "sgr36",
    title: "одеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.516",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 477,
    winch: "sgr36",
    title: "одеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.517",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 478,
    winch: "sgr36",
    title: "пдеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.518",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 479,
    winch: "sgr36",
    title: "пдеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.519",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 480,
    winch: "sgr36",
    title: "рдеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.520",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 481,
    winch: "sgr36",
    title: "рдеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.521",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 482,
    winch: "sgr36",
    title: "рдеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.522",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 483,
    winch: "sgr36",
    title: "сдеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.523",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 484,
    winch: "sgr36",
    title: "сдеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.524",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 485,
    winch: "sgr36",
    title: "тдеталь 179",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.525",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 486,
    winch: "sgr36",
    title: "тдеталь 180",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.526",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 487,
    winch: "sgr36",
    title: "тдеталь 181",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.527",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 488,
    winch: "sgr36",
    title: "тдеталь 182",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.528",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 489,
    winch: "sgr36",
    title: "тдеталь 183",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.529",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 490,
    winch: "sgr36",
    title: "тдеталь 184",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.530",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 491,
    winch: "sgr36",
    title: "тдеталь 185",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.531",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 492,
    winch: "sgr36",
    title: "тдеталь 186",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.532",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 493,
    winch: "sgr36",
    title: "тдеталь 187",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.533",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 494,
    winch: "sgr36",
    title: "тдеталь 188",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.534",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 495,
    winch: "sgr36",
    title: "тдеталь 189",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.535",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 496,
    winch: "sgr36",
    title: "тдеталь 190",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.536",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 497,
    winch: "sgr36",
    title: "тдеталь 191",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.537",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 498,
    winch: "sgr36",
    title: "тдеталь 192",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.538",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 499,
    winch: "sgr36",
    title: "тдеталь 193",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.539",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 500,
    winch: "sgr36",
    title: "тдеталь 194",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.540",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 501,
    winch: "sgr36",
    title: "адеталь 11",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.541",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 502,
    winch: "sgr36",
    title: "бдеталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.542",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 503,
    winch: "sgr36",
    title: "вдеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.543",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 504,
    winch: "sgr36",
    title: "гдеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.544",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 505,
    winch: "sgr36",
    title: "деталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.545",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 506,
    winch: "sgr36",
    title: "едеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.546",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 507,
    winch: "sgr36",
    title: "едеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.547",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 508,
    winch: "sgr36",
    title: "едеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.548",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 509,
    winch: "sgr36",
    title: "едеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.549",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 510,
    winch: "sgr36",
    title: "здеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.550",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 511,
    winch: "sgr36",
    title: "здеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.551",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 512,
    winch: "sgr36",
    title: "идеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.552",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 513,
    winch: "sgr36",
    title: "кдеталь 103",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.553",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 514,
    winch: "sgr36",
    title: "кдеталь 104",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.554",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 515,
    winch: "sgr36",
    title: "кдеталь 105",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.555",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 516,
    winch: "sgr36",
    title: "кдеталь 106",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.556",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 517,
    winch: "sgr36",
    title: "кдеталь 107",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.557",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 518,
    winch: "sgr36",
    title: "кдеталь 108",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.558",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 519,
    winch: "sgr36",
    title: "кдеталь 109",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.559",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 520,
    winch: "sgr36",
    title: "кдеталь 110",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.560",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 521,
    winch: "sgr36",
    title: "кдеталь 111",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.561",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 522,
    winch: "sgr36",
    title: "лдеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.562",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 523,
    winch: "sgr36",
    title: "лдеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.563",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 524,
    winch: "sgr36",
    title: "мдеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.564",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 525,
    winch: "sgr36",
    title: "ндеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.565",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 526,
    winch: "sgr36",
    title: "одеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.566",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 527,
    winch: "sgr36",
    title: "одеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.567",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 528,
    winch: "sgr36",
    title: "пдеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.568",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 529,
    winch: "sgr36",
    title: "пдеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.569",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 530,
    winch: "sgr36",
    title: "рдеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.570",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 531,
    winch: "sgr36",
    title: "рдеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.571",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 532,
    winch: "sgr36",
    title: "рдеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.572",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 533,
    winch: "sgr36",
    title: "сдеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.573",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 534,
    winch: "sgr36",
    title: "сдеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.574",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 535,
    winch: "sgr36",
    title: "тдеталь 195",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.575",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 536,
    winch: "sgr36",
    title: "тдеталь 196",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.576",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 537,
    winch: "sgr36",
    title: "тдеталь 197",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.577",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 538,
    winch: "sgr36",
    title: "тдеталь 198",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.578",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 539,
    winch: "sgr36",
    title: "тдеталь 199",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.579",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 540,
    winch: "sgr36",
    title: "тдеталь 200",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.580",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 541,
    winch: "sgr36",
    title: "тдеталь 201",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.581",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 542,
    winch: "sgr36",
    title: "тдеталь 202",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.582",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 543,
    winch: "sgr36",
    title: "тдеталь 203",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.583",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 544,
    winch: "sgr36",
    title: "тдеталь 204",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.584",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 545,
    winch: "sgr36",
    title: "тдеталь 205",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.585",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 546,
    winch: "sgr36",
    title: "тдеталь 206",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.586",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 547,
    winch: "sgr36",
    title: "тдеталь 207",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.587",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 548,
    winch: "sgr36",
    title: "тдеталь 208",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.588",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 549,
    winch: "sgr36",
    title: "тдеталь 209",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.589",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 550,
    winch: "sgr36",
    title: "тдеталь 210",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.590",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 551,
    winch: "sgr36",
    title: "адеталь 12",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.591",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 552,
    winch: "sgr36",
    title: "бдеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.592",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 553,
    winch: "sgr36",
    title: "вдеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.593",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 554,
    winch: "sgr36",
    title: "гдеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.594",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 555,
    winch: "sgr36",
    title: "деталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.595",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 556,
    winch: "sgr36",
    title: "едеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.596",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 557,
    winch: "sgr36",
    title: "едеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.597",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 558,
    winch: "sgr36",
    title: "едеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.598",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 559,
    winch: "sgr36",
    title: "едеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.599",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 560,
    winch: "sgr36",
    title: "здеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.600",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 561,
    winch: "sgr36",
    title: "здеталь 33",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.601",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 562,
    winch: "sgr36",
    title: "идеталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.602",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 563,
    winch: "sgr36",
    title: "кдеталь 112",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.603",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 564,
    winch: "sgr36",
    title: "кдеталь 113",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.604",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 565,
    winch: "sgr36",
    title: "кдеталь 114",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.605",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 566,
    winch: "sgr36",
    title: "кдеталь 115",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.606",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 567,
    winch: "sgr36",
    title: "кдеталь 116",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.607",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 568,
    winch: "sgr36",
    title: "кдеталь 117",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.608",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 569,
    winch: "sgr36",
    title: "кдеталь 118",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.609",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 570,
    winch: "sgr36",
    title: "кдеталь 119",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.610",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 571,
    winch: "sgr36",
    title: "кдеталь 120",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.611",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 572,
    winch: "sgr36",
    title: "лдеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.612",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 573,
    winch: "sgr36",
    title: "лдеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.613",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 574,
    winch: "sgr36",
    title: "мдеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.614",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 575,
    winch: "sgr36",
    title: "ндеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.615",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 576,
    winch: "sgr36",
    title: "одеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.616",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 577,
    winch: "sgr36",
    title: "одеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.617",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 578,
    winch: "sgr36",
    title: "пдеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.618",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 579,
    winch: "sgr36",
    title: "пдеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.619",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 580,
    winch: "sgr36",
    title: "рдеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.620",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 581,
    winch: "sgr36",
    title: "рдеталь 64",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.621",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 582,
    winch: "sgr36",
    title: "рдеталь 65",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.622",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 583,
    winch: "sgr36",
    title: "сдеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.623",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 584,
    winch: "sgr36",
    title: "сдеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.624",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 585,
    winch: "sgr36",
    title: "тдеталь 211",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.625",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 586,
    winch: "sgr36",
    title: "тдеталь 212",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.626",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 587,
    winch: "sgr36",
    title: "тдеталь 213",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.627",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 588,
    winch: "sgr36",
    title: "тдеталь 214",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.628",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 589,
    winch: "sgr36",
    title: "тдеталь 215",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.629",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 590,
    winch: "sgr36",
    title: "тдеталь 216",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.630",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 591,
    winch: "sgr36",
    title: "тдеталь 217",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.631",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 592,
    winch: "sgr36",
    title: "тдеталь 218",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.632",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 593,
    winch: "sgr36",
    title: "тдеталь 219",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.633",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 594,
    winch: "sgr36",
    title: "тдеталь 220",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.634",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 595,
    winch: "sgr36",
    title: "тдеталь 221",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.635",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 596,
    winch: "sgr36",
    title: "тдеталь 222",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.636",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 597,
    winch: "sgr36",
    title: "тдеталь 223",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.637",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 598,
    winch: "sgr36",
    title: "тдеталь 224",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.638",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 599,
    winch: "sgr36",
    title: "тдеталь 225",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.639",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 600,
    winch: "sgr36",
    title: "тдеталь 226",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.640",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 601,
    winch: "sgr36",
    title: "адеталь 13",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.641",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 602,
    winch: "sgr36",
    title: "бдеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.642",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 603,
    winch: "sgr36",
    title: "вдеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.643",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 604,
    winch: "sgr36",
    title: "гдеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.644",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 605,
    winch: "sgr36",
    title: "деталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.645",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 606,
    winch: "sgr36",
    title: "едеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.646",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 607,
    winch: "sgr36",
    title: "едеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.647",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 608,
    winch: "sgr36",
    title: "едеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.648",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 609,
    winch: "sgr36",
    title: "едеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.649",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 610,
    winch: "sgr36",
    title: "здеталь 34",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.650",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 611,
    winch: "sgr36",
    title: "здеталь 35",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.651",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 612,
    winch: "sgr36",
    title: "идеталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.652",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 613,
    winch: "sgr36",
    title: "кдеталь 121",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.653",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 614,
    winch: "sgr36",
    title: "кдеталь 122",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.654",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 615,
    winch: "sgr36",
    title: "кдеталь 123",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.655",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 616,
    winch: "sgr36",
    title: "кдеталь 124",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.656",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 617,
    winch: "sgr36",
    title: "кдеталь 125",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.657",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 618,
    winch: "sgr36",
    title: "кдеталь 126",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.658",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 619,
    winch: "sgr36",
    title: "кдеталь 127",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.659",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 620,
    winch: "sgr36",
    title: "кдеталь 128",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.660",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 621,
    winch: "sgr36",
    title: "кдеталь 129",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.661",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 622,
    winch: "sgr36",
    title: "лдеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.662",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 623,
    winch: "sgr36",
    title: "лдеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.663",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 624,
    winch: "sgr36",
    title: "мдеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.664",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 625,
    winch: "sgr36",
    title: "ндеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.665",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 626,
    winch: "sgr36",
    title: "одеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.666",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 627,
    winch: "sgr36",
    title: "одеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.667",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 628,
    winch: "sgr36",
    title: "пдеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.668",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 629,
    winch: "sgr36",
    title: "пдеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.669",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 630,
    winch: "sgr36",
    title: "рдеталь 66",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.670",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 631,
    winch: "sgr36",
    title: "рдеталь 67",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.671",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 632,
    winch: "sgr36",
    title: "рдеталь 68",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.672",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 633,
    winch: "sgr36",
    title: "сдеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.673",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 634,
    winch: "sgr36",
    title: "сдеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.674",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 635,
    winch: "sgr36",
    title: "тдеталь 227",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.675",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 636,
    winch: "sgr36",
    title: "тдеталь 228",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.676",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 637,
    winch: "sgr36",
    title: "тдеталь 229",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.677",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 638,
    winch: "sgr36",
    title: "тдеталь 230",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.678",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 639,
    winch: "sgr36",
    title: "тдеталь 231",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.679",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 640,
    winch: "sgr36",
    title: "тдеталь 232",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.680",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 641,
    winch: "sgr36",
    title: "тдеталь 233",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.681",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 642,
    winch: "sgr36",
    title: "тдеталь 234",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.682",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 643,
    winch: "sgr36",
    title: "тдеталь 235",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.683",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 644,
    winch: "sgr36",
    title: "тдеталь 236",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.684",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 645,
    winch: "sgr36",
    title: "тдеталь 237",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.685",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 646,
    winch: "sgr36",
    title: "тдеталь 238",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.686",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 647,
    winch: "sgr36",
    title: "тдеталь 239",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.687",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 648,
    winch: "sgr36",
    title: "тдеталь 240",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.688",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 649,
    winch: "sgr36",
    title: "тдеталь 241",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.689",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 650,
    winch: "sgr36",
    title: "тдеталь 242",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.690",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 651,
    winch: "sgr36",
    title: "адеталь 14",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.691",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 652,
    winch: "sgr36",
    title: "бдеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.692",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 653,
    winch: "sgr36",
    title: "вдеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.693",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 654,
    winch: "sgr36",
    title: "гдеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.694",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 655,
    winch: "sgr36",
    title: "деталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.695",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 656,
    winch: "sgr36",
    title: "едеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.696",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 657,
    winch: "sgr36",
    title: "едеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.697",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 658,
    winch: "sgr36",
    title: "едеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.698",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 659,
    winch: "sgr36",
    title: "едеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.699",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 660,
    winch: "sgr36",
    title: "здеталь 36",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.700",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 661,
    winch: "sgr36",
    title: "здеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.701",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 662,
    winch: "sgr36",
    title: "идеталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.702",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 663,
    winch: "sgr36",
    title: "кдеталь 130",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.703",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 664,
    winch: "sgr36",
    title: "кдеталь 131",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.704",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 665,
    winch: "sgr36",
    title: "кдеталь 132",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.705",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 666,
    winch: "sgr36",
    title: "кдеталь 133",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.706",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 667,
    winch: "sgr36",
    title: "кдеталь 134",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.707",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 668,
    winch: "sgr36",
    title: "кдеталь 135",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.708",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 669,
    winch: "sgr36",
    title: "кдеталь 136",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.709",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 670,
    winch: "sgr36",
    title: "кдеталь 137",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.710",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 671,
    winch: "sgr36",
    title: "кдеталь 138",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.711",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 672,
    winch: "sgr36",
    title: "лдеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.712",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 673,
    winch: "sgr36",
    title: "лдеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.713",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 674,
    winch: "sgr36",
    title: "мдеталь 37",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.714",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 675,
    winch: "sgr36",
    title: "ндеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.715",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 676,
    winch: "sgr36",
    title: "одеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.716",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 677,
    winch: "sgr36",
    title: "одеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.717",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 678,
    winch: "sgr36",
    title: "пдеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.718",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 679,
    winch: "sgr36",
    title: "пдеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.719",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 680,
    winch: "sgr36",
    title: "рдеталь 69",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.720",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 681,
    winch: "sgr36",
    title: "рдеталь 70",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.721",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 682,
    winch: "sgr36",
    title: "рдеталь 71",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.722",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 683,
    winch: "sgr36",
    title: "сдеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.723",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 684,
    winch: "sgr36",
    title: "сдеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.724",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 685,
    winch: "sgr36",
    title: "тдеталь 243",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.725",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 686,
    winch: "sgr36",
    title: "тдеталь 244",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.726",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 687,
    winch: "sgr36",
    title: "тдеталь 245",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.727",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 688,
    winch: "sgr36",
    title: "тдеталь 246",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.728",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 689,
    winch: "sgr36",
    title: "тдеталь 247",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.729",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 690,
    winch: "sgr36",
    title: "тдеталь 248",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.730",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 691,
    winch: "sgr36",
    title: "тдеталь 249",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.731",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 692,
    winch: "sgr36",
    title: "тдеталь 250",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.732",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 693,
    winch: "sgr36",
    title: "тдеталь 251",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.733",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 694,
    winch: "sgr36",
    title: "тдеталь 252",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.734",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 695,
    winch: "sgr36",
    title: "тдеталь 253",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.735",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 696,
    winch: "sgr36",
    title: "тдеталь 254",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.736",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 697,
    winch: "sgr36",
    title: "тдеталь 255",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.737",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 698,
    winch: "sgr36",
    title: "тдеталь 256",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.738",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 699,
    winch: "sgr36",
    title: "тдеталь 257",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.739",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 700,
    winch: "sgr36",
    title: "тдеталь 258",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.740",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 701,
    winch: "sgr36",
    title: "адеталь 15",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.741",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 702,
    winch: "sgr36",
    title: "бдеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.742",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 703,
    winch: "sgr36",
    title: "вдеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.743",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 704,
    winch: "sgr36",
    title: "гдеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.744",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 705,
    winch: "sgr36",
    title: "деталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.745",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 706,
    winch: "sgr36",
    title: "едеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.746",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 707,
    winch: "sgr36",
    title: "едеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.747",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 708,
    winch: "sgr36",
    title: "едеталь 64",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.748",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 709,
    winch: "sgr36",
    title: "едеталь 65",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.749",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 710,
    winch: "sgr36",
    title: "здеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.750",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 711,
    winch: "sgr36",
    title: "здеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.751",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 712,
    winch: "sgr36",
    title: "идеталь 26",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.752",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 713,
    winch: "sgr36",
    title: "кдеталь 139",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.753",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 714,
    winch: "sgr36",
    title: "кдеталь 140",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.754",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 715,
    winch: "sgr36",
    title: "кдеталь 141",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.755",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 716,
    winch: "sgr36",
    title: "кдеталь 142",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.756",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 717,
    winch: "sgr36",
    title: "кдеталь 143",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.757",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 718,
    winch: "sgr36",
    title: "кдеталь 144",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.758",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 719,
    winch: "sgr36",
    title: "кдеталь 145",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.759",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 720,
    winch: "sgr36",
    title: "кдеталь 146",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.760",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 721,
    winch: "sgr36",
    title: "кдеталь 147",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.761",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 722,
    winch: "sgr36",
    title: "лдеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.762",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 723,
    winch: "sgr36",
    title: "лдеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.763",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 724,
    winch: "sgr36",
    title: "мдеталь 38",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.764",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 725,
    winch: "sgr36",
    title: "ндеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.765",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 726,
    winch: "sgr36",
    title: "одеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.766",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 727,
    winch: "sgr36",
    title: "одеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.767",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 728,
    winch: "sgr36",
    title: "пдеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.768",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 729,
    winch: "sgr36",
    title: "пдеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.769",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 730,
    winch: "sgr36",
    title: "рдеталь 72",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.770",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 731,
    winch: "sgr36",
    title: "рдеталь 73",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.771",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 732,
    winch: "sgr36",
    title: "рдеталь 74",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.772",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 733,
    winch: "sgr36",
    title: "сдеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.773",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 734,
    winch: "sgr36",
    title: "сдеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.774",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 735,
    winch: "sgr36",
    title: "тдеталь 259",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.775",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 736,
    winch: "sgr36",
    title: "тдеталь 260",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.776",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 737,
    winch: "sgr36",
    title: "тдеталь 261",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.777",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 738,
    winch: "sgr36",
    title: "тдеталь 262",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.778",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 739,
    winch: "sgr36",
    title: "тдеталь 263",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.779",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 740,
    winch: "sgr36",
    title: "тдеталь 264",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.780",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 741,
    winch: "sgr36",
    title: "тдеталь 265",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.781",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 742,
    winch: "sgr36",
    title: "тдеталь 266",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.782",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 743,
    winch: "sgr36",
    title: "тдеталь 267",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.783",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 744,
    winch: "sgr36",
    title: "тдеталь 268",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.784",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 745,
    winch: "sgr36",
    title: "тдеталь 269",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.785",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 746,
    winch: "sgr36",
    title: "тдеталь 270",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.786",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 747,
    winch: "sgr36",
    title: "тдеталь 271",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.787",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 748,
    winch: "sgr36",
    title: "тдеталь 272",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.788",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 749,
    winch: "sgr36",
    title: "тдеталь 273",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.789",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 750,
    winch: "sgr36",
    title: "тдеталь 274",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.790",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 751,
    winch: "sgr36",
    title: "адеталь 16",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.791",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 752,
    winch: "sgr36",
    title: "бдеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.792",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 753,
    winch: "sgr36",
    title: "вдеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.793",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 754,
    winch: "sgr36",
    title: "гдеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.794",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 755,
    winch: "sgr36",
    title: "деталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.795",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 756,
    winch: "sgr36",
    title: "едеталь 66",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.796",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 757,
    winch: "sgr36",
    title: "едеталь 67",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.797",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 758,
    winch: "sgr36",
    title: "едеталь 68",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.798",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 759,
    winch: "sgr36",
    title: "едеталь 69",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.799",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 760,
    winch: "sgr36",
    title: "здеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.800",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 761,
    winch: "sgr36",
    title: "здеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.801",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 762,
    winch: "sgr36",
    title: "идеталь 27",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.802",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 763,
    winch: "sgr36",
    title: "кдеталь 148",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.803",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 764,
    winch: "sgr36",
    title: "кдеталь 149",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.804",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 765,
    winch: "sgr36",
    title: "кдеталь 150",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.805",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 766,
    winch: "sgr36",
    title: "кдеталь 151",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.806",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 767,
    winch: "sgr36",
    title: "кдеталь 152",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.807",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 768,
    winch: "sgr36",
    title: "кдеталь 153",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.808",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 769,
    winch: "sgr36",
    title: "кдеталь 154",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.809",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 770,
    winch: "sgr36",
    title: "кдеталь 155",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.810",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 771,
    winch: "sgr36",
    title: "кдеталь 156",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.811",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 772,
    winch: "sgr36",
    title: "лдеталь 52",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.812",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 773,
    winch: "sgr36",
    title: "лдеталь 53",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.813",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 774,
    winch: "sgr36",
    title: "мдеталь 39",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.814",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 775,
    winch: "sgr36",
    title: "ндеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.815",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 776,
    winch: "sgr36",
    title: "одеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.816",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 777,
    winch: "sgr36",
    title: "одеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.817",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 778,
    winch: "sgr36",
    title: "пдеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.818",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 779,
    winch: "sgr36",
    title: "пдеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.819",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 780,
    winch: "sgr36",
    title: "рдеталь 75",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.820",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 781,
    winch: "sgr36",
    title: "рдеталь 76",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.821",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 782,
    winch: "sgr36",
    title: "рдеталь 77",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.822",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 783,
    winch: "sgr36",
    title: "сдеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.823",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 784,
    winch: "sgr36",
    title: "сдеталь 64",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.824",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 785,
    winch: "sgr36",
    title: "тдеталь 275",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.825",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 786,
    winch: "sgr36",
    title: "тдеталь 276",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.826",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 787,
    winch: "sgr36",
    title: "тдеталь 277",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.827",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 788,
    winch: "sgr36",
    title: "тдеталь 278",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.828",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 789,
    winch: "sgr36",
    title: "тдеталь 279",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.829",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 790,
    winch: "sgr36",
    title: "тдеталь 280",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.830",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 791,
    winch: "sgr36",
    title: "тдеталь 281",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.831",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 792,
    winch: "sgr36",
    title: "тдеталь 282",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.832",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 793,
    winch: "sgr36",
    title: "тдеталь 283",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.833",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 794,
    winch: "sgr36",
    title: "тдеталь 284",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.834",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 795,
    winch: "sgr36",
    title: "тдеталь 285",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.835",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 796,
    winch: "sgr36",
    title: "тдеталь 286",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.836",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 797,
    winch: "sgr36",
    title: "тдеталь 287",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.837",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 798,
    winch: "sgr36",
    title: "тдеталь 288",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.838",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 799,
    winch: "sgr36",
    title: "тдеталь 289",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.839",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 800,
    winch: "sgr36",
    title: "тдеталь 290",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.840",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 801,
    winch: "sgr36",
    title: "адеталь 17",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.841",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 802,
    winch: "sgr36",
    title: "бдеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.842",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 803,
    winch: "sgr36",
    title: "вдеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.843",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 804,
    winch: "sgr36",
    title: "гдеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.844",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 805,
    winch: "sgr36",
    title: "деталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.845",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 806,
    winch: "sgr36",
    title: "едеталь 70",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.846",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 807,
    winch: "sgr36",
    title: "едеталь 71",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.847",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 808,
    winch: "sgr36",
    title: "едеталь 72",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.848",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 809,
    winch: "sgr36",
    title: "едеталь 73",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.849",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 810,
    winch: "sgr36",
    title: "здеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.850",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 811,
    winch: "sgr36",
    title: "здеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.851",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 812,
    winch: "sgr36",
    title: "идеталь 28",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.852",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 813,
    winch: "sgr36",
    title: "кдеталь 157",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.853",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 814,
    winch: "sgr36",
    title: "кдеталь 158",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.854",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 815,
    winch: "sgr36",
    title: "кдеталь 159",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.855",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 816,
    winch: "sgr36",
    title: "кдеталь 160",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.856",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 817,
    winch: "sgr36",
    title: "кдеталь 161",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.857",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 818,
    winch: "sgr36",
    title: "кдеталь 162",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.858",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 819,
    winch: "sgr36",
    title: "кдеталь 163",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.859",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 820,
    winch: "sgr36",
    title: "кдеталь 164",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.860",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 821,
    winch: "sgr36",
    title: "кдеталь 165",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.861",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 822,
    winch: "sgr36",
    title: "лдеталь 54",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.862",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 823,
    winch: "sgr36",
    title: "лдеталь 55",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.863",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 824,
    winch: "sgr36",
    title: "мдеталь 40",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.864",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 825,
    winch: "sgr36",
    title: "ндеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.865",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 826,
    winch: "sgr36",
    title: "одеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.866",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 827,
    winch: "sgr36",
    title: "одеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.867",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 828,
    winch: "sgr36",
    title: "пдеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.868",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 829,
    winch: "sgr36",
    title: "пдеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.869",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 830,
    winch: "sgr36",
    title: "рдеталь 78",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.870",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 831,
    winch: "sgr36",
    title: "рдеталь 79",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.871",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 832,
    winch: "sgr36",
    title: "рдеталь 80",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.872",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 833,
    winch: "sgr36",
    title: "сдеталь 65",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.873",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 834,
    winch: "sgr36",
    title: "сдеталь 66",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.874",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 835,
    winch: "sgr36",
    title: "тдеталь 291",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.875",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 836,
    winch: "sgr36",
    title: "тдеталь 292",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.876",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 837,
    winch: "sgr36",
    title: "тдеталь 293",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.877",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 838,
    winch: "sgr36",
    title: "тдеталь 294",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.878",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 839,
    winch: "sgr36",
    title: "тдеталь 295",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.879",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 840,
    winch: "sgr36",
    title: "тдеталь 296",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.880",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 841,
    winch: "sgr36",
    title: "тдеталь 297",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.881",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 842,
    winch: "sgr36",
    title: "тдеталь 298",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.882",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 843,
    winch: "sgr36",
    title: "тдеталь 299",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.883",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 844,
    winch: "sgr36",
    title: "тдеталь 300",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.884",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 845,
    winch: "sgr36",
    title: "тдеталь 301",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.885",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 846,
    winch: "sgr36",
    title: "тдеталь 302",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.886",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 847,
    winch: "sgr36",
    title: "тдеталь 303",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.887",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 848,
    winch: "sgr36",
    title: "тдеталь 304",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.888",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 849,
    winch: "sgr36",
    title: "тдеталь 305",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.889",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 850,
    winch: "sgr36",
    title: "тдеталь 306",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.890",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 851,
    winch: "sgr36",
    title: "адеталь 18",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.891",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 852,
    winch: "sgr36",
    title: "бдеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.892",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 853,
    winch: "sgr36",
    title: "вдеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.893",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 854,
    winch: "sgr36",
    title: "гдеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.894",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 855,
    winch: "sgr36",
    title: "деталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.895",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 856,
    winch: "sgr36",
    title: "едеталь 74",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.896",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 857,
    winch: "sgr36",
    title: "едеталь 75",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.897",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 858,
    winch: "sgr36",
    title: "едеталь 76",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.898",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 859,
    winch: "sgr36",
    title: "едеталь 77",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.899",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 860,
    winch: "sgr36",
    title: "здеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.900",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 861,
    winch: "sgr36",
    title: "здеталь 45",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.901",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 862,
    winch: "sgr36",
    title: "идеталь 29",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.902",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 863,
    winch: "sgr36",
    title: "кдеталь 166",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.903",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 864,
    winch: "sgr36",
    title: "кдеталь 167",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.904",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 865,
    winch: "sgr36",
    title: "кдеталь 168",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.905",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 866,
    winch: "sgr36",
    title: "кдеталь 169",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.906",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 867,
    winch: "sgr36",
    title: "кдеталь 170",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.907",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 868,
    winch: "sgr36",
    title: "кдеталь 171",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.908",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 869,
    winch: "sgr36",
    title: "кдеталь 172",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.909",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 870,
    winch: "sgr36",
    title: "кдеталь 173",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.910",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 871,
    winch: "sgr36",
    title: "кдеталь 174",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.911",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 872,
    winch: "sgr36",
    title: "лдеталь 56",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.912",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 873,
    winch: "sgr36",
    title: "лдеталь 57",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.913",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 874,
    winch: "sgr36",
    title: "мдеталь 41",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.914",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 875,
    winch: "sgr36",
    title: "ндеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.915",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 876,
    winch: "sgr36",
    title: "одеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.916",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 877,
    winch: "sgr36",
    title: "одеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.917",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 878,
    winch: "sgr36",
    title: "пдеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.918",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 879,
    winch: "sgr36",
    title: "пдеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.919",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 880,
    winch: "sgr36",
    title: "рдеталь 81",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.920",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 881,
    winch: "sgr36",
    title: "рдеталь 82",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.921",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 882,
    winch: "sgr36",
    title: "рдеталь 83",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.922",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 883,
    winch: "sgr36",
    title: "сдеталь 67",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.923",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 884,
    winch: "sgr36",
    title: "сдеталь 68",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.924",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 885,
    winch: "sgr36",
    title: "тдеталь 307",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.925",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 886,
    winch: "sgr36",
    title: "тдеталь 308",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.926",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 887,
    winch: "sgr36",
    title: "тдеталь 309",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.927",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 888,
    winch: "sgr36",
    title: "тдеталь 310",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.928",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 889,
    winch: "sgr36",
    title: "тдеталь 311",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.929",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 890,
    winch: "sgr36",
    title: "тдеталь 312",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.930",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 891,
    winch: "sgr36",
    title: "тдеталь 313",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.931",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 892,
    winch: "sgr36",
    title: "тдеталь 314",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.932",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 893,
    winch: "sgr36",
    title: "тдеталь 315",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.933",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 894,
    winch: "sgr36",
    title: "тдеталь 316",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.934",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 895,
    winch: "sgr36",
    title: "тдеталь 317",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.935",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 896,
    winch: "sgr36",
    title: "тдеталь 318",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.936",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 897,
    winch: "sgr36",
    title: "тдеталь 319",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.937",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 898,
    winch: "sgr36",
    title: "тдеталь 320",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.938",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 899,
    winch: "sgr36",
    title: "тдеталь 321",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.939",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 900,
    winch: "sgr36",
    title: "тдеталь 322",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.940",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 901,
    winch: "sgr36",
    title: "адеталь 19",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.941",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 902,
    winch: "sgr36",
    title: "бдеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.942",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 903,
    winch: "sgr36",
    title: "вдеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.943",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 904,
    winch: "sgr36",
    title: "гдеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.944",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 905,
    winch: "sgr36",
    title: "деталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.945",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 906,
    winch: "sgr36",
    title: "едеталь 78",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.946",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 907,
    winch: "sgr36",
    title: "едеталь 79",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.947",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 908,
    winch: "sgr36",
    title: "едеталь 80",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.948",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 909,
    winch: "sgr36",
    title: "едеталь 81",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.949",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 910,
    winch: "sgr36",
    title: "здеталь 46",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.950",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 911,
    winch: "sgr36",
    title: "здеталь 47",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.951",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 912,
    winch: "sgr36",
    title: "идеталь 30",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.952",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 913,
    winch: "sgr36",
    title: "кдеталь 175",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.953",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 914,
    winch: "sgr36",
    title: "кдеталь 176",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.954",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 915,
    winch: "sgr36",
    title: "кдеталь 177",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.955",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 916,
    winch: "sgr36",
    title: "кдеталь 178",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.956",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 917,
    winch: "sgr36",
    title: "кдеталь 179",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.957",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 918,
    winch: "sgr36",
    title: "кдеталь 180",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.958",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 919,
    winch: "sgr36",
    title: "кдеталь 181",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.959",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 920,
    winch: "sgr36",
    title: "кдеталь 182",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.960",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 921,
    winch: "sgr36",
    title: "кдеталь 183",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.961",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 922,
    winch: "sgr36",
    title: "лдеталь 58",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.962",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 923,
    winch: "sgr36",
    title: "лдеталь 59",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.963",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 924,
    winch: "sgr36",
    title: "мдеталь 42",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.964",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 925,
    winch: "sgr36",
    title: "ндеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.965",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 926,
    winch: "sgr36",
    title: "одеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.966",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 927,
    winch: "sgr36",
    title: "одеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.967",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 928,
    winch: "sgr36",
    title: "пдеталь 64",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.968",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 929,
    winch: "sgr36",
    title: "пдеталь 65",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.969",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 930,
    winch: "sgr36",
    title: "рдеталь 84",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.970",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 931,
    winch: "sgr36",
    title: "рдеталь 85",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.971",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 932,
    winch: "sgr36",
    title: "рдеталь 86",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.972",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 933,
    winch: "sgr36",
    title: "сдеталь 69",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.973",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 934,
    winch: "sgr36",
    title: "сдеталь 70",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.974",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 935,
    winch: "sgr36",
    title: "тдеталь 323",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.975",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 936,
    winch: "sgr36",
    title: "тдеталь 324",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.976",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 937,
    winch: "sgr36",
    title: "тдеталь 325",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.977",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 938,
    winch: "sgr36",
    title: "тдеталь 326",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.978",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 939,
    winch: "sgr36",
    title: "тдеталь 327",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.979",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 940,
    winch: "sgr36",
    title: "тдеталь 328",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.980",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 941,
    winch: "sgr36",
    title: "тдеталь 329",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.981",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 942,
    winch: "sgr36",
    title: "тдеталь 330",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.982",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 943,
    winch: "sgr36",
    title: "тдеталь 331",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.983",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 944,
    winch: "sgr36",
    title: "тдеталь 332",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.984",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 945,
    winch: "sgr36",
    title: "тдеталь 333",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.985",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 946,
    winch: "sgr36",
    title: "тдеталь 334",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.986",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 947,
    winch: "sgr36",
    title: "тдеталь 335",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.987",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 948,
    winch: "sgr36",
    title: "тдеталь 336",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.988",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 949,
    winch: "sgr36",
    title: "тдеталь 337",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.989",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 950,
    winch: "sgr36",
    title: "тдеталь 338",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.990",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 951,
    winch: "sgr36",
    title: "адеталь 20",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.991",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 952,
    winch: "sgr36",
    title: "бдеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.992",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 953,
    winch: "sgr36",
    title: "вдеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.993",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 954,
    winch: "sgr36",
    title: "гдеталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.994",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 955,
    winch: "sgr36",
    title: "деталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.995",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 956,
    winch: "sgr36",
    title: "едеталь 82",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.996",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 957,
    winch: "sgr36",
    title: "едеталь 83",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.997",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 958,
    winch: "sgr36",
    title: "едеталь 84",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.998",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 959,
    winch: "sgr36",
    title: "едеталь 85",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.999",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 960,
    winch: "sgr36",
    title: "здеталь 48",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1000",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 961,
    winch: "sgr36",
    title: "здеталь 49",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1001",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 962,
    winch: "sgr36",
    title: "идеталь 31",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1002",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 963,
    winch: "sgr36",
    title: "кдеталь 184",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1003",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 964,
    winch: "sgr36",
    title: "кдеталь 185",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.1004",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 965,
    winch: "sgr36",
    title: "кдеталь 186",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1005",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 966,
    winch: "sgr36",
    title: "кдеталь 187",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.1006",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 967,
    winch: "sgr36",
    title: "кдеталь 188",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1007",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 968,
    winch: "sgr36",
    title: "кдеталь 189",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1008",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 969,
    winch: "sgr36",
    title: "кдеталь 190",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1009",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 970,
    winch: "sgr36",
    title: "кдеталь 191",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1010",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 971,
    winch: "sgr36",
    title: "кдеталь 192",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.1011",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 972,
    winch: "sgr36",
    title: "лдеталь 60",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1012",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 973,
    winch: "sgr36",
    title: "лдеталь 61",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.1013",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 974,
    winch: "sgr36",
    title: "мдеталь 43",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1014",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 975,
    winch: "sgr36",
    title: "ндеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1015",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 976,
    winch: "sgr36",
    title: "одеталь 64",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1016",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 977,
    winch: "sgr36",
    title: "одеталь 65",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1017",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 978,
    winch: "sgr36",
    title: "пдеталь 66",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.1018",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 979,
    winch: "sgr36",
    title: "пдеталь 67",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1019",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 980,
    winch: "sgr36",
    title: "рдеталь 87",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.1020",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 981,
    winch: "sgr36",
    title: "рдеталь 88",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1021",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 982,
    winch: "sgr36",
    title: "рдеталь 89",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1022",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 983,
    winch: "sgr36",
    title: "сдеталь 71",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1023",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 984,
    winch: "sgr36",
    title: "сдеталь 72",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1024",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 985,
    winch: "sgr36",
    title: "тдеталь 339",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.1025",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 986,
    winch: "sgr36",
    title: "тдеталь 340",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1026",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 987,
    winch: "sgr36",
    title: "тдеталь 341",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.1027",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 988,
    winch: "sgr36",
    title: "тдеталь 342",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1028",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 989,
    winch: "sgr36",
    title: "тдеталь 343",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1029",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 990,
    winch: "sgr36",
    title: "тдеталь 344",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1030",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 991,
    winch: "sgr36",
    title: "тдеталь 345",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1031",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 992,
    winch: "sgr36",
    title: "тдеталь 346",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.1032",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 993,
    winch: "sgr36",
    title: "тдеталь 347",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1033",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 994,
    winch: "sgr36",
    title: "тдеталь 348",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.1034",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 995,
    winch: "sgr36",
    title: "тдеталь 349",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1035",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 996,
    winch: "sgr36",
    title: "тдеталь 350",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1036",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 997,
    winch: "sgr36",
    title: "тдеталь 351",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1037",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 998,
    winch: "sgr36",
    title: "тдеталь 352",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1038",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 999,
    winch: "sgr36",
    title: "тдеталь 353",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.1039",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1000,
    winch: "sgr36",
    title: "тдеталь 354",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1040",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1001,
    winch: "sgr36",
    title: "адеталь 21",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.1041",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1002,
    winch: "sgr36",
    title: "бдеталь 22",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1042",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1003,
    winch: "sgr36",
    title: "вдеталь 23",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1043",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1004,
    winch: "sgr36",
    title: "гдеталь 24",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1044",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1005,
    winch: "sgr36",
    title: "деталь 25",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1045",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1006,
    winch: "sgr36",
    title: "едеталь 86",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.1046",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1007,
    winch: "sgr36",
    title: "едеталь 87",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1047",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1008,
    winch: "sgr36",
    title: "едеталь 88",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.1048",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1009,
    winch: "sgr36",
    title: "едеталь 89",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1049",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1010,
    winch: "sgr36",
    title: "здеталь 50",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1050",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1011,
    winch: "sgr36",
    title: "здеталь 51",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1051",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1012,
    winch: "sgr36",
    title: "идеталь 32",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1052",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1013,
    winch: "sgr36",
    title: "кдеталь 193",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "",
    designation: "0411.138SGR.01.1053",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1014,
    winch: "sgr36",
    title: "кдеталь 194",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1054",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1015,
    winch: "sgr36",
    title: "кдеталь 195",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "",
    designation: "0411.138SGR.01.1055",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1016,
    winch: "sgr36",
    title: "кдеталь 196",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1056",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1017,
    winch: "sgr36",
    title: "кдеталь 197",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1057",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1018,
    winch: "sgr36",
    title: "кдеталь 198",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "Двигатель",
    designation: "0411.138SGR.01.1058",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1019,
    winch: "sgr36",
    title: "кдеталь 199",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1059",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1020,
    winch: "sgr36",
    title: "кдеталь 200",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "",
    designation: "0411.138SGR.01.1060",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1021,
    winch: "sgr36",
    title: "кдеталь 201",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR11",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1061",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1022,
    winch: "sgr36",
    title: "лдеталь 62",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11",
    consist: "",
    designation: "0411.138SGR.01.1062",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1023,
    winch: "sgr36",
    title: "лдеталь 63",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16",
    consist: "Редуктор",
    designation: "0411.138SGR.01.1063",
    img: "./img_details/0411.138SGR.01.043.jpg"
  },
  {
    id: 1024,
    winch: "sgr36",
    title: "мдеталь 44",
    description: "Описание детали. Например: Вес: 1.3кг. Размеры: 10х2.5х53см. Материал: метал.",
    type: "SGR10, SGR11, SGR16, SGR22, SGR26, SGR33, SGR36",
    consist: "Тормозная система",
    designation: "0411.138SGR.01.1064",
    img: "./img_details/0411.138SGR.01.043.jpg"
  }
]

export default dataDetail;
