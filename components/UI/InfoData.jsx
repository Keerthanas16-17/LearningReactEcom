import React from "react";
import { Typography } from "@mui/material";

const InfoData = ({ children, variant = "body1", sx = {} }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default InfoData;
