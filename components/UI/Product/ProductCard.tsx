"use client";

import React from "react";
import { Card, CardContent, Button, Box } from "@mui/material";
import Link from "next/link";
import InfoData from "../InfoData";
import Image from "next/image";
import { Product } from "@/types/product/product.type";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const colors = [
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#FFD93D",
    "#845EC2",
    "#FF9671",
    "#00C9A7",
    "#FFC75F",
    "#F9F871",
    "#C34A36",
    "#0081CF",
    "#B0A8B9",
    "#FF8066",
    "#00B8A9",
    "#D65DB1",
    "#2C73D2",
    "#008E9B",
    "#FFAEBC",
    "#A0E7E5",
    "#B4F8C8",
  ];

  const randomColors = colors[Math.floor(Math.random() * colors.length)];
  let imageSrc = "";

  if (product.images && product.images.length > 0) {
    imageSrc = product.images[0];
  }

  return (
    <Card
      sx={{
        width: "320px",
        borderRadius: 3,
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "80px",
      }}
    >
      <Box
        sx={{
          height: 260,
          background: randomColors,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Image
          src={imageSrc}
          alt={product.title}
          width={180}
          height={180}
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <InfoData variant="h6" sx={{ fontWeight: "bold", minHeight: "70px" }}>
          {product.title}
        </InfoData>

        <InfoData
          variant="body1"
          sx={{
            color: "text.secondary",
            mt: 2,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {product.description}
        </InfoData>

        <InfoData sx={{ mt: 1 }}>
          Price: ${product.price.toString().replace(".", "")}
        </InfoData>

        <InfoData>Rating: {product.rating.toFixed(1)}</InfoData>
        <Box sx={{ mt: 2 }}>
          <Button
            component={Link}
            href={`/Location/${product.title.toLowerCase().replace(/\s+/g, "-")}`}
            variant="contained"
            fullWidth
          >
            VIEW
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
