import {useState, useEffect} from 'react'
import UpdateProfileForm from './update-profile-form/UpdateProfileForm';
import { LoadPersonalData } from '../../../../services/employee.service';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import styles from './UpdateProfile.module.css'
// const mockProfileData = {
//     id: 1,
//     email: "vlad.vlasov77@mail.ru",
//     address: "Moscow 11-Parkovya 36",
//     health_status_id : 2
// }
const Profile = () => {
    // need to load profile from db
    const [data, setData] = useState([]);
    const axios = useAxiosPrivate();
    useEffect(() => {
        LoadPersonalData(axios).then((response) => {
            setData(response.data)
        })
    }, [])

    return (
        <div className={styles['profile-container']}>
            <h2 className={styles['profile-heading']}>Profile</h2>
            <div className={styles['profile-item']}>
                <span className={styles['profile-item-label']}>Email:</span>
                <span className={styles['profile-item-value']}>{data.email}</span>
            </div>
            <div className={styles['profile-item']}>
                <span className={styles['profile-item-label']}>Address:</span>
                <span className={styles['profile-item-value']}>{data.address}</span>
            </div>
            <div className={styles['profile-item']}>
                <span className={styles['profile-item-label']}>Health Status ID:</span>
                <span className={styles['profile-item-value']}>{data.health_status_id}</span>
            </div>
            <UpdateProfileForm profileData={data} />
         </div>
    )
}
export default Profile;