import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"
import { jwtDecode } from "jwt-decode"
const Header = () => {
    const [user, setUser] = useContext(AuthContext)
    const isUserLoggedIn = user.access_token !== undefined && user.access_token != null
    //get user role from jwt
    
    let userRole = null;
    if (isUserLoggedIn) {
        userRole = jwtDecode(user.access_token)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
    }
    console.log(userRole)
    return(
        
            <div className={styles.navbar}>
                <Link className={styles.link}to="/">Home </Link>
                {!isUserLoggedIn &&(

                <>
                    <Link className={styles.link}to="/login">Login</Link>
                    <Link className={styles.link}to="/registration">Registration</Link>
                </>
                )}
                 {userRole === "User" && (
                <>
                    <Link className={styles.link}to="/create-order">Create order</Link>
                    <Link className={styles.link}to="/order">Get my orders</Link>
                </>
                 )}
                 {userRole === "Employee" && (
                <>
                    <Link className={styles.link}to="/employee-order">Get employee orders</Link>
                    <Link className={styles.link}to="/profile">Profile</Link>
                </>)}
                {userRole === "Admin" && (
                <>
                    <Link className={styles.link} to="/admin/contract">Contracts</Link>
                    <Link className={styles.link} to="/admin/employee">Employee</Link>
                    <Link className={styles.link} to="/admin/order">Orders</Link>
                    <Link className={styles.link} to="/admin/personal-data">Personal data</Link>
                    <Link className={styles.link} to="/admin/specializations">Specializations</Link>
                    <Link className={styles.link} to="/admin/tasks">Tasks</Link>
                    <Link className={styles.link} to="/admin/user">Users</Link>
                    <Link className={styles.link} to="/admin/employee-orders">Employee - Orders</Link>
                </>)}
                {isUserLoggedIn && (
                <button classNAme={styles.button}onClick={() => setUser({...user, access_token : null})}>Logout</button>
                )}

            </div>
    )
}

export default Header;