import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="side-bar">
        <Link to="/store/dress" className="categories">
          Dresses
        </Link>
        <Link to="/store/jeans" className="categories">
          Jeans
        </Link>
        <Link to="/store/shirt" className="categories">
          Shirts
        </Link>
        <Link to="/store/shoe" className="categories">
          Shoes
        </Link>
      </div>
    );
  }
}
export default SideBar;
