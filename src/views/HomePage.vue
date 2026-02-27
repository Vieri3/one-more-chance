<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '@/stores/globalStore.ts';

const { loadData } = useGlobalStore();
// функция при загрузке страницы меняет картинки background
onMounted(() => {
    const RAND_NUM = Math.floor(Math.random() * 5);
    const bgElement = document.querySelector<HTMLElement>('.start-bg');
    if (bgElement) bgElement.style.backgroundImage = `url('/home-page/start-bg-${RAND_NUM}.png')`;
    loadData();
});

const router = useRouter();

const isModalSettingOpen = ref<boolean>(false);
const isModalAboutOpen = ref<boolean>(false);
const isModalNewGame = ref<boolean>(false);

const loadGame = localStorage.getItem('one-more-chance');

// начало новой игры
const goToNewGame = () => loadGame ? isModalNewGame.value = true : router.push('/choice-of-heroes');

// начинаем игру поновой стирая сохранения предыдущей
const goToAgainGame = (): void => {
    isModalNewGame.value = false;
    localStorage.removeItem('one-more-chance');
    router.push('/choice-of-heroes');
}

const goToGamePage = () => router.replace('/location');

</script>

<template>
    <div class="w-200 h-150 flex justify-center mx-auto">
        <div class="start-bg">
            <div class="flex flex-col mt-30 *:my-2 text-white text-xl ease duration-800">
                <button
                    class="hover:font-bold hover:text-2xl cursor-pointer"
                    @click="goToNewGame"
                >НОВАЯ ИГРА</button>
                <!--если есть в localstorage то появляется кнопка продолжить-->
                <button
                    v-if="loadGame != null"
                    class="hover:font-bold hover:text-2xl cursor-pointer"
                    @click="goToGamePage"
                >ПРОДОЛЖИТЬ</button>
                <button
                    class="hover:font-bold hover:text-2xl cursor-pointer"
                    @click="isModalSettingOpen = !isModalSettingOpen"
                >НАСТРОЙКИ</button>
                <button
                    class="hover:font-bold hover:text-2xl cursor-pointer"
                    @click="isModalAboutOpen = !isModalAboutOpen"
                >О НАС</button>
            </div>
        </div>
    </div>

    <!--модальное окно настроек-->
    <div
        v-if="isModalSettingOpen"
        class="w-full h-full bg-black/30 backdrop-blur-md flex items-center justify-center z-10 fixed top-0 left-0"
    >
        <div class="bg-white/80 border-2 rounded border-amber-500 p-4 flex items-center justify-center flex-col w-1/3">
            <h1 class="text-center text-black text-2xl font-bold mb-3">НАСТРОЙКИ ИГРЫ</h1>
            <div>
                <h2 class="text-black">Выбор языка игры</h2>
                <ul class="text-black">
                    <li>English</li>
                    <li>Polski</li>
                    <li>Русский</li>
                </ul>
            </div>
            <button
                @click="isModalSettingOpen = !isModalSettingOpen"
                class="border-2 border-red-500 p-2 m-5 bg-black rounded cursor-pointer"
            >Закрыть</button>
        </div>
    </div>

    <!--модальное окно О нас-->
    <div
        v-if="isModalAboutOpen"
        class="w-full h-full bg-black/30 backdrop-blur-md flex items-center justify-center z-10 fixed top-0 left-0"
    >
        <div class="bg-white/80 border-2 rounded border-amber-500 p-4 flex items-center justify-center flex-col w-1/3">
            <h1 class="text-center text-black text-2xl font-bold mb-3">О НАС</h1>
            <div>
                <p class="text-black">
                    Лишь на энтузиазме Чуб А. и Новик Ф. делают эту игру!
                </p>
            </div>
            <button
                @click="isModalAboutOpen = !isModalAboutOpen"
                class="border-2 border-red-500 p-2 m-5 bg-black rounded cursor-pointer"
            >Закрыть</button>
        </div>
    </div>

    <!--модальное окно когда есть позиция в меню продолжение-->
    <div
        v-if="isModalNewGame"
        class="w-full h-full bg-black/30 backdrop-blur-md flex items-center justify-center z-10 fixed top-0 left-0"
    >
        <div class="bg-white/80 border-2 rounded border-amber-500 p-4 flex items-center justify-center flex-col w-1/3">
            <h1 class="text-center text-red-500 text-2xl font-bold mb-3">ВНИМАНИЕ</h1>
            <div>
                <p class="text-black">
                    Весь сохранённый ранее прогресс будет утерян!!!
                    <span class="text-red-500">Вы согласны?</span>
                </p>
            </div>
            <div>
                <button
                    @click="goToAgainGame"
                    class="border-2 text-red-500 border-red-500 p-2 m-5 bg-black rounded cursor-pointer"
                >Да</button>
                <button
                    @click="isModalNewGame = !isModalNewGame"
                    class="border-2 text-sky-500 border-red-500 p-2 m-5 bg-black rounded cursor-pointer"
                >Нет</button>
            </div>

        </div>
    </div>
</template>

<style scoped>
.start-bg {
    width: 100%;
    height: auto;
    border: 1px solid tomato;
    background-position: center;
    background-size: cover;
}
</style>