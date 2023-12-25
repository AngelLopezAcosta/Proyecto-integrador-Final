import React from "react";
import { useContext } from "react";
import FilterContext from "../FilterContext";

const FilterCategory = () => {
  const ctx = useContext(FilterContext);
  const categories = ["Sport", "Zapatos", "Botas", "Tacos", "Sandalias"];
  const { setType } = ctx;
  return (
    <ul className="shoe_filters">
      <li>Elige tu par favorito</li>
      {categories.map((category) => (
        <li key={category}>
          <input
            type="checkbox"
            id={category.toLowerCase()}
            className="shoe-category"
            onChange={() => setType(category)}
            value={category}
          />
          <label htmlFor={category.toLowerCase()}>{category}</label>
        </li>
      ))}
    </ul>
  );
};

export default FilterCategory;
