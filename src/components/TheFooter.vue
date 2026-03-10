<script setup lang="ts">

import AppDate from '@/components/AppDate.vue'
import { useWarningMessage } from '@/composables/warning-messages'

const { OutWarningMessageStrRef } = useWarningMessage()

</script>

<template>
    <footer class="w-200 h-6.25 mx-auto flex border border-amber-900 bg-gray-700 main-font ">
        <div class="w-150 text-center text-red-500">{{ OutWarningMessageStrRef }}</div>
        <AppDate />
    </footer>
</template>

<style scoped></style>