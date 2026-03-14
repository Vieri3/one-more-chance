
type TInventoryHeroMax6Readonly =
    | readonly []
    | readonly [number]
    | readonly [number, number]
    | readonly [number, number, number]
    | readonly [number, number, number, number]
    | readonly [number, number, number, number, number]
    | readonly [number, number, number, number, number, number];

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
    male: "woman" | "man";
    year: number;
    ethnicity: string;
    imgThumb: string;
    selected: boolean;
    status: "alive" | "dead";
    description: string;
    inventory: TInventoryHeroMax6Readonly;
    health: number;
    attack: number;
    protection: number;
    satietiFood: number;
    satietiWater: number;
    equipment: {
        body: number | null,
        legs: number | null,
        foot: number | null,
        head: number | null,
    }
};

export interface IDataRandomEventsItem {
    id: number;
    name: string;
    position: 0 | 1 | 2;
    description: string;
    action: boolean;
    eventBody: number | null,
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
    inventory: Array<number> | []
    capacityInv: number,
    heroes: Array<number> | []
};

// data types inventory
export interface IDataInventoryItem {
    id: number;
    name: string;
    description: string;
    src: string;
    attack?: number;
    protection?: number;
    warming?: number;
    health?: number;
    satietiFood?: number,
    satietiWater?: number,
};

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

