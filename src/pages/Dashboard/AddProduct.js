import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data) => {
        //send data to the server
        const url = 'https://polar-oasis-49483.herokuapp.com/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    };
    return (
        <div className='w-2/3 mx-auto bg-base-200 p-5 '>
            <h2 className='text-2xl text-center text-primary font-bold'>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='text-center'>

                <div className="form-control w-full max-w-xs">
                    <label className="label py-0">
                        <span className="label-text">Product Name :</span>
                    </label>
                    <input type="text" {...register("name")} className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Price : </span>
                    </label>
                    <input {...register("price")} type="number"  className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Quantity : </span>
                    </label>
                    <input {...register("available")} type="number" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Minimun quantity for order :</span>
                    </label>
                    <input {...register("minOrder")} type="number" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea {...register("description")}  type="text" className="input input-bordered w-full max-w-xs" />
                </div>

                <div className="form-control w-full">
                    <label className="label py-0">
                        <span className="label-text">Image : </span>
                    </label>
                    <input {...register("img")} placeholder='Add product img URL' type="text" className="input input-bordered w-full max-w-xs" />
                </div>

                <input value='Add Product' type='submit' className='btn text-white bg-blue-700 mx-auto mt-5' />



            </form>
        </div>
    );
};

export default AddProduct;