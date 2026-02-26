<script setup lang="ts">

import { computed } from 'vue';
import { useGlobalStore } from '@/stores/globalStore.ts';
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { getArrayHeroes } = storeToRefs(globalStore);

const props = defineProps(['idHero']);

const objHero = computed(() => getArrayHeroes.value.find((obj: any) => obj.id == props.idHero))

</script>

<template>
    <!--картинка героя-->
    <div
        v-if="props.idHero == 0"
        class="bg-gray-700/60"
    >
        <img
            src="/different/specifications-heroes.png"
            alt="specifications-heroes"
        >
    </div>
    <div
        v-else
        class="main-font grid grid-cols-5 grid-rows-5 gap-1 md:grid-cols-5 md:grid-rows-5 md:gap-1 lg:grid-cols-5 lg:grid-rows-5 lg:gap-1 *:bg-gray-700/60 *:border *:border-white *:rounded *:m-0.5 *:flex *:items-center *:justify-center"
    >
        <!-- Картинка героя -->
        <div
            class="col-start-1 col-span-3 row-start-1 row-span-4 lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-4 p-2">
            <img
                :src="'/heroes/' + objHero.thumbnail + '.png'"
                :alt="objHero.name"
            >
        </div>
        <!-- Имя героя -->
        <div
            class="col-start-1 col-span-3 row-start-5 row-span-1 lg:col-start-1 lg:col-span-3 lg:row-start-5 lg:row-span-1">
            <span class="text-sm">{{ objHero.name }}</span>
        </div>
        <!-- Значок здоровья -->
        <div
            class="col-start-4 col-span-1 row-start-1 row-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-1 lg:row-span-1">
            ❤️
        </div>
        <!-- Очки здоровья -->
        <div
            class="col-start-5 col-span-1 row-start-1 row-span-1 lg:col-start-5 lg:col-span-1 lg:row-start-1 lg:row-span-1 text-xs">
            {{ objHero.health }}
        </div>
        <!-- Значок урона/атаки -->
        <div
            class="col-start-4 col-span-1 row-start-2 row-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-2 lg:row-span-1">
            ⚔️
        </div>
        <!-- Очки атаки/урона -->
        <div
            class="col-start-5 col-span-1 row-start-2 row-span-1 lg:col-start-5 lg:col-span-1 lg:row-start-2 lg:row-span-1 text-xs">
            {{ objHero.attack }}
        </div>
        <!-- Значок защиты героя -->
        <div
            class="col-start-4 col-span-1 row-start-3 row-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-3 lg:row-span-1">
            🛡️
        </div>
        <!-- Очки защиты героя -->
        <div
            class="col-start-5 col-span-1 row-start-3 row-span-1 lg:col-start-5 lg:col-span-1 lg:row-start-3 lg:row-span-1 text-xs">
            {{ objHero.protection }}
        </div>
        <!-- Значок сытости героя -->
        <div
            class="col-start-4 col-span-1 row-start-4 row-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-4 lg:row-span-1">
            🥣
        </div>
        <!-- Очки сытости героя -->
        <div
            class="col-start-5 col-span-1 row-start-4 row-span-1 lg:col-start-5 lg:col-span-1 lg:row-start-4 lg:row-span-1 text-xs">
            {{ objHero.satieti_food }}
        </div>
        <!-- Значок жажды героя -->
        <div
            class="col-start-4 col-span-1 row-start-5 row-span-1 lg:col-start-4 lg:col-span-1 lg:row-start-5 lg:row-span-1">
            🥛
        </div>
        <!-- Очки жажды героя (100 - нет жажды /// 0 - обезвоживание) -->
        <div
        class="col-start-5 col-span-1 row-start-5 row-span-1 lg:col-start-5 lg:col-span-1 lg:row-start-5 lg:row-span-1 text-xs">
        {{ objHero.satieti_water }}
    </div>
</div></template>



<style scoped></style>