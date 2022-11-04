import React from "react";

export interface PriceValueProps {
  prop?: string;
}

export function PriceValue({ prop = "default value" }: PriceValueProps) {
  return <div>PriceValue {prop}</div>;
}
