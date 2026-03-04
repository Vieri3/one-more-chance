<script setup lang="ts">

import { DATA_RANDOM_EVENTS } from '@/data/data-random-events'
import { EDataRandomEventsPosition } from '@/constants/global-constants'
import { reactive, watch } from 'vue'
import { useGlobalStore } from '@/stores/globalStore'
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore();
const { getDataSelectedShelter } = storeToRefs(globalStore);

const props = defineProps({
    triggerRE: Boolean
})

interface RandomEventsState {
  name: string;
  description: string;
}

// Не рекомендуется использовать аргумент для джененрика reactive() СОВЕТ ОТ VUE
const randomEvents: RandomEventsState  = reactive({
    name: "",
    description: ""
});

function getRandomEvents(): void {
    // вытаскиеваем случайное событие
    const RAND_NUM = Math.floor(Math.random() * DATA_RANDOM_EVENTS.length);
    const RAND_EVENTS = DATA_RANDOM_EVENTS[RAND_NUM];
    // строчный код предмета
    const RAND_EVENTS_BODY = RAND_EVENTS.eventBody;
    // событие true/false
    const RAND_EVENTS_ACTION = RAND_EVENTS.action;

    // добавляем реактивные данные для вывода информации на экран
    randomEvents.name = RAND_EVENTS.name;
    randomEvents.description = RAND_EVENTS.description;
    // проверяем событие на то с кем произойдет действие (общий склад, человек)
    switch (RAND_EVENTS.position) {
        case EDataRandomEventsPosition.INVENTORY:
            // Присваиваем константе вместимость инвентаря убежища
            const shelterInventoryLen = getDataSelectedShelter.value!.capacityInv;
            let shelterInventory = getDataSelectedShelter.value!.inventory;
            // количество предметов в инвентаре сейчас
            const shelterInventoryNow = shelterInventory.length         
            if(RAND_EVENTS_ACTION){
                if(shelterInventoryNow < shelterInventoryLen){
                    shelterInventory.push(RAND_EVENTS_BODY)   
                }else{
                    // тебя перенаправляет в инвентарь + предлагает заменить ил почистить инвентарь
                }
            }else if(!RAND_EVENTS_ACTION && RAND_EVENTS_BODY === ""){
                // возможно заменить на функцию которая будет убирать случайный предмет в массиве инвентаря
                shelterInventory.pop()  
            }else{
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

watch(() => props.triggerRE, () => getRandomEvents())

</script>

<template>
    <h2 class="text-amber-20">{{ randomEvents.name }}</h2>
    <p class="text-amber-200">
        {{ randomEvents.description }}
    </p>
</template>

<style scoped></style>