import { Box } from "@mui/material";
import ChartPaper from "@/components/UI/ChartPaper";
import BarTypography from "@/components/UI/BarTypography";
import React from "react";

type ChartCardProps = {
  title: string;
  children: React.ReactNode;
};

const ChartCard = ({ title, children }: ChartCardProps) => {
  return (
    <ChartPaper>
      <BarTypography>{title}</BarTypography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </ChartPaper>
  );
};

export default ChartCard;
