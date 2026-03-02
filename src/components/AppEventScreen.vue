<script setup lang="ts">

import { DATA_RANDOM_EVENTS } from '@/data/data-random-events';

import { reactive, watch } from 'vue';
import { useGlobalStore } from '@/stores/globalStore';
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { getDataSelectedShelter } = storeToRefs(globalStore);

const props = defineProps({
    triggerRE: Boolean
})

interface RandomEventsState {
  name: string;
  description: string;
}

const randomEvents = reactive<RandomEventsState>({
    name: "",
    description: ""
});

function getRandomEvents(): void {
    // вытаскиеваем случайное событие
    const RAND_NUM = Math.floor(Math.random() * DATA_RANDOM_EVENTS.length);
    const RAND_EVENTS = DATA_RANDOM_EVENTS[RAND_NUM];
    // добавляем реактивные данные 
    randomEvents.name = RAND_EVENTS.name;
    randomEvents.description = RAND_EVENTS.description;
    // проверяем событие на то с кем произойдет действие (общий склад, человек)
    switch (RAND_EVENTS.position) {
        case 'inventory':
            // сделать проверку если уже много в инвентаре предложить чтото выкинуть
            getDataSelectedShelter.value?.inventory.push(RAND_EVENTS.action) 
            break;
        case 'people':
            // переделать на то чтобы класть в рюкзаки героев
            getDataSelectedShelter.value?.inventory.push(RAND_EVENTS.action)  
            break;
        default:
            alert("всё.. приплыли");
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