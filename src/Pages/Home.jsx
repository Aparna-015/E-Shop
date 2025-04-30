import React from "react";

import bgimg from "../assets/Images/Background.png";
import speaker from "../assets/Images/speaker.png";
import LAPTOP from "../assets/Images/LAPTOP.png";
import DSLR from "../assets/Images/DSLR.png";
import canon from "../assets/Images/canon.png";
import symbol from "../assets/Images/Symbol.png";
import icon from "../assets/Images/symbols.png";
import devicon from "../assets/Images/deliver-icons.png";
import crwnicon from "../assets/Images/crown-icon.png";
import warrantyicon from "../assets/Images/Warranty.png";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="main-section"></div>
        <div className="hero-section">
          <h1>Endless choices, just for you</h1>

          <Link to="/product">
            <button>Explore Products</button>
          </Link>
        </div>

        <div className="img-section">
          <img src={bgimg} alt="" />
        </div>
        <div className="explore-section">
          <h1>Explore Our Products</h1>
        </div>
      </div>

      <div className="head-section">
        <h1>Handpicked collections just for you</h1>
      </div>

      <div className="product-container">
        <div className="prdt-img1-section">
          <img src={speaker} alt="" />
          <div className="prdt-head-section">
            <h1>Speaker</h1>
            <h1>(6 items)</h1>
          </div>
        </div>
        <div className="prdt-img2-section">
          <img src={LAPTOP} alt="" />
          <div className="prdts-head-section">
            <h1>Desktop & laptop</h1>
            <h1>(6 items)</h1>
          </div>
        </div>
        <div className="prdt-img3-section">
          <img src={DSLR} alt="" />
          <div className="prdtss-head-section">
            <h1>DSLR camera</h1>
            <h1>(6 items)</h1>
          </div>
        </div>
        <div className="prdt-img4-section">
          <img src={LAPTOP} alt="" />
          <div className="prodt-head-section">
            <h1>Laptop</h1>
            <h1>(6 items)</h1>
          </div>
        </div>
      </div>

      <div className="image-view-container">
        <div className="img-container">
          <img src={canon} alt="" />
        </div>
        <div className="prdt-info-container">
          <h1>Canon camera</h1>
          <h2>
            {" "}
            We are committed to providing our customers with exceptional
            service, competitive pricing, and a wide range of.
          </h2>

          <div className="img-icon-section">
            <img src={symbol} alt="" />

            <h3>
              We are the UK’s largest provider, with more patrols in more places
            </h3>
          </div>
          <button>Shop Now</button>
        </div>
      </div>

      {/* <div className="section">

  <div className="dev-section">
    <div><img src={devicon}/></div>
    <div>

      <h1>Free delivery</h1>
      <h1>on order above $50,00</h1>
    </div>

  </div>

  <div className="crt-section">
    <div>
    <img src={crwnicon}/>
    </div>
<div>
  <h1>Best quality </h1>
  <h1>best quality in low price</h1>
</div>
  </div>

<div className="qlty-section">
<div>
  <img src={warrantyicon}/>
</div>
<div>
  <h1>1 year warranty</h1>
  <h1>Avaliable warranty</h1>
</div>
</div>
</div> */}
    </div>
  );
};

export default Home;
