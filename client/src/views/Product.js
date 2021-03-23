import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
      },[]);

      if (product === null) {
          return "Loading Product from database"
      }

      return (
          <div className="container text-center">
              <h3>{product.title}</h3>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
          </div>
      )
}

export default Product;