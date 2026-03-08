import type { IDataInventoryItem } from '@/types/global-types'
import { EDataItemsInTheGame } from '@/constants/global-constants'

export const dataInventory: IDataInventoryItem[] = [
    {
        // id 
        id: 1,                                  
        // название выводимое на экране 
        name: "Кепка бело-синяя",
        // описание
        description: "Белая кепка с синим козырьком! Возможно такие раньше носили бейсболисты! Защита от солнца, и то она очень плотная, скорее от дождя. Также подойдет для тех кто носит длинные волосы. Чтобы Ходячий не смог схватить за волосы.",       
        // нахвание картинки 
        src: EDataItemsInTheGame.CAP_WHITE_BLUE,                       
        // характеристика добавляющий к защите 
        protection: 1,                  
        // характеристика характеризующий согрев (относится к одежде) от 1 - 10              
        warming: 2,                     
    },
    {
        id: 2,
        name: "Мачете",
        description: "Мачете, словно из фильма МАЧЭТЭ. Острый металлический, иногда застряет в черепухе, но оттолкнув тело ногой в грудь, вытаскивается и норм.",
        src: EDataItemsInTheGame.MACHETE,
        // характеристика добавляющий к атаке 
        attack: 5,                  
        // характеристика добавляющий к защите
        protection: 2,              
    },
    {
        id: 3,
        name: "Медицинский чемодан",
        description: "Медицинский чемоданчик, практически не использован. Стащили видиммо из кареты скорой помощи",
        src: EDataItemsInTheGame.MEDICAL_BAG,
        // характеристика добавляющий к атаке 
        attack: 5,                  
        // характеристика добавляющий к здоровью 
        health: 25,                  
    },
    {
        id: 4,
        name: "Бекон",
        description: "Кусочек мясца!! Довольно таки вкусно, с учётом реалий за окном..",
        src: EDataItemsInTheGame.BACON,
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
        src: EDataItemsInTheGame.REINDEER_SWEATER,
        protection: 2,
        warming: 2
    },
    {
        id: 6,
        name: "Синие джинсы",
        description: "",
        src: EDataItemsInTheGame.BLUE_JEANS,
        protection: 1,
        warming: 2
    },
    {
        id: 7, 
        name: "Сланцы зелено-желтые",
        description: "",
        src: EDataItemsInTheGame.SLATES_Y_G,
        protection: 1,
    },
    {
        id: 8,
        name: "Ботинки кожанные меховые",
        description: "",
        src: EDataItemsInTheGame.LEATHER_AND_FUR_BOOTS,
        attack: 2,
        protection: 2,
        warming: 2
    },
    {
        id: 9,
        name: "Кепка NY",
        description: "",
        src: EDataItemsInTheGame.CAP_NY,
        protection: 1,
        warming: 2
    },
    {
        id: 10,
        name: "Зимняя шапка синяя",
        description: "",
        src: EDataItemsInTheGame.WINTER_BLUE,
        protection: 2,
        warming: 2
    },
    {
        id: 11,
        name: "Красная кофта",
        description: "Просто красная кофта! возможно такой фасон носила Мэри из Silent Hill",
        src: EDataItemsInTheGame.RED_BLOUSE,
        protection: 2,
        warming: 2
    },
    {
        id: 12,
        name: "Помповое ружьё",
        description: "Обычное ружье, не очень скорострельное, но очень надежное, также патроны на каждом углу. Сносит башку на раз-два-три",
        src: EDataItemsInTheGame.RED_BLOUSE,
        attack: 50,
        protection: 3,
    }
];
