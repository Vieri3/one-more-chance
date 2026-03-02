import type { IDataInventoryItem } from '@/types/global-types'

export const dataInventory: IDataInventoryItem[] = [
    {
        id: 1,                          // id 
        category: "clothes",            // категория к которой относится предмет 
        name: "Кепка бело-синяя",       // название выводимое на экране 
        src: "head-cap-white-blue",     // нахвание картинки 
        attack: 0,                      // характеристика добавляющий к атаке 
        protection: 1,                  // характеристика добавляющий к защите 
        warming: 2,                     // характеристика характеризующий согрев (относится к одежде) от 1 - 10              
    },
    {
        id: 2,
        category: "weapon",
        name: "Мачете",
        src: "weapon-machete",
        attack: 5,                  // характеристика добавляющий к атаке 
        protection: 2,              // характеристика добавляющий к защите
    },
    {
        id: 3,
        category: "medical",
        name: "Медицинский чемодан",
        src: "medical-bag",
        attack: 0,                  // характеристика добавляющий к атаке 
        health: 5,                  // характеристика добавляющий к здоровью 
    },
    {
        id: 4,
        category: "eat",
        name: "Бекон",
        src: "eat-bacon",
        health: 2,                     // характеристика добавляющий к здоровью 
        satietiFood: 50,              // утoление голода    
        satietiWater: -10,            // утoление жажды 
    },
    {
        id: 5,
        category: "clothes",
        name: "Свитер с оленями",
        src: "body-reindeer-sweater",
        attack: 0,
        protection: 2,
        warming: 2
    },
    {
        id: 6,
        category: "clothes",
        name: "Синие джинсы",
        src: "legs-blue-jeans",
        attack: 0,
        protection: 0,
        warming: 2
    },
    {
        id: 7,
        category: "clothes",
        name: "Сланцы зелено-желтые",
        src: "foot-slates-yellow-green",
        attack: 0,
        protection: 0,
        warming: 2
    },
    {
        id: 8,
        category: "clothes",
        name: "Ботинки кожанные меховые",
        src: "foot-leather-and-fur-boots",
        attack: 2,
        protection: 2,
        warming: 2
    },
    {
        id: 9,
        category: "clothes",
        name: "Кепка NY",
        src: "head-cap-NY",
        attack: 0,
        protection: 1,
        warming: 2
    },
    {
        id: 10,
        category: "clothes",
        name: "Зимняя шапка синяя",
        src: "head-winter-blue",
        attack: 0,
        protection: 2,
        warming: 2
    },
    {
        id: 11,
        category: "clothes",
        name: "Красная кофта",
        src: "body-red-blouse",
        attack: 0,
        protection: 2,
        warming: 2
    }
];
