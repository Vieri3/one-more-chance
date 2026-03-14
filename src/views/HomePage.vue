<script setup lang="ts">

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// функция при загрузке страницы меняет картинки background
onMounted(() => {
    const RAND_NUM = Math.floor(Math.random() * 5);
    const bg = document.querySelector<HTMLElement>('.bg');
    const bgSubstrate = document.querySelector<HTMLElement>('.bg-substrate');
    if (bg) bg.style.backgroundImage = `url('./home-page/start-bg-${RAND_NUM}.png')`;
    if (bgSubstrate) bgSubstrate.style.backgroundImage = `url('./home-page/start-bg-${RAND_NUM}.png')`;
});
// Используем для перехода на другие страницы в js
const router = useRouter();

// Флаги модальных окон
const isModalSettingOpen = ref<boolean>(false);
const isModalAboutOpen = ref<boolean>(false);
const isModalNewGame = ref<boolean>(false);

// есть ли сохранка в localstorage 
const loadGame: string | null = localStorage.getItem('one-more-chance');

// начало новой игры
const goToNewGame = () => loadGame ? isModalNewGame.value = true : router.push('/choice-of-heroes');

// начинаем игру по новой стирая сохранения предыдущей
const goToAgainGame = (): void => {
    isModalNewGame.value = false;
    localStorage.removeItem('one-more-chance');
    router.push('/choice-of-heroes');
}
// Продолжение игры
const goToGamePage = () => router.replace('/location');

</script>

<template>
    <div class="bg-substrate">
        <div class="bg">
            <div class="flex flex-col mt-30 *:my-2 text-white text-xl ease duration-800">
                <button
                    class="btn-home-page"
                    @click="goToNewGame"
                >НОВАЯ ИГРА</button>
                <!--если есть в localstorage то появляется кнопка продолжить-->
                <button
                    v-if="loadGame != null"
                    class="btn-home-page"
                    @click="goToGamePage"
                >ПРОДОЛЖИТЬ</button>
                <button
                    class="btn-home-page"
                    @click="isModalSettingOpen = !isModalSettingOpen"
                >НАСТРОЙКИ</button>
                <button
                    class="btn-home-page"
                    @click="isModalAboutOpen = !isModalAboutOpen"
                >О НАС</button>
            </div>
        </div>
    </div>

    <!--модальное окно настроек-->
    <div
        v-if="isModalSettingOpen"
        class="modal-home-page text-modal-home-page"
    >
        <div class="bg-white/80 border-2 rounded border-amber-500 p-4 flex items-center justify-center flex-col w-1/3">
            <h1 class="text-center text-black font-black mb-3">НАСТРОЙКИ ИГРЫ</h1>
            <div>
                <h3 class="text-black">Выбор языка</h3>
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
        class="modal-home-page text-modal-home-page"
    >
        <div class="bg-white/80 border-2 rounded border-amber-500 p-4 flex items-center justify-center flex-col w-1/3 ">
            <h1 class="text-center text-black font-black mb-3">О НАС</h1>
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

    <!--модальное окно когда есть позиция в меню продолжение, но ты жмешь НОВАЯ ИГРА-->
    <div
        v-if="isModalNewGame"
        class="modal-home-page text-modal-home-page"
    >
        <div class="bg-white/80 border-2 rounded border-amber-500 p-4 flex items-center justify-center flex-col w-1/3">
            <h1 class="text-center text-red-500 font-black mb-3">ВНИМАНИЕ</h1>
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
.bg-substrate {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100dvh;
    background-position: center;
    background-size: cover;
}

.bg {
    width: 600px;
    height: 100dvh;
    background-position: center;
    background-size: cover;
}
</style>