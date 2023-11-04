import { useState } from "react"

const Registration = () => {
    const [form, setForm] = useState({})
    console.log(form)
    return (
        <div>
            <h3>Your login</h3>
            <input key="login" onChange={e=> setForm({...form, login: e.target.value})}></input>
            <h3>Your password</h3>
            <input key="password" onChange={e=> setForm({...form, login: e.target.value})}></input>
            <br/>
            <button>Register</button>
        </div>
    )
}
export default Registration;
