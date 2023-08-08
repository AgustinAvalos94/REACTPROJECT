import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el icono de carrito de compras

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

export default CartWidget;