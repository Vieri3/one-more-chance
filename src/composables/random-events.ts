import { storeToRefs } from 'pinia'
import { reactive, readonly } from 'vue'
import { useGlobalStore } from '@/stores/globalStore'
import { DATA_RANDOM_EVENTS } from '@/data/data-random-events'
import { EDataRandomEventsPosition, EDataWarningMessage } from '@/constants/global-constants'
import { useWarningMessage } from '@/composables/warning-messages'

// Не рекомендуется использовать аргумент для джененрика reactive() СОВЕТ ОТ VUE
const outRandomEventsStrReactive: { name: string; description: string } = reactive({
    name: "",
    description: ""
});

export function useRandomEvents() {

    const globalStore = useGlobalStore();
    const { getDataSelectedShelter } = storeToRefs(globalStore);
    const { getWarningMessage } = useWarningMessage();

    function getActionRandomEvents(): void {
        // вытаскиеваем случайное номер из списка в длину событий
        const RAND_NUM = Math.floor(Math.random() * DATA_RANDOM_EVENTS.length);
        // присваиваем обьект события в переменную
        const RAND_EVENTS = DATA_RANDOM_EVENTS[RAND_NUM];
        // строчный код предмета
        const RAND_EVENTS_BODY = RAND_EVENTS.eventBody;
        // событие true/false
        const RAND_EVENTS_ACTION = RAND_EVENTS.action;
        // добавляем реактивные данные для вывода информации на экран
        outRandomEventsStrReactive.name = RAND_EVENTS.name;
        outRandomEventsStrReactive.description = RAND_EVENTS.description;
        // проверяем событие на то с кем произойдет действие (общий склад, человек)
        switch (RAND_EVENTS.position) {
            case EDataRandomEventsPosition.INVENTORY:
                // Присваиваем константе вместимость инвентаря убежища данные из data-shelters
                const shelterInventoryLen = getDataSelectedShelter.value!.capacityInv;
                // инвентарь игровой который геттер в useState
                let shelterInventory = getDataSelectedShelter.value!.inventory;
                // количество предметов в инвентаре сейчас
                const shelterInventoryNow = shelterInventory.length
                // проверяем условие событитя true значит будем добавлять в массив инвентаря или в инветарь героя если
                //  false то явно будет чтото отбирать из инвентаря героя или инвентаря убежища также может быть со здоровьем героя 
                if (RAND_EVENTS_ACTION) {
                    // условие если инвентарь не переполнен то добавляем
                    if (shelterInventoryNow < shelterInventoryLen) {
                        shelterInventory.push(RAND_EVENTS_BODY)
                    } else {
                        // тебя перенаправляет в инвентарь + предлагает заменить ил почистить инвентарь
                        // выполняется функия которая возвращает сообщение - предупреждение что переполнен инвентарь
                        getWarningMessage(EDataWarningMessage.FULL_INVENTORY)
                    }
                } else if (!RAND_EVENTS_ACTION && RAND_EVENTS_BODY === "") {
                    // возможно заменить на функцию которая будет убирать случайный предмет в массиве инвентаря
                    shelterInventory.pop()
                } else {
                    // удаляем из инвентаря по строчному коду названию предмета 
                    let index = shelterInventory.indexOf(RAND_EVENTS_BODY);
                    if (index !== -1) shelterInventory.splice(index, 1);
                }
                break;
            case EDataRandomEventsPosition.PEOPLE:
                // переделать на то чтобы класть в рюкзаки героев
                break;
            case EDataRandomEventsPosition.FARM:
                // чтото с фермой происходит(прибежал кабанчик, пропал урожай)
                break;
            default:
                throw Error('Чёт пошло не так ...')
        }
    };

    return {
        getActionRandomEvents,
        outRandomEventsStrReactive: readonly(outRandomEventsStrReactive)
    }

}