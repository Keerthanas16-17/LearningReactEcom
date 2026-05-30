"use client"

export const fetchDashboard = async () => {
  const response = await fetch("https://dummyjson.com/c/1f57-6374-4fbd-a0f6");

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard");
  }

  const data = await response.json();
  return data;


};
