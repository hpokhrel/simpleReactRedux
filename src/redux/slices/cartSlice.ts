import { createSlice, createSelector } from "@reduxjs/toolkit";

interface cartProps {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
  };
}

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as cartProps[],
  reducers: {
    addToCart: (state, action: { payload: cartProps }) => {
      state.push(action.payload);
    },
  },
});

export const getCartSlicedState = createSelector(
  (state: any) => state.cart,
  (state) => state
);

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
