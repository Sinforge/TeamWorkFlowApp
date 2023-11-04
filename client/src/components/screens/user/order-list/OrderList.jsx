import {useState} from 'react';
import OrderPreview from './order-preview/OrderPreview';
const mockData = [
    {
        id : 1,
        description: "some desc1",
        price: 50000,
        status_id: 1,
    },
    {
        id : 2,
        description: "some desc2",
        price: 42522,
        status_id: 2,
    },
    {
        id : 3,
        description: "some desc3",
        price: 1250000,
        status_id: 3,
    },

]
const OrderList = () => {
    const [ords, setOrds] = useState(mockData);
    return (
        <div>
            {ords.map(order=> 
                <OrderPreview key={order.id} id={order.id}
                 description={order.description}
                 price={order.price}
                 status_id={order.status_id}/>
            )}

        </div>
    );

}
export default OrderList;