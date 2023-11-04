import {useState} from 'react'
import styles from '../SharedTable.module.css'
const mockData = [
    {
        id : 1,
        company_name: "Bob",
        description : "desc1",
        price: 12041.20,
        stage_id : 1,
        contract_id: 1
    },
    {
        id : 2,
        company_name: "Bob",
        description : "desc1",
        price: 12041.20,
        stage_id : 1,
        contract_id: 1
    },
    {
        id : 3,
        company_name: "Bob",
        description : "desc1",
        price: 12041.20,
        stage_id : 1,
        contract_id: 1
    },
    {
        id : 4,
        company_name: "Bob",
        description : "desc1",
        price: 12041.20,
        stage_id : 1,
        contract_id: 1
    }
]
const AdminOrder = () => {
    const [adminOrder, setAdminOrder] = useState(mockData);
    const [createAdminOrder, setCreateAdminOrder] = useState({});

    const updateAdminOrder= (id, index) =>{
        console.log(`Update adminOrder ${adminOrder[index]}`)
        //send date to server
        

    }
    const deleteAdminOrder = (id) => {
        console.log(`Delete adminOrder with id ${id}`)
        // delete condition action
    }
    const handleAdminOrderChange = (index, value) => {
        console.log(value);
        const updatedAdminOrder = [...adminOrder];
        console.log(updatedAdminOrder)
        updatedAdminOrder[index] = value;
        setAdminOrder(updatedAdminOrder);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Company name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stage id</th>
                    <th>Contract id</th>
                </thead>
                <tbody>

                {adminOrder.map((order, index) => 
                    <tr key={order.id} className={styles.row}>
                        <td>{order.id}</td>
                        <td><input onChange={(e) => handleAdminOrderChange(index, {...adminOrder[index], company_name: e.target.value})} type="text" value={adminOrder[index].company_name}></input></td>
                        <td><textarea onChange={(e) => handleAdminOrderChange(index, {...adminOrder[index], description: e.target.value})} type="text" value={adminOrder[index].description}></textarea></td>
                        <td><input onChange={(e) => handleAdminOrderChange(index, {...adminOrder[index], price: !isNaN(parseFloat(e.target.value))? parseFloat(e.target.value): 0})} type="text" value={adminOrder[index].price}></input></td>
                        <td><input onChange={(e) => handleAdminOrderChange(index, {...adminOrder[index], stage_id: parseInt(e.target.value)})} type="number" value={adminOrder[index].stage_id}></input></td>
                        <td><input onChange={(e) => handleAdminOrderChange(index, {...adminOrder[index], contract_id: parseInt(e.target.value)})} type="number" value={adminOrder[index].contract_id}></input></td>
                        <td><button onClick={() => updateAdminOrder(order.id, index)} >Update</button></td>
                        <td><button onClick={(() => deleteAdminOrder(order.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new adminOrder</h2>
            <div>
                <h3>Company name</h3>
                <input onChange={(e) => setCreateAdminOrder({...createAdminOrder, company_name: e.target.value})}></input>
                <h3>Description</h3>
                <textarea onChange={(e) => setCreateAdminOrder({...createAdminOrder, description : e.target.value})} ></textarea>
                <h3>Price</h3>
                <input onChange={(e) => setCreateAdminOrder({...createAdminOrder, price: parseInt(e.target.value)})}></input>
                <h3>Stage id</h3>
                <input onChange={(e) => setCreateAdminOrder({...createAdminOrder, stage_id: parseInt(e.target.value)})}></input>
                <h3>Contract id</h3>
                <input onChange={(e) => setCreateAdminOrder({...createAdminOrder, contract_id: parseInt(e.target.value)})}></input>
                
                <button>Create</button>
            </div>
        </div>
    )

}
export default AdminOrder;