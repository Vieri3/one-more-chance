<script setup lang="ts">

import TheHeader from '@/components/TheHeader.vue'
import AppBtnsActions from '@/components/AppBtnsActions.vue'
import AppEventScreen from '@/components/AppEventScreen.vue'
import AppDayNightScreen from '@/components/AppDayNightScreen.vue'
import AppWindowHeroHaracteristics from '@/components/AppWindowHeroHaracteristics.vue'
import TheFooter from '@/components/TheFooter.vue'

import { ref } from 'vue'
import { useGlobalStore } from '@/stores/globalStore'
import { storeToRefs } from 'pinia'


const { loadData } = useGlobalStore();
loadData();

const globalStore = useGlobalStore();
const { getArraySelectedHeroes, getDataSelectedShelter } = storeToRefs(globalStore);

const triggerRandomEvents = ref<boolean>(false);
const triggerLoadingDayNigh = ref<boolean>(false);
const idHeroInGroop = ref<number>(0);

const getIdHero = (id: number): void => {
    idHeroInGroop.value = id;
};

</script>

<template>
    <TheHeader />

    <main class="w-200 h-150 mx-auto flex border border-amber-900 text-center">
        <!--просто анимация после нажатия кнопки следующий день-->
        <AppDayNightScreen :LDN="triggerLoadingDayNigh" />

        <article class="w-150 bg-image flex flex-col justify-between" :style="{ backgroundImage: `url(${'./map/' + getDataSelectedShelter?.folder + '/' + getDataSelectedShelter?.imgMain + '.png'})` }">

            <!-- окно сообщение событий рандомных -->
            <section class="text-white border-yellow-600 bg-sky-600/50 border-4 p-2 m-2 h-75 w-146">

            </section>

            <!-- окно сообщений, событий действий при патрулировании -->
            <section
                class="text-white border-sky-600 bg-yellow-600/50 border-4 p-2 m-2 h-50 w-146">
                <AppEventScreen :triggerRE="triggerRandomEvents"  />
            </section>

        </article>

        <aside class="w-50 border border-amber-900">

            <!-- mini-map -->
            <section class="size-50 border border-amber-500">
                <img
                    :src="'./map/' + getDataSelectedShelter?.folder + '/' + getDataSelectedShelter?.imgThumb + '.png'"
                    :alt="getDataSelectedShelter?.name"
                />
            </section>

            <!--картинки выбранных героев-->
            <section class="h-25 flex items-center justify-around">
                <div
                    @click="getIdHero(hero.id)"
                    v-for="hero in getArraySelectedHeroes"
                    class="border border-red-500 cursor-pointer overflow-hidden"
                >
                    <img
                        :id="hero.id.toString()"
                        class="max-h-25 hover:scale-120 transition-transform duration-300"
                        :src="'./heroes/' + hero.imgThumb + '.png'"
                        :alt="hero.name"
                    />
                </div>
            </section>

            <!-- Кнопки действия-->
            <section
                class="w-50 h-27 flex items-center justify-around border border-amber-500 gap-5 *:cursor-pointer *:border-2"
            >
                <AppBtnsActions
                    @triggerRE="triggerRandomEvents = !triggerRandomEvents"
                    @triggerLDN="triggerLoadingDayNigh = !triggerLoadingDayNigh"
                />
            </section>

            <!-- Окно характеристики героя-->
            <section class="h-48 border border-amber-400 flex items-center justify-center">
                <AppWindowHeroHaracteristics :idHero="idHeroInGroop" />
            </section>
        </aside>

    </main>

    <TheFooter />
</template>

<style scoped></style>
