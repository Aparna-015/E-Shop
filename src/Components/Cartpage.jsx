import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../Redux/CartSlice';

const Cartpage = () => {


    const {items,amount}= useSelector((state)=>state.cart);
    const dispatch =useDispatch()
  return (
    <div>
        
<h2> Cart</h2>

{items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <img src={item.image}/>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <p>Qty: {item.quantity}</p>
            <button onClick={() => dispatch(decrement(item.id))}>-</button>
            <button onClick={() => dispatch(increment(item.id))}>+</button>
          </div>
        ))
      )}
      <h3>Total: ₹{amount}</h3>
    </div>
  )
}

export default Cartpage