import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data) => {

        console.log(data);
        //send data to the server
        const url = 'http://localhost:5000/product';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })

    };
    return (
        <div>
            <h2 className='text-2xl text-center text-primary font-bold'>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="form-control w-full max-w-xs">
                    <label class="label py-0">
                        <span class="label-text">Product Name :</span>
                    </label>
                    <input type="text" {...register("name")} class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full">
                    <label class="label py-0">
                        <span class="label-text">Price : </span>
                    </label>
                    <input {...register("price")} type="number"  class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full">
                    <label class="label py-0">
                        <span class="label-text">Quantity : </span>
                    </label>
                    <input {...register("available")} type="number" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full">
                    <label class="label py-0">
                        <span class="label-text">Minimun quantity for order :</span>
                    </label>
                    <input {...register("minOrder")} type="number" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full">
                    <label class="label py-0">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea {...register("description")}  type="text" class="input input-bordered w-full max-w-xs" />
                </div>

                <div class="form-control w-full">
                    <label class="label py-0">
                        <span class="label-text">Image : </span>
                    </label>
                    <input {...register("img")} placeholder='Add product img URL' type="text" class="input input-bordered w-full max-w-xs" />
                </div>

                <input value='Add Product' type='submit' className='btn text-white bg-blue-700 mx-auto mt-5' />



            </form>
        </div>
    );
};

export default AddProduct;