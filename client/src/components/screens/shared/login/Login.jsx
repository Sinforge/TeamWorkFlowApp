import { useContext, useRef, useState } from "react"
import { AuthContext } from "../../../../providers/AuthProvider";
import { authorizeUser } from "../../../../services/user.service";
import styles from './Login.module.css'
const Login = () => {
    const [form, setForm] =  useState({});   
    let errorMessage = useRef(""); 
    const [user, setUser] = useContext(AuthContext);
    const verifyData = async (form) => {
        let response = await authorizeUser(form)
        console.log(response)
        if(response.status === 200) {
            errorMessage.current = ""
            setUser({...user, access_token :response.data.access_token});

            console.log(user.access_token)
        }
        else {
            errorMessage.current = "Incorrect credentials"

        }
    }
    return(
        <div>
            <h2>Enter your login:</h2>
            <input key="login" onChange={e => setForm({...form, login: e.target.value})} />
            <h2>Enter your password:</h2>
            <input key="password"onChange={e=> setForm({...form, password: e.target.value})} />
            <br/>
            <span className={styles.error_span} >{errorMessage.current}</span>
            <button onClick={() =>verifyData(form)}>Login</button>
            
        </div>
    )
}
export default Login;