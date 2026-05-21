import React from "react";
import { Typography } from "@mui/material";

const AgeInfo = ({
  children,
  variant = "body1",
  fontSize = "80px",
  fontWeight = 900,
  fontStyle = "italic",
  lineHeight = "1",

  sx = {},
}) => {
  return (
    <Typography
      variant={variant}
      sx={{
        fontSize,
        fontWeight,
        fontStyle,
        lineHeight,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default AgeInfo;
