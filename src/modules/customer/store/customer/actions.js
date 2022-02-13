//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import { getAll, get, deleteRequest, update } from "@/requests/Request";

export const fetchCustomerList = async ({ commit }) => {
    const {
        data: { data },
    } = await getAll("/customers");
    commit("updateCustomerList", data);
};

export const fetchCustomerById = async ({ commit }, id) => {
    commit("setIsLoading", true);
    const {
        data: { data },
    } = await get(`/customers/${id}`);
    commit("setCurrentCustomer", data);
    commit("setIsLoading", false);
};

export const deleteCustomerById = async ({ commit }, id) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { success },
        } = await deleteRequest("/customers", id);
        commit("setIsLoading", false);
        return success
    } catch (error) {
        return error
    }
};

export const updateCustomerById = async ({ commit }, id) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { data },
        } = await update("/customers", id);
        commit("setIsLoading", false);
        return data
    } catch (error) {
        return error
    }
};
