import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  OrderBookService,
  OrderBookMessage,
  OrderBookMap,
} from "models/OrderBook";
import { RootState } from "..";

export interface BookState {
  precision: number;
  status: "idle" | "connected" | "disconnected";
  bids: OrderBookMap;
  asks: OrderBookMap;
}

const initialState: BookState = {
  precision: 4,
  status: "idle",
  bids: {},
  asks: {},
};

let orderBook: OrderBookService;

const updateStore = (state: any, orderBook: OrderBookService) => {
  const updatedBook = orderBook.getOrderBook();
  state.bids = updatedBook.bids;
  state.asks = updatedBook.asks;
};

export const orderBookSlice = createSlice({
  name: "orderBook",
  initialState,
  reducers: {
    tickOrderBook: (state, action: PayloadAction<OrderBookMessage>) => {
      if (orderBook) {
        orderBook.parseMessage(action.payload);
        updateStore(state, orderBook);
      }
    },

    createOrderBook: (state, action: PayloadAction<OrderBookMessage[]>) => {
      orderBook = new OrderBookService(action.payload);
      updateStore(state, orderBook);
    },
  },
});

export const { tickOrderBook, createOrderBook } = orderBookSlice.actions;

export const selectBids = (state: RootState) => {
  return state.books.bids;
};

export const selectAsks = (state: RootState) => {
  return state.books.asks;
};

export default orderBookSlice.reducer;
