"use client";
import React from "react";
import { Paper } from "@mui/material";

type ChartPaperProps = {
  children?: any;
  sx?: object;
};

const ChartPaper = ({ children, sx = {} }: ChartPaperProps) => {
  return (
    <Paper
      sx={{
        padding: "24px",
        marginBottom: "24px",
        borderRadius: "16px",
        width: "600px",
        height: "500px",
        boxShadow: "0px 4px 20px #e9eec4",
        ...sx,
      }}
    >
      {children}
    </Paper>
  );
};

export default ChartPaper;
