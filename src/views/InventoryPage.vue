<script setup lang="ts">

import { ref } from 'vue'
import { storeToRefs } from 'pinia';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

// при загрузке или перезагрузке страницы должен загрузиться реактивный мaссив в глобалном хранилище из localstorage или с default БД
import { useGlobalStore } from '@/stores/globalStore.js';
const { loadData } = useGlobalStore();
loadData();

const globalStore = useGlobalStore();
const { getObjMap } = storeToRefs(globalStore);

const actIdx = ref(0)

const navInventar = [
    {text: "Всё"},
    {text: "Оружиие"},
    {text: "Медицина"},
    {text: "Одежда"}
]

const setActItem = (idx) => {
    actIdx.value = idx
};

</script>

<template>
    <TheHeader />

    <main class="w-200 h-150 mx-auto border border-amber-900 bg-image">
        <!--инвентарь-->
        <section class="w-180 h-70 bg-gray-700/50 main-font  mt-2 mx-auto rounded">
            <nav class="h-10">
                <ul class="flex items-center bg-gray-700 border-b-2 rounded-t border-white *:px-5 *:rounded-t-xl *:cursor-pointer *:relative">
                    <li @click="setActItem(idx)" :class="{'active': idx == actIdx }" v-for="(item, idx) in navInventar" :key="idx">
                        {{ item.text }}
                    </li>
                </ul>
            </nav>
            <div class="h-57 grid grid-cols-9 justify-items-center items-center border-2 border-white *:cursor-pointer *:size-16 *:border-2 *:border-white *:bg-gray-700/60 *:rounded">
                <div v-for="idx in 27">
                    <img v-if="idx <= Object.keys(getObjMap.inventory).length" class="p-2" :src="'/inventory/'+ getObjMap.inventory[idx - 1] +'.png'" alt="...">
                </div>
            </div>
        </section>

    </main>

    <TheFooter />
</template>

<style scoped>
.bg-image {
    background-image: url("/inventory/inventory-bus-bg.jpg");
    background-size: cover;
    /* Пропорции изображения сохранены */
    background-repeat: no-repeat;
    /* Исключаем повторение */
    background-position: center;
    /* Центрируем изображение */
}

.active{
    border-top: 2px solid white;
    border-right:2px solid white;
    border-left: 2px solid white;
    border-bottom: 4px solid #374151;
    color: #f59e0b; /*amber-500*/ 
    bottom: -2px;
}

</style>