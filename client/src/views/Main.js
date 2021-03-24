import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import Products from '../components/Products';



function Main() {
  const [ products, setProducts ] = useState(null);
  
  useEffect(()=> {
    axios.get("http://localhost:8000/api/products")
        .then(res=>{
          setProducts(res.data);
        })
        .catch((err)=> {
          console.log(err);
        })
  },[]);

  const addProduct = (newProduct) => {
    axios.post("http://localhost:8000/api/products/new", newProduct)
      .then((response) => setProducts([...products, response.data]))
      .catch((err) => console.log(err))
  }

  const handleDelete = (filteredProducts) => {
    setProducts(filteredProducts)
  }

  return (
    
    <div className="container text-center">
      <h3>Add New Product</h3>
      <ProductForm onSubmitProp={addProduct} initialTitle="" initialPrice="" initialDescription=""/>
      {products && <Products products={products} onDelete={handleDelete}/>}
    </div>
  );
}

export default Main;
