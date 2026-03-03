import type { IDataSheltersItem } from '@/types/global-types'

export const DATA_SHELTERS: IDataSheltersItem[] = [
    {
        // Id убежища
        id: 1,
        // папка картинок в проекте
        folder: "",
        // название убежища
        name: "Prison",
        // миниатюра убежища (картинка общего вида) 
        imgThumb: "prison",
        // основная картинка, как выглядит внутри убежище
        imgMain: "",
        // как выглядит место склада
        imgInv: "",
        // как выглядит место фермы
        imgFarm: "",
        // как выглядит страница где таблица группы
        imgGroop: "",
        // флаг для выбора/показа на основной карте
        selected: false,
        // флаг в котором мы находимся убежище
        active: false,
        // координаты на карте для рисования точек
        coord: 234,
        // стартовый инвентарь, что находится на базе
        inventory: [],
        // вместимость инвентаря базы
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
    },
    {
        id: 4,
        folder: "bus",
        name: "BuS prison",
        imgThumb: "bus-thumb",
        imgMain: "bus-img",
        imgInv: "bus-inventory",
        imgFarm: "bus-farm",
        imgGroop: "bus-groop",
        selected: true,
        active: true,
        coord: 236,
        inventory: ["medical-bag", "head-winter-blue", "weapon-machete"],
        capacityInv: 9
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
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
        inventory: [],
        capacityInv: 10
    }

];
