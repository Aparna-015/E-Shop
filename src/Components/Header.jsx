import React from 'react'
import productImage from "../assets/Images/logo.png";
import cart from "../assets/Images/cartt.png";
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='mains-section'>
        

          <div className="logo-section ">
        <img src={productImage} alt=""/>

                  </div>
        
                  <div className="right-section">
                    <a href=""> Home</a>
        
                    <a href=""> About Us</a>
        
                    <a href=""> Signin</a>
        
                    <button className="button">Login</button>
                    <img src={cart} alt="no " />
                  </div>
    </div>
  )
}

export default Header