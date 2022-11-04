import React from "react";

export interface OrderBookListEntryProps {
  prop?: string;
}

export function OrderBookListEntry({
  prop = "default value",
}: OrderBookListEntryProps) {
  return <div>OrderBookListEntry {prop}</div>;
}
