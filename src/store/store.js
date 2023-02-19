import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/cartSlice";
import productsSlice from "../features/productsSlice";

export const store = configureStore({
      reducer: {
            products: productsSlice.reducer,
            cartProducts: cartSlice.reducer
      }
});