import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react'
import { GetOrders, DeleteOrder } from '../../../../services/order.service';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

import UpdateOrderForm from './update-order-form/UpdateOrderForm';
const Order = () => {
    const axios = useAxiosPrivate();    
    const [order, setOrd] = useState();
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        console.log('func')

        GetOrders(axios).then((response) => {
            console.log(response.data)
            console.log(id)
            let elem = response.data.find(element => element.id == id)
            console.log(elem)
            setOrd(elem);
        })
        console.log(order)

    }, [id])
    // get order by id

    return (
        <div>
            {order !== null && order !== undefined && (
            <>
                <div>{order?.id}</div>
                <div>{order?.description}</div>
                <div>{order?.price}</div>
                <div>{order?.stage_id}</div>
                <button onClick={() => DeleteOrder(axios, id)}>Delete order</button>
                <UpdateOrderForm order={order}/>
            </>
            )}
        </div>
    )
}
export default Order;