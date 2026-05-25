export const fetchTransport = async () => {
  const res = await fetch("https://dummyjson.com/c/5fce-8ba5-4f35-988e");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  console.log(" Data:", data);

  return data;
};
