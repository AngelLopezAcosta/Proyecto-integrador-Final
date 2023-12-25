import React from "react";
import Brand from "./brandFilter";
import { useContext } from "react";
import FilterContext from "../../FilterContext";

const FilterBrand = () => {
  const ctx = useContext(FilterContext);
  const { brands } = ctx;
  return (
    <ul className="shoe_filters" id="brandFilter">
      <li>Elige tu par favorito</li>
      {brands.map((brand) => (
        <Brand brand={brand} key={brand} />
      ))}
    </ul>
  );
};

export default FilterBrand;
