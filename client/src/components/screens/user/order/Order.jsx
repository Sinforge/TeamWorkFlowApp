import { useParams } from 'react-router-dom';
import UpdateOrderForm from './update-order-form/UpdateOrderForm';
const Order = () => {
    const {id} = useParams();
    // get order by id
    let order = {
        id : 1,
        description : "aboba1234",
        price : 100000,
        status_id : 2
    };
    return (
        <div>
            <div>{order.id}</div>
            <div>{order.description}</div>
            <div>{order.price}</div>
            <div>{order.status_id}</div>
            <button>Delete order</button>

            <UpdateOrderForm order={order}/>
        </div>
    )
}
export default Order;