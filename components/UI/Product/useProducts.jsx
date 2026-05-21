"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../../services/API/productService";

const useProducts = () => {
  const isActiveUser = true;

  const { data, isLoading, isError, error } = useQuery({
    // unique ID for this API call

    queryKey: ["products"],

    // this is function that  fetches data from API

    queryFn: fetchProducts,

    // it will not refetch a data automatically [like a switch a tabs ]
    refetchOnWindowFocus: false,

    // Data is fresh for 5 seconds [no refetch during this time]

    staleTime: 5000,

    enabled: isActiveUser,
  });

  return { data, isLoading, isError, error };
};
export default useProducts;
