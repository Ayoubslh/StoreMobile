import { Item } from "~/types/Item";

type CartItem = Item & {
  quantity: number;
  selected?: boolean;
};


export type CartState={
    items: CartItem[]
    addItem: (item: Item) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    updateItemQuantity: (itemId: string, quantity: number) => void;
}