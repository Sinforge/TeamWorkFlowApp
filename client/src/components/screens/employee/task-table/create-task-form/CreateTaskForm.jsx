import {useState} from 'react';
import useAxiosPrivate from '../../../../../hooks/useAxiosPrivate';
import { CreateTask } from '../../../../../services/employee.service';

const CreateTaskForm = ({orderId}) => {
    const axios = useAxiosPrivate()
    const [form, setForm] = useState({
        order_id : orderId
    })

    return (
        <div>
            <h1>Create task</h1>
            <h2>Name</h2>
            <input onChange={e => setForm({...form, name : e.target.value})}/>
            <h2>Description</h2>
            <textarea onChange={e => setForm({...form, description : e.target.value})}/>
            <button onClick={() => CreateTask(axios, form)}>Create</button>
        </div>
    )
}
export default CreateTaskForm;