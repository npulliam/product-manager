import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

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

      const deleteProduct = (delId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${delId}`)
            .then((response) => {
                console.log("deleted res:", response)
                navigate("/");
            })
            .catch((err) => console.log(err))
            }
        

      if (product === null) {
          return "Loading Product from database"
      }

      return (
          <div className="container text-center">
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <div className="row d-flex justify-content-center">

                <button className="btn-sm w-25 btn-danger" onClick={(e) => deleteProduct(product._id)}>Delete</button>
                <Link to={`/${product._id}/edit`} className="btn btn-sm w-25 mx-2 btn-dark">Edit</Link>
              </div>
          </div>
      )
}

export default Product;