import { Typography } from "@mui/material";

const TravelTypography = ({
  children,
  fontSize = "14px",
  fontWeight = 400,
  color = "#000",
  variant = "body1",
  textAlign = "left",
  lineHeight = 1.5,
  sx = {},
}) => {
  return (
    <Typography
      variant={variant}
      sx={{
        fontSize,
        fontWeight,
        color,
        textAlign,
        lineHeight,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default TravelTypography;
