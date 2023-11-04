import {useState} from 'react'
import styles from '../SharedTable.module.css'
const mockData = [
    {
        id : 1,
        login : "vlad.vlasov77@mail.ru",
        password: "Parkovya 11 d 36",
        role_id: 1,
        employee_id: null
    },
    {
        id : 2,
        login : "vlad.vlasov77@mail.ru",
        password: "Parkovya 11 d 36",
        role_id: 1,
        employee_id: null
    },
    {
        id : 3,
        login : "vlad.vlasov77@mail.ru",
        password: "Parkovya 11 d 36",
        role_id: 1,
        employee_id: null
    },
]
const User = () => {
    const [user, setUser] = useState(mockData);
    const [createUser, setCreateUser] = useState({});

    const updateUser= (id, index) =>{
        console.log(`Update user ${user[index]}`)
        //send date to server
        

    }
    const deleteUser = (id) => {
        console.log(`Delete user with id ${id}`)
        // delete condition action
    }
    const handleUserChange = (index, value) => {
        console.log(value);
        const updatedUser = [...user];
        console.log(updatedUser)
        updatedUser[index] = value;
        setUser(updatedUser);
      };
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <th>Id</th>
                    <th>Login</th>
                    <th>Password</th>
                    <th>Role id</th>
                    <th>Employee id</th>

                </thead>
                <tbody>

                {user.map((u, index) => 
                    <tr key={u.id} className={styles.row}>
                        <td>{u.id}</td>
                        <td><input onChange={(e) => handleUserChange(index, {...user[index], login: e.target.value})} type="text" value={user[index].login}></input></td>
                        <td><input onChange={(e) => handleUserChange(index, {...user[index], password: e.target.value})} type="text" value={user[index].password}></input></td>
                        <td><input onChange={(e) => handleUserChange(index, {...user[index], role_id: parseInt(e.target.value)})} type="number" value={user[index].role_id}></input></td>
                        <td><input onChange={(e) => handleUserChange(index, {...user[index], employee_id: parseInt(e.target.value)})} type="text" value={user[index].employee_id}></input></td>

                        <td><button onClick={() => updateUser(u.id, index)} >Update</button></td>
                        <td><button onClick={(() => deleteUser(u.id))}>Delete</button></td>
                    </tr>)
                }
                </tbody>

                
            </table>
            <h2>Create new user</h2>
            <div>
                <h3>Login</h3>
                <input type="email" onChange={(e) => setCreateUser({...createUser, login: e.target.value})}></input>
                <h3>Password</h3>
                <input type="text"onChange={(e) => setCreateUser({...createUser, passowrd : e.target.value})} ></input>
                <h3>Role id</h3>
                <input type="number" onChange={(e) => setCreateUser({...createUser, role_id: parseInt(e.target.value)})}></input>
                <h3>Employee id</h3>
                <input type="number" onChange={(e) => setCreateUser({...createUser, employee_id: parseInt(e.target.value)})}></input>

                <button>Create</button>
            </div>
        </div>
    )

}
export default User;