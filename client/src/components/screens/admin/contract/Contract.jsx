import {useState} from 'react'
import styles from '../SharedTable.module.css'
const mockData = [
    {
        id : 1,
        conditions : "condtions 1"
    },
    {
        id : 2,
        conditions : "condtions 2"
    },
    {
        id : 3,
        conditions : "condtions 3"
    },
    {
        id : 4,
        conditions : "condtions 4"
    }
]
const Contract = () => {
    const [contracts, setContracts] = useState(mockData);
    const [conditions, setConditions] = useState(mockData.map((contract) => contract.conditions));
    const [createCondition, setCreateCondition] = useState();

    const updateConditions= (id, index) =>{
        console.log(`Update condition with id ${id} and conditions: ${conditions[index]}`)
        //send date to server
        

    }
    const deleteCondtitions = (id) => {
        console.log(`Delete condition with id ${id}`)
        // delete condition action
    }
    const handleConditionsChange = (index, value) => {
        const updatedConditions = [...conditions];
        updatedConditions[index] = value;
        setConditions(updatedConditions);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Conditions</th>
                </thead>
                <tbody>

                {contracts.map((contract, index) => 
                    <tr key={contract.id} className={styles.row}>
                        <td>{contract.id}</td>
                        <td><textarea onChange={(e) => handleConditionsChange(index,e.target.value)} value={conditions[index]}></textarea></td>
                        <td><button onClick={() => updateConditions(contract.id, index)} >Update</button></td>
                        <td><button onClick={(() => deleteCondtitions(contract.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new condition</h2>
            <div>
                <textarea onChange={(e) => setCreateCondition(e.target.value)}/>
                <button>Create</button>
            </div>
        </div>
    )

}
export default Contract;