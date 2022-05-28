import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className='text-3xl text-center text-primary font-bold'>Your Profile</h1>
            <div>
                <h2>Name: {user.displayName}</h2>
                <h3>Email: {user.email}</h3>
            </div>
        </div>
    );
};

export default Profile;