import React from "react";
import styles from "./CartItm.module.css";
const CartItm = ({ product, handleCartProductsData }) => {
  return (
    <div className={styles.cartItmThings}>
      <img
        src={product[0].imageURL}
        alt={product[0].name}
        className={styles.cartItmImage}
      />
      <div className={styles.cartItmParagraph}>
        <p className={styles.cartItmEntries}>{product[0].name}</p>
        <p className={styles.cartItmEntries}>RS {product[0].price} </p>
      </div>
      <div className={styles.cartItmQuantity}>
        <button
          className={styles.cartItmNum}
          value={"add"}
          id={product[0].id}
          onClick={(e) => {
            handleCartProductsData(e);
          }}
        >
          +
        </button>
        <p className={styles.cartItmEntries}>{product.qty}</p>
        <button
          className={styles.cartItmNum}
          value={"subtract"}
          id={product[0].id}
          onClick={(e) => {
            handleCartProductsData(e);
          }}
        >
          -
        </button>
      </div>
      <button
        className={styles.cartItmDelete}
        id={product[0].id}
        onClick={(e) => {
          handleCartProductsData(e);
        }}
        value={"delete"}
      >
        delete
      </button>
    </div>
  );
};
export default CartItm;
