import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/api";
import cartReducer from "@/redux/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
