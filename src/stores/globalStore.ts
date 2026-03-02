import type { ILoadData, IGetDate, IGetWeather, IGetCounters, IDataHeroesItem, IDataSheltersItem } from '@/types/global-types'
import { dataDate, dataCounters, dataWeather } from '@/constants/global-constants'
import { DATA_HEROES } from "@/data/data-heroes.ts"
import { DATA_SHELTERS } from "@/data/data-shelters.ts"
import { getPowerModeFn, getMergingArraysFn, getWeatherFn, getCalendarFn } from "@/utils/global-functions.ts"

import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";

export const useGlobalStore = defineStore('global', () => {

    // реактивный массив всех данных
    const globalArray: ILoadData  = reactive({
        HEROES: [],
        DATE: dataDate,
        SHELTERS: [],
        WEATHER: dataWeather,
        COUNTERS: dataCounters,
    });

    // массив id выбранных героев
    const getArrayHeroesIdSelected = ref<number[]>([]);

    // геттеры для получения массива героев
    const getArrayHeroes = computed<IDataHeroesItem[]>(() => globalArray.HEROES);

    // геттеры для получения длины массива ID героев
    const lenArrayHeroesIdSelected = computed<number>(() => getArrayHeroesIdSelected.value.length);

    // геттеры для получения героев имеющих флаг True (выбранных героев)
    const getArraySelectedHeroes = computed<IDataHeroesItem[]>(() => globalArray.HEROES.filter(hero => hero.selected));

    // геттеры для получения объекта локации из массива
    const getDataSelectedShelter = computed<IDataSheltersItem | undefined>(() => globalArray.SHELTERS.find(el => el.selected));

    //геттер для получения даты 
    const getDate = computed<IGetDate>(() => globalArray.DATE);

    // геттер для получения погоды
    const getWeather = computed<IGetWeather>(() => globalArray.WEATHER);

    // геттер для получения счетчиков
    const getCounters = computed<IGetCounters>(() => globalArray.COUNTERS);

    // Методы
    function loadData() {
        try {
            const stored = localStorage.getItem('one-more-chance');
            if (stored) {
                const parsed_data = JSON.parse(stored);
                globalArray.HEROES = parsed_data.HEROES;
                globalArray.DATE = parsed_data.DATE;
                globalArray.SHELTERS = parsed_data.SHELTERS;
                globalArray.WEATHER = parsed_data.WEATHER;
                globalArray.COUNTERS = parsed_data.COUNTERS;
            } else {
                globalArray.HEROES = DATA_HEROES;
                globalArray.DATE = dataDate;
                globalArray.SHELTERS = DATA_SHELTERS;
                globalArray.WEATHER = dataWeather;
                globalArray.COUNTERS = dataCounters;
            }
        } catch (error) {
            console.error('Ошибка загрузки: ', error)
        }
    }

    // и меняем SELECTED флаг
    // и добавляем в ref id 
    function selectedItem(callback: number) {
        getArrayHeroesIdSelected.value.push(callback);
        const hero = globalArray.HEROES.find(h => h.id == callback);
        if(hero) hero.selected = true;
    }
    //сброс всех флагов выбора игроков
    const selectedHerosReset = () => {
        getArrayHeroesIdSelected.value = [];
        globalArray.HEROES.map(item => item.selected = false);
    }
    // счетчик случайных событий
    const stepRandomEvents = () => {
        // Лучше всего явно проверить, что данные загружены, прежде чем что-то делать.
        if(globalArray.COUNTERS) globalArray.COUNTERS.countRandomEvents--;
    }
    // счетчик событий патрулирования
    const stepCountPatrolling = () => {
        //Если вы абсолютно уверены, что функция stepCountPatrolling вызывается только после того, как данные загружены, можно использовать оператор ! (non-null assertion). Это говорит TypeScript: «Заткнись, я знаю, что тут не null».
        globalArray.COUNTERS!.countPatrolling--;
    }
    // после прошедшего дня счетчики обнуляются
    const resetCountREandP = () => {
        globalArray.COUNTERS!.countRandomEvents = 3;
        globalArray.COUNTERS!.countPatrolling = 2;
    }
    // функция по клику производит кормежку группы 
    const getPowerModeStore = () => {
        // присваиваем константе массив группы героев с новыми параметрами после кормежки 
        const arraySelectedHeroes = getPowerModeFn(globalArray.WEATHER!.temperature, getArraySelectedHeroes.value);
       // делаем подмену массива героев которые за сутки проголодались и у них ушли параметры еда и вода
        getMergingArraysFn(globalArray.HEROES, arraySelectedHeroes)
    }

    //сброс всех флагов выбора карты для перехода на карту общую
    // function selectedSheltersReset() {
    //     return globalArray.SHELTERS.map(item => item.selected = false);
    // }

    //сброс всех флагов выбора карты для перехода на карту общую
    // function goInLocation() {
    //     const location = globalArray.SHELTERS.find(loc => loc.active == true);
    //     location.selected = true;
    // }

    // календарь 
    const getCalendarStore = () => {
        const dateNow = getCalendarFn(globalArray.DATE!.date, globalArray.DATE!.month, globalArray.DATE!.year);
        globalArray.DATE = dateNow
    }
    // функция получения погоды
    const getWeatherStore = () => {
        // погода в этот день
        const weatherNow = getWeatherFn(getDate.value!.month);
        // записываем температуру в глобальный массив
        globalArray.WEATHER = weatherNow
    }
    // функция сохранения игры
    function saveGame() {
        localStorage.setItem('one-more-chance', JSON.stringify(globalArray))
    }

    return {

        // Состояние
        globalArray,

        // Геттеры
        lenArrayHeroesIdSelected,
        getArrayHeroes,
        getArraySelectedHeroes,
        getCounters,

        getDataSelectedShelter,
        getDate,
        getWeather,

        //действия с массивом
        selectedItem,
        selectedHerosReset,
        stepRandomEvents,
        stepCountPatrolling,
        resetCountREandP,
        getPowerModeStore,
        // selectedSheltersReset,
        // goInLocation,
        getCalendarStore,
        getWeatherStore,
        saveGame,
        loadData,

    }

}) 