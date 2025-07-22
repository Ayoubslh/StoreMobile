import {create} from 'zustand';
import{ FavouriteState } from '~/types/FavouriteTypes';


export const useFavouriteStore = create<FavouriteState>((set,get)=>({
    items:[],
    toggleFavourite: (item)=>{
        const existingItem = get().items.find(i => i.id === item.id);
        if(existingItem){
            set((state)=>({items: state.items.filter(i=> i.id !==item.id)}))
        }else{
            set((state)=>({
                items:[...state.items,item]}))
        }
    },
    isFavourite:(id)=>!!get().items.find((i)=>i.id===id)
      
}))