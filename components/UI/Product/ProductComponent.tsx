"use client";

import React from "react";
import useProducts from "../Product/useProducts";
import ProductCard from "../Product/ProductCard";
import { Box, Typography } from "@mui/material";

import { CircleLoader } from "react-spinners"; // for Loading

const ProductComponent = () => {
  // custom hook

  const { data, isLoading, isError, error } = useProducts();
  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircleLoader color="#bb279d" size={50} />
      </Box>
    );

  if (isError)
    return (
      <Box
        sx={{
          textAlign: "center",
          color: "red",
          marginTop: 5,
        }}
      >
        <Typography variant="h6">{error?.message}</Typography>
      </Box>
    );

  return (
    <>
      <Box sx={{ textAlign: "center", mt: 2, color: "gray", mb: 3 }}>
        <Typography variant="h3" sx={{fontWeight: "bold"}}>
          PRODUCTS
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
    </>
  );
};

export default ProductComponent;
