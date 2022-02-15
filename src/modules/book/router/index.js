    export default {
    name: "BookIndex",
    component: () =>
        import(
            /* webpackChunkName: "book-index" */ "@/modules/book/views/BookIndex.vue"
        ),
    meta: {
        requireAuth: true
    },
    children: [
        {
            path: ":id",
            name: "ShowBook",
            component: () =>
                import(
                    /* webpackChunkName: "login-component" */ "@/modules/book/components/ShowBook.vue"
                ),
            props: true,
        },
        {
            path: "add",
            name: "BookFormRoute",
            component: () =>
                import(
                    /* webpackChunkName: "login-component" */ "@/modules/book/components/BookForm.vue"
                ),
            props: true,
        },
    ]
};
