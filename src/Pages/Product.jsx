import React from "react";
import products from "../Constant/data";

const Product = () => {

    
  return (
    <div className="products-list">
     
      {products.map((item) => (
        <div key={item.id}  className="product-items">
          <img src={item.image} alt="no image" />
          <h3>{item.title}</h3>
          <h4>₹{item.price}</h4>
          <button>View Details</button>
         

        </div>
      ))}
    </div>
      

    
  );
};

export default Product;
