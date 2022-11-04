export type OrderBookMessage = [id: number, count: number, amount: number];
export type OrderBookValue = {
  count: number;
  amount: number;
};
export type OrderBookMap = {
  [id: number | string]: OrderBookValue;
};

export type StructuredOrderBook = {
  bids: OrderBookMap;
  asks: OrderBookMap;
};

export const OrderBookPrecision = {
  5: "P0",
  4: "P1",
  3: "P2",
  2: "P3",
  1: "P4",
};

export class OrderBookService {
  orderBook: OrderBookMap = {};

  constructor(data: OrderBookMessage[]) {
    data.map((order: OrderBookMessage) => {
      this.addEntry(order);
    });
  }

  public removeEntry(message: OrderBookMessage) {
    if (this.orderBook.hasOwnProperty(message[0])) {
      const { [message[0]]: value, ...newOrderBook } = this.orderBook;
      this.orderBook = newOrderBook;
    }
  }

  public addEntry(message: OrderBookMessage) {
    this.updateEntry(message);
  }

  public updateEntry(message: OrderBookMessage) {
    this.orderBook[message[0]] = {
      count: message[1],
      amount: message[2],
    };
  }

  public getOrderBook(): StructuredOrderBook {
    const output: StructuredOrderBook = { bids: {}, asks: {} };
    for (const entryId in this.orderBook) {
      if (this.orderBook[entryId].amount > 0) {
        output.bids[entryId] = { ...this.orderBook[entryId] };
      }

      if (this.orderBook[entryId].amount < 0) {
        output.asks[entryId] = { ...this.orderBook[entryId] };
      }
    }
    return output;
  }

  public parseMessage(message: OrderBookMessage): void {
    if (!this.orderBook.hasOwnProperty(message[0]) && message[1] > 0) {
      this.addEntry(message);
      return;
    }

    if (message[1] === 0) {
      this.removeEntry(message);
      return;
    }

    this.updateEntry(message);
  }
}
