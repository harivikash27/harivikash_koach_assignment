import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import CreateProduct from './components/create-product.component';
import ProductList from './components/product-list.component';
import EditProduct from './components/edit-product.component';

function App() {
  return (
    <Router>
      <div className="container">
      <Route path="/" exact component={ProductList}/>
      <Route path="/add"  component={CreateProduct} />
      <Route path="/edit/:id" component={EditProduct} />
      </div>
    </Router>
  );
}

export default App;