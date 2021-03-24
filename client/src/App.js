import React from 'react';
import Main from './views/Main';
import EditProduct from './views/EditProduct';
import Product from './views/Product';
import { Router } from '@reach/router';


function App() {

  return (
    <div className="container">
      <Router>
        <Main path="/" />
        <Product path="/:productId" />
        <EditProduct path="/:productId/edit"/>
      </Router>
    </div>
  );
}

export default App;
