import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react'
import { GetOrders, DeleteOrder } from '../../../../services/order.service';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import styles from './Order.module.css'
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
        <div className={styles['order-details']}>
            {order && (
                <div className={styles['order-container']}>
                    <h2 className={styles['order-heading']}>Order</h2>
                    <div className={styles['order-item']}>
                        <span className={styles['order-item-label']}>Id:</span>
                        <span className={styles['order-item-value']}>{order.email}</span>
                    </div>
                    <div className={styles['order-item']}>
                        <span className={styles['order-item-label']}>Description:</span>
                        <span className={styles['order-item-value']}>{order.description}</span>
                    </div>
                    <div className={styles['order-item']}>
                        <span className={styles['order-item-label']}>Price</span>
                        <span className={styles['order-item-value']}>{order.price}</span>
                    </div>
                    <div className={styles['order-item']}>
                        <span className={styles['order-item-label']}>Status ID:</span>
                        <span className={styles['order-item-value']}>{order.status_id}</span>
                    </div>
                    <button onClick={() => DeleteOrder(axios, id)}>Delete order</button>
                    <UpdateOrderForm order={order} />
                 </div>


            )}
        </div>

    )
}
export default Order;