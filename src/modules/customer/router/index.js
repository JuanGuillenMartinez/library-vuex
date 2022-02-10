export default {
    name: "CustomerIndex",
    component: () =>
        import(
            /* webpackChunkName: "customer-index" */ "@/modules/customer/views/CustomerIndex.vue"
        ),
};
