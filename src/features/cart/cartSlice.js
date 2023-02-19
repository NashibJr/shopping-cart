import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productsInCart: [],
  numberOfProducts: 0,
  totalPriceOfProducts: 0,
};
const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.productsInCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const item = { ...action.payload, quantity: 1 };
      if (itemIndex >= 0) {
        state.productsInCart[itemIndex].quantity++;
        state.numberOfProducts++;
        state.totalPriceOfProducts += item.price;
      } else {
        state.productsInCart.push(item);
        state.numberOfProducts++;
        state.totalPriceOfProducts += item.price;
      }
    },
    handleDelete: (state, action) => {
      const wantedItems = state.productsInCart.filter(
        (item) => item.id !== action.payload.id
      );
      state.productsInCart = wantedItems;
      state.numberOfProducts -= action.payload.quantity;
      state.totalPriceOfProducts -=
        action.payload.quantity * action.payload.price;
    },
  },
});

export const { addToCart, handleDelete } = cartSlice.actions;

export default cartSlice;
