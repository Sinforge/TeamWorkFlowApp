import {useState} from 'react';

const CreateTaskForm = ({orderId}) => {
    const [form, setForm] = useState({
        orderId: orderId
    })

    return (
        <div>
            <h1>Create task</h1>
            <h2>Name</h2>
            <input onChange={e => setForm({...form, email : e.target.value})}/>
            <h2>Description</h2>
            <textarea onChange={e => setForm({...form, address: e.target.value})}/>
            <button>Create</button>
        </div>
    )
}
export default CreateTaskForm;