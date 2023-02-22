import React, { useState } from "react";

function Item({ name, category }) {

const [isItemInCart, setIsItemInCart] = useState("");
const itemClass = isItemInCart ? "in-cart":"";
const buttonText = isItemInCart ? "Remove From Cart" : "Add to Cart"

const handleItem = () => setIsItemInCart(!isItemInCart)

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleItem}className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
