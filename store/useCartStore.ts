import {create} from 'zustand';
import {CartState} from '~/types/CartTypes';

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    addItem: (item) => set((state) => 
        { 
            const existingItem = state.items.find(i => i.id === item.id);   
            if (existingItem) {
                return {
                    items: state.items.map(i =>
                        i.id === item.id ? { ...i, quantity: (i.quantity || 1) + 1 } : i
                    )
                };
            }
            return { items: [...state.items, { ...item, quantity: 1 }] };
        }),
    removeItem: (itemId) => set((state) => ({ items: state.items.filter(item => item.id !== itemId) })),
    clearCart: () => set({ items: [] }),
    getTotalPrice: () => get().items.reduce((total, item) => total + item.price, 0),
    updateItemQuantity: (itemId, quantity) => set((state) => ({
        items: state.items.map(item =>
            item.id === itemId ? { ...item, quantity } : item
        )
    }))
}));
