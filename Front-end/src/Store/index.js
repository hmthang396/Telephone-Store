import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./product-slice";
import cartSlice from "./cart-slice";
import wishSlice from "./wish-slice";
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    carts: cartSlice.reducer,
    wishs: wishSlice.reducer,
  },
});
export default store;
