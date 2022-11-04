import { OrderBookControls } from "components/OrderBookControls";
import { OrderBookList } from "components/OrderBookList";
import { useOrderBook } from "hooks/useOrderBook";
import React from "react";

export interface OrderBookProps {
  prop?: string;
}

export function OrderBook({ prop = "default value" }: OrderBookProps) {
  const orderBookActions = useOrderBook();

  return (
    <section className="container mt-8 rounded-sm bg-bitfinex-blue-700 text-bitfinex-blue-200">
      <header className="flex px-4 py-2 justify-between border-b-[1px] border-gray-700">
        <div className="uppercase">
          <span className="mr-2 text-white">Order Book</span>
          <span className="text-gray-400">BTC/USD</span>
        </div>
        <OrderBookControls />
      </header>

      <article className="grid grid-cols-2 px-4 grid-gap-1">
        <OrderBookList />
        <OrderBookList reversed />
      </article>
    </section>
  );
}
