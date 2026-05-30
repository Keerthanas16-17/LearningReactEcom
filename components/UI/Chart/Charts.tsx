"use client";
import { Box } from "@mui/material";
import BarTypography from "../../../components/UI/BarTypography";
import BarChartCard from "@/components/UI/Chart/BarChartCard";
import LineChartCard from "@/components/UI/Chart/LineChartCard";
import PieChartCard from "@/components/UI/Chart/PieChartCard";
import ScatterChartCard from "@/components/UI/Chart/ScatterChartCard";
import AreaChartCard from "@/components/UI/Chart/AreaChartCard";
import RadarChartCard from "@/components/UI/Chart/RadarChartCard";

export default function Charts() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        padding: 4,
        backgroundColor: "#999e9a",
      }}
    >
      <BarTypography
        sx={{
          color: "#e67e22",
          fontSize: "80px",
        }}
      >
        Charts
      </BarTypography>
      <Box
        sx={{
          display: "flex",
          gap: 4,
          padding: 4,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <BarChartCard />
        <LineChartCard />
        <PieChartCard />
        <ScatterChartCard />
        <AreaChartCard />
        <RadarChartCard />
      </Box>
    </Box>
  );
}
