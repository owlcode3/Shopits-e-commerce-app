import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./services/productsApi";
import productsReducer from "./features/productsSlice";

export const store = configureStore({
   reducer: {
      products: productsReducer,
      [productsApi.reducerPath]: productsApi.reducer
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         immutableCheck: { warnAfter: 128 },
         serializableCheck: { warnAfter: 128 }
      }).concat(productsApi.middleware)
});
