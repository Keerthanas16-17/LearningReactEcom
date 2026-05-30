"use client";

import React from "react";
import { Box } from "@mui/material";

type BoxTypographyProps = {
  children?: any;
  sx?: object;
};

const BoxAge = ({ children, sx = {} }: BoxTypographyProps) => {
  return (
    <Box
      component="span"
      sx={{
        color: "#8645ff",
        marginRight: "8px",
        fontSize: "80px",
        fontWeight: 900,
        fontStyle: "italic",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default BoxAge;
