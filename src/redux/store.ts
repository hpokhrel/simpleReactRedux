import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";

export const store: any = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
