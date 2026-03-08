<script setup lang="ts">

import type { IDataInventoryItem } from '@/types/global-types'
import { navInventar, EDataCategoriesFromInventar } from '@/constants/global-constants'
import { deleteFromArrayOnName } from '@/utils/global-functions'
import { dataInventory } from '@/data/data-inventory'
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/globalStore'

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

const { loadData, saveData } = useGlobalStore();
loadData()

const globalStore = useGlobalStore();
const { getDataSelectedShelter } = storeToRefs(globalStore);
// какой элемент навигации активный
const actIdx = ref<number>(0);
// реактивное использование имя-код из инвентаря 
const actObjFromInv = ref<string>('');
// индекс ячейки для активной рамки
const actBorderObjFromInv = ref<number | null>(null);
// сортировочный массив инвентаря который будет показывать на экран выбранное из типов
const getSortDataObjFromInv = ref<string[]>(getDataSelectedShelter.value?.inventory as string[]);
// основной массив инвентаря который выводит его из ДАТА данных но делает его computed полем
const getDataObjFromInv = computed<IDataInventoryItem | null>(() => {
    return dataInventory.find((obj) => obj.src == actObjFromInv.value) ?? null
});
// функция перключает вкладки показывает активную вкладку и отображает сортировку по принадлежности
function checkInv(index: number, name: string): void {
    actIdx.value = index;
    // функция принимает значени предмета и отделяет первое слово до симводла - которое показываеткатегорию предмета и сортирует по этому слову
    function sortInventar(pos: string): void {
        getSortDataObjFromInv.value = getDataSelectedShelter.value?.inventory.filter(item => item.substring(0, item.indexOf('-')) == pos)
    }
    switch (name) {
        case EDataCategoriesFromInventar.ALL:
            //@ts-ignore
            getSortDataObjFromInv.value = getDataSelectedShelter.value?.inventory
            break;
        case EDataCategoriesFromInventar.WEAPON:
            sortInventar(EDataCategoriesFromInventar.WEAPON)
            break;
        case EDataCategoriesFromInventar.CLOTHES:
            sortInventar(EDataCategoriesFromInventar.CLOTHES)
            break;
        case EDataCategoriesFromInventar.EAT:
            sortInventar(EDataCategoriesFromInventar.EAT)
            break;
        case EDataCategoriesFromInventar.MEDICAL:
            sortInventar(EDataCategoriesFromInventar.MEDICAL)
            break;
        default:
            alert("КУку Ёпта!!!")
    }

}
// функция показывает сбоку полную инфу об предмет из инвентаря и красит рамку активного предмета
function getDataObjFromInvOnAside(num: number): void {
    actBorderObjFromInv.value = num
    actObjFromInv.value = getSortDataObjFromInv.value[num - 1]
}
// удаляем из массива Геттера инвентаря предмет
const deleteObjFromInventory = (): void => {
    deleteFromArrayOnName(actObjFromInv.value, getDataSelectedShelter.value!.inventory);
    actBorderObjFromInv.value = null;
    saveData()
}

</script>
 
<template>
    <TheHeader />

    <main class="w-200 h-150 mx-auto flex border border-amber-900">
        <!--инвентарь-->
        <article
            class="bg-image w-150"
            :style="{ backgroundImage: `url(${'./map/' + getDataSelectedShelter?.folder + '/' + getDataSelectedShelter?.imgInv + '.png'})` }"
        >
            <section class="w-130 bg-gray-700/50 main-font mt-2 mx-auto rounded">
                <!--Навигация инвентаря-->
                <nav>
                    <ul
                        class="flex items-center bg-gray-700 border-b-2 rounded-t border-white *:px-5 *:rounded-t-xl *:cursor-pointer *:relative">
                        <li
                            v-for="(item, idx) in navInventar"
                            :key="idx"
                            :class="{ 'active': idx == actIdx }"
                            @click="checkInv(idx, item.txt_key)"
                        >
                            {{ item.text }}
                        </li>
                    </ul>
                </nav>
                <!--Ячейки инвентаря-->
                <div
                    class="grid grid-cols-7 justify-items-center items-center border-2 border-t-0 pt-2 border-white  *:cursor-pointer *:size-16 *:border-2 *:border-white *:bg-gray-700/60 *:rounded *:mb-2">
                    <div
                        v-for="idx in getDataSelectedShelter?.capacityInv"
                        :key="idx"
                        :class="{ 'actObj': idx == actBorderObjFromInv }"
                        @click="getDataObjFromInvOnAside(idx)"
                    >
                        <img
                            v-if="idx <= getSortDataObjFromInv?.length"
                            class="p-2"
                            :src="'./inventory/' + getSortDataObjFromInv[idx - 1] + '.png'"
                            :alt="getSortDataObjFromInv[idx - 1]"
                        >
                    </div>
                </div>
            </section>
        </article>

        <!--боковая панель действий связанных с инвентаремм-->
        <aside class="w-50 p-2 border border-amber-900">

            <div v-if="actObjFromInv !== undefined && actObjFromInv !== ''">

                <h3 class="text-center text-amber-500 mb-2">{{ getDataObjFromInv?.name }}</h3>

                <img
                    class="mx-auto border-2 p-2 rounded-2xl mb-2"
                    :src="'./inventory/' + getDataObjFromInv?.src + '.png'"
                    :alt="getDataObjFromInv?.name"
                />

                <p class="whitespace-normal overflow-wrap text-xs">{{ getDataObjFromInv?.description }}</p>

                <hr class="border-t-2 border-amber-600 my-2">

                <div class="text-sm">
                    <p>
                        К атаке: {{ getDataObjFromInv?.attack }}<br />
                        К защите: {{ getDataObjFromInv?.protection }} <br />
                        К здоровью: {{ getDataObjFromInv?.health }}<br />
                        К сытости: {{ getDataObjFromInv?.satietiFood }}<br />
                        К уталению жажды: {{ getDataObjFromInv?.satietiWater }}
                    </p>
                </div>

                <hr class="border-t-2 border-amber-600 my-2">

                <button
                    v-if="actObjFromInv !== undefined && actObjFromInv !== ''"
                    class="border-2 text-xs p-2 cursor-pointer bg-mauve-600"
                    @click="deleteObjFromInventory"
                >Удалить со склада</button>

            </div>
            <div v-else>
                Выберите предмет в инвентаре и тут появится информация, но не пустую ячейку
            </div>


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

.actObj {
    border-color: #f59e0b;
}</style>