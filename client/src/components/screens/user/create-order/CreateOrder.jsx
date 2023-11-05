import { useState } from "react"
import {CreateOrderRequest} from "../../../../services/order.service";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
const CreateOrder = () =>  {
    const [form, setForm] = useState({});
    const axios = useAxiosPrivate()
    return (
        <div>
            <h3>Description of order</h3>
            <textarea key="description"  onChange={e => setForm({...form, description: e.target.value})}></textarea>
            <h3>Price of order</h3>
            <input key="price" type="number" onChange={e => setForm({...form, price: e.target.value})}></input>
            <h3>Contract id</h3>
            <input key="contract_id" type="number" onChange={e => setForm({...form, contract_id: e.target.value})}></input>
            <button onClick={() => CreateOrderRequest(axios, form) }>Create order</button>

        </div>
    )
}
export default CreateOrder;