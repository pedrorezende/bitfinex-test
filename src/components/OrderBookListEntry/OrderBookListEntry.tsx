import React, { memo } from "react";

export interface OrderBookListEntryProps {
  amount: number;
  count: number;
}

const _OrderBookListEntry = ({ count, amount }: OrderBookListEntryProps) => {
  return (
    <>
      <span className="w-full">{count}</span>
      <span className="w-full">{amount}</span>
      <span className="w-full"></span>
      <span className="w-full"></span>
    </>
  );
};

export const OrderBookListEntry = memo(_OrderBookListEntry);
