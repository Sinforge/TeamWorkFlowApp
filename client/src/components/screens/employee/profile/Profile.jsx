import {useState, useEffect} from 'react'
import UpdateProfileForm from './update-profile-form/UpdateProfileForm';
import { LoadPersonalData } from '../../../../services/employee.service';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
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
        <div>
            <div>{data.email}</div>
            <div>{data.address}</div>
            <div>{data.health_status_id}</div>
            <UpdateProfileForm profileData={data}/>
        </div>
    )
}
export default Profile;