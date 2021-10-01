import React, { Component } from 'react';
import axios from 'axios';


export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seller: '',
      address: '',
      description: '',
      colour: '',
      products: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/products/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            products: response.data,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeSeller=(e)=> {
    this.setState({
      seller: e.target.value
    })
  }

  onChangeDescription=(e)=> {
    this.setState({
      description: e.target.value
    })
  }

  onChangeAddress=(e)=> {
    this.setState({
      address: e.target.value
    })
  }

  onChangeColour=(e)=> {
    this.setState({
      colour: e.target.value
    })
  }

  onSubmit=(e)=> {
    e.preventDefault();

    const product = {
      seller: this.state.seller,
      address: this.state.address,
      description: this.state.description,
      colour: this.state.colour
    }

    console.log(product);

    axios.post('http://localhost:3001/products/add', product)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create Product details</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Seller Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.seller}
              onChange={this.onChangeSeller}
              />
        </div>
        <div className="form-group"> 
          <label>Address: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeAddress}
              />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>colour: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.colour}
              onChange={this.onChangeColour}
              />
          
        </div>

        <div className="form-group">
          <input type="submit" value="Create Product details" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}