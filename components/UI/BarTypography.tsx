"use client";
import React from "react";
import { Typography } from "@mui/material";

type BarTypographyProps = {
  children?: React.ReactNode;
  sx?: object;
};
const BarTypography = ({ children, sx = {} }: BarTypographyProps) => {
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: "600",
        textAlign: "center",
        mb: "24px",
        mt: "12px",
        color: "#16db62",
        fontFamily: "cursive",
        letterSpacing: "2px",
        fontSize: "40px",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default BarTypography;
