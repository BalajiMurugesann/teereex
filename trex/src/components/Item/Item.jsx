import React from "react";
import Cards from "./Card/Cards";
import styles from "./Item.module.css";
import { Grid } from "@mui/material";
const Item = ({ products, handleAddToCart }) => {
  return (
    <Grid
      container
      spacing={4}
      mx={1}
      mt={1}
      className={styles.itemGroupWrapper}
    >
      {products.map((each) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          className={styles.classificationSegment}
          key={each.name}
        >
          <Cards product={each} handleAddToCart={handleAddToCart} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Item;
