import type { IDataInventoryItem } from '@/types/global-types'

export const dataInventory: IDataInventoryItem[] = [
    {
        // id 
        id: 1,                                  
        // название выводимое на экране 
        name: "Кепка бело-синяя",
        // описание
        description: "Белая кепка с синим козырьком! Возможно такие раньше носили бейсболисты! Защита от солнца, и то она очень плотная, скорее от дождя. Также подойдет для тех кто носит длинные волосы. Чтобы Ходячий не смог схватить за волосы.",       
        // нахвание картинки 
        src: "clothes-head-cap-white-blue",                       
        // характеристика добавляющий к защите 
        protection: 1,                  
        // характеристика характеризующий согрев (относится к одежде) от 1 - 10              
        warming: 2,                     
    },
    {
        id: 2,
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
        name: "Свитер с оленями",
        description: "",
        src: "clothes-body-reindeer-sweater",
        protection: 2,
        warming: 2
    },
    {
        id: 6,
        name: "Синие джинсы",
        description: "",
        src: "clothes-legs-blue-jeans",
        protection: 1,
        warming: 2
    },
    {
        id: 7, 
        name: "Сланцы зелено-желтые",
        description: "",
        src: "clothes-foot-slates-yellow-green",
        protection: 1,
    },
    {
        id: 8,
        name: "Ботинки кожанные меховые",
        description: "",
        src: "clothes-foot-leather-and-fur-boots",
        attack: 2,
        protection: 2,
        warming: 2
    },
    {
        id: 9,
        name: "Кепка NY",
        description: "",
        src: "clothes-head-cap-NY",
        protection: 1,
        warming: 2
    },
    {
        id: 10,
        name: "Зимняя шапка синяя",
        description: "",
        src: "clothes-head-winter-blue",
        protection: 2,
        warming: 2
    },
    {
        id: 11,
        name: "Красная кофта",
        description: "Просто красная кофта! возможно такой фасон носила Мэри из Silent Hill",
        src: "clothes-body-red-blouse",
        protection: 2,
        warming: 2
    },
    {
        id: 12,
        name: "Помповое ружьё",
        description: "Обычное ружье, не очень скорострельное, но очень надежное, также патроны на каждом углу. Сносит башку на раз-два-три",
        src: "weapon-shotgun",
        attack: 50,
        protection: 3,
    }
];
