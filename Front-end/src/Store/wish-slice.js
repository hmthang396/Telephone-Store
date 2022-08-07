import { createSlice } from "@reduxjs/toolkit";
const initialWishState = { items: [], totalQuantity: 0 };
const wishSlice = createSlice({
  name: "wish",
  initialState: initialWishState,
  reducers: {
    replaceWish: (state, action) => {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToWish: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.Product.Product.id
      );
      if (!existingItem) {
        state.items.push({
          id: newItem.Product.Product.id,
          product: newItem.Product,
          price: newItem.Price,
          option: newItem.Option,
          color: newItem.Color,
          quantity: newItem.Quantity,
          totalPrice: newItem.Price,
        });
        state.totalQuantity = state.totalQuantity + 1;
      }
    },
    removeItemFromWish: (state, action) => {
      const id = action.payload;
      state.totalQuantity = state.totalQuantity - 1;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});
export const wishAction = wishSlice.actions;
export default wishSlice;
