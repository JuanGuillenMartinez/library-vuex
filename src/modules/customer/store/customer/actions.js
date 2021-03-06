//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import { getAll, get, deleteRequest, update, post } from "@/requests/Request";

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

export const deleteCustomerById = async ({ dispatch, commit }, id) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { success },
        } = await deleteRequest("/customers", id);
        await dispatch("fetchCustomerList");
        commit("setIsLoading", false);
        return success;
    } catch (error) {
        return error;
    }
};

export const updateCustomerById = async (
    { dispatch, commit },
    { id, customer }
) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { data },
        } = await update(`/customers/${id}`, customer);
        await dispatch("fetchCustomerList");
        commit("setIsLoading", false);
        return data;
    } catch (error) {
        return error;
    }
};

export const saveCustomer = async ({ dispatch, commit }, customer) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { data },
        } = await post("/customers", customer);
        await dispatch("fetchCustomerList");
        commit("setIsLoading", false);
        return data;
    } catch (error) {
        return error;
    }
};
