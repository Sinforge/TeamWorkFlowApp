import {useState, useEffect} from 'react'
import styles from '../SharedTable.module.css'
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { CreatePersonalData, DeletePersonalData, GetAllPersonalData, UpdatePersonalData } from '../../../../services/admin.service';
// const mockData = [
//     {
//         id : 1,
//         email : "vlad.vlasov77@mail.ru",
//         address: "Parkovya 11 d 36",
//         health_status_id: 1,
//     },
//     {
//         id : 2,
//         email : "vlad.vlasov77@mail.ru",
//         address: "Parkovya 11 d 36",
//         health_status_id: 1,
//     },
//     {
//         id : 3,
//         email : "vlad.vlasov77@mail.ru",
//         address: "Parkovya 11 d 36",
//         health_status_id: 1,
//     },
// ]
const PersonalData = () => {
    const axios = useAxiosPrivate();
    const [personalData, setPersonalData] = useState([]);
    const [createPersonalData, setCreatePersonalData] = useState({});

    useEffect(() => {
        GetAllPersonalData(axios).then((response) => {
            setPersonalData(response.data)
        })
    },[])
    const updatePersonalData= (id, index) =>{
        console.log(`Update personalData ${personalData[index]}`)
        UpdatePersonalData(axios, personalData[index])

    }
    const deletePersonalData = (id) => {
        console.log(`Delete personalData with id ${id}`)
        DeletePersonalData(axios, id)
        // delete condition action
    }
    const handlePersonalDataChange = (index, value) => {
        console.log(value);
        const updatedPersonalData = [...personalData];
        console.log(updatedPersonalData)
        updatedPersonalData[index] = value;
        setPersonalData(updatedPersonalData);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Health status id</th>

                </thead>
                <tbody>

                {personalData.map((personal, index) => 
                    <tr key={personal.id} className={styles.row}>
                        <td>{personal.id}</td>
                        <td><input onChange={(e) => handlePersonalDataChange(index, {...personalData[index], email: e.target.value})} type="email" value={personalData[index].email}></input></td>
                        <td><input onChange={(e) => handlePersonalDataChange(index, {...personalData[index], address: e.target.value})} type="text" value={personalData[index].address}></input></td>
                        <td><input onChange={(e) => handlePersonalDataChange(index, {...personalData[index], health_status_id: parseInt(e.target.value)})} type="number" value={personalData[index].health_status_id}></input></td>
                        <td><button onClick={() => updatePersonalData(personal.id, index)} >Update</button></td>
                        <td><button onClick={(() => deletePersonalData(personal.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new personalData</h2>
            <div>
                <h3>Email</h3>
                <input type="email" onChange={(e) => setCreatePersonalData({...createPersonalData, email: e.target.value})}></input>
                <h3>Address</h3>
                <input type="text"onChange={(e) => setCreatePersonalData({...createPersonalData, address : e.target.value})} ></input>
                <h3>Health status id</h3>
                <input type="number" onChange={(e) => setCreatePersonalData({...createPersonalData, health_status_id: parseInt(e.target.value)})}></input>
            
                <button onClick={() => CreatePersonalData(axios, createPersonalData)}>Create</button>
            </div>
        </div>
    )

}
export default PersonalData;