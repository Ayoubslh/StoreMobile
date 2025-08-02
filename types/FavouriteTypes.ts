import {create} from 'zustand';
import { Product} from './phone';

export type FavouriteState={
    items: Product[];
    toggleFavourite: (item:Product) => void;
    isFavourite: (itemId: string) => boolean;
}