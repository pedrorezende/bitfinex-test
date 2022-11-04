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

export class OrderBookService {
  orderBook: OrderBookMap = {};

  constructor(data: OrderBookMessage[]) {
    data.map((order: OrderBookMessage) => {
      this.addEntry(order);
    });

    console.log(this.orderBook);
  }

  public removeEntry(message: OrderBookMessage) {
    if (this.orderBook.hasOwnProperty(message[0])) {
      delete this.orderBook[message[0]];
    }
  }

  public addEntry(message: OrderBookMessage) {
    this.orderBook[message[0]] = {
      count: message[1],
      amount: message[2],
    };
  }

  public updateEntry() {}

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

  public parseMessage(message: OrderBookMessage) {}
}
