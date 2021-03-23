import React from 'react';
import Main from './views/Main';
import Product from './views/Product';
import { Router } from '@reach/router';


function App() {

  return (
    <div className="container">
      <Router>
        <Main path="/" />
        <Product path="/:productId" />
      </Router>
    </div>
  );
}

export default App;
