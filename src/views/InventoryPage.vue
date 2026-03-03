<script setup lang="ts">

import type { IDataInventoryItem } from '@/types/global-types'
import { navInventar } from '@/constants/global-constants'
import { dataInventory } from '@/data/data-inventory'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/globalStore'

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

const { loadData } = useGlobalStore();
loadData()

const globalStore = useGlobalStore();
const { getDataSelectedShelter } = storeToRefs(globalStore);
// какой элемент навигации активный
const actIdx = ref<number>(0)
// реактивное использование имя-код из инвентаря 
const actObjFromInv = ref<string>('')

// const setActItem = (idx: number): void => {
//     actIdx.value = idx;
// };

// const getCodeNameObj = (nameCode: string): void => {
//     actObjFromInv.value = nameCode;
// };

// "head-cap-white-blue"

const getDataObjFromInv = computed<IDataInventoryItem | null>(() => {
    return dataInventory.find((obj) => obj.src == actObjFromInv.value) ?? null
})

</script>
 
<template>
    <TheHeader />

    <main class="w-200 h-150 mx-auto flex border border-amber-900">
        <!--инвентарь-->
        <article class="bg-image w-150" :style="{ backgroundImage: `url(${'/map/' + getDataSelectedShelter?.folder + '/' + getDataSelectedShelter?.imgInv + '.png'})` }">
            <section class="w-130 bg-gray-700/50 main-font mt-2 mx-auto rounded">
                <!--Навигация инвентаря-->
                <nav class="">
                    <ul
                        class="flex items-center bg-gray-700 border-b-2 rounded-t border-white *:px-5 *:rounded-t-xl *:cursor-pointer *:relative">
                        <li
                            @click="actIdx = idx"
                            :class="{ 'active': idx == actIdx }"
                            v-for="(item, idx) in navInventar"
                            :key="idx"
                        >
                            {{ item.text }}
                        </li>
                    </ul>
                </nav>
                <!--Ячейки инвентаря-->
                <div
                    class="grid grid-cols-7 justify-items-center items-center border-2 border-t-0 pt-2 border-white  *:cursor-pointer *:size-16 *:border-2 *:border-white *:bg-gray-700/60 *:rounded *:mb-2">
                    <div v-for="idx in getDataSelectedShelter?.capacityInv">
                        <img
                            v-if="idx <= Object.keys(getDataSelectedShelter!.inventory).length"
                            class="p-2"
                            :src="'/inventory/' + getDataSelectedShelter?.inventory[idx - 1] + '.png'"
                            alt="..."
                            @click="actObjFromInv = getDataSelectedShelter!.inventory[idx - 1]"
                        >
                    </div>
                </div>
            </section>
        </article>

        <!--боковая панель действий связанных с инвентаремм-->
        <aside class="w-50 p-2 border border-amber-900">

                <h3 class="text-center text-amber-500 mb-2">{{ getDataObjFromInv?.name }}</h3>
     
                <img  
                    class="mx-auto border-2 p-2 rounded-2xl mb-2"
                    :src="'/inventory/' + getDataObjFromInv?.src + '.png'"
                    :alt="getDataObjFromInv?.name"
                />
        
                <p class="whitespace-normal break-words">{{ getDataObjFromInv?.description }}</p>
    
        </aside>

    </main>

    <TheFooter />
</template>

<style scoped>
.active {
    border-top: 2px solid white;
    border-right: 2px solid white;
    border-left: 2px solid white;
    border-bottom: 4px solid #374151;
    color: #f59e0b;
    /*amber-500*/
    bottom: -2px;
}
</style>