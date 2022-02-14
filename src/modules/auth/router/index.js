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
        {
            path: "register",
            name: "RegisterRoute",
            component: () =>
                import(
                    /* webpackChunkName: "register-component" */ "@/modules/auth/components/RegisterComponent.vue"
                ),
        },
    ]
};