import { useCallback } from "react";

function useFilterShoes(filters, setFilteredShoes, setLoading) {
  const filterShoesHandler = useCallback(async () => {
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

    const queryString = queryParams.join("&");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/Shoesar/Products/Filter?${queryString}`
      );
      if (!response.ok) {
        throw new Error("error filtering");
      }
      const data = await response.json();
      setFilteredShoes(data);
      if (data.length === 12) {
        setLoading(true);
      }
    } catch (error) {
      console.error("Error fetching shoe data:", error);
    }
  }, [filters, setFilteredShoes, setLoading]);

  return filterShoesHandler;
}

export default useFilterShoes;
