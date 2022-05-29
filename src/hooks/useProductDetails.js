import { useEffect, useState } from "react"

const useProductDetails = id => {
    const [product, setProduct] = useState({});


    useEffect(() => {
        const url = `https://polar-oasis-49483.herokuapp.com/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    return [product];
}

export default useProductDetails;