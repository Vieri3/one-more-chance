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
    satieti_food: number;
    satieti_water: number;
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
    position: string;
    description: string;
    action: string;
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
};

export interface IDataStuffItem {
    id: number;
    category: string;
    name: string;
    src: string;
    attack: number;
    protection: number;
    health: number;
    warming: number;
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
