import {useState, useEffect} from 'react';
import OrderPreview from './order-preview/OrderPreview';
import {GetOrders} from "../../../../services/order.service";
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import styles from './OrderList.module.css'
// const mockData = [
//     {
//         id : 1,
//         description: "some desc1",
//         price: 50000,
//         status_id: 1,
//     },
//     {
//         id : 2,
//         description: "some desc2",
//         price: 42522,
//         status_id: 2,
//     },
//     {
//         id : 3,
//         description: "some desc3",
//         price: 1250000,
//         status_id: 3,
//     },

// ]
const OrderList = () => {
    const axios = useAxiosPrivate();    
    const [ords, setOrds] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const ords = await GetOrders(axios)
            setOrds(ords.data)
            console.log(ords)
        }
        fetchData()
    }, [])
    console.log(ords)
    return (
        <div className={styles['order-list']} >
            {ords.map(order=> 
                <OrderPreview key={order.id} id={order.id}
                 description={order.description}
                 price={order.price}
                 stage_id={order.stage_id}/>
            )}

        </div>
    );

}
export default OrderList;