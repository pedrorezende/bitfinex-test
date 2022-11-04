import React from "react";

export interface OrderBookProps {
  prop?: string;
}

export function OrderBook({ prop = "default value" }: OrderBookProps) {
  return <div>Hello</div>;
}
