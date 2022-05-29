import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProductDetails from '../../hooks/useProductDetails';

const Purchase = () => {

    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);


    const { productId } = useParams();
    const [product] = useProductDetails(productId);

    const onSubmit = async (data) => {
        data.productId = productId;
        data.productName = product.name;
        if (data.quantity < parseInt(product.minOrder)) {
            alert(`You have to order minimum ${product.minOrder}`);
            return;
        }
        if (data.quantity > parseInt(product.available)) {
            alert("We don't have Enough quantity");
            return;
        }

        //send data to the server
        const url = 'https://polar-oasis-49483.herokuapp.com/order';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
            })

    };


    return (
        <div className='mt-20 lg:flex'>
            <div className="card lg:w-1/2 m-5 bg-base-100 shadow-xl">
                <img src={product.img} alt="" />
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <h2 className="card-title">Price : {product.price}$</h2>
                    <p>Description : {product.description}</p>
                    <p>Available : {product.available}</p>
                    <p>Minimum Order : {product.minOrder}</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label py-0">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name")} value={user?.displayName} className="input input-bordered w-full max-w-xs" readOnly />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} type="email" value={user.email} className="input input-bordered w-full max-w-xs" readOnly />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Address</span>
                    </label>
                    <input {...register("address")} type="text" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Phone</span>
                    </label>
                    <input {...register("phone")} type="number" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Product</span>
                    </label>
                    <input {...register("productName")} type="text" value={product.name} className="input input-bordered w-full max-w-xs" readOnly/>
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input {...register("quantity")} placeholder='Enter product quantity' type="number" className="input input-bordered w-full max-w-xs" />
                </div>

                <input value='Confirm Order' type='submit' className='btn text-white bg-blue-700 mx-auto mt-5' />



            </form>
        </div>
    );
};

export default Purchase;