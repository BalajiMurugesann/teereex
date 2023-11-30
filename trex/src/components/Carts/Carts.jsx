import React from "react";
import Head from "../Head/Head";
import CartItm from "./CartItm/CartItm";
import styles from "./Carts.module.css";
const Carts = ({ totalProducts, products, handleAddToCart, cartData }) => {
  let cartItmData = [];
  let totalCartPrice = 0;
  for (const id in cartData) {
    let data = products.filter((item) => {
      return item.id === parseInt(id);
    });
    let finalData = {
      ...[...data],
      qty: cartData[id],
    };

    totalCartPrice += data[0].price * parseInt(cartData[id]);
    cartItmData.push(finalData);
  }
  return (
    <div>
      <Head totalProducts={totalProducts} />
      <div className={styles.cartThings}>
        <h1 className={styles.cartHeading}>Shopping Cart</h1>
        <div className={styles.cartProducts}>
          {cartItmData.length > 0 ? (
            cartItmData.map((each) => {
              return (
                <CartItm
                  handleCartProductsData={handleAddToCart}
                  key={each.id}
                  product={each}
                />
              );
            })
          ) : (
            <p>Add Item in Product Section</p>
          )}

          <br />
        </div>
        <div className={styles.cartBottom}>
          <p>
            Total Amount :<span>Rs {totalCartPrice}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Carts;
