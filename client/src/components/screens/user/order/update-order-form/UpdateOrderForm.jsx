import { useState } from "react";

const UpdateOrderForm = ({order}) => {
    const [form, setForm] = useState(order)
    return (
        <div>
            <h1>Update your order</h1>
            <h3>Description</h3>
            <textarea key="description" value={order.description} onChange={e => setForm({...form, description : e.target.value})}></textarea>
            <h3>Price</h3>
            <input key="price" value={order.price} onChange={e => setForm({...form, price : e.target.value})}></input>
            <h3>Status id</h3>
            <input key="status_id" value={order.status_id} onChange={e => setForm({...form, status_id : e.target.value})}></input>
            <br/>
            <button>Update</button>
        </div>
    
    )

}
export default UpdateOrderForm;