import React from "react";

export interface OrderBookListProps {
  prop?: string;
}

export function OrderBookList({ prop = "default value" }: OrderBookListProps) {
  return <div>OrderBookList {prop}</div>;
}
