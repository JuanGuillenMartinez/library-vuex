import axios from "axios";
import { pathApi, /* invmentApiKey */ } from "@/env";

export default axios.create({
    baseURL: pathApi,
    // headers: {
    //     Authorization: `Bearer ${invmentApiKey}`,
    // },
});
