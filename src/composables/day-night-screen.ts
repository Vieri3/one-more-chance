import { ref } from 'vue'

const loadingDayNight = ref<boolean>(false);

export function useDayNightScreen() {

    function getCheckedAnimationDayNightScreen() {
        loadingDayNight.value = !loadingDayNight.value;
        setTimeout(() => { loadingDayNight.value = !loadingDayNight.value }, 2000);
    };

    return{
        getCheckedAnimationDayNightScreen,
        loadingDayNight
    }

}