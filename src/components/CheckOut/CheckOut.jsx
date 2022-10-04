import React, { useContext } from "react";
import "./CheckOut.css";
import { CartContext } from "../../Context/CartContext/CartContext";
import CheckoutItem from "./Checkout-Item";
function CheckOut() {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="check__out__container">
      <div className="checkout-items">
        {cartItems.map((cartItem) => (
          <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        ))}
        <span className="total">TOTAL: N{cartTotal}</span>
      </div>
    </div>
  );
}

export default CheckOut;