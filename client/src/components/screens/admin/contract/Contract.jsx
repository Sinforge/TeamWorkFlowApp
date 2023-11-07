import {useState, useEffect} from 'react'
import styles from '../SharedTable.module.css'
import GetAllContracts from '../../../../services/admin.service';
import { CreateContract, UpdateContract, DeleteContract } from '../../../../services/admin.service';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

// const mockData = [
//     {
//         id : 1,
//         conditions : "condtions 1"
//     },
//     {
//         id : 2,
//         conditions : "condtions 2"
//     },
//     {
//         id : 3,
//         conditions : "condtions 3"
//     },
//     {
//         id : 4,
//         conditions : "condtions 4"
//     }
// ]
const Contract = () => {
    const axios = useAxiosPrivate();
    const [contracts, setContracts] = useState([]);
    const [createCondition, setCreateCondition] = useState({});

    useEffect(() => {
        GetAllContracts(axios).then((response) => {
            setContracts(response.data)
        })
    }, [])
    const updateConditions= (id, index) =>{
        console.log(`Update condition with id ${id} and conditions: ${contracts[index]}`)
        UpdateContract(axios, contracts[index]);
        //send date to server
        

    }
    const deleteCondtitions = (id) => {
        console.log(`Delete condition with id ${id}`)
        DeleteContract(axios, id)
        // delete condition action
    }
    const handleConditionsChange = (index, value) => {
        console.log(value)
        const updatedContracts = [...contracts];
        updatedContracts[index] ={...updatedContracts[index], conditions: value};

        setContracts(updatedContracts);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Conditions</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>

                {contracts.map((contract, index) => 
                    <tr key={contract.id} className={styles.row}>
                        <td>{contract.id}</td>
                        <td><textarea onChange={(e) => handleConditionsChange(index,e.target.value)} value={contracts[index].conditions}></textarea></td>
                        <td><button onClick={() => updateConditions(contract.id, index)} >Update</button></td>
                        <td><button onClick={(() => deleteCondtitions(contract.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new condition</h2>
            <div>
                <textarea onChange={(e) => setCreateCondition({...createCondition, conditions : e.target.value })}/>
                <button onClick={() => CreateContract(axios, createCondition)}>Create</button>
            </div>
        </div>
    )

}
export default Contract;