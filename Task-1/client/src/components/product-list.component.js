import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product = props => (
  <tr>
    <td>{props.product.seller}</td>
    <td>{props.product.address}</td>
    <td>{props.product.description}</td>
    <td>{props.product.colour}</td>
    <td>
      <Link to={"/edit/"+props.product._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProductList extends Component {
  constructor(props) {
    super(props);


    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct=(id)=> {
    axios.delete('http://localhost:3001/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.products.map(currentProduct => {
      return <Product product={currentProduct} deleteProduct={this.deleteProduct} key={currentProduct._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Product details</h3>
        <br/>
        <input type="submit" value="Add new product Details" className="btn btn-primary" onClick={()=>window.location="/add"}/>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Seller</th>
              <th>Address</th>
              <th>Description</th>
              <th>Colour</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.productList() }
          </tbody>
        </table>
      </div>
    )
  }
}