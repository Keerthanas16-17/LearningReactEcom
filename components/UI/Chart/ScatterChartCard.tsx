import { ScatterChart } from "@mui/x-charts/ScatterChart";
import ChartCard from "@/components/UI/ChartCard";
import { Box } from "@mui/material";
import { scatterData } from "@/data/charts/chart.data";

export default function ScatterChartCard() {
  return (
    //  Scatter Chart
    <ChartCard title="Scatter Chart">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ScatterChart
          xAxis={[
            {
              label: "X Axis",
            },
          ]}
          yAxis={[
            {
              label: "Y Axis",
            },
          ]}
          series={[
            {
              label: "Series A",
              data: scatterData.map((v) => ({
                x: v.x1,
                y: v.y1,
                id: v.id,
              })),
              markerSize: 8,
            },
            {
              label: "Series B",
              data: scatterData.map((v) => ({
                x: v.x2,
                y: v.y2,
                id: v.id,
              })),
              markerSize: 4,
            },
          ]}
          colors={["#b5cf1d", "#dd5de0"]}
          height={350}
          width={500}
          grid={{ horizontal: true, vertical: true }}
          margin={{
            top: 20,
            right: 20,
            bottom: 50,
            left: 60,
          }}
          axisHighlight={{
            x: "line",
            y: "line",
          }}
        />
      </Box>
    </ChartCard>
  );
}
