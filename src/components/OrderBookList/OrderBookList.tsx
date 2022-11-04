import React from "react";

export interface OrderBookListProps {
  reversed?: boolean;
}

export function OrderBookList({ reversed }: OrderBookListProps) {
  let gridClass = "flex justify-around";
  if (reversed) {
    gridClass += " flex-row-reverse";
  }

  return (
    <ul className="text-xs text-center uppercase">
      <li className={`text-gray-400 ${gridClass} py-1`}>
        <span>Count</span>
        <span>Amount</span>
        <span>Total</span>
        <span>Price</span>
      </li>
    </ul>
  );
}
