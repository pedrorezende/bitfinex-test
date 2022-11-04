import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface BookState {}

const initialState: BookState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    tick: (state, action: PayloadAction<number>) => {},
  },
});

export const { tick } = counterSlice.actions;
export const selectCount = (state: RootState) => null;

export default counterSlice.reducer;
