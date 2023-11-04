import {Link} from 'react-router-dom'
import styles from './OrderPreview.module.css'
const OrderPreview = ({id, description, price, status_id}) => {
    return(
        <Link className={styles.preview} to={`/order/${id}`}>
            <div>{description}</div>
            <div>{price}</div>
            <div>{status_id}</div>
        </Link>
    )
}
export default OrderPreview;