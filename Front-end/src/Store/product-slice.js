import { createSlice } from "@reduxjs/toolkit";
const initialPrdState = {
  Data: [],
  Category: ["All"],
  Price: ["All"],
  Number: 0,
  isLoading: false,
  isError: null,
};
const productSlice = createSlice({
  name: "products",
  initialState: initialPrdState,
  reducers: {
    reLoadData: (state, action) => {
      return {
        ...state,
        Data: action.payload.Data,
      };
    },
    isLoading: (state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    },
    setOption: (state, action) => {
      return {
        ...state,
        Category: action.payload,
      };
    },
    setPrice: (state, action) => {
      return {
        ...state,
        Price: action.payload,
      };
    },
    setNumber: (state, action) => {
      return {
        ...state,
        Number: action.payload,
      };
    },
  },
});
export const productAction = productSlice.actions;
export default productSlice;
