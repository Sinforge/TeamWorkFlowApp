import {useState} from 'react'
import styles from '../SharedTable.module.css'
const mockData = [
    {
        id : 1,
        name : "name",
        description: "Parkovya 11 d 36",
        order_id: 1,
        task_status_id: 2
    },
    {
        id : 2,
        name : "name",
        description: "Parkovya 11 d 36",
        order_id: 1,
        task_status_id: 2
    },
    {
        id : 3,
        name : "name",
        description: "Parkovya 11 d 36",
        order_id: 1,
        task_status_id: 2
    },
]
const Tasks = () => {
    const [tasks, setTasks] = useState(mockData);
    const [createTasks, setCreateTasks] = useState({});

    const updateTasks= (id, index) =>{
        console.log(`Update tasks ${tasks[index]}`)
        //send date to server
        

    }
    const deleteTasks = (id) => {
        console.log(`Delete tasks with id ${id}`)
        // delete condition action
    }
    const handleTasksChange = (index, value) => {
        console.log(value);
        const updatedTasks = [...tasks];
        console.log(updatedTasks)
        updatedTasks[index] = value;
        setTasks(updatedTasks);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Order id</th>
                    <th>Task status id</th>

                </thead>
                <tbody>

                {tasks.map((t, index) => 
                    <tr key={t.id} className={styles.row}>
                        <td>{t.id}</td>
                        <td><input onChange={(e) => handleTasksChange(index, {...tasks[index], name: e.target.value})} type="text" value={tasks[index].name}></input></td>
                        <td><input onChange={(e) => handleTasksChange(index, {...tasks[index], description: e.target.value})} type="text" value={tasks[index].description}></input></td>
                        <td><input onChange={(e) => handleTasksChange(index, {...tasks[index], order_id: parseInt(e.target.value)})} type="number" value={tasks[index].order_id}></input></td>
                        <td><input onChange={(e) => handleTasksChange(index, {...tasks[index], task_status_id: parseInt(e.target.value)})} type="number" value={tasks[index].task_status_id}></input></td>

                        <td><button onClick={() => updateTasks(t.id, index)} >Update</button></td>
                        <td><button onClick={(() => deleteTasks(t.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new tasks</h2>
            <div>
                <h3>Name</h3>
                <input type="text" onChange={(e) => setCreateTasks({...createTasks, name: e.target.value})}></input>
                <h3>Description</h3>
                <textarea type="text" onChange={(e) => setCreateTasks({...createTasks, description : e.target.value})} ></textarea>
                <h3>Order id</h3>
                <input type="number" onChange={(e) => setCreateTasks({...createTasks, order_id: parseInt(e.target.value)})}></input>
                <h3>Task status id</h3>
                <input type="number" onChange={(e) => setCreateTasks({...createTasks, task_status_id: parseInt(e.target.value)})}></input>
            
                <button>Create</button>
            </div>
        </div>
    )

}
export default Tasks;