import React, { useEffect, useState } from 'react'
import './userData.css';
import {useNavigate, useParams} from "react-router-dom";
// import axios from 'axios'

export const UserData = () => {

    const [users , setUsers] = useState([])
    let navigate = useNavigate();
    const {userId} = useParams();

    console.log(userId)

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => setUsers(data.data))
        .catch(error => console.error(error));
        }, []);
    
        
        return (
            <div className='container'>
                <h1>Users</h1>
                <div className="userDetails">
                {users.map(user => (
                <div className="userCard" key={user.id} onClick={() => navigate("/user/"+user.id)}>
                    <img src={user.avatar} alt={user.first_name} className='userImg' />
                    <h2>{user.first_name}</h2>
                    <h4>{user.email}</h4>
                </div>
                ))}
                </div>
            </div>
        )

}

export default UserData