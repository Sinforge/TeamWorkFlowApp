// Contracts methods

export default function GetAllContracts(axios) {
    return axios.get("/admin/contract")
}
export function UpdateContract(axios, data) {
    return axios.put("/admin/contract", data);
}
export function DeleteContract(axios, id) {
    return axios.delete("/admin/contract?id=" + id)
}
export function CreateContract(axios, data) {
    return axios.post("/admin/contract", data)
}


// employee

export function GetAllEmployee(axios) {
    return axios.get("/admin/employee")
}
export function UpdateEmployee(axios, data) {
    return axios.put("/admin/employee", data);
}
export function DeleteEmployee(axios, id) {
    return axios.delete("/admin/employee?id=" + id);
}
export function CreateEmployee(axios, data) {
    return axios.post("/admin/employee", data);
}

// order

export function GetAllOrders(axios) {
    return axios.get("/admin/order")
}
export function UpdateOrder(axios, data) {
    return axios.put("/admin/order", data);
}
export function DeleteOrder(axios, id) {
    return axios.delete("/admin/order?id=" + id);
}
export function CreateOrder(axios, data) {
    return axios.post("/admin/order", data);
}
// Personal data
export function GetAllPersonalData(axios) {
    return axios.get("/admin/personal-data")
}
export function UpdatePersonalData(axios, data) {
    return axios.put("/admin/personal-data", data);
}
export function DeletePersonalData(axios, id) {
    return axios.delete("/admin/personal-data?id=" + id);
}
export function CreatePersonalData(axios, data) {
    return axios.post("/admin/personal-data", data);
}

// Specialization 
export function GetAllSpecializations(axios) {
    return axios.get("/admin/specialization")
}
export function UpdateSpecialization(axios, data) {
    return axios.put("/admin/specialization", data);
}
export function DeleteSpecialization(axios, id) {
    return axios.delete("/admin/specialization?id=" + id);
}
export function CreateSpecialization(axios, data) {
    return axios.post("/admin/specialization", data);
}
// Task

export function GetAllTasks(axios) {
    return axios.get("/admin/task")
}
export function UpdateTask(axios, data) {
    return axios.put("/admin/task", data);
}
export function DeleteTask(axios, id) {
    return axios.delete("/admin/task?id=" + id);
}
export function CreateTask(axios, data) {
    return axios.post("/admin/task", data);
}
// User

export function GetAllUser(axios) {
    return axios.get("/admin/user")
}
export function UpdateUser(axios, data) {
    return axios.put("/admin/user", data);
}
export function DeleteUser(axios, id) {
    return axios.delete("/admin/user?id=" + id);
}

// Employee - order
export function GetAllEmployeeOrder(axios) {
    return axios.get("/admin/employee-order")
}
export function DeleteEmployeeOrder(axios, data) {
    console.log(data)
    return axios.delete("/admin/employee-order", {data : data});
}
export function CreateEmployeeOrder(axios, data) {
    console.log("im creating associations")
    return axios.post("/admin/employee-order", data);
}