import {useState} from 'react'
import styles from '../SharedTable.module.css'
const mockData = [
    {
        order_id : 1,
        employee_id : 1,
    },
    {
        order_id : 1,
        employee_id : 1,
    },
    {
        order_id : 1,
        employee_id : 1,
    },
]
const EmployeeOrders = () => {
    const [employeeOrders, setEmployeeOrders] = useState(mockData);
    const [createEmployeeOrders, setCreateEmployeeOrders] = useState({});

    const deleteEmployeeOrders = (id) => {
        console.log(`Delete employeeOrders with id ${id}`)
        // delete condition action
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
                    
                        <td><button onClick={(() => deleteEmployeeOrders(eo.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new employeeOrders</h2>
            <div>
                <h3>Order id</h3>
                <input type="number" onChange={(e) => setCreateEmployeeOrders({...createEmployeeOrders, employee_id: parseInt(e.target.value)})}></input>
                <h3>Employee id</h3>
                <input type="number"onChange={(e) => setCreateEmployeeOrders({...createEmployeeOrders, employee_id : parseInt(e.target.value)})} ></input>

                <button>Create</button>
            </div>
        </div>
    )

}
export default EmployeeOrders;