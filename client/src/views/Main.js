import React, { useEffect, useState } from 'react';
import NewProduct from '../components/NewProduct';
import axios from 'axios';
import Products from '../components/Products';



function Main() {
  const [ products, setProducts ] = useState([]);
  const [ loaded, setLoaded ] = useState(false);
  const [ updated, setUpdated ] = useState(false);
  
  useEffect(()=> {
    axios.get("http://localhost:8000/api/products")
        .then(res=>{
            setProducts(res.data);
            setLoaded(true);
        });
  },[]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

  return (
    
    <div className="container">
      <NewProduct onNewProduct={addProduct}/>
      <Products products={products}/>
    </div>
  );
}

export default Main;
