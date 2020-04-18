import { Item } from '../cart/item.model';

class User {
  private name: string = null;
  private items: Item[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  addItemToCart(item: Item) {
    this.items.push(item);
  }

  removeItemFromCart(item: Item) {
    this.items = this.items.filter((i) => i.getName() !== item.getName());
  }
}

export default User;
