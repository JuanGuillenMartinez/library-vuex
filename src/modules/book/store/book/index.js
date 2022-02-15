// aquí se hacen las importaciones de todos los states, mutations, getters y actions.

import state from "./states";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const CustomerModuleStore = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
};

export default CustomerModuleStore;
