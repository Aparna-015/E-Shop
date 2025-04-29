import React from "react";
import productImage from "../assets/Images/logo.png";
import cart from "../assets/Images/cart.png";
import hero from "../assets/Images/Hero.jpg";
const Home = () => {
  return (
    <div className="main-container">
      <div className="main-section">
        <div className="logo-section">
          <img src={productImage} />
        </div>
        
          <div>
            <a href=""> Home</a>

            <a href=""> about us</a>

            <a href=""> Sign in</a>

            <button>Login</button>
       
          
            <img src={cart} alt="" />
          
        
      </div>
      </div>
      <div className="image-container">
        <img src={hero} alt="" />
      </div>
    </div>
    
  );
};

export default Home;
