import React from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../../hooks/useProductDetails';

const Purchase = () => {

    const {productId} = useParams();
    const [product] = useProductDetails(productId);
    console.log(productId);


    return (
        <div className='mt-16'>
            <h2 className='text-4xl'>Purchase Hear : {product.name}</h2>
        </div>
    );
};

export default Purchase;