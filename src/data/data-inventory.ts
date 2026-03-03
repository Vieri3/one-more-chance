import type { IDataInventoryItem } from '@/types/global-types'

export const dataInventory: IDataInventoryItem[] = [
    {
        // id 
        id: 1,                          
        // категория к которой относится предмет 
        category: "clothes",            
        // название выводимое на экране 
        name: "Кепка бело-синяя",       
        // нахвание картинки 
        src: "head-cap-white-blue",     
        // характеристика добавляющий к атаке 
        attack: 0,                      
        // характеристика добавляющий к защите 
        protection: 1,                  
        // характеристика характеризующий согрев (относится к одежде) от 1 - 10              
        warming: 2,                     
    },
    {
        id: 2,
        category: "weapon",
        name: "Мачете",
        src: "weapon-machete",
        // характеристика добавляющий к атаке 
        attack: 5,                  
        // характеристика добавляющий к защите
        protection: 2,              
    },
    {
        id: 3,
        category: "medical",
        name: "Медицинский чемодан",
        src: "medical-bag",
        // характеристика добавляющий к атаке 
        attack: 0,                  
        // характеристика добавляющий к здоровью 
        health: 5,                  
    },
    {
        id: 4,
        category: "eat",
        name: "Бекон",
        src: "eat-bacon",
        // характеристика добавляющий к здоровью 
        health: 2,                    
        // утoление голода    
        satietiFood: 50,              
        // утoление жажды 
        satietiWater: -10,            
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
