import { useState, useEffect, useRef, useCallback } from "react";
import FilterContext from "./shopSections/Filters/FilterContext";
import Shoe from "./shopSections/shoe";
import SearchBar from "./shopSections/searchBar";
import Filters from "./shopSections/Filters/filters";
import useFilterShoes from "../../Hooks/use-filterShoes";
import useFilter from "../../Hooks/use-filters";
import {useInView} from 'react-intersection-observer';

const Shop = () => {
  const [brands, setBrands] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(true);
  const biggestPrice = useRef(null);

  const [filters, setType, setBrand, setUpTo, setFrom, setSearch] = useFilter();
  const filterShoesHandler = useFilterShoes(
    filters,
    setFilteredShoes,
    setLoading
  );
  let timer = useRef(undefined);

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  const loadMoreProducts = async () => {
    const { type, brand, priceRange, search } = filters;
    const queryParams = [];
    if (type[0]) {
      queryParams.push(`type=${type}`);
    }
    if (brand[0]) {
      queryParams.push(`brand=${brand}`);
    }
    if (priceRange) {
      if (priceRange.from !== 0)
        queryParams.push(`priceRangeFrom=${priceRange.from}`);
      if (priceRange.upTo !== 0)
        queryParams.push(`priceRangeUpTo=${priceRange.upTo}`);
    }
    if (search !== "") queryParams.push(`search=${search}`);
    queryParams.push(`page=${page}`);

    const queryString = queryParams.join("&");
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/Shoesar/Products/ShopScroll?${queryString}`
    );
    if (!response.ok) {
      throw new Error("error");
    }
    const data = await response.json();
    if (data.length < 12) {
      setLoading(false);
    }
    setFilteredShoes(() => [...filteredShoes, ...data]);
    setPage(page + 1);
  };
  const getShoes = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/Shoesar/Products/Shop`
      );
      if (!response.ok) {
        throw new Error("Error fetching shoes");
      }
      const data = await response.json();
      const { shoes, brands, biggest } = data;
      setFilteredShoes(shoes);
      setBrands(brands);
      biggestPrice.current = biggest;
    } catch (error) {
      console.error("Error fetching shoe data:", error);
    }
  }, []);

  useEffect(() => {
    getShoes();
  }, [getShoes]);

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    if (typeof timer.current !== "undefined") {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      filterShoesHandler();
      setPage(1);
    }, 100);

    return () => {
      if (typeof timer.current !== "undefined") {
        clearTimeout(timer.current);
      }
    };
  }, [filters, filterShoesHandler]);

  return (
    <main>
      <section className="shoe"></section>
      <SearchBar setSearch={setSearch} />

      <section className="filter_flexbox">
        <FilterContext.Provider
          value={{
            brands: brands,
            setType: setType,
            setBrand: setBrand,
            setUpTo: setUpTo,
            setFrom: setFrom,
            filters: filters,
            biggestPrice: biggestPrice,
          }}
        >
          <Filters />
        </FilterContext.Provider>

        <article className="shoe_experience">
          {filteredShoes.map((shoe) => {
            return <Shoe shoe={shoe} key={shoe.name} />;
          })}
        </article>
      </section>

      {filteredShoes[0] && loading && (
        <div ref={ref} className="Load">
          <p>CARGANDO...</p>
          <div className="move"></div>
        </div>
      )}
    </main>
  );
};
export default Shop;
