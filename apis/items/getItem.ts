    import { useQuery } from "@tanstack/react-query";
    import { Product } from "~/types/phone";


    const fetchItem = async (id:string) => {
    const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/items/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch items");
    }
    
    const json = await response.json();
    return json.data as Product;
    };
    
    export const useGetItem = (id:string) => {
    return useQuery<Product, Error>({
        queryKey: ["items",id],
        queryFn:()=> fetchItem(id),
        staleTime: 1000 * 60 * 5, 
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    };