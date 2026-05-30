"use client";
import React from "react";
import { Typography } from "@mui/material";

type AgeInfoProp = {
  children?: React.ReactNode;
  sx?: object;
};
const AgeInfo = ({ children, sx = {} }: AgeInfoProp) => {
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