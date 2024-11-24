import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: number; // Simple count of items
}

const initialState: CartState = {
  items: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart(state) {
      state.items += 1;
    },
  },
});

export const { incrementCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
