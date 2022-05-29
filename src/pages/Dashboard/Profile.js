import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-3xl text-center text-primary font-bold'>Your Profile</h1>
            <div className='text-center border-2 bg-base-200 py-5  rounded-3xl'>
                <div tabindex="0" className="avatar mx-auto">
                    <div className="w-36 rounded-2xl">
                        <img src={user.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt='' />
                    </div>
                </div>
                <h2 className='font-bold'>Name: {user.displayName}</h2>
                <h3 className='font-bold'>Email: {user.email}</h3>
            </div>
        </div>
    );
};

export default Profile;