import React, { Component } from "react";
import "./NavBar.css";
import { getProducts } from "../../redux/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div className="Nav">
        <Link to="/" className="logo">
          UpShirtCreek
        </Link>
        <div className="links">
          <Link to="/cart" className="cart">
            Cart
          </Link>
          <a href={`${process.env.REACT_APP_SERVER}/login`} className="login">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getProducts }
)(NavBar);
