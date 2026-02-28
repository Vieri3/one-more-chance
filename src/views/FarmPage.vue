<script setup lang="ts">

import { storeToRefs } from 'pinia';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

import { useGlobalStore } from '@/stores/globalStore.ts';
const { loadData } = useGlobalStore();
loadData();

const globalStore = useGlobalStore();
const { getObjMap } = storeToRefs(globalStore);

</script>

<template>
    <TheHeader />
    <div class="w-200 h-150 flex justify-center mx-auto bg-image" :style="{ backgroundImage: `url(${'/map/' + getObjMap?.folder + '/' + getObjMap?.imgFarm + '.png'})` }">
        <h2 class="text-2xl text-red-500">ферма</h2>
    </div>
    <TheFooter />
</template>

<style scoped></style>