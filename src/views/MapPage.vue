<script setup lang="ts">

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

</script>

<template>
    <TheHeader />
    <main class="w-200 h-150 mx-auto flex border border-amber-900 text-center">
        <article class="w-150 bg-image" :style="{ backgroundImage: `url(${'/map/map.png'})` }">

        </article>
        <aside class="w-50 border border-amber-900"></aside>
    </main>
    <TheFooter />
</template>

<style scoped></style>