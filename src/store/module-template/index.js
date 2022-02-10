// aquí se hacen las importaciones de todos los states, mutations, getters y actions.

import state from "./states";
import * as getters from "./getters";
import * as actions from "./actions";
import * as mutations from "./mutations";

const myCustomModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state,
};

export default myCustomModule;
