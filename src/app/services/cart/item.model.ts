import { v4 as uuidv4 } from 'uuid';

export class Item {
  private id: string;
  private name: string;
  private quantity: number;
  private cost: number;

  constructor(name: string, quantity: number, cost: number) {
    this.id = new uuidv4();
    this.name = name;
    this.quantity = quantity;
    this.cost = cost;
  }

  getId(): string {
    return this.id;
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
}
