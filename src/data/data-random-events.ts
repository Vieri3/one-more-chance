import type { IDataRandomEventsItem } from '@/types/global-types';
import { EDataRandomEventsPosition } from '@/constants/global-constants'

export const DATA_RANDOM_EVENTS: IDataRandomEventsItem[] = [
    {
        // id события
        id: 1,
        // заголовок/название события 
        name: "Заплутавшая белка", 
        // с кем будет происходить с людьми, базой, складом 
        position: EDataRandomEventsPosition.INVENTORY,  
        description: "Случайная белка попала в капкан, увесистая, килограмм так на 8. Ужин на 2 человека точно", /* описание */
        action: true, /* true - добавляем, false - отнимаем:) */       
        eventBody: "eat-bacon",
        /* то что произойдет (минус здоровье кто-то заболел у кого то приступ или аппендицит, добавляем в инвентарь или чтото пропадает ) */
    },
    {
        id: 2,
        name: "Бродячий кабан",
        position: EDataRandomEventsPosition.INVENTORY,
        description: "Бродячий кабан, ранее попавший в капкан, цепью зацепился за трещину в асфальте. На складе будет пополение запасов мяска",
        action: true,
        eventBody: "eat-bacon",
    },
    {
        id: 3,
        name: "Стая уток",
        position: EDataRandomEventsPosition.PEOPLE,
        description: "Вам удалось подстрелить пару уток пролетавшиз над вашем местом дислокации",
        action: true,
        eventBody: "eat-bacon",
    },
    {
        id: 4,
        name: "Бродячий зомби охотник",
        position: EDataRandomEventsPosition.PEOPLE,
        description: "Вот так добыча, сама прибрела. Старый охотник превратившийся в мертвяка сам прибрел обвешанный аммуницией. Теперь есть винтовка и патроны к ней.",
        action: true,
        eventBody: "weapon-shotgun",
    },
    {
        id: 5,
        name: "Бродячий зомби",
        position: EDataRandomEventsPosition.INVENTORY,
        description: "Вот так добыча, сама прибрела. Свежий Ходячий в свитере с Оленем. Похоже и до эпидемии у него небыло вкуса",
        action: true,
        eventBody: "body-reindeer-sweater",
    },
];
