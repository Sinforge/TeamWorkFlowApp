import {useState} from 'react'

const UpdateProfileForm = ({profileData}) => {
    const [form, setForm] = useState(profileData);
    return (
        <div>
            <h1>Update profile</h1>
            <h2>Change email</h2>
            <input value={profileData.email} onChange={e => setForm({...form, email : e.target.value})}/>
            <h2>Change address</h2>
            <input value={profileData.address} onChange={e => setForm({...form, address: e.target.value})}/>
            <h2>Change health status id</h2>
            <input value={profileData.health_status_id} onChange={e => setForm({...form, health_status_id : e.target.value})}/>
            <button>Save changes</button>
        </div>
    )
}
export default UpdateProfileForm;