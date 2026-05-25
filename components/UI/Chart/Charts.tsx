"use client";
import { Box } from "@mui/material";
import BarTypography from "../../../components/UI/BarTypography";
import ChartPaper from "../../../components/UI/ChartPaper";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { RadarChart } from "@mui/x-charts/RadarChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import { lineClasses } from "@mui/x-charts/LineChart";

type BarData = {
  x: string;
  series1: number;
  series2: number;
};

type PieData = {
  id: number;
  label: string;
  value: number;
};

type ScatterData = {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
};

const dataset: BarData[] = [
  { x: "Data A", series1: 16, series2: 15 },
  { x: "Data B", series1: 3, series2: 6 },
  { x: "Data C", series1: 17, series2: 22 },
];

const desktopOS: PieData[] = [
  { id: 0, label: "Windows", value: 35 },
  { id: 1, label: "macOS", value: 25 },
  { id: 2, label: "Linux", value: 15 },
  { id: 3, label: "Chrome OS", value: 10 },
  { id: 5, label: "Other", value: 7 },
];

const valueFormatter = (item: any): string => `${item.value}%`;
const scatterData: ScatterData[] = [
  { id: "data1", x1: 45, y1: 120, x2: 210, y2: 80 },
  { id: "data2", x1: 98, y1: 300, x2: 180, y2: 150 },
  { id: "data3", x1: 150, y1: 220, x2: 320, y2: 260 },
  { id: "data4", x1: 60, y1: 180, x2: 260, y2: 210 },
  { id: "data5", x1: 30, y1: 90, x2: 170, y2: 60 },
  { id: "data6", x1: 280, y1: 420, x2: 340, y2: 310 },
  { id: "data7", x1: 75, y1: 250, x2: 200, y2: 140 },
  { id: "data8", x1: 190, y1: 330, x2: 360, y2: 280 },
  { id: "data9", x1: 15, y1: 160, x2: 390, y2: 340 },
  { id: "data10", x1: 130, y1: 280, x2: 300, y2: 240 },
  { id: "data11", x1: 220, y1: 390, x2: 330, y2: 290 },
  { id: "data12", x1: 50, y1: 210, x2: 370, y2: 350 },
  { id: "data13", x1: 110, y1: 340, x2: 250, y2: 180 },
  { id: "data14", x1: 40, y1: 140, x2: 310, y2: 120 },
];

const DataArea: number[] = [1200, 4500, 3100, 5200, 2000, 4800, 1000];

const monthLabels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

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
        {/* Bar Chart  */}
        <ChartPaper>
          <BarTypography>Bar Chart</BarTypography>
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
        </ChartPaper>
        {/* Line Chart */}
        <ChartPaper>
          <BarTypography>Line Chart</BarTypography>
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
        </ChartPaper>
        <ChartPaper>
          <BarTypography>Pie Chart</BarTypography>
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
        </ChartPaper>
        {/*  Scatter Chart*/}
        <ChartPaper>
          <BarTypography>Scatter Chart</BarTypography>

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
        </ChartPaper>
        {/* Area Chart */}
        <ChartPaper>
          <BarTypography>Area Chart</BarTypography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LineChart
              series={[
                {
                  data: DataArea,
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
        </ChartPaper>
        {/* Radar Chart */}
        <ChartPaper>
          <BarTypography>Radar Chart</BarTypography>

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
        </ChartPaper>
      </Box>
    </Box>
  );
}
