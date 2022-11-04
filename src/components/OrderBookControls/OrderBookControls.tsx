import { OrderBookPrecision } from "models/OrderBook";
import React from "react";

export interface OrderBookControlsProps {
  precision: number;
}

export function OrderBookControls({ precision }: OrderBookControlsProps) {
  return (
    <div className="text-xs">
      <button className="mr-2">decrease</button>
      <button>increase</button>
    </div>
  );
}
