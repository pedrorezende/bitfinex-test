import { OrderBookControls } from "components/OrderBookControls";
import { OrderBookList } from "components/OrderBookList";
import { useOrderBook } from "hooks/useOrderBook";
import { OrderBookPrecision } from "models/OrderBook";
import { useState } from "react";
import { selectBids, selectAsks } from "store/books";
import { useAppSelector } from "store/hooks";

export function OrderBook() {
  const [precision, setPrecision] = useState<1 | 2 | 3 | 4 | 5>(5); // todo: look for a better way to declare this constant type
  useOrderBook(OrderBookPrecision[precision]);
  const bids = useAppSelector(selectBids);
  const asks = useAppSelector(selectAsks);

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
        <OrderBookList precision={precision} data={bids} />
        <OrderBookList precision={precision} data={asks} reversed />
      </article>
    </section>
  );
}
