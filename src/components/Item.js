
import React, { useState } from "react";

function Item({ name, category, addToCart, removeFromCart, cart }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCart = () => {
    setIsInCart(true);
    addToCart(name);
  };

  const handleRemoveFromCart = () => {
    setIsInCart(false);
    removeFromCart(name);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {isInCart ? (
        <button className="add" onClick={handleRemoveFromCart}>
          Remove From Cart
        </button>
      ) : (
        <button className="add" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </li>
  );
}

export default Item;
