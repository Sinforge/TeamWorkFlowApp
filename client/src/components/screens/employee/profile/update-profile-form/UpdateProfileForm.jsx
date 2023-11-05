import {useEffect, useState} from 'react'
import useAxiosPrivate from '../../../../../hooks/useAxiosPrivate';
import { UpdatePersonalData } from '../../../../../services/employee.service';

const UpdateProfileForm = ({profileData}) => {
    const [form, setForm] = useState({...profileData});
    useEffect(() => {
        setForm({...profileData})
    },[profileData])
    const axios = useAxiosPrivate();
    console.log(form)
    return (
        <div>
            <h1>Update profile</h1>
            <h2>Change email</h2>
            <input value={form.email} onChange={e => setForm({...form, email : e.target.value})}/>
            <h2>Change address</h2>
            <input value={form.address} onChange={e => setForm({...form, address: e.target.value})}/>
            <h2>Change health status id</h2>
            <input value={form.health_status_id} onChange={e => setForm({...form, health_status_id : e.target.value})}/>
            <button onClick={() => UpdatePersonalData(axios, form)}>Save changes</button>
        </div>
    )
}
export default UpdateProfileForm;