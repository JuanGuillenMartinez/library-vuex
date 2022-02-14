import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CustomerRouter from "@/modules/customer/router";
import AuthRouter from "@/modules/auth/router";
import NotFound from "@/components/NotFound";
import store from "@/modules/auth/store/auth"

const routes = [
    { 
        path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound 
    },
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/customer",
        ...CustomerRouter,
    },
    {
        path: "/auth",
        ...AuthRouter,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes, 
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth) &&  !isLogged()) {
        next("/auth")
    } else {
        next()
    }
})

export default router;

function isLogged() {
    return store.getters.isAuth(store.state())
}
