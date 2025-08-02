import { Product } from "./phone";

export type CartItem = Product & {
  
  quantity: number;
  selected?: boolean;
};


export type CartState={
    items: CartItem[]
    addItem: (item: CartItem) => void;
    removeItem: (itemId: string) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    updateItemQuantity: (itemId: string, quantity: number) => void;
}