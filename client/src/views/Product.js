import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';
import DeleteButton from '../components/DeleteButton';

function Product(props) {
    const [product, setProduct] = useState(null);
    useEffect(()=> {
        axios
            .get(`http://localhost:8000/api/products/${props.productId}`)
            .then(res=>{
                console.log("get product by id", res)
                setProduct(res.data);
            })
            .catch(err=>{
                console.log(err)
            });
      },[props.productId]);

    const handleDelete = (e) => {
        navigate("/");
    }
        

    if (product === null) {
          return "Loading Product from database"
    }

    return (
        <div className="container text-center">
            <h3>{product.title}</h3>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <div className="d-flex justify-content-center">
                <DeleteButton productId={product._id} successCallback={handleDelete}/>
                <Link to={`/${product._id}/edit`} className="btn-sm mx-2 btn-link btn-dark">Edit</Link>
            </div>
        </div>
    )
}

export default Product;