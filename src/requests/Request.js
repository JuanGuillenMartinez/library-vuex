import axios from "@/api/AxiosInstance";

export const getAll = async (url) => {
    return await axios.getInstance().get(url);
};

export const post = async (url, data) => {
    return await axios.getInstance().post(url, data);
};

export const get = async (url, data) => {
    if (data) {
        return await axios.getInstance().get(url, data);
    }
    return await axios.getInstance().get(url)
};

export const deleteRequest = async (url, data) => {
    if (data) {
        return await axios.getInstance().delete(`${url}/${data}`);
    }
    return await axios.getInstance().delete(url)
};

export const update = async (url, data) => {
    if (data) {
        return await axios.getInstance().put(url, data);
    }
};
