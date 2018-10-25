import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../redux/reducer";
import axios from "axios";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.products.find(
        c => c.id == this.props.match.params.id
      ),
      quantity: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }
  componentDidMount(prevProps, prevState) {
    if (!this.state.product) {
      this.props.getProducts().then(res => {
        this.setState({
          product: this.props.products.find(
            c => c.id == this.props.match.params.id
          )
        });
      });
    }
  }

  handleChange(e) {
    this.setState({ quantity: +e.target.value });
  }

  addToCart() {
    axios
      .post("/api/cart", {
        product: this.state.product,
        quantity: this.state.quantity
      })
      .then(cart => {
        console.log("cart: ", cart);
        this.props.history.push("/store");
      })
      .catch(console.warn);
  }

  render() {
    if (!this.state.product) return <div>...loading</div>;
    let { id, img_url, category, title, price, desc } = this.state.product;
    return (
      <div className="product">
        <div className="prod-image">
          <img src={img_url} alt="" />
        </div>
        <div className="prod-details">
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>${price}</p>
          <div>
            <input
              onChange={this.handleChange}
              className="form-items"
              type="number"
              placeholder="Quantity"
            />
            <br />
            <button onClick={this.addToCart} className="form-items">
              AddToCart
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  s => s,
  { getProducts }
)(Product);
