import React from "react";
import styles from "./Cards.module.css";
const Cards = ({ product, handleAddToCart }) => (
  <div className={styles.productContainer}>
    <img
      src={product.imageURL}
      alt={product.name}
      className={styles.productImg}
    />
    <div className={styles.productSection}>
      <p className={styles.productPrice}>Rs {product.price}</p>
      <button
        className={styles.addToButton}
        value={"add"}
        id={product.id}
        onClick={(e) => handleAddToCart(e)}
      >
        Add to Cart
      </button>
    </div>
  </div>
);
export default Cards;
