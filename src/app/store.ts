import { configureStore } from "@reduxjs/toolkit";
import cardlist from "@features/cardSlice";

export const store = configureStore({
  reducer: {
    cardlist,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
