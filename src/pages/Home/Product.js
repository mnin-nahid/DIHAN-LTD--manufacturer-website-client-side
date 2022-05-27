import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();

    const handleOrder = id => {
    navigate(`purchase/${id}`)
}
return (
    <div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={product.img} alt="" /></figure>
            <div class="card-body">
                <h2 class="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Available: {product.available}</p>
                <p>Minimum Order: {product.minOrder}</p>
                <div class="card-actions justify-end">
                    <button onClick={() => handleOrder(product._id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
);
};

export default Product;