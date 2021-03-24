import React, { useState } from 'react';
import axios from 'axios';

export default (props) => {
    const { productId, successCallback } = props;

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/products/delete/${productId}`)
            .then((response) => {
                console.log(`product with id: ${productId} removed from database`)
                successCallback();                
            })
            .catch((err) => console.log(err))
        }

    return (
        <button className="btn-sm btn-danger" onClick={deleteProduct}>Delete</button>
    )
}