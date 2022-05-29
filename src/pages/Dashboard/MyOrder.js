import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://polar-oasis-49483.herokuapp.com/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        return navigate('/')
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user]);

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://polar-oasis-49483.herokuapp.com/order/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }
    };

    return (
        <div>
            <h2 className='text-2xl text-center font-bold'>Hear is my order</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>PAY / Cancel</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr>
                                    <td>{order.productName}</td>
                                    <td>{order.quantity}</td>
                                    <td><button className='btn btn-xs'>PAY</button> <button onClick={()=>handleDeleteOrder(order._id)} className='btn btn-xs btn-warning'>cancel</button></td>
                                    <td>Processing</td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;