import React, { Component } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { connect } from "react-redux";
import Card from "../../Components/Card/Card";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.goTo = this.goTo.bind(this);
  }
  goTo() {
    this.props.history.push("/store");
  }
  render() {
    let prods = this.props.products
      .filter(product => product.sale)
      .map(prods => (
        <Card
          key={prods.id}
          _id={prods.id}
          img_url={prods.img_url}
          title={prods.title}
          price={prods.price}
        />
      ));
    return (
      <div className="home-container">
        <SideBar />
        <div className="home">
          <div onClick={this.goTo} className="img-container" />
          <div className="card-container">{prods}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ products }) {
  return { products };
}
export default connect(mapStateToProps)(Home);
