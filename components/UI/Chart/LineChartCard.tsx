import { LineChart } from "@mui/x-charts/LineChart";
import ChartPaper from "@/components/UI/ChartPaper";
import ChartCard from "@/components/UI/ChartCard";
export default function LineChartCard() {
  return (
    // Line Chart
    <ChartCard title="Line Chart">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: "X values" }]}
        yAxis={[
          {
            label: " Y Values",
          },
        ]}
        series={[
          {
            data: [3, 5, 2, 8.5, 1.5, 5],
            label: "Line 1",
            showMark: true,
            curve: "natural",
            area: true,
          },
        ]}
        height={300}
        width={500}
        grid={{ horizontal: true, vertical: true }}
        colors={["#46e57b"]}
        axisHighlight={{
          x: "line",
          y: "line",
        }}
      />
    </ChartCard>
  );
}
