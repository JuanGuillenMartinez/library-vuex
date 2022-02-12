export default {
    name: "AuthIndex",
    component: () =>
        import(
            /* webpackChunkName: "auth-index" */ "@/modules/auth/views/LoginIndex.vue"
        ),
    children: [
        {
            path: "",
            name: "login",
            component: () =>
                import(
                    /* webpackChunkName: "login-component" */ "@/modules/auth/components/LoginComponent.vue"
                ),
        },
        // {
        //     path: "/register",
        //     name: "register",
        //     component: () =>
        //         import(
        //             /* webpackChunkName: "login-component" */ "@/modules/auth/components/RegisterComponent.vue"
        //         ),
        // },
    ]
};