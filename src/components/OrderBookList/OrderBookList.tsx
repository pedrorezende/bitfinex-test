import { OrderBookListEntry } from "components/OrderBookListEntry";
import { OrderBookMap } from "models/OrderBook";

export interface OrderBookListProps {
  reversed?: boolean;
  precision: number;
  data: OrderBookMap;
}

export function OrderBookList({
  reversed,
  precision,
  data,
}: OrderBookListProps) {
  let gridClass = "flex justify-around";
  if (reversed) {
    gridClass += " flex-row-reverse";
  }

  return (
    <ul className="pb-2 text-xs text-center uppercase">
      <li className={`text-gray-400 ${gridClass} py-1`}>
        <span className="w-full">Count</span>
        <span className="w-full">Amount</span>
        <span className="w-full">Total</span>
        <span className="w-full">Price</span>
      </li>

      {Object.keys(data).map((entryId) => (
        <li
          className={`py-1 text-gray-400 ${gridClass} hover:bg-bitfinex-blue-500 transition-background duration-100 ease-out`}
          key={`order-book-list-${entryId}`}
        >
          <OrderBookListEntry
            precision={precision}
            count={data[entryId].count}
            amount={data[entryId].amount}
          />
        </li>
      ))}
    </ul>
  );
}
