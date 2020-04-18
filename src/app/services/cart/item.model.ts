export class Item {
  private name: string;
  private quantity: number;
  private cost: number;

  constructor(name: string, quantity: number, cost: number) {
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
  }

  getName(): string {
    return this.name;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getCost(): number {
    return this.cost;
  }

  getTotalCost(): number {
    return this.cost * this.quantity;
  }

  changeQuantity(quantity: number): void {
    this.quantity = quantity;
  }
}
