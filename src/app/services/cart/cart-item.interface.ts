import User from '../users/user.model';
import { Item } from './item.model';

export interface CartItem {
  user: User;
  item: Item;
}
