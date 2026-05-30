import { PieChart } from "@mui/x-charts/PieChart";
import ChartCard from "@/components/UI/ChartCard";
import { Box } from "@mui/material";
import { desktopOS } from "@/data/charts/chart.data";

const valueFormatter = (item: any) => `${item.value}%`;
export default function PieChartCard() {
  return (
    //  pie chart

       <ChartCard title="Pie Chart">

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PieChart
          series={[
            {
              data: desktopOS,
              outerRadius: 100,
              paddingAngle: 2,
              cornerRadius: 3,
              highlightScope: {
                fade: "global",
                highlight: "item",
              },

              valueFormatter,
            },
          ]}
          height={350}
          width={500}
        />
      </Box>
    </ChartCard>
  );
}
