import { IDataSheltersItem } from '@/types/global.ts'

export const DATA_SHELTERS: IDataSheltersItem[] = [
    {
        id: 1,
        folder: "",
        name: "Prison",
        imgThumb: "prison",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 234,
        inventory: []
    },
    {
        id: 2,
        folder: "",
        name: "Boat on Water",
        imgThumb: "boat-on-water",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 369,
        inventory: []
    },
    {
        id: 3,
        folder: "",
        name: "Building",
        imgThumb: "building",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 58,
        inventory: []
    },
    {
        id: 4,
        folder: "bus",  /* название папки где хранятся картинки  */
        name: "BuS prison", /* название убежища  */
        imgThumb: "bus-thumb", /* миниатюра убежища (картинка общего вида) */
        imgMain: "bus-img", /* картинка, как выглядит внутри */
        imgInv: "bus-inventory", /* как выглядит место склада */
        imgFarm: "bus-farm", /* как выглядит место фермы */
        imgGroop: "bus-groop", /* как выглядит фон окна группы персонажей */
        selected: true, /* флаг для выбора на карте */
        active: true,   /* флаг если мы находимяся в эом убежище */
        coord: 236,
        inventory: ["medical-bag", "head-winter-blue", "weapon-machete"] /*массив СКЛАД какой товар лежит и массив ферма что растет на этой точке*/ 
    },
    {
        id: 5,
        folder: "",
        name: "The scavengers",
        imgThumb: "containers",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 187,
        inventory: []
    },
    {
        id: 6,
        folder: "",
        name: "Boat on Land",
        imgThumb: "boat-on-land",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 346,
        inventory: []
    },
    {
        id: 7,
        folder: "",
        name: "Electric Train",
        imgThumb: "electric-train",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 75,
        inventory: []
    },
    {
        id: 8,
        folder: "",
        name: "Farm By Hershel Green",
        imgThumb: "farm",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 129,
        inventory: []
    },
    {
        id: 9,
        folder: "",
        name: "Factory Negan",
        imgThumb: "factory",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 154,
        inventory: []
    },
    {
        id: 10,
        folder: "",
        name: "Gas Station",
        imgThumb: "gas-station",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 171,
        inventory: []
    },
    {
        id: 11,
        folder: "",
        name: "Old City",
        imgThumb: "old-city",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 67,
        inventory: []
    },
    {
        id: 12,
        folder: "",
        name: "Radio Tower",
        imgThumb: "radio-tower",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 248,
        inventory: []
    },
    {
        id: 13,
        folder: "",
        name: "Trailer",
        imgThumb: "trailer",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 92,
        inventory: []
    },
    {
        id: 14,
        folder: "",
        name: "Water Tower",
        imgThumb: "water-tower",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 178,
        inventory: []
    },
    {
        id: 15,
        folder: "",
        name: "Boat on Water",
        imgThumb: "boat-on-water",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 29,
        inventory: []
    },
    {
        id: 16,
        folder: "",
        name: "Destroyed Building",
        imgThumb: "destroyed-building",
        imgMain: "",
        imgInv: "",
        imgFarm: "",
        imgGroop: "",
        selected: false,
        active: false,
        coord: 118,
        inventory: []
    }

];
