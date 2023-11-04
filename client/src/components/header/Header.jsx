import { Link } from "react-router-dom"
import styles from "./Header.module.css"
const Header = () => {
    return(
        
            <div className={styles.navbar}>
                <Link className={styles.link}to="/">Home </Link>
                <Link className={styles.link}to="/login">Login</Link>
                <Link className={styles.link}to="/registration">Registration</Link>
                <Link className={styles.link}to="/create-order">Create order</Link>
                <Link className={styles.link}to="/order">Get my orders</Link>
                <Link className={styles.link}to="/employee-order">Get employee orders</Link>
                <Link className={styles.link}to="/profile">Profile</Link>
            </div>
    )
}
export default Header;