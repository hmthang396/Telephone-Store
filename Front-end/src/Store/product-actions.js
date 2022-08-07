import { productAction } from "./product-slice";
import api from "../api/Produc.api";
export const fetchProductData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      let optionFetch = {
        method: "GET",
        headers: {
          "Content-type": "application/json;charset=utf-8",
          Connection: "keep-alive",
        },
        mode: "cors",
      };
      const reponse = await fetch("/API/Product", optionFetch);
      if (!reponse.ok) {
        throw new Error("Could not fetch cart data!");
      }
      const data = await reponse.json();
      return data;
    };
    try {
      dispatch(productAction.isLoading());
      //const productData = await fetchData();
      const productData = await api.getAllElement();
      //console.log(productData);
      if (productData.Data) {
        dispatch(productAction.isLoading());
        dispatch(productAction.reLoadData(productData));
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const setedCategories = (para) => {
  return async (dispatch) => {
    dispatch(productAction.setOption(para));
  };
};
export const setedPrices = (para) => {
  return async (dispatch) => {
    dispatch(productAction.setPrice(para));
  };
};
export const setedNumber = (para) => {
  return async (dispatch) => {
    dispatch(productAction.setNumber(para));
  };
};
