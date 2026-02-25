// события --  имя события для вывода в футер загравно h3
// position - с кем будет происходить с людьми, базой, складом
//action - то что произойдет (минус здоровье кто-то заболел у кого то приступ или аппендицит, добавляем в инвентарь или чтото пропадает )

interface DataRandomEventsItem {
    id: number;
    name: string;
    position: string;
    description: string;
    action: string;
};

const dataRandomEvents: DataRandomEventsItem[] = [
    {
        id: 1,
        name: "Заплутавшая белка",
        position: "inventory",
        description: "Случайная белка попала в капкан, увесистая, килограмм так на 8. Ужин на 2 человека точно",
        action: "eat-bacon"
    },
    {
        id: 2,
        name: "Бродячий кабан",
        position: "inventory",
        description: "Бродячий кабан, ранее попавший в капкан, цепью зацепился за трещину в асфальте. На складе будет пополение запасов мяска",
        action: "eat-bacon"
    },
    {
        id: 3,
        name: "Стая уток",
        position: "people",
        description: "Вам удалось подстрелить пару уток пролетавшиз над вашем местом дислокации",
        action: "eat-bacon"
    },
    {
        id: 4,
        name: "Бродячий зомби охотник",
        position: "people",
        description: "Вот так добыча, сама прибрела. Старый охотник  превратившийся в мертвяка сам прибрел обвешанный аммуницией. Теперь есть винтовка и патроны к ней.",
        action: "eat-bacon"
    },
];

export default dataRandomEvents;