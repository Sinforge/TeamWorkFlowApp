import { useState } from "react";
import useAxiosPrivate from "../../../../../hooks/useAxiosPrivate";
import { UpdateOrder } from "../../../../../services/order.service";

const UpdateOrderForm = ({order}) => {
    const axios = useAxiosPrivate()

    const [form, setForm] = useState({...order})
    return (
        <div>
            <h1>Update your order</h1>
            <h3>Description</h3>
            <textarea key="description" value={form?.description} onChange={e => setForm({...form, description : e.target.value})}></textarea>
            <h3>Price</h3>
            <input key="price" value={form?.price} onChange={e => setForm({...form, price : e.target.value})}></input>
            <h3>Status id</h3>
            <input key="stage_id" value={form?.stage_id} onChange={e => setForm({...form, stage_id : e.target.value})}></input>
            <br/>
            <button onClick={()=> UpdateOrder(axios, form)}>Update</button>
        </div>
    
    )

}
export default UpdateOrderForm;