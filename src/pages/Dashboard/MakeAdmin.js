import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://polar-oasis-49483.herokuapp.com/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    const makeAdmin = (email) => {
        fetch(`https://polar-oasis-49483.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert('Operation Faild');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('make admin successfull');
                }
            })
    }


    return (
        <div>
            <h2 className='text-3xl text-center text-primary font-bold'>Make Admin : {users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>User Email</th>
                            <th>Promote</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user =>
                                <tr>
                                    <td>{user.email}</td>
                                    <td>{user.role !== 'admin' &&
                                    <button className="btn btn-xs" onClick={() => makeAdmin(user.email)}>Make Admin</button>}</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;