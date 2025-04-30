import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../Constant/data";

const Productdetails = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));

  if (!products) {
    return <h1> Product not found</h1>;
  }

  return (
    <div className="products-items">
        
      <img src={product.image} alt=""/>
      <h1>{product.title}</h1>

      <h2> ₹{product.price}</h2>
      <h3>{product.description}</h3> 
      <button>AddToCart</button>
    </div>
  );
};

export default Productdetails;
