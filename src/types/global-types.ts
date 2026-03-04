import { EDataRandomEventsPosition, EDataCategoriesFromInventar } from '@/constants/global-constants'

// global mass games
export interface ILoadData {
    HEROES: IDataHeroesItem[];
    DATE: IGetDate;
    SHELTERS: IDataSheltersItem[];
    WEATHER: IGetWeather;
    COUNTERS: IGetCounters;
}

// data types
export interface IDataHeroesItem {
    id: number;
    name: string;
    male: string;
    year: number;
    ethnicity: string;
    imgThumb: string;
    selected: boolean;
    status: string;
    desc: string;
    inventory: Array<string>;
    health: number;
    attack: number;
    protection: number;
    satietiFood: number;
    satietiWater: number;
    equipment: {
        head: string,
        body: string,
        legs: string,
        foot: string,
    }
};

export interface IDataRandomEventsItem {
    id: number;
    name: string;
    position: EDataRandomEventsPosition;
    description: string;
    action: boolean;
    eventBody: string,
};

export interface IDataSheltersItem {
    id: number;
    folder: string;
    name: string;
    imgThumb: string;
    imgMain: string;
    imgInv: string;
    imgFarm: string;
    imgGroop: string;
    selected: boolean;
    active: boolean;
    coord: number;
    inventory: Array<string>
    capacityInv: number
};

// data types inventory
interface IDataInventoryBase {
    id: number;
    category: EDataCategoriesFromInventar.CLOTHES | EDataCategoriesFromInventar.WEAPON | EDataCategoriesFromInventar.MEDICAL | EDataCategoriesFromInventar.EAT;
    name: string;
    description: string;
    src: string;
};

interface IDataInventoryClothes extends IDataInventoryBase {
    category: EDataCategoriesFromInventar.CLOTHES 
    attack: number;
    protection: number;
    warming: number;
};

interface IDataInventoryWeapon extends IDataInventoryBase {
    category: EDataCategoriesFromInventar.WEAPON 
    attack: number;
    protection: number;
};

interface IDataInventoryMedical extends IDataInventoryBase {
    category: EDataCategoriesFromInventar.MEDICAL 
    attack: number,
    health: number;
};

interface IDataInventoryEat extends IDataInventoryBase {
    category: EDataCategoriesFromInventar.EAT 
    health: number;
    satietiFood: number,
    satietiWater: number,
};

export type IDataInventoryItem = IDataInventoryClothes | IDataInventoryWeapon | IDataInventoryMedical | IDataInventoryEat;


// global functions types
export interface IGetDate {
    date: number,
    month: number,
    year: number
}

export interface IGetWeather {
    temperature: number;
    precipitation: string;
}

export interface IGetCounters {
    countRandomEvents: number;
    countPatrolling: number;
}
