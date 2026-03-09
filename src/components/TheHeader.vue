<script setup lang="ts">

import { MASS_PAGE } from '@/constants/global-constants'
import AppMenu from '@/components/AppMenu.vue'

</script>
 
<template>
    <header class="w-200 h-6.25 flex mx-auto border border-amber-900 bg-gray-700 main-font ">
        <nav class="w-150">
            <ul class="*:cursor-pointer flex justify-around">
                <li
                    v-for="page in MASS_PAGE"
                    class="hover:text-amber-500"
                >
                    <router-link :to="page.href">{{ page.text }}</router-link>
                </li>
            </ul>
        </nav>
        <AppMenu />
    </header>
</template>

<style scoped>
.router-link-active {
    color: #f59e0b !important;
}
</style>