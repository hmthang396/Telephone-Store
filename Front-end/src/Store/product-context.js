import React, { useState, useEffect, useCallback } from "react";

const ProductContext = React.createContext({
  products: [],
  isLoading: false,
  isError: null,
  getData: () => {},
});
export const ProductContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  let optionFetch = {
    method: "GET",
    headers: {
      "Content-type": "application/json;charset=utf-8",
      Connection: "keep-alive",
    },
    mode: "cors",
  };
  const fetchData = () => {
    setIsLoading(true);
    fetch("/API/Product", optionFetch)
      .then((reponse) => {
        if (reponse.ok) {
          reponse.json().then((result) => {
            if (result.ErrorCode === 0) {
              setProducts(result.Data);
              setIsLoading(false);
            } else {
              throw new Error(result.Message);
            }
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });
  };
  useEffect(() => {
    if (products.length === 0) {
      console.log("FETCH DATA");
      fetchData();
    }
  }, [products]);
  const contextValue = {
    products: products,
    isLoading: isLoading,
    isError: isError,
    getData: fetchData,
  };
  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};
export default ProductContext;
