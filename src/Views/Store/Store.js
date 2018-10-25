import React, { Component } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { connect } from "react-redux";
import Card from "../../Components/Card/Card";
import "./Store.css";

class Store extends Component {
  constructor(props) {
    super(props);
    this.getProducts = this.getProducts.bind(this);
  }
  getProducts() {
    let { cat } = this.props.match.params;
    if (cat) {
      let filteredResults = this.props.products.filter(prod => {
        return prod.category === cat;
      });
      return filteredResults;
    } else return this.props.products;
  }

  render() {
    let products = this.getProducts().map(({ id, img_url, title, price }) => (
      <Card key={id} _id={id} img_url={img_url} title={title} price={price} />
    ));
    return (
      <div className="store-container">
        <SideBar />
        <div className="store">{products}</div>
      </div>
    );
  }
}

export default connect(({ products }) => ({ products }))(Store);
