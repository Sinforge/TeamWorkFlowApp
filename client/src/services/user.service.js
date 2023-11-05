import axios from "../components/axios/axios";


export function authorizeUser(data) {
    console.log(data)
    return axios.post('/user/authorize', data);
    
}
export function registerUser(data) {
    return axios.post(`/user/registration`, data);
}