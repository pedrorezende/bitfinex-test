import React, { memo } from "react";

export interface OrderBookListEntryProps {
  amount: number;
  count: number;
  precision: number;
}

const _OrderBookListEntry = ({
  count,
  amount,
  precision,
}: OrderBookListEntryProps) => {
  return (
    <>
      <span className="w-full">{count}</span>
      <span className="w-full">{amount}</span>
      <span className="w-full">{(count * amount).toFixed(precision)}</span>
      <span className="w-full">??</span>
    </>
  );
};

export const OrderBookListEntry = memo(_OrderBookListEntry);
