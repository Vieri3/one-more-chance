import { createRouter, createWebHistory } from "vue-router"

import HomePage from "@/views/HomePage.vue"
import ChoiceOfHeroesPage from "@/views/ChoiceOfHeroesPage.vue"
import InventoryPage from "@/views/InventoryPage.vue"
import FarmPage from "@/views/FarmPage.vue"
import GroopPage from "@/views/GroopPage.vue"
import LocationPage from "@/views/LocationPage.vue"
import MapPage from '@/views/MapPage.vue'
import NotFound from "@/views/NotFound.vue"

const routes = [
    { path: '/', component: HomePage, meta: { title: 'one-more-chance' } },
    { path: '/choice-of-heroes', component: ChoiceOfHeroesPage, meta: { title: 'Выбор героев' } },
    { path: '/inventory', component: InventoryPage, meta: { title: 'Инвентарь' } },
    { path: '/farm', component: FarmPage, meta: { title: 'Ферма' } },
    { path: '/groop', component: GroopPage, meta: { title: 'Группа' } },
    { path: '/location', component: LocationPage, meta: { title: 'Локация' } },
    { path: '/map', component: MapPage, meta: { title: 'Карта' } },
    { path: '/:pathMatch(.*)*', redirect: '/404' },
    { path: '/404', component: NotFound, name: 'NotFound', meta: { title: '404' } }
]


const router = createRouter({
    history: createWebHistory(/*(import.meta.env.BASE_URL)*/),
    routes,
    // scrollBehavior() {
    //     document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    // }
})

router.beforeEach((to, from,  next) => {
    document.title = to.meta.title || "One More Chance";
    next();
})


export default router