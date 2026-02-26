<script setup lang="ts">

import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useGlobalStore } from '@/stores/globalStore.ts';

const { saveGame } = useGlobalStore();

const router = useRouter();
const goToHomePage = () => router.replace('/');

const isModalSaveGame = ref(false);

const saveCurrentProgress = () => {
    isModalSaveGame.value = !isModalSaveGame.value
    saveGame()
};

</script>

<template>
    <div class="w-50 border border-amber-500 flex justify-around items-center">
        <!--save-->
        <button
            @click="saveCurrentProgress"
            class="text-sm"
        >&#128190;</button>
        <!--exit-->
        <button
            @click="goToHomePage"
            class="text-sm"
        >&#10060;</button>
    </div>

    <div
        v-if="isModalSaveGame"
        class="w-full h-full bg-black/30 backdrop-blur-md flex items-center justify-center z-10 fixed top-0 left-0"
    >
        <div class="bg-white/80 border-2 rounded border-amber-500 p-4 flex items-center justify-center flex-col">
            <h2 class="text-xl text-black">Вы только что сохранили прогресс в игре!!!</h2>
            <button
            @click="isModalSaveGame = !isModalSaveGame"
            class="border-2 border-red-500 p-2 m-5 bg-black rounded cursor-pointer animate-bounce"
        >жми для продолжения</button>
    </div>
</div></template>

<style scoped></style>