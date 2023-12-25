import React from "react";
import FilterCategory from "./FilterUI.js/filterCategory";
import FilterBrand from "./FilterUI.js/FilterBrand/filterBrand";
import FilterPriceRange from "./FilterUI.js/FilterPriceRange";

const Filters = () => {
  return (
    <div>
      <FilterCategory />
      <FilterBrand />
      <FilterPriceRange />
    </div>
  );
};

export default Filters;
