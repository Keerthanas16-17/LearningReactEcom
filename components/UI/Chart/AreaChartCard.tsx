import { LineChart, lineClasses } from "@mui/x-charts";
import ChartCard from "@/components/UI/ChartCard";
import { Box } from "@mui/material";
import { dataArea, monthLabels } from "@/data/charts/chart.data";

export default function AreaChartCard() {
  return (
    // Area Chart
    <ChartCard title="Area Chart">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LineChart
          series={[
            {
              data: dataArea,
              label: "Revenue",
              area: true,
            },
          ]}
          xAxis={[
            {
              scaleType: "point",
              data: monthLabels,
              height: 28,
            },
          ]}
          yAxis={[
            {
              label: "Y Axis",
            },
          ]}
          sx={{
            [`& .${lineClasses.line}`]: {
              display: "none",
            },
          }}
          colors={["#f263a1"]}
          margin={{ right: 24 }}
          width={500}
          height={350}
          grid={{ horizontal: true }}
        />
      </Box>
    </ChartCard>
  );
}
