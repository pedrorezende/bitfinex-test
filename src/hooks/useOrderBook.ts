import { useEffect, useState } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { createOrderBook, tickOrderBook } from "store/books";
import { useAppDispatch } from "store/hooks";

function getSubscriptionMessage(precision: string): string {
  return JSON.stringify({
    event: "subscribe",
    channel: "book",
    symbol: "tBTCUSD",
    len: "25",
    prec: precision,
  });
}

export const useOrderBook = () => {
  // socketUrl should be placed in .env file. Using as constant just to make the process of
  // setting up the app easier.
  const socketUrl = "wss://api-pub.bitfinex.com/ws/2";
  const [precision, setPrecision] = useState("P0");
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (readyState) {
      sendMessage(getSubscriptionMessage(precision));
    }
  }, [readyState, precision, sendMessage]);

  useEffect(() => {
    if (lastMessage !== null && lastMessage.data) {
      console.log(lastMessage.data);
      const data = JSON.parse(lastMessage.data);
      if (data.length > 1 && data[1].length > 3) {
        dispatch(createOrderBook(data[1]));
      } else {
        dispatch(tickOrderBook(data[1]));
      }
    }
  }, [lastMessage, dispatch]);

  return {
    setPrecision,
  };
};
