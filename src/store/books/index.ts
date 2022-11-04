import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface BookState {
  precision: number;
  status: "idle" | "connected" | "disconnected";
  sell: [];
  buy: [];
}

const initialState: BookState = {
  precision: 4,
  status: "idle",
  sell: [],
  buy: [],
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
