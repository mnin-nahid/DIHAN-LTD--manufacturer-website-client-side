import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetch('https://polar-oasis-49483.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data.reverse()))
    },[])

    const lastProducts = products.slice(0, 6);

    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-5 mt-10'>Our Products</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto'>
                {
                    lastProducts.map(product => <Product key={products._id} product={product}></Product>)
                }
                
            </div>
        </div>
    );
};

export default Products;