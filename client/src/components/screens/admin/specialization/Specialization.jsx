import {useState} from 'react'
import styles from '../SharedTable.module.css'
const mockData = [
    {
        id : 1,
        name : "Backend developer",
        payment: 142000,
    },
    {
        id : 2,
        name : "Backend developer",
        payment: 142000,
    },
    {
        id : 3,
        name : "Backend developer",
        payment: 142000,
    },
]
const Specilizations = () => {
    const [specilizations, setSpecilizations] = useState(mockData);
    const [createSpecilizations, setCreateSpecilizations] = useState({});

    const updateSpecilizations= (id, index) =>{
        console.log(`Update specilizations ${specilizations[index]}`)
        //send date to server
        

    }
    const deleteSpecilizations = (id) => {
        console.log(`Delete specilizations with id ${id}`)
        // delete condition action
    }
    const handleSpecilizationsChange = (index, value) => {
        console.log(value);
        const updatedSpecilizations = [...specilizations];
        console.log(updatedSpecilizations)
        updatedSpecilizations[index] = value;
        setSpecilizations(updatedSpecilizations);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Payment</th>

                </thead>
                <tbody>

                {specilizations.map((spec, index) => 
                    <tr key={spec.id} className={styles.row}>
                        <td>{spec.id}</td>
                        <td><input onChange={(e) => handleSpecilizationsChange(index, {...specilizations[index], name: e.target.value})} type="text" value={specilizations[index].name}></input></td>
                        <td><input onChange={(e) => handleSpecilizationsChange(index, {...specilizations[index], payment: e.target.value})} type="number" value={specilizations[index].payment}></input></td>
                        <td><button onClick={() => updateSpecilizations(spec.id, index)} >Update</button></td>
                        <td><button onClick={(() => deleteSpecilizations(spec.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new specilizations</h2>
            <div>
                <h3>Name</h3>
                <input type="text" onChange={(e) => setCreateSpecilizations({...createSpecilizations, name: e.target.value})}></input>
                <h3>Payment</h3>
                <input type="number" onChange={(e) => setCreateSpecilizations({...createSpecilizations, payment: parseInt(e.target.value)})} ></input>

                <button>Create</button>
            </div>
        </div>
    )

}
export default Specilizations;