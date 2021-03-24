import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import ProductForm from '../components/ProductForm';
import { PromiseProvider } from 'mongoose';
export default (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + props.productId)
            .then((response) => {
                console.log("product retrieved from db");
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    const handleSubmit = (updatedProduct) => {
        console.log(updatedProduct)
        axios.put("http://localhost:8000/api/products/update/" + props.productId, updatedProduct)
            .then((response) => {
                console.log("product added: ", response.data)
                navigate("/"+ props.productId)               
            })
            .catch((err) => console.log(err))

    }
    return (
        <div>
            <div className="row d-flex text-center justify-content-center">
                <h4>Edit Product</h4>
                {description && <ProductForm onSubmitProp={handleSubmit} initialTitle={title} initialPrice={price} initialDescription={description}/>}
            </div>

        </div>
    )
}
