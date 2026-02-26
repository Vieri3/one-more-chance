<script setup lang="ts">

import TheHeader from '@/components/TheHeader.vue';

import AppBtnsActions from '@/components/AppBtnsActions.vue';
import AppEventScreen from '@/components/AppEventScreen.vue';
import AppDayNightScreen from '@/components/AppDayNightScreen.vue';
import AppWindowHeroHaracteristics from '@/components/AppWindowHeroHaracteristics.vue';

import TheFooter from '@/components/TheFooter.vue';

import { ref, onMounted } from 'vue';
import { useGlobalStore } from '@/stores/globalStore.ts';
import { storeToRefs } from 'pinia';

const globalStore = useGlobalStore();
const { getArraySelectedHeroes, getObjMap } = storeToRefs(globalStore);
const { loadData, saveGame } = useGlobalStore();

// при загрузке или перезагрузке страницы должен загрузиться реактивный мссив в глобалном хранилище из localstorage или с default БД
loadData();
// при первом заходе страховочное сохранение. 
onMounted(() => saveGame())

const triggerRandomEvents = ref(false);
const triggerLoadingDayNigh = ref(false);
const idHeroIdGroop = ref(0);

const getIdHero = (id) => idHeroIdGroop.value = id;



</script>

<template>
    <TheHeader />

    <main class="w-200 h-150 mx-auto flex border border-amber-900 text-center">
        <!--просто анимация после нажатия кнопки следующий день-->
        <AppDayNightScreen :LDN="triggerLoadingDayNigh" />

        <article class="w-150 relative">

            <!--главное окно, где либо карта, либо картинка убежища изнутри-->
            <img class="h-auto"  :src="'/map/bus/' + getObjMap.img + '.jpg'" :alt="getObjMap.name"/>

            <!-- окно сообщение событий рандомных -->
            <section class="text-white border-sky-600 bg-yellow-600/50 border-4 absolute bottom-0 left-0 p-2 m-2 h-50 w-146">
                <AppEventScreen :triggerRE="triggerRandomEvents" />
            </section>

        </article>

        <aside class="w-50 border border-amber-900">

            <!-- mini-map -->
            <section class="size-50 border border-amber-500">
                <img :src="'/map/' + getObjMap.thumbnail + '.jpg'" :alt="getObjMap.name"/>
            </section>

            <!--картинки выбранных героев-->
            <section class="h-25 flex items-center justify-around">
                <div @click="getIdHero(hero.id)" v-for="hero in getArraySelectedHeroes" class="border border-red-500 cursor-pointer overflow-hidden">
                    <img :id="hero.id" class="max-h-25 hover:scale-120 transition-transform duration-300" :src="'./heroes/' + hero.thumbnail + '.png'" :alt="hero.name"/>
                </div>
            </section>
  
            <!-- Кнопки действия-->
            <section class="w-50 h-27 flex items-center justify-around border border-amber-500 gap-5 *:cursor-pointer *:border-2">
                <AppBtnsActions @triggerRE="triggerRandomEvents = !triggerRandomEvents"
                    @triggerLDN="triggerLoadingDayNigh = !triggerLoadingDayNigh" />
            </section>

            <!-- Окно характеристики героя-->
            <section class="h-48 border border-amber-400 flex items-center justify-center">
                <AppWindowHeroHaracteristics :idHero="idHeroIdGroop"/>
            </section>
        </aside>

    </main>

    <TheFooter />
</template>

<style scoped></style>
