<script setup lang="ts">

import { useGlobalStore } from '@/stores/globalStore.ts';
import { storeToRefs } from 'pinia';

const emits = defineEmits(['triggerRE', 'triggerLDN']);

const globalStore = useGlobalStore();
const { stepRandomEvents, stepCountPatrolling, resetCountREandP, getCalendarStore, getWeatherStore, saveGame, getPowerModeStore } = useGlobalStore();
const { getCounters } = storeToRefs(globalStore);

const getRandomEvents = async (): Promise<void> => {
    // передаем триггер эмитс наверх событие для вызова функции getRandomEvents() из файла AppEventsScreen.vue и для вывода случайного события на экран
    await new Promise<void>((resolve) => {
        emits('triggerRE');
        resolve()
    });
    // функция счетчика для случайных событий (х3)
    await new Promise<void>((resolve) => {
        stepRandomEvents();
        resolve()
    });
    // функция сохранения игры 
    await new Promise<void>((resolve) => {
        saveGame();
        resolve()
    });
}

const getNextDay = async (): Promise<void> => {
    // передаем триггер эмитс наверх событие для заставки НОЧЬ ДЕНЬ
    await new Promise<void>((resolve) => {
        emits('triggerLDN');
        resolve()
    });

    // меняем дату
    await new Promise<void>((resolve) => {
        getCalendarStore();
        resolve()
    });

    // меняем погоду
    await new Promise<void>((resolve) => {
        getWeatherStore();
        resolve()
    });

    // сбрасываем очки случайных событий и патрулирования
    resetCountREandP();
    // производим снятие характеристик по еде и воде у героев
    getPowerModeStore();
    saveGame();
}

const getPatrolling = () => {
    stepCountPatrolling();
    saveGame();
}

</script>

<template>
    <!--Случайное событие -->
    <button
        @click="getRandomEvents"
        class="w-8 h-15 border-sky-600 bg-yellow-600 hover:bg-yellow-900 hover:scale-110"
        :class="getCounters.countRandomEvents > 0 ? '' : 'pointer-events-none opacity-50'"
    >
        &#127922;
        <span
            v-if="getCounters.countRandomEvents > 0"
            class="text-black"
        >x{{ getCounters.countRandomEvents }}</span>
    </button>
    <!--следующий день-->
    <button
        @click="getNextDay"
        class="w-8 h-15 border-sky-600 bg-purple-600 hover:bg-purple-900 hover:scale-110"
    >&#9203;</button>
    <!--Патрулирование -->
    <button
        @click="getPatrolling"
        class="w-8 h-15 border-yellow-600 bg-sky-600 hover:bg-sky-900 hover:scale-110"
    :class="getCounters.countPatrolling > 0 ? '' : 'pointer-events-none opacity-50'"
>
    &#128274;
    <span
        v-if="getCounters.countPatrolling > 0"
        class="text-black"
    >x{{ getCounters.countPatrolling }}</span>
</button></template>

<style scoped></style>