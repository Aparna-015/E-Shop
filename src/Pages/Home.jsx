import React from "react";
import productImage from "../assets/Images/logo.png";
import cart from "../assets/Images/cartt.png";
import bgimg from "../assets/Images/Background.png";
const Home = () => {
  return (
    <div className="main-container">
      <div className="main-section">
        <div className="logo-section">
          <img src={productImage} />
        </div>

        <div className="right-section">
          <a href=""> Home</a>

          <a href=""> About Us</a>

          <a href=""> Signin</a>

          <button className="button">Login</button>

          <img src={cart} alt="no image" />
        </div>
      </div>
      <div className="hero-section">
        <h1>Endless choices, just for you</h1>
        <button>Explore Products</button>
      </div>

      <div className="img-section">
        <img src={bgimg}/>
      </div>
    </div>
  );
};

export default Home;
