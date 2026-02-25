<script setup lang="ts">
// импортируем по дефолту функцию 
import { useGlobalStore } from '@/stores/globalStore.js';
//storeToRefs — функция библиотеки Pinia для управления состоянием в Vue.js, 
//которая позволяет корректно извлекать реактивные свойства состояния (state)
// и геттеров (getters) без потери реактивности. 
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
const router = useRouter();

// присваиваем переменной массив из глобального хранилища Героев
const globalStore = useGlobalStore();

// для реактивности используем StoretoRefs
const { lenArrayHeroesIdSelected, getArrayHeroes, getArraySelectedHeroes } = storeToRefs(globalStore);

// напрямую из хранилища
const { selectedItem, selectedHerosReset, loadData } = globalStore;

// Метод добавления 
const addNewItem = (event) => selectedItem(event.target.id);

const goToGamePage = () => router.replace('/location');

loadData()

</script>

<template>
    <div
        class="grid grid-cols-10 grid-rows-7 gap-1 md:grid-cols-10 md:grid-rows-7 md:gap-1 lg:grid-cols-10 lg:grid-rows-7 lg:gap-1 w-200 h-150 mx-auto border-2 border-blue-600 bg-blue-100">

        <!-- Поле где находятся все герои для выбора -->
        <div
            class="col-start-2 col-span-9 row-start-1 row-span-7 lg:col-start-2 lg:col-span-9 lg:row-start-1 lg:row-span-7 grid grid-cols-9 justify-items-center content-between p-2">

            <div v-for="hero in getArrayHeroes" :class="lenArrayHeroesIdSelected > 2 ? 'pointer-events-none' : ''"
                :key="hero.id">
                <img class="h-18 hover:scale-130 cursor-pointer border-2 border-blue-400 hover:border-blue-600" :class="hero.selected == false ? '' : 'blinking-shadow pointer-events-none'"
                    :id="hero.id" :src="'./heroes/' + hero.thumbnail + '.png'" :alt="hero.name" @click="addNewItem"/>
            </div>

        </div>

        <!-- Кнопка очистить -->
        <div @click="selectedHerosReset"
            :class="lenArrayHeroesIdSelected < 1 ? 'pointer-events-none opacity-25' : 'hover:border-red-500 hover:bg-blue-100 hover:text-red-500 cursor-pointer'"
            class="text-black col-start-1 col-span-1 row-start-7 row-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-7 lg:row-span-1 mb-2 ml-1 flex items-center justify-content font-semibold rounded justify-center bg-white border-2 border-blue-400">
            Сброс
        </div>

        <!-- Кнопка принять и выполнить -->
        <div :class="lenArrayHeroesIdSelected < 1 ? 'pointer-events-none opacity-25' : 'hover:border-green-500 hover:bg-blue-100 hover:text-green-500'" @click="goToGamePage"
            class=" text-black col-start-1 col-span-1 row-start-6 row-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-6 lg:row-span-1 ml-1 flex items-center justify-content font-semibold rounded justify-center bg-white border-2 border-blue-400 cursor-pointer">
            ОК
        </div>

        <!-- Количество героев -->
        <div v-if="lenArrayHeroesIdSelected < 3"
            class="col-start-1 col-span-1 row-start-5 row-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-5 lg:row-span-1 ml-1 bg-blue-200 border-2 border-amber-600 text-amber-600 flex items-center justify-content font-semibold rounded justify-center cursor-not-allowed">
            {{ lenArrayHeroesIdSelected }}
        </div>
        <div v-else
            class="col-start-1 col-span-1 row-start-5 row-span-1 lg:col-start-1 lg:col-span-1 lg:row-start-5 lg:row-span-1 ml-1 bg-amber-200 text-red-500 border-2 border-amber-600 flex items-center justify-content font-semibold rounded justify-center cursor-not-allowed">
            MAX!!!
        </div>

        <!-- выбранные персонажи -->
        <div
            class="col-start-1 col-span-1 row-start-1 row-span-4 lg:col-start-1 lg:col-span-1 lg:row-start-1 lg:row-span-4 ml-1 border-2 border-blue-600 bg-blue-200 flex flex-wrap mb-3 mt-2 items-center justify-content rounded justify-center">
            <div v-for="hero in getArraySelectedHeroes" :key="hero.id" class="p-2">
                <img :src="'./heroes/' + hero.thumbnail + '.png'" :alt="hero.name" class="border-2 border-green-500" />
            </div>
        </div>

    </div>
</template>

<style scoped>

    .blinking-shadow{
        box-shadow: 0 0 6px 2px #ED6742;
        animation: blinkShadow 1s infinite alternate;
        border: 2px solid #ED6742;
    }
    @keyframes blinkShadow {
        from{ box-shadow: transparent; }
        to { box-shadow: 0 0 0 #ED6742;; }  
    }

</style>