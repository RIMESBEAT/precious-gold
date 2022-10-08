import React from "react";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext/CartContext";
import "./Checkout-Item.css";

function CheckoutItem({ cartItem }) {
  const { addItemToCart, subItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const { id, imageUrl, name, quantity, price } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const subItemFromCartHandler = () => subItemFromCart(cartItem);
  const addItemFromCartHandler = () => addItemToCart(cartItem);

  return (
    <div className="checkout__container" hey={id}>
      <div className="checkout__content">
        <div className="checkout__img__container">
          <img src={imageUrl} alt={`${name}`} className="checkout__img" />
        </div>
        <div className="checkout__details">
          <div className="checkout__name__box checkout__gap">
            <span className="checkout__name">{name}</span>
            <span className="checkout__item__remove" onClick={clearItemHandler}>
              &#10005;
            </span>
          </div>

          <div className="checkout__price__box checkout__gap">
            <span>
              <i
                onClick={subItemFromCartHandler}
                className="fa-solid fa-square-minus checkout__number__btn"
              ></i>
            </span>
            <span>{quantity}</span>
            <span>
              <i
                onClick={addItemFromCartHandler}
                className="fa-solid fa-square-plus checkout__number__btn"
              ></i>
            </span>
          </div>
          <span className="checkout__price">N{price}</span>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItem;
