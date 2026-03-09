<script setup lang="ts">

import AppDate from '@/components/AppDate.vue'
import { useGlobalStore } from '@/stores/globalStore'
import { storeToRefs } from 'pinia'

const globalStore = useGlobalStore();
const { OutWarningMessageStrRef } = storeToRefs(globalStore)

</script>

<template>
    <footer class="w-200 h-6.25 mx-auto flex border border-amber-900 bg-gray-700 main-font ">
        <div class="w-150 text-center text-red-500">{{ OutWarningMessageStrRef + "2" }}</div>
        <AppDate />
    </footer>
</template>

<style scoped></style>