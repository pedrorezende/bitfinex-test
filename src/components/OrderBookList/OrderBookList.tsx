import { OrderBookListEntry } from "components/OrderBookListEntry";
import { OrderBookMap } from "models/OrderBook";

export interface OrderBookListProps {
  reversed?: boolean;
  data: OrderBookMap;
}

export function OrderBookList({ reversed, data }: OrderBookListProps) {
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
          className={`py-1 text-gray-400 ${gridClass}`}
          key={`order-book-list-${entryId}`}
        >
          <OrderBookListEntry
            count={data[entryId].count}
            amount={data[entryId].amount}
          />
        </li>
      ))}
    </ul>
  );
}
