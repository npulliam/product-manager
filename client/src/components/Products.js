import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
export default (props) => {
    // const [ productList, setProductList] = useState([]);
 
    const productList = (props.products.map((product) =>{
            return <Link to={`/${product._id}`}key={product._id}>{product.title}</Link>
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