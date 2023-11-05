import {Link} from 'react-router-dom'
import styles from './EmployeeOrderPreview.module.css'
const EmployeeOrderPreview = ({id, description, price, status_id}) => {
    return(
        <Link className={styles.preview} to={`/employee-order/${id}/task`}>
            <div>{description}</div>
            <div>{price}</div>
            <div>{status_id}</div>
        </Link>
    )
}
export default EmployeeOrderPreview;