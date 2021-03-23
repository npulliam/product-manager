import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { PromiseProvider } from 'mongoose';
export default (props) => {
    const [ title, setTitle ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newProduct = {title, price, description}
        axios.post("http://localhost:8000/api/products/new", newProduct)
            .then((response) => props.onNewProduct(newProduct))
            .catch((err) => console.log(err))

    }
    return (
        <div>
            <div className="row d-flex text-center justify-content-center">
                <h4>Add New Product</h4>
                <form className="w-50"onSubmit={(e) => {handleSubmit(e)}}>
                    <label>Title:</label>
                    <input type="text" className="form-control" onChange={(e)=>setTitle(e.target.value)}/>
                    <label>Price:</label>
                    <input type="number" step="any" className="form-control" onChange={(e)=>setPrice(e.target.value)}/>
                    <label>Description:</label>
                    <textarea className="form-control" onChange={(e)=>setDescription(e.target.value)} cols="10" rows="5"></textarea>

                    <button type="submit" className="btn btn-dark my-3">Add Product</button>
                </form>
            </div>

        </div>
    )
}
