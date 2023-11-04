import axios from "../components/axios/axios";


export function authorizeUser(data) {
    return axios.get(`/user/authorize`, data);
    
}
export function registerUser(user) {
    return axios.post(`/user/registration`)
}