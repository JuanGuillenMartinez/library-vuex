import { createStore } from "vuex";

import CustomerStore from "@/modules/customer/store/customer";
import AuthStore from "@/modules/auth/store/auth";
import BookStore from "@/modules/book/store/book";

const store = createStore({
    modules: {
        CustomerStore,
        AuthStore,
        BookStore,
    }
});

export default store;
