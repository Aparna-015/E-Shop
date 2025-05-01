import React from "react";
import productImage from "../assets/Images/logo.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <div className="mains-section">
      <div className="logo-section ">
        <Link to="/">
          <img src={productImage} alt="" />
        </Link>
      </div>

      <div className="right-section">
        <Link to="/">Home</Link>

        <button className="button">Login</button>
        <Link to="/cart">🛒 {totalItems}</Link>
      </div>
    </div>
  );
};

export default Header;
