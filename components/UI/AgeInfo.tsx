"use client";
import React from "react";
import { Typography } from "@mui/material";

type AgeTypographyProps = {
  children?: any;
  sx?: object;
};
const AgeInfo = ({ children, sx = {} }: AgeTypographyProps) => {
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: "80px",
        fontWeight: 900,
        fontStyle: "italic",
        lineHeight: 1,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default AgeInfo;
