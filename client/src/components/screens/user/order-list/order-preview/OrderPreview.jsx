import {Link} from 'react-router-dom'
import styles from './OrderPreview.module.css'
const OrderPreview = ({id, description, price, stage_id}) => {
    return(
        <Link className={styles.preview} to={`/order/${id}`}>
            <div>{stage_id}</div>
            <br/>
            <div>{description}</div>
            <div>{price}</div>
        </Link>
    )
}
export default OrderPreview;