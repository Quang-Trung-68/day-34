import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/product/productSlice";
import { authApi } from "./services/auth";

export const store = configureStore({
  reducer: {
    product: productReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
