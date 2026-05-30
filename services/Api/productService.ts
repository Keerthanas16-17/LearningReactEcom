
import {Product} from "@/types/product/product.type";

export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products data");
  }

  const data = await res.json();
  return data.products as Product[];
};

export const fetchProductByTitle = async (title: string) => {
  const urlTitle = title.replace(/-/g, " ");

  const res = await fetch(
    `https://dummyjson.com/products/search?q=${urlTitle}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json();

  const matchedProductTitle = data.products.find(
    (product: Product) => product.title.toLowerCase() === urlTitle.toLowerCase(),
  );
  return matchedProductTitle;
};
