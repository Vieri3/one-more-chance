<script setup lang="ts">

import { useGlobalStore } from '@/stores/globalStore.ts';
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();

const { getDate, getWeather } = storeToRefs(globalStore);

</script>

<template>

    <div class="w-50 border border-amber-500 flex justify-center items-center gap-2 text-[10px]">
        <div>
            <span>{{ getDate.date }}</span>/<span>{{ getDate.month }}</span>/<span>{{ getDate.year }}</span>
        </div>
        <div class="text-amber-500">
            <span>{{ getWeather.temperature }}</span>&deg;C  
            <span>{{ getWeather.precipitation }}</span>
        </div>
    </div>

</template>

<style scoped>

</style>