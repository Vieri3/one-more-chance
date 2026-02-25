// Место на карте и его характеристики, данные защищенность места расположенность к опасности +- доступ к воде к еде защищенность от погодных условий

export default [
    {
        id: 1,
        name: "Prison",
        thumbnail: "prison",
        img: "",
        selected: false,
        active: false,
        coord: 234,
    },
    {
        id: 2,
        name: "Boat on Water",
        thumbnail: "boat-on-water",
        img: "",
        selected: false,
        active: false,
        coord: 369,
    },
    {
        id: 3,
        name: "Building",
        thumbnail: "building",
        img: "",
        selected: false,
        active: false,
        coord: 58,
    },
    {
        id: 4,
        folder: "bus",
        name: "BuS prison", /* название убежища */
        thumbnail: "bus-thumb", /* миниатюра убежища (картинка общего вида)*/
        img: "bus-img", /* картинка, как выглядит внутри */
        inventory: "bus-inventory", /** как выглядит место склада */
        selected: true, /* флаг для выбора на карте */
        active: true,   /* флаг если мы находимяся в эом убежище */
        coord: 236,
        inventory: ["medical-bag", "head-winter-blue", "weapon-machete"]
        /*массив СКЛАД какой товар лежит и массив ферма что растет на этой точке*/ 
    },
    {
        id: 5,
        name: "The scavengers",
        thumbnail: "containers",
        img: "",
        selected: false,
        active: false,
        coord: 187,
    },
    {
        id: 6,
        name: "Boat on Land",
        thumbnail: "boat-on-land",
        img: "",
        selected: false,
        active: false,
        coord: 346,
    },
    {
        id: 7,
        name: "Electric Train",
        thumbnail: "electric-train",
        img: "",
        selected: false,
        active: false,
        coord: 75,
    },
    {
        id: 8,
        name: "Farm By Hershel Green",
        thumbnail: "farm",
        img: "",
        selected: false,
        active: false,
        coord: 129,
    },
    {
        id: 9,
        name: "Factory Negan",
        thumbnail: "factory",
        img: "",
        selected: false,
        active: false,
        coord: 154,
    },
    {
        id: 10,
        name: "Gas Station",
        thumbnail: "gas-station",
        img: "",
        selected: false,
        active: false,
        coord: 171,
    },
    {
        id: 11,
        name: "Old City",
        thumbnail: "old-city",
        img: "",
        selected: false,
        active: false,
        coord: 67,
    },
    {
        id: 12,
        name: "Radio Tower",
        thumbnail: "radio-tower",
        img: "",
        selected: false,
        active: false,
        coord: 248,
    },
    {
        id: 13,
        name: "Trailer",
        thumbnail: "trailer",
        img: "",
        selected: false,
        active: false,
        coord: 92,
    },
    {
        id: 14,
        name: "Water Tower",
        thumbnail: "water-tower",
        img: "",
        selected: false,
        active: false,
        coord: 178,
    },
    {
        id: 15,
        name: "Boat on Water",
        thumbnail: "boat-on-water",
        img: "",
        selected: false,
        active: false,
        coord: 29,
    },
    {
        id: 16,
        name: "Destroyed Building",
        thumbnail: "destroyed-building",
        img: "",
        selected: false,
        active: false,
        coord: 118
    }

]