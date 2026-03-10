<script setup lang="ts">

import { useRandomEvents} from '@/composables/random-events'

const { outRandomEventsStrReactive } = useRandomEvents()

</script>

<template>
    <h2 class="text-amber-20">{{ outRandomEventsStrReactive.name }}</h2>
    <p class="text-amber-200">
        {{ outRandomEventsStrReactive.description }}
    </p>
</template>

<style scoped></style>