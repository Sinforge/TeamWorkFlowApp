import { useState } from "react"
import { registerUser } from "../../../../services/user.service"
const Registration = () => {
    const [form, setForm] = useState({})
    const registerResult = async (form) => {
        let result = await registerUser(form);
        console.log(result);
    }
    return (
        <div>
            <h3>Your login</h3>
            <input key="login" onChange={e=> setForm({...form, login: e.target.value})}></input>
            <h3>Your password</h3>
            <input key="password" onChange={e=> setForm({...form, password: e.target.value})}></input>
            <br/>
            <button onClick={() => registerResult(form)}>Register</button>
        </div>
    )
}
export default Registration;
