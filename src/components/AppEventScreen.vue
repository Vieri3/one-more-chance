<script setup lang="ts">

import DATA_RANDOM_EVENTS from '@/data/data-random-events.js'; 

import { reactive, watch } from 'vue';
import { useGlobalStore } from '@/stores/globalStore.js';
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { getObjMap } = storeToRefs(globalStore);

const props = defineProps({
    triggerRE: Boolean
})

const randomEvents = reactive({});

function getRandomEvents() {
        const RAND_NUM = Math.floor(Math.random() * DATA_RANDOM_EVENTS.length);
        const RAND_EVENTS = DATA_RANDOM_EVENTS[RAND_NUM];
        randomEvents.name = RAND_EVENTS.name;
        randomEvents.description = RAND_EVENTS.description;

        switch (RAND_EVENTS.position) {
            case 'inventory':
                getObjMap.value.inventory.push(RAND_EVENTS.action) // сделать проверку если уже много в инвентаре предложить чтото выкинуть
                break;
            case 'people':
                getObjMap.value.inventory.push(RAND_EVENTS.action) // переделать на то чтобы класть в рюкзаки героев
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