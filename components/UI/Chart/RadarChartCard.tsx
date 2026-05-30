import { RadarChart } from "@mui/x-charts/RadarChart";
import ChartCard from "@/components/UI/ChartCard";
import { Box } from "@mui/material";

export default function RadarChartCard() {
  return (
    // Radar Chart
        <ChartCard title="Radar Chart">

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RadarChart
          height={350}
          width={500}
          series={[
            {
              label: "Lisa",
              data: [120, 95, 76, 99, 65, 85],
            },
          ]}
          radar={{
            metrics: [
              { name: "Math", max: 120 },
              { name: "Chinese", max: 120 },
              { name: "English", max: 120 },
              { name: "Geography", max: 120 },
              { name: "Physics", max: 120 },
              { name: "History", max: 120 },
            ],
          }}
          colors={["#e3c411"]}
        />
      </Box>
    </ChartCard>
  );
}
