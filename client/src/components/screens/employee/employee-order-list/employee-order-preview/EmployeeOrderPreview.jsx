import {Link} from 'react-router-dom'
import styles from './EmployeeOrderPreview.module.css'
const EmployeeOrderPreview = ({id, description, price, stage_id}) => {
    return(
        <Link className={styles.preview} to={`/employee-order/${id}/task`}>
            <div className={styles.stage_id}>{stage_id}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.price}>{price}</div>
        </Link>
    )
}
export default EmployeeOrderPreview;