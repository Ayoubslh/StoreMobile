import {create} from 'zustand';
import { Item } from './Item';

export type FavouriteState={
    items: Item[];
    toggleFavourite: (item: Item) => void;
    isFavourite: (itemId: string) => boolean;
}