import DATA_HEROES from "@/data/data-heroes.js";
import DATA_SHELTERS from "@/data/data-shelters.js";
import { getPowerModeFn, getMergingArraysFn, getWeatherFn, getCalendarFn } from "@/utils/global-functions.js";

import { defineStore } from "pinia";
import { reactive, ref, computed } from "vue";

export const useGlobalStore = defineStore('global', () => {

    // реактивный массив всех данных
    const globalArray = reactive({});

    // массив id выбранных героев
    const getArrayHeroesIdSelected = ref([]);

    // геттеры для получения массива героев
    const getArrayHeroes = computed(() => globalArray.HEROES);

    // геттеры для получения длины массива ID героев
    const lenArrayHeroesIdSelected = computed(() => getArrayHeroesIdSelected.value.length);

    // геттеры для получения героев имеющих флаг True (выбранных героевв)
    const getArraySelectedHeroes = computed(() => globalArray.HEROES.filter(hero => hero.selected));

    // геттеры для получения объекта локации из массива
    const getObjMap = computed(() => globalArray.SHELTERS.find(el => el.selected));

    //геттер для получения даты 
    const getDate = computed(() => globalArray.DATE);

    // геттер для получения погоды
    const getWeather = computed(() => globalArray.WEATHER);

    // геттер для получения счетчиков
    const getCounters = computed(() => globalArray.COUNTERS);

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
                globalArray.DATE = { date: 20, month: 1, year: 2026 };
                globalArray.SHELTERS = DATA_SHELTERS;
                globalArray.WEATHER = { temperature: -2, precipitation: 'Снег' };
                globalArray.COUNTERS = { countRandomEvents: 3, countPatrolling: 2 }
            }
        } catch (error) {
            console.error('Ошибка загрузки: ', error)
        }
    }

    // и меняем SELECTED флаг
    // и добавляем в ref id 
    function selectedItem(callback) {
        getArrayHeroesIdSelected.value.push(callback);
        const hero = globalArray.HEROES.find(h => h.id == callback);
        hero.selected = true;
    }
    //сброс всех флагов выбора игроков
    function selectedHerosReset() {
        getArrayHeroesIdSelected.value = [];
        return globalArray.HEROES.map(item => item.selected = false);
    }
    // счетчик случайных событий
    const stepRandomEvents = () => {
        globalArray.COUNTERS.countRandomEvents--;
    }
    // счетчик событий патрулирования
    const stepCountPatrolling = () => {
        globalArray.COUNTERS.countPatrolling--;
    }
    // послде прошедшего дня счетчики обнуляются
    const resetCountREandP = () => {
        globalArray.COUNTERS.countRandomEvents = 3;
        globalArray.COUNTERS.countPatrolling = 2;
    }
    // функция по клику производит кормежку группы 
    const getPowerModeStore = () => {
        // присваиваем константе массив группы героев с новыми параметрами после кормежки 
        const arraySelectedHeroes = getPowerModeFn(globalArray.WEATHER.temperature, getArraySelectedHeroes.value);
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
        const dateNow = getCalendarFn(globalArray.DATE.date, globalArray.DATE.month, globalArray.DATE.year);
        globalArray.DATE = dateNow
    }
    // функция получения погоды
    const getWeatherStore = () => {
        // погода в этот день
        const weatherNow = getWeatherFn(getDate.value.month);
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

        getObjMap,
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