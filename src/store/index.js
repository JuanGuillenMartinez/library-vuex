import { createStore } from "vuex";

import CustomerStore from "@/modules/customer/store/customer";

const store = createStore({
    modules: {
        CustomerStore,
    }
});

export default store;
