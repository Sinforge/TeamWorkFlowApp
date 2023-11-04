import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Header from '../components/header/Header';
import Login from '../components/screens/shared/login/Login'
import Registration from '../components/screens/shared/registration/Registration'
import EmployeeOrderList from '../components/screens/employee/employee-order-list/EmployeeOrderList';
import CreateOrder from '../components/screens/user/create-order/CreateOrder';
import OrderList from '../components/screens/user/order-list/OrderList';
import Order from '../components/screens/user/order/Order';
import Profile from '../components/screens/employee/profile/Profile';
import TaskTable from '../components/screens/employee/task-table/TaskTable';
import Contract from '../components/screens/admin/contract/Contract';
import Employee from '../components/screens/admin/employee/Employee';
import AdminOrder from '../components/screens/admin/order/Order';
import PersonalData from '../components/screens/admin/personal-data/PersonalData';
import Specilizations from '../components/screens/admin/specialization/Specialization';
import Tasks from '../components/screens/admin/task/AdminTask';
import User from '../components/screens/admin/user/User';
import EmployeeOrders from '../components/screens/admin/employee-order/EmployeeOrder';

const Router = () => {
    return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route element={<Login/>} path="/login"/>
            <Route element={<Registration/>} path="/registration"/> 
            <Route element={<CreateOrder/>} path="/create-order"/>
            <Route exact element={<OrderList/>} path="/order"/>
            <Route element={<Order/>} path="/order/:id"/>
            <Route exact element={<EmployeeOrderList/>} path="/employee-order"/>
            <Route element={<TaskTable/>} path="/employee-order/:id/task"/>
            <Route element={<Profile/>} path="/profile"/>
            <Route  exact path="/admin">
                <Route element={<Contract/>} path="/admin/contract"/>
                <Route element={<Employee/>} path="/admin/employee"/>
                <Route element={<AdminOrder/>} path="/admin/order"/>
                <Route element={<PersonalData/>} path="/admin/personal-data"/>
                <Route element={<Specilizations/>} path="/admin/specializations"/>
                <Route element={<Tasks/>} path="/admin/tasks"/>
                <Route element={<User/>} path="/admin/user"/>
                <Route element={<EmployeeOrders/>} path="/admin/employee-orders"/>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}
export default Router;