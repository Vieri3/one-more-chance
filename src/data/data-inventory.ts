import type { IDataInventoryItem } from '@/types/global-types'
import { EDataCategoriesFromInventar } from '@/constants/global-constants'

export const dataInventory: IDataInventoryItem[] = [
    {
        // id 
        id: 1,                          
        // категория к которой относится предмет 
        category: EDataCategoriesFromInventar.CLOTHES,            
        // название выводимое на экране 
        name: "Кепка бело-синяя",
        // описание
        description: "Белая кепка с синим козырьком! Возможно такие раньше носили бейсболисты! Защита от солнца, и то она очень плотная, скорее от дождя. Также подойдет для тех кто носит длинные волосы. Чтобы Ходячий не смог схватить за волосы.",       
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
        category: EDataCategoriesFromInventar.WEAPON, 
        name: "Мачете",
        description: "Мачете, словно из фильма МАЧЭТЭ. Острый металлический, иногда застряет в черепухе, но оттолкнув тело ногой в грудь, вытаскивается и норм.",
        src: "weapon-machete",
        // характеристика добавляющий к атаке 
        attack: 5,                  
        // характеристика добавляющий к защите
        protection: 2,              
    },
    {
        id: 3,
        category: EDataCategoriesFromInventar.MEDICAL, 
        name: "Медицинский чемодан",
        description: "Медицинский чемоданчик, практически не использован. Стащили видиммо из кареты скорой помощи",
        src: "medical-bag",
        // характеристика добавляющий к атаке 
        attack: 5,                  
        // характеристика добавляющий к здоровью 
        health: 25,                  
    },
    {
        id: 4,
        category: EDataCategoriesFromInventar.EAT, 
        name: "Бекон",
        description: "Кусочек мясца!! Довольно таки вкусно, с учётом реалий за окном..",
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
        category: EDataCategoriesFromInventar.CLOTHES, 
        name: "Свитер с оленями",
        description: "",
        src: "body-reindeer-sweater",
        attack: 0,
        protection: 2,
        warming: 2
    },
    {
        id: 6,
        category: EDataCategoriesFromInventar.CLOTHES, 
        name: "Синие джинсы",
        description: "",
        src: "legs-blue-jeans",
        attack: 0,
        protection: 0,
        warming: 2
    },
    {
        id: 7,
        category: EDataCategoriesFromInventar.CLOTHES, 
        name: "Сланцы зелено-желтые",
        description: "",
        src: "foot-slates-yellow-green",
        attack: 0,
        protection: 0,
        warming: 2
    },
    {
        id: 8,
        category: EDataCategoriesFromInventar.CLOTHES, 
        name: "Ботинки кожанные меховые",
        description: "",
        src: "foot-leather-and-fur-boots",
        attack: 2,
        protection: 2,
        warming: 2
    },
    {
        id: 9,
        category: EDataCategoriesFromInventar.CLOTHES, 
        name: "Кепка NY",
        description: "",
        src: "head-cap-NY",
        attack: 0,
        protection: 1,
        warming: 2
    },
    {
        id: 10,
        category: EDataCategoriesFromInventar.CLOTHES, 
        name: "Зимняя шапка синяя",
        description: "",
        src: "head-winter-blue",
        attack: 0,
        protection: 2,
        warming: 2
    },
    {
        id: 11,
        category: EDataCategoriesFromInventar.CLOTHES, 
        name: "Красная кофта",
        description: "",
        src: "body-red-blouse",
        attack: 0,
        protection: 2,
        warming: 2
    }
];
