import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from '../components/DeleteButton';
export default (props) => {
    const [ productList, setProductList ] = useState(null)
    console.log(props.products)
    const updateOnDelete = (delId) => {
        const filteredProducts = props.products.filter((product) => {
            return product._id !== delId
        });
        props.onDelete(filteredProducts);             
    }
 
    useEffect(() => {
        const updatedProdList = props.products.map((product) =>{
        return(
            <div key={product._id}>
                <Link to={`/${product._id}`}>{product.title}</Link>
                <DeleteButton productId={product._id} successCallback={()=>updateOnDelete(product._id)}/>
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