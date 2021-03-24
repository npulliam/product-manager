import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default (props) => {
    // const [ productList, setProductList] = useState([]);
    const deleteProduct = (delId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${delId}`)
            .then((response) => {
                const filteredProducts = props.products.filter((product) => {
                    return product._id !== delId
                })
                props.onDelete(filteredProducts)
            })
            .catch((err) => console.log(err))
        }
 
    const productList = (props.products.map((product) =>{
        return(
            <div>
                <Link to={`/${product._id}`}key={product._id}>{product.title}</Link>
                <button className="btn-sm btn-danger" onClick={(e) => deleteProduct(product._id)}>Delete</button>
            </div>
            )   
        }));


    return(
        <div className="m-3 border-top pt-5 text-center">
            <div className="row">
                <h3>All Products</h3>

                {productList}
            </div>

        </div>
    )
}