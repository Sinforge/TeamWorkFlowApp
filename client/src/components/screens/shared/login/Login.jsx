import { useContext, useState } from "react"
import { AuthContext } from "../../../../providers/AuthProvider";
import { authorizeUser } from "../../../../services/user.service";


const Login = () => {
    const [form, setForm] =  useState({});    
    const [user, setUser] = useContext(AuthContext);
    // const verifyData = async (form) => {
    //     let response = authorizeUser(form)
    //     if(response.status === 200) {
    //         user.access_token = response.data.access_token;
    //     }
    //     else {
    //         //do something
    //     }
    // }
    return(
        <div>
            <h2>Enter your login:</h2>
            <input key="login" onChange={e => setForm({...form, login: e.target.value})} />
            <h2>Enter your password:</h2>
            <input key="password"onChange={e=> setForm({...form, password: e.target.value})} />
            <br/>
            <button>Login</button>
            
        </div>
    )
}
export default Login;