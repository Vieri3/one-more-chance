<script setup lang="ts">

import { ref, watch } from 'vue';

const props = defineProps({
    LDN: Boolean
})

const loadingDayNight = ref(false);

function doubleToggle() {
    loadingDayNight.value = !loadingDayNight.value;
    setTimeout(() => { loadingDayNight.value = !loadingDayNight.value }, 2000);
};

watch(() => props.LDN, () => doubleToggle())

</script>

<template>
    <Transition
        name="fade"
        mode="out-in"
    >
        <div
            class="bg"
            v-if="loadingDayNight"
        >
            <img
                src="/different/day-night.png"
                alt="day-nigth"
            >
        </div>
    </Transition>
</template>

<style scoped>
.bg {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 10;
    width: 800px;
    height: 600px;
    background-color: rgba(0, 0, 0, .8)
}

img {
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

/* переход основан на классах перехода 'fade' */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}</style>