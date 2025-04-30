import React from 'react'
import productImage from "../assets/Images/logo.png";
import { useSelector } from 'react-redux';
const Header = () => {

    const totalItems = useSelector((state) =>
        state.cart.items.reduce((total, item) => total + item.quantity, 0)
      );
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
                    {/* <img src={cart} alt="no " /> */}
                    🛒 {totalItems}
                  </div>
    </div>
  )
}

export default Header