import React from "react";

export interface OrderBookControlsProps {
  prop?: string;
}

export function OrderBookControls({
  prop = "default value",
}: OrderBookControlsProps) {
  return <div>OrderBookControls {prop}</div>;
}
