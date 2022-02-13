import { createStore } from "vuex";

import CustomerStore from "@/modules/customer/store/customer";
import AuthStore from "@/modules/auth/store/auth"

const store = createStore({
    modules: {
        CustomerStore,
        AuthStore,
    }
});

export default store;
