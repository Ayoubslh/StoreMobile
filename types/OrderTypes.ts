import { Product } from "./phone";

export type order={
    id: string;

    items: Product[];
    totalPrice: number;
    orderDate: string;
    
    status: 'pending' | 'completed' | 'cancelled';
}

export type OrderState = {
    orders: order[];
    addOrder: (newOrder: order) => void;
    removeOrder: (orderId: string) => void;
    getOrderById: (orderId: string) => order | undefined;
    updateOrderStatus: (orderId: string, status: 'pending' | 'completed' | 'cancelled') => void;
};