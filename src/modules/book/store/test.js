import { getAll, get, deleteRequest, update, post } from "@/requests/Request";

export const fetchList = async ( commit, config) => {
    try {
        const {
            data: { data, success },
        } = await getAll( config.url );
        commit( config.commitName, data);
        return success;
    } catch (error) {
        console.log(error);
    }
};

export const fetchBookById = async ({ commit }, id) => {
    try {
        commit("setIsLoading", true);
        const {
            data: { data, success },
        } = await get(`/books/${id}`);
        commit("setCurrentBook", data);
        commit("setIsLoading", false);
        return success;
    } catch (error) {
        console.log(error);
    }
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

export const updateBookById = async ({ dispatch, commit }, { id, book }) => {
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
