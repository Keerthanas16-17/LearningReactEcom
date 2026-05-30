import { BarChart } from "@mui/x-charts/BarChart";
import ChartCard from "@/components/UI/ChartCard";
import { dataset } from "@/data/charts/chart.data";

export default function BarChartCard() {
  return (
    <ChartCard title="Bar Chart">
      <BarChart
        desc="Bar label example with two series."
        dataset={dataset}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "x",
            label: "X Values",
          },
        ]}
        yAxis={[
          {
            label: " Y Values",
          },
        ]}
        series={[
          {
            label: "Series 1",
            barLabel: "value",
            dataKey: "series1",
          },
          {
            label: "Series 2",
            barLabel: "value",
            dataKey: "series2",
          },
        ]}
        borderRadius={10}
        slotProps={{
          tooltip: {
            trigger: "none",
          },
        }}
        colors={["#b2aef4", "#16db62"]}
        height={300}
        width={500}
        grid={{ horizontal: true, vertical: true }}
        // It is highlight the x axis area in the chart data when hovering a bar
        axisHighlight={{
          x: "line",
        }}
      />
    </ChartCard>
  );
}
