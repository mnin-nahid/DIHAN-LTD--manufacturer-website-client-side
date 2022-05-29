import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user, loading] = useAuthState(auth);
    const [profile, setProfile] = useState({
        name: '',
        phone: '',
        address: '',
    });
    const [data, setData] = useState({
        name: '',
        phone: '',
        address: ''
    });


    const getProfile = async (email) => {
        try{
            const res = await fetch(`http://localhost:5000/user/profile/${email}`, {
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            setProfile(data);
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        if (!loading) {
            getProfile(user.email);
        }
    }, [loading]);

    const handleChange = (e) => { 
        setData({
            ...data,
            [e.target.id]: e.target.value
        })
    }
    const updateProfile = async (e) => {
        e.preventDefault();
        try {
            fetch(`http://localhost:5000/update/${user.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(data)
            }
            ).then((res) => {
                res.json()
            }).then((data) => {
                console.log(data)
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <form onSubmit={updateProfile}>
                                <div class="mb-6">
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                    <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required value={data.name} onChange={handleChange} />
                                </div>
                                <div class="mb-6">
                                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edit Phone</label>
                                    <input type="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="+xx xxxx xxxxx" value={data.phone} 
                                    onChange={handleChange}/>
                                </div>
                                <div class="mb-6">
                                    <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Edit Address</label>
                                    <input type="address" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John doe apartment, jane road, USA" required value={data.address} onChange={handleChange} />
                        </div>
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Close</label>
    </div>
  </div>
</div>
        <div className='w-11/12 mx-auto'>

            <h1 className='text-3xl text-center text-primary font-bold'>Your Profile</h1>
            <div className='text-center border-2 bg-base-200 py-5  rounded-3xl'>
                <div tabindex="0" className="avatar mx-auto">
                    <div className="w-36 rounded-2xl">
                        <img src={user.photoURL || "https://api.lorem.space/image/face?hash=33791"} alt='' />
                    </div>
                </div>
                <h2 className='font-bold'>Name: {profile?.name || user.displayName }</h2>
                    <h3 className='font-bold'>Email: {user?.email}</h3>
                    <h3 className='font-bold'>Phone: {profile?.phone}</h3>
                    <h3 className='font-bold'>Address: {profile?.address}</h3>
                
                    <label for="my-modal-6" class="btn modal-button">open modal</label>
            </div>


        </div>
        </>
    );
};

export default Profile;