import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
//interfaces
import { DetailsCategoryInterface } from "@components/organism/ts/interfaces";

const initialState = {
  listCategory: [] as DetailsCategoryInterface,
  tempCategory: [] as DetailsCategoryInterface,
};

export const cardSlice = createSlice({
  name: "listCard",
  initialState,
  reducers: {
    setListCards: (state, action: PayloadAction<DetailsCategoryInterface>) => {
      state.listCategory = action.payload;
      state.tempCategory = action.payload;
    },
    setCardsFilters: (
      state,
      action: PayloadAction<DetailsCategoryInterface>
    ) => {
      state.listCategory = action.payload;
    },
  },
});

export const { setListCards, setCardsFilters } = cardSlice.actions;

export default cardSlice.reducer;
