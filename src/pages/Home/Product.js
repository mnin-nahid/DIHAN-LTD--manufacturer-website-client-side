import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();

    const handleOrder = id => {
    navigate(`purchase/${id}`)
}
return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={product.img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
                <p>Available: {product.available}</p>
                <p>Minimum Order: {product.minOrder}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleOrder(product._id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
);
};

export default Product;