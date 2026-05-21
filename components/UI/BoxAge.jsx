"use client";

import React from "react";
import { Box } from "@mui/material";

const BoxAge = ({
  children,
  Component = "span",
  color = "#8645ff",
  marginRight = "8px",
  fontSize = "80px",
  fontWeight = 900,
  fontStyle = "italic",
  sx = {},
}) => {
  return (
    <Box
      component={Component}
      sx={{
        color,
        marginRight,
        fontSize,
        fontWeight,
        fontStyle,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxAge;
