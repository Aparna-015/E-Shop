import React from "react";
import products from "../Constant/data";
import { addTocart } from "../Redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Productdetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const product = products.find((item) => item.id === parseInt(id));

  const cartItems = useSelector((state) => state.cart.items);

  const existingItem = cartItems.find((item) => item.id === product.id);

  if (!products) {
    return <h1> Product not found</h1>;
  }

  const handleitems = () => {
    if (existingItem) {
      alert("item already in cart");
    } else {
      dispatch(addTocart(product));
    }
  };
  return (
    <>
      <Link to="/product">
        <button className="buttn-products">Back to products</button>
      </Link>

      <div className="product-wrapper">
        <div className="products-items">
          <div className="product-image-section">
            <img src={product.image} alt="" />
          </div>

          <div className="products-list-section">
            <h1>{product.title}</h1>

            <h2> ₹{product.price}</h2>
            <h3>{product.description}</h3>
          </div>
        </div>
        <div className="btn-section">
          <Link to="/cart">
            <button onClick={handleitems}>AddToCart</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Productdetails;
