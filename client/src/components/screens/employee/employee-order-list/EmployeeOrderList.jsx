import {useState, useEffect} from 'react';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import EmployeeOrderPreview from './employee-order-preview/EmployeeOrderPreview'
import GetEmployeeOrders from '../../../../services/employee.service';
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
const EmployeeOrderList = () => {
    const axios = useAxiosPrivate();    
    const [ords, setOrds] = useState([]);
    useEffect(() => {
        GetEmployeeOrders(axios).then((response)=> {
            setOrds(response.data)
        })
    }, [])
    return (
        <div>
            {ords.map(order=> 
                <EmployeeOrderPreview key={order.id} id={order.id}
                 description={order.description}
                 price={order.price}
                 status_id={order.status_id}/>
            )}

        </div>
    );

}
export default EmployeeOrderList;