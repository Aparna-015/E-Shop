import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Redux/CartSlice";

const Cartpage = () => {
  const { items, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        items.map((item) => (
          <div key={item.id} className="cart-items">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
            <div className="cart-items-buttons">
              <button onClick={() => dispatch(decrement(item.id))}>-</button>
              {item.quantity}
              <button onClick={() => dispatch(increment(item.id))}>+</button>
            </div>
          </div>
        ))
      )}
      <div className="amount-section">
        <h3>Grand Total: ₹{amount}</h3>
      </div>
    </div>
  );
};

export default Cartpage;
