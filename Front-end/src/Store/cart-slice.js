import { createSlice } from "@reduxjs/toolkit";
const initialCartState = { items: [], totalQuantity: 0, totalPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    replaceCart: (state, action) => {
      return {
        ...state,
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
      };
    },
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === newItem.Product.Product.id
      );
      state.totalQuantity = state.totalQuantity + newItem.Quantity;
      state.totalPrice = state.totalPrice + newItem.Quantity * newItem.Price;
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
      } else {
        existingItem.quantity = existingItem.quantity + newItem.Quantity;
        existingItem.totalPrice = existingItem.totalPrice + newItem.Price;
      }
    },
    removeItemFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalPrice =
        state.totalPrice - existingItem.quantity * existingItem.price;
      state.items = state.items.filter((item) => item.id !== id);
      console.log(`removeItemFromCart : ${id}`);
    },
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
