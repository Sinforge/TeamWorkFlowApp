import {useState, useEffect} from 'react'
import styles from '../SharedTable.module.css'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { CreateEmployeeOrder, DeleteEmployeeOrder, GetAllEmployeeOrder } from '../../../../services/admin.service';
// const mockData = [
//     {
//         order_id : 1,
//         employee_id : 1,
//     },
//     {
//         order_id : 1,
//         employee_id : 1,
//     },
//     {
//         order_id : 1,
//         employee_id : 1,
//     },
// ]
const EmployeeOrders = () => {
    const axios = useAxiosPrivate()
    const [employeeOrders, setEmployeeOrders] = useState([]);
    const [createEmployeeOrders, setCreateEmployeeOrders] = useState({});

    useEffect(() => {
        GetAllEmployeeOrder(axios).then((response) => {
            setEmployeeOrders(response.data)
        })
    }, [])
    const deleteEmployeeOrders = (item) => {
        console.log(item)
        DeleteEmployeeOrder(axios, item)
    }

    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Order id</th>
                    <th>Employee id</th>
                </thead>
                <tbody>

                {employeeOrders.map((eo, index) => 
                    <tr key={index} className={styles.row}>
                        <td>{eo.order_id}</td>
                        <td>{eo.employee_id}</td>
                    
                        <td><button onClick={(() => deleteEmployeeOrders(eo))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new employeeOrders</h2>
            <div>
                <h3>Order id</h3>
                <input type="number" onChange={(e) => setCreateEmployeeOrders({...createEmployeeOrders, order_id: parseInt(e.target.value)})}></input>
                <h3>Employee id</h3>
                <input type="number"onChange={(e) => setCreateEmployeeOrders({...createEmployeeOrders, employee_id : parseInt(e.target.value)})} ></input>

                <button onClick={() => CreateEmployeeOrder(axios, createEmployeeOrders)}>Create</button>
            </div>
        </div>
    )

}
export default EmployeeOrders;