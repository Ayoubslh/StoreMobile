import { useQuery } from "@tanstack/react-query";
import { PhoneDetails } from "~/types/phone";


const fetchAllItems = async () => {
  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/items`);
  if (!response.ok) {
    throw new Error("Failed to fetch items");
  }
  
  const json = await response.json();
  return json.data.items;
};

export const useGetAllItems = () => {
  return useQuery<PhoneDetails[], Error>({
    queryKey: ["items"],
    queryFn: fetchAllItems,
    staleTime: 1000 * 60 * 5, 
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};