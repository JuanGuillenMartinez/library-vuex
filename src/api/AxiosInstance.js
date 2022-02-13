// import axios from "axios";
// import { pathApi /* invmentApiKey */ } from "@/env";

// export default () => {
//     const currentToken = localStorage.getItem("currentToken");
//     let config = {
//         baseURL: pathApi,
//     };
//     if (currentToken) {
//         config.headers = {
//             Authorization: `Bearer ${currentToken}`,
//         };
//     }
//     return axios.create({ config });
// };
import axios from "axios";
import { pathApi } from "@/env";

// const makeAxiosInstance = () => {
//     const token = localStorage.getItem('currentToken')
//     console.log(token);
//     let config = {
//         baseURL: pathApi,
//     }
//     if (token) {
//         config.headers = {
//             Authorization: `Bearer ${token}`
//         }
//     }
//     console.log(config)
//     return axios.create(config)
// }

// const instanceResolve = makeAxiosInstance()

const instance = {
    getInstance() {
        const token = localStorage.getItem('currentToken')
        let config = {
            baseURL: pathApi,
        };
        if (token) {
            config.headers = {
                Authorization: `Bearer ${token}`
            }
        }
        return axios.create(config);
    },
};

export default instance