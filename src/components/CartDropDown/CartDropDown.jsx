import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartConntext";
import CartItem from "../CartItem/CartItem";
import "./CartDropDown.css";
function CartDropDown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button className="btn account__btn cart__drop__btn">Check Out</button>
    </div>
  );
}

export default CartDropDown;
