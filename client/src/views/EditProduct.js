import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { PromiseProvider } from 'mongoose';
export default (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ product, setProduct ] = useState(null);
    
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + props.productId)
            .then((response) => {
                console.log("product retrieved from db");
                setTitle(response.data.title);
                setPrice(response.data.price);
                setDescription(response.data.description);
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedProduct = {title, price, description}
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
                <h4>Add New Product</h4>
                <form className="w-50"onSubmit={(e) => {handleSubmit(e)}}>
                    <label>Title:</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <label>Price:</label>
                    <input type="number" step="any" className="form-control" value={price} onChange={(e)=>setPrice(e.target.value)}/>
                    <label>Description:</label>
                    <textarea className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)} cols="10" rows="5"></textarea>

                    <button type="submit" className="btn btn-dark my-3">Edit Product</button>
                </form>
            </div>

        </div>
    )
}
