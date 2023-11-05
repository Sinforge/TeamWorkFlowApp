export function CreateOrderRequest(axios, data) {
    return axios.post("/orderer/order", data)
}
export function GetOrders(axios) {
    return axios.get("/orderer/order")
}
export function UpdateOrder(axios, order) {
    return axios.put("/orderer/order", order)
}
export function DeleteOrder(axios, id) {
    return axios.delete("/orderer/order?id=" + id)
}
export default function Hello() {

}