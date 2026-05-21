export const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products data");
  }

  const data = await res.json();
  return data.products;
};

export const fetchProductById = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const data = await res.json();
  return data;
};
