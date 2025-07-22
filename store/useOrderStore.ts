import {create} from 'zustand';
import { OrderState,order, } from '~/types/OrderTypes';

export const useOrderStore = create<OrderState>((set,get) => ({
    orders: [],
    addOrder: (newOrder: order) => set((state) => ({ orders: [...state.orders, newOrder] })),
    removeOrder: (orderId: string) => set((state) => ({ orders: state.orders.filter(order => order.id !== orderId) })),
    getOrderById: (orderId: string) => get().orders.find(order => order.id === orderId),
    updateOrderStatus: (orderId: string, status: 'pending' | 'completed' | 'cancelled') => set((state) => ({
        orders: state.orders.map(order =>
            order.id === orderId ? { ...order, status } : order
        )
    }))
}));


