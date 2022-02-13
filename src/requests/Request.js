import axios from '@/api/AxiosInstance'

export const getAll = async (url) => {
    return await axios.getInstance().get(url)
}

export const post = async (url, data) => {
    return await axios.getInstance().post(url, data)
}