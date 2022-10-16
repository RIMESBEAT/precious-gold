import { Button } from "@nextui-org/react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext/CartContext";
import CartItem from "../CartItem/CartItem";
import "./CartDropDown.css";
function CartDropDown() {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button
        onClick={toggleIsCartOpen}
      >
        Check Out
      </Button>
    </div>
  );
}

  
export default CartDropDown;
