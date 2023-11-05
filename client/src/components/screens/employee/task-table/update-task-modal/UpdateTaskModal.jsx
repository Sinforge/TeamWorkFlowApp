import { useState } from "react"
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { DeleteTask, UpdateTask } from "../../../../../services/employee.service";
const UpdateTaskModal = ({item, handleCloseModal}) => {
    // update form
    const axios = useAxiosPrivate()
    const [form, setForm] = useState(item);
    return(
        <div className="modal">
            <div className="modal-content">
              <div>
                <h3>Name</h3>
                <input value={form.name} onChange={(e) => setForm({...form, name : e.target.value})} />
                <h3>Description</h3>
                <textarea value={form.description} onChange={(e) => setForm({...form, description : e.target.value})} />
                <button onClick={() => UpdateTask(axios, form)}>Change</button>
              </div>
              <button onClick={() => DeleteTask(axios, item.id)}>Delete</button>
              <button onClick={handleCloseModal}>Закрыть</button>
            </div>
          </div>
    )
}
export default UpdateTaskModal;