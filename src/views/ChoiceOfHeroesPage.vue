<script setup lang="ts">
import type { IDataHeroesItem } from '@/types/global-types'
import { computed } from "vue";
// импортируем по дефолту функцию 
import { useGlobalStore } from '@/stores/globalStore'
//storeToRefs — функция библиотеки Pinia для управления состоянием в Vue.js, 
//которая позволяет корректно извлекать реактивные свойства состояния (state)
// и геттеров (getters) без потери реактивности. 
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter();

// подгружаем данные в реактивное хранилище из обычных data-... ts
const { loadData, saveData } = useGlobalStore();
loadData();

// присваиваем переменной массив из глобального хранилища Героев
const globalStore = useGlobalStore();

// для реактивности используем StoretoRefs
const { globalArray } = storeToRefs(globalStore);

// геттеры для получения героев имеющих флаг True (выбранных героев)
const getArraySelectedHeroes = computed<IDataHeroesItem[]>(() => globalArray.value.HEROES.filter((hero: IDataHeroesItem) => hero.selected === true));

// геттеры для получения героев имеющих флаг False (не выбранных героев)
const getArrayNotSelectedHeroes = computed<IDataHeroesItem[]>(() => globalArray.value.HEROES.filter((hero: IDataHeroesItem) => hero.selected === false));

// функция когда выбираем героя на старте игры то меняем ему флаг и выбранный герой  подсвечивается
const checkedSelectingHero = (event: Event): void => {
    const target = event.target as HTMLElement;
    // Проверяем, что target действительно HTMLElement и имеет id
    if (target && target.id) {
        const hero = globalArray.value.HEROES.find((hero: IDataHeroesItem) => hero.id === parseInt(target.id));
        hero!.selected = !hero!.selected
    } else {
        console.warn('Event target has no id');
    }
};

//сброс всех флагов выбора игроков
const resetSelectingHero = () => {
    globalArray.value.HEROES.map((hero: IDataHeroesItem) => hero.selected = false);
};

// сохраняем то что навыбирали и переходим в игру
const goToGamePage = (): void => {
    saveData();
    router.replace('/location');
};

</script>

<template>
    <div class="bg-blue-100 h-dvh">
        <div class="container mx-auto flex pt-3">
            <!--Поле с кнопками и выбранными героями-->
            <div class="mx-1">

                <!-- выбранные персонажи -->
                <div class="w-15 h-50 rounded border-2 border-blue-600 bg-blue-200 ">
                    <div
                        v-for="hero in getArraySelectedHeroes"
                        :key="hero.id"
                        class="p-2"
                    >
                        <img
                            class="border-2 border-green-500 cursor-pointer"
                            :id="hero.id.toString()"
                            :src="'./heroes/' + hero.imgThumb + '.png'"
                            :alt="hero.name"
                            @click="checkedSelectingHero"
                        />
                    </div>
                </div>

                <!-- Количество героев -->
                <div
                    v-if="getArraySelectedHeroes.length < 3"
                    class="size-15 my-1 rounded font-semibold text-center leading-15 bg-blue-200 border-2 border-amber-600 text-amber-600 cursor-not-allowed"
                >
                    {{ getArraySelectedHeroes.length }}
                </div>
                <div
                    v-else
                    class="size-15 my-1 rounded font-semibold text-center leading-15 bg-amber-200 text-red-500 border-2 border-amber-600 cursor-not-allowed"
                >
                    MAX
                </div>

                <!-- Кнопка принять и выполнить -->
                <div
                    :class="getArraySelectedHeroes.length < 1 ? 'pointer-events-none opacity-25' : 'hover:border-green-500 hover:bg-blue-100 hover:text-green-500'"
                    @click="goToGamePage"
                    class="size-15 my-1 rounded font-semibold text-center leading-15 text-black bg-white border-2 border-blue-400 cursor-pointer"
                >
                    ОК
                </div>

                <!-- Кнопка очистить -->
                <div
                    @click="resetSelectingHero"
                    :class="getArraySelectedHeroes.length < 1 ? 'pointer-events-none opacity-25' : 'hover:border-red-500 hover:bg-blue-100 hover:text-red-500 cursor-pointer'"
                    class="size-15 my-1 rounded font-semibold text-center leading-15 text-black bg-white border-2 border-blue-400"
                >
                    Сброс
                </div>
            </div>

            <!-- Поле где находятся все герои для выбора -->
            <div class="h-97 overflow-auto hide-x-scrollbar flex flex-wrap justify-center">

                <div
                    v-for="hero in getArrayNotSelectedHeroes"
                    :class="getArraySelectedHeroes.length > 2 ? 'pointer-events-none' : ''"
                    :key="hero.id"
                >
                    <img
                        class="h-18 m-1 hover:scale-130 cursor-pointer border-2 border-blue-400 hover:border-blue-600"
                        :id="hero.id.toString()"
                        :src="'./heroes/' + hero.imgThumb + '.png'"
                        :alt="hero.name"
                        @click="checkedSelectingHero"
                    />
                </div>

            </div>

        </div>
    </div>
</template>

<style scoped>
    
</style>