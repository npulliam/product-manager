import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import { PromiseProvider } from 'mongoose';
export default (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props
    const [ title, setTitle ] = useState(initialTitle);
    const [ price, setPrice ] = useState(initialPrice);
    const [ description, setDescription ] = useState(initialDescription);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description})
        // const newProduct = {title, price, description}
        // axios.post("http://localhost:8000/api/products/new", newProduct)
        //     .then((response) => props.onNewProduct(newProduct))
        //     .catch((err) => console.log(err))

    }
    return (
        <div>
            <div className="row d-flex text-center justify-content-center">
                <form className="w-50" onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input 
                        type="text" className="form-control"
                        name="title" value={title} 
                        onChange={(e)=>setTitle(e.target.value)}/>
                    <label>Price:</label>
                    <input type="number" step="any" className="form-control" 
                        onChange={(e)=>setPrice(e.target.value)}
                        name="price" value={price}/>
                    <label>Description:</label>
                    <textarea className="form-control" 
                        onChange={(e)=>setDescription(e.target.value)} 
                        cols="10" rows="5"
                        value={description}></textarea>

                    <button type="submit" className="btn btn-dark my-3">Save Product</button>
                </form>
            </div>

        </div>
    )
}
