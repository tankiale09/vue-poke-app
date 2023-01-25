import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/pokemons",
      name: "pokemons",
      component: () => import("../views/PokemonsView.vue"),
    },
    {
      path: "/pokemons/:poke",
      name: "poke",
      component: () => import("../views/PokeView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue"),
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: () => import("../views/AboutMeView.vue"),
    },
  ],
});

export default router
