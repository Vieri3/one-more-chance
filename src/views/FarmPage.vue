<script setup lang="ts">

import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/globalStore'

import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

const { loadData } = useGlobalStore();
loadData()

const globalStore = useGlobalStore();
const { getDataSelectedShelter } = storeToRefs(globalStore);

</script>

<template>
    <TheHeader />
    <div class="w-200 h-150 flex justify-center mx-auto bg-image" :style="{ backgroundImage: `url(${'./map/' + getDataSelectedShelter?.folder + '/' + getDataSelectedShelter?.imgFarm + '.png'})` }">
        <h2 class="text-2xl text-red-500">ферма</h2>
    </div>
    <TheFooter />
</template>

<style scoped></style>