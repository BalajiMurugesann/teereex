import React from "react";
import styles from "./Filtr.module.css";
const FilterBox = ({ name, value, handleFilter }) => {
  return (
    <div>
      <div>
        <input
          className={styles.checkbox}
          type="checkbox"
          id={value}
          name={name}
          value={value}
          onClick={(e) => handleFilter(e)}
        />
        {name === "price" ? (
          <label htmlFor={value}>Rs {value}</label>
        ) : (
          <label htmlFor={value}>{value}</label>
        )}
      </div>
    </div>
  );
};
export default FilterBox;
