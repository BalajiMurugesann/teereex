import React from "react";
import FiltrBox from "./FiltrBox";
import styles from "./Filtr.module.css";
const Filter = ({ handleFilter }) => {
  const filterOptions = [
    { category: "color", values: ["Red", "Blue", "Green"] },
    { category: "gender", values: ["Men", "Women"] },
    { category: "price", values: ["0-500", "251-450", "450"] },
    { category: "type", values: ["polo", "Hoodie", "Basic"] },
  ];
  return (
    <div className={styles.groupingContainer}>
      {filterOptions.map((option, index) => (
        <div key={index} className={styles.groupingDivision}>
          <h1 className={styles.selectionCriterion}>{option.category}</h1>
          {option.values.map((value, valueIndex) => (
            <FiltrBox
              key={valueIndex}
              name={option.category}
              value={value}
              handleFilter={handleFilter}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Filter;
