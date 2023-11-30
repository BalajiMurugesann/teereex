import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./Head.module.css";
const Head = ({ ProductSelected, totalProducts }) => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  const renderSelectedIndicator = (isSelected) => (
    <p className={isSelected ? styles.choosed : ""}></p>
  );
  return (
    <div className={styles.titleHolder}>
      <h2>TeeRex Store</h2>
      <div className={styles.headerContent}>
        <div className={styles.itemHeading}>
          <p onClick={() => handleClick("/")}>Products</p>
          {renderSelectedIndicator(!ProductSelected)}
        </div>
        <div>
          <div className={styles.shoppingCartButton}>
            <IconButton aria-label="cart" onClick={() => handleClick("/cart")}>
              <Badge badgeContent={totalProducts} color="secondary">
                <ShoppingCartIcon className={styles.shoppingCartIcon} />
              </Badge>
            </IconButton>
          </div>
          {renderSelectedIndicator(ProductSelected)}
        </div>
      </div>
    </div>
  );
};
export default Head;
