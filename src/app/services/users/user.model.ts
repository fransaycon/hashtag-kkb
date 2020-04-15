import { Item } from './item.model';

class User {
  private name: string = null;
  private cart: Item[] = [];

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  addItemToCart(item: Item) {
    const duplicateItemIndex: number = this.cart.findIndex(
      (cartItem) => cartItem.getName() === item.getName()
    );

    if (duplicateItemIndex >= 0) {
      this.cart[duplicateItemIndex].changeQuantity(item.getQuantity());
    } else {
      this.cart.push(item);
    }
  }
}

export default User;
