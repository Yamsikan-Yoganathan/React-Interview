import React, { useState, useEffect } from 'react'
import './userInfo.css';
import './UserData'
import {useNavigate, useParams} from "react-router-dom";

export const UserInfo = ({ match }) => {
    const [user, setUser] = useState(null);
    const {userId} = useParams();
    let navigate = useNavigate();



    useEffect(() => {
        fetch( `https://reqres.in/api/users/${userId}`)
        .then(response => response.json())
        .then(data => setUser(data.data))
        .catch(error => console.error(error));
        },  [userId]);

    const handleBack = () => {
        navigate("/");
        // history.goBack();
    };
        
  return (
    <div className='container'>
        <div className='backBtn' onClick={handleBack}>Back</div>
        <div className="UserInfo">
            {user ? (
            <>
                <img src={user.avatar} alt={user.first_name} />

                <div className='details'>
                    <div className='fname userDetail'>
                        <h2>First Name</h2>
                        <p>{user.first_name}</p>
                    </div>

                    <div className='lname userDetail'>
                        <h2>Last Name</h2>
                        <p>{user.last_name}</p>
                    </div>

                    <div className='email userDetail'>
                        <h2>Email</h2>
                        <p>{user.email}</p>
                    </div>
                </div>
                
            </>
            ) : (
            <p>Loading user information...</p>
            )}
        </div>

    </div>
    
  )
}
