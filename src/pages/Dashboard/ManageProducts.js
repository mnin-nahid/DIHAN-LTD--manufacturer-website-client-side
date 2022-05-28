import React, { useEffect, useState } from 'react';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className='text-3xl text-center font-bold text-primary'>Manage all products</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product =>
                                <tr>
                                    <td><img className='w-32' src={product.img} alt="" /></td>
                                    <td>{product.name}</td>
                                    <td><button onClick={()=> handleDelete(product._id)} className='btn btn-xs btn-warning'>Delete</button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;