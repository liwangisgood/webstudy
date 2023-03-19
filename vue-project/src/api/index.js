// index.js
import path from "./path"
import axios from "../util/request"

export default {
    getChengpin() {
        return axios.get(path.baseUrl + path.chengpin)
    }
}