import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cart: [],
   total: 0
};

const productsSlice = createSlice({
   name: "products",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         state.cart.push(action.payload);
         state.total++;
      }
   }
});

export const { addToCart } = productsSlice.actions;

export default productsSlice.reducer;
