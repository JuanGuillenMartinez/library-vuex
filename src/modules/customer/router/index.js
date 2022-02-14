export default {
    name: "CustomerIndex",
    component: () =>
        import(
            /* webpackChunkName: "customer-index" */ "@/modules/customer/views/CustomerIndex.vue"
        ),
    children: [
        {
            path: ":id",
            name: "ShowCustomer",
            component: () =>
                import(
                    /* webpackChunkName: "login-component" */ "@/modules/customer/components/ShowCustomer.vue"
                ),
            props: true,
        },
        {
            path: "add",
            name: "CustomerFormRoute",
            component: () =>
                import(
                    /* webpackChunkName: "login-component" */ "@/modules/customer/components/CustomerForm.vue"
                ),
            props: true,
        },
    ]
};
