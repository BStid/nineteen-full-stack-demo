import React, { Component } from "react";
import axios from "axios";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    axios.get("/api/cart").then(({ data }) => {
      this.setState({ cart: data });
    });
  }

  render() {
    let products = this.state.cart.map(product => (
      <div className="cart-product" key={product.id}>
        <span>{product.title}</span>
        <span>{product.quantity}</span>
        <span>{product.price}</span>
        <span>total: {product.quantity * product.price}</span>
      </div>
    ));
    let total = this.state.cart.reduce((acc, prod) => {
      return acc + prod.quantity * prod.price;
    }, 0);
    console.log("total: ", total);
    return (
      <div className="cart-container">
        {products}
        <div>Total: {total}</div>
      </div>
    );
  }
}
export default Cart;
