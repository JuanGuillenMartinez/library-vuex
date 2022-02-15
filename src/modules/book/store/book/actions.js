//normalmente las acciones deben ser asíncronas ya que se encargan de realizar las peticiones http

// export const myAction = async ( { commit } ) => {

// }

import { getAll, get, deleteRequest, update, post } from "@/requests/Request";

export const fetchBookList = async ({ commit }) => {
    const {
        data: { data },
    } = await getAll("/books");
    commit("updateBookList", data);
};

export const fetchBookById = async ({ commit }, id) => {
    commit("setIsLoading", true);
    const {
        data: { data },
    } = await get(`/books/${id}`);
    commit("setCurrentBook", data);
    commit("setIsLoading", false);
};

export const deleteBookById = async ({ dispatch, commit }, id) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { success },
        } = await deleteRequest("/books", id);
        await dispatch("fetchBookList");
        commit("setIsLoading", false);
        return success;
    } catch (error) {
        return error;
    }
};

export const updateBookById = async (
    { dispatch, commit },
    { id, book }
) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { data },
        } = await update(`/books/${id}`, book);
        await dispatch("fetchBookList");
        commit("setIsLoading", false);
        return data;
    } catch (error) {
        return error;
    }
};

export const saveBook = async ({ dispatch, commit }, book) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { data },
        } = await post("/books", book);
        await dispatch("fetchBookList");
        commit("setIsLoading", false);
        return data;
    } catch (error) {
        return error;
    }
};
