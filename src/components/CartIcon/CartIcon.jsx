import React, { useContext } from "react";
import "./CartIcon.css";
import ShoppingBag from "../../assets/shoppingbag.jpg";
import { CartContext } from "../../Context/CartContext/CartContext.jsx";
function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <img src={ShoppingBag} className="shopping-icon" alt="shopping bag" />

      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
