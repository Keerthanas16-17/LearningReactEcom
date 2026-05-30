"use client";
import React, { useState, useId } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchProductByTitle } from "@/services/Api/productService";
import InfoData from "../../../components/UI/InfoData";
import dayjs from "dayjs";
import Image from "next/image";
import {
  Box,
  Paper,
  Button,
  Stack,
  Chip,
  Divider,
  Card,
  CardContent,
  Avatar,
  LinearProgress,
} from "@mui/material";

import Rating from "@mui/material/Rating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DiscountIcon from "@mui/icons-material/Discount";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import { CircleLoader } from "react-spinners";
import { Product } from "@/types/product/product.type";
const ProductDetails = () => {
  const params = useParams();
  const title = params?.title;
  console.log(params);

  const reviewId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery<Product>({
    queryKey: ["product", title],
    queryFn: () => fetchProductByTitle(title as string),
    enabled: !!title,
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  console.log(product?.id);
  // Loading

  if (isLoading)
    return (
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircleLoader color="#df2a6c" size={50} />
      </Box>
    );

  // Error

  if (isError)
    return (
      <InfoData
        sx={{
          color: "error.main",
          textAlign: "center",
          mt: 5,
        }}
      >
        {error.message}
      </InfoData>
    );

  if (!product) return <InfoData variant="h5">not found a product</InfoData>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        p: { xs: 2, md: 4 },
      }}
    >
      {/* product  */}

      <Paper
        elevation={0}
        sx={{
          p: 4,
          borderRadius: 4,
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1fr",
          },
          gap: 5,
        }}
      >
        {/* left side */}
        <Box>
          <Image
            src={product?.images?.[0]}
            alt={product.title}
            width={500}
            height={500}
            priority
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 8,
              backgroundColor: "#f2f2f2",
            }}
          />
        </Box>

        <Box>
          <Chip label={product.category} sx={{ mb: 2 }} />

          <InfoData variant="h4" sx={{ fontWeight: "bold" }}>
            {product.title}
          </InfoData>

          <InfoData variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            ${product.price.toString().replace(".", "")}
          </InfoData>

          <Divider sx={{ my: 3 }} />

          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#000",
                borderRadius: "40px",
                py: 1.7,
              }}
            >
              Add To Cart
            </Button>

            <Button
              sx={{
                minWidth: 55,
                borderRadius: "50%",
                border: "1px solid #ddd",
              }}
            >
              <FavoriteBorderIcon />
            </Button>
          </Stack>

          {/* description */}

          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: 3,
              borderRadius: "20px",
              backgroundColor: "#fafafa",
            }}
          >
            <InfoData sx={{ fontWeight: "bold", mb: 1 }}>Description</InfoData>
            <InfoData sx={{ color: "text.secondary" }}>
              {product.description}
            </InfoData>
          </Paper>

          {/* shipping */}
          <Paper
            elevation={0}
            sx={{
              mt: 3,
              p: 3,
              borderRadius: "20px",
              backgroundColor: "#fafafa",
            }}
          >
            <InfoData sx={{ fontWeight: "bold", mb: 2 }}>Shipping</InfoData>

            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <DiscountIcon />

                <InfoData>{product.discountPercentage.toFixed(1)}%</InfoData>
              </Stack>

              {/* Shipping data */}
              <Stack direction="row" spacing={2}>
                <LocalShippingIcon />
                <InfoData> {product.shippingInformation}</InfoData>
              </Stack>

              {/* Stock */}
              <Stack direction="row" spacing={2}>
                <Inventory2Icon />

                <InfoData> {product.stock}</InfoData>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Paper>

      {/* Reviews */}
      <Paper
        elevation={0}
        sx={{
          mt: 4,
          p: 4,
          borderRadius: 4,
        }}
      >
        <InfoData variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
          Rating & Reviews
        </InfoData>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 5,
          }}
        >
          <Box>
            <InfoData variant="h1" sx={{ fontWeight: "bold" }}>
              {product.rating.toFixed(1)}
            </InfoData>

            <InfoData sx={{ color: "gray" }}>
              ({product.reviews.length} Reviews)
            </InfoData>

            {[5, 4, 3, 2, 1].map((star) => (
              <Stack
                key={star}
                direction="row"
                spacing={2}
                sx={{ alignItems: "center" }}
              >
                <InfoData>{star}</InfoData>

                <LinearProgress
                  variant="determinate"
                  value={star}
                  sx={{
                    width: "100%",
                    height: 8,
                    borderRadius: 10,
                  }}
                />
              </Stack>
            ))}
          </Box>

          <Box>
            {product?.reviews?.map((review, index) => (
              <Box
                key={index}
                sx={{
                  borderRadius: 4,
                  borderBottom: "1px solid #e0e0e0",
                  pb: 2,
                  mb: 2,
                }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  aria-expanded={openIndex === index}
                  aria-controls={`review-${reviewId}-${index}`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  sx={{
                    backgroundColor: "black",
                    borderRadius: 3,
                    justifyContent: "space-between",
                    py: 1.5,
                  }}
                >
                  <Rating value={review.rating} readOnly precision={1} />

                  <InfoData sx={{ color: "white" }}>
                    Review {index + 1}
                  </InfoData>
                </Button>

                {openIndex === index && (
                  <Card
                    id={`review-${reviewId}-${index}`}
                    sx={{
                      mt: 2,
                      borderRadius: 4,
                      border: "1px solid #ddd",
                      boxShadow: "none",
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                          gap: 2,
                        }}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          sx={{
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            alt={review.reviewerName}
                            src={`https://i.pravatar.cc/150?u=${review.reviewerEmail}`}
                          />
                          <Box>
                            <InfoData
                              sx={{
                                fontWeight: "bold",
                              }}
                            >
                              {review.reviewerName}
                            </InfoData>

                            <InfoData
                              sx={{
                                color: "text.secondary",
                              }}
                            >
                              {review.reviewerEmail}
                            </InfoData>
                          </Box>
                        </Stack>
                        <InfoData>
                          {dayjs(review.date).format("DD MMM YYYY")}
                        </InfoData>
                      </Box>

                      <InfoData sx={{ mt: 2 }}>{review.comment}</InfoData>
                    </CardContent>
                  </Card>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default ProductDetails;
