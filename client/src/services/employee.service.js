export default function GetEmployeeOrders(axios) {
    return axios.get("/employee/order");
}
export function GetOrderTasks(axios, orderId) {
    return axios.get("/employee/order/" + orderId + "/task")
}
export function CreateTask(axios, data) {
    console.log("Creating of tasks")
    return axios.post("/employee/order/1/task", data)

}
export function UpdateTask(axios, data) {
    console.log("Updating of tasks")
    return axios.put("/employee/order/1/task", data)
}
export function DeleteTask(axios, id) {
    return axios.delete("/employee/order/1/task?id=" + id)
}
export function LoadPersonalData(axios) {
    return axios.get("/employee/personal_data");
}
export function UpdatePersonalData(axios, data) {
    return axios.post("/employee/personal_data", data);
}