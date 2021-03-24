import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default (props) => {
    const [ productList, setProductList ] = useState(null)
    console.log(props.products)
    const deleteProduct = (delId) => {
        axios.delete(`http://localhost:8000/api/products/delete/${delId}`)
            .then((response) => {
                const filteredProducts = props.products.filter((product) => {
                    return product._id !== delId
                });
                props.onDelete(filteredProducts);                
            })
            .catch((err) => console.log(err))
        }
 
    useEffect(() => {
        const updatedProdList = props.products.map((product) =>{
        return(
            <div key={product._id}>
                <Link to={`/${product._id}`}>{product.title}</Link>
                <button className="btn-sm btn-danger" onClick={(e) => deleteProduct(product._id)}>Delete</button>
            </div>
            )   
        })
        setProductList(updatedProdList);
    }, [props.products]);

    return(
        <div className="m-3 border-top pt-5 text-center">
            <div className="row">
                <h3>All Products</h3>

                {productList}
            </div>

        </div>
    )
}