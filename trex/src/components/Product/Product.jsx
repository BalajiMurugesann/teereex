import React, { useState } from "react";
import Head from "../Head/Head";
import Filtr from "../Filtr/Filtr";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import FilterIcon from "@mui/icons-material/FilterAlt";
import Item from "../Item/Item";
import styles from "./Product.module.css";
const ProductPage = ({
  totalProducts,
  products,
  handleAddToCart,
  handleFilter,
  handleUserSearch,
  userSearch,
  handleUserSearchButton,
}) => {
  const [toggle, setToggle] = useState(true);
  const toHideFilterSection = useConditionalClass(styles.filterSection, toggle);
  const handleToggleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.pageContainers}>
      <div className={styles.headerContainer}>
        <Head ProductSelected totalProducts={totalProducts} />
      </div>
      <div className={styles.productContainers}>
        <div className={toHideFilterSection}>
          <div className={styles.filterContainers}>
            <Filtr handleFilter={handleFilter} />
          </div>
        </div>
        <div className={styles.thingsContainers}>
          <div className={styles.inputContainers}>
            <input
              className={styles.searchIn}
              placeholder="Search for products..."
              value={userSearch}
              onChange={(e) => {
                handleUserSearch(e);
              }}
            ></input>
            <button
              className={styles.searchBtn}
              onClick={(e) => handleUserSearchButton(e)}
            >
              <SearchIcon />
            </button>
            <button onClick={handleToggleClick} className={styles.filterBtn}>
              <FilterIcon />
            </button>
          </div>
          <div className={styles.ProductContainer}>
            <Item products={products} handleAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};
const useConditionalClass = (baseClass, condition) => {
  return condition ? baseClass : "";
};
export default ProductPage;
