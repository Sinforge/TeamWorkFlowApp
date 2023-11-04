import {useState} from 'react'
import styles from '../SharedTable.module.css'
const mockData = [
    {
        id : 1,
        name: "Bob",
        count_of_completed_orders : 10,
        personal_data_id : 1,
        specialization_id : 2,
    },
    {
        id : 2,
        name: "Vitaly",
        count_of_completed_orders : 10,
        personal_data_id : 1,
        specialization_id : 2,
    },
    {
        id : 3,
        name: "Vlad",
        count_of_completed_orders : 10,
        personal_data_id : 1,
        specialization_id : 2,
    },
    {
        id : 4,
        name: "Fedor",
        count_of_completed_orders : 10,
        personal_data_id : 1,
        specialization_id : 2,
    }
]
const Employee = () => {
    const [employee, setEmployee] = useState(mockData);
    const [createEmployee, setCreateEmployee] = useState({});

    const updateEmployee= (id, index) =>{
        console.log(`Update employee ${employee[index]}`)
        //send date to server
        

    }
    const deleteEmployee = (id) => {
        console.log(`Delete employee with id ${id}`)
        // delete condition action
    }
    const handleEmployeeChange = (index, value) => {
        console.log(value);
        const updatedEmployee = [...employee];
        console.log(updatedEmployee)
        updatedEmployee[index] = value;
        setEmployee(updatedEmployee);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Count of completed orders</th>
                    <th>Presonal data id</th>
                    <th>Specialization id</th>
                </thead>
                <tbody>

                {employee.map((empl, index) => 
                    <tr key={empl.id} className={styles.row}>
                        <td>{empl.id}</td>
                        <td><input onChange={(e) => handleEmployeeChange(index, {...employee[index], name: e.target.value})} type="text" value={employee[index].name}></input></td>
                        <td><input onChange={(e) => handleEmployeeChange(index, {...employee[index], count_of_completed_orders: parseInt(e.target.value)})} type="number" value={employee[index].count_of_completed_orders}></input></td>
                        <td><input onChange={(e) => handleEmployeeChange(index, {...employee[index], personal_data_id: parseInt(e.target.value)})} type="number" value={employee[index].personal_data_id}></input></td>
                        <td><input onChange={(e) => handleEmployeeChange(index, {...employee[index], specialization_id: parseInt(e.target.value)})} type="number" value={employee[index].specialization_id}></input></td>

                        <td><button onClick={() => updateEmployee(empl.id, index)} >Update</button></td>
                        <td><button onClick={(() => deleteEmployee(empl.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new employee</h2>
            <div>
                <h3>Name</h3>
                <input onChange={(e) => setCreateEmployee({...createEmployee, name: e.target.value})}></input>
                <h3>Personal data id</h3>
                <input onChange={(e) => setCreateEmployee({...createEmployee, personal_data_id: e.target.value})} ></input>
                <h3>Specialization id</h3>
                <input onChange={(e) => setCreateEmployee({...createEmployee, specialization_id: e.target.value})}></input>
                <button>Create</button>
            </div>
        </div>
    )

}
export default Employee;