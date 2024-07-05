import { configureStore } from "@reduxjs/toolkit";
import { fakeProductsSlice } from "./slices";

const fakeProductsReducer = fakeProductsSlice.reducer;

export const store = configureStore({
  reducer: {
    fakeProducts: fakeProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
