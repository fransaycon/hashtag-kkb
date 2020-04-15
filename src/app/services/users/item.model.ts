export class Item {
  private name: string;
  private quantity: number;

  constructor(name: string, quantity: number) {
    this.name = name;
    this.quantity = quantity;
  }

  getName(): string {
    return this.name;
  }

  getQuantity(): number {
    return this.quantity;
  }

  changeQuantity(quantity: number): void {
    this.quantity = quantity;
  }
}
