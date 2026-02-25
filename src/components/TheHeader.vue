<script setup lang="ts">

import AppMenu from '@/components/AppMenu.vue';

import { useGlobalStore } from '@/stores/globalStore.js';

// при переходе на страницу сохранять в localstorage потому что считывает с хранилища localstorage;
const { saveGame } = useGlobalStore();

const massPage = [
    {text: "Склад", href: "/inventory"},
    {text: "Ферма", href: "/farm"},
    {text: "Группа", href: "/groop"},
    {text: "Локация", href: "/location"},
    {text: "Карта", href: "/map"},
];

</script>
 
<template>
    <header class="w-200 h-6.25 flex mx-auto border border-amber-900 bg-gray-700 main-font ">
            <nav class="w-150">
                <ul class="*:cursor-pointer flex justify-around">
                    <li v-for="page in massPage" class="hover:text-amber-500" @click="saveGame()">
                        <router-link :to="page.href">{{ page.text }}</router-link> 
                    </li>
                </ul>
            </nav>
        <AppMenu />
    </header>
</template>

<style scoped>
.router-link-active{
    color: #f59e0b !important;
}

</style>