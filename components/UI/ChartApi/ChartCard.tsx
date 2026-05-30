"use client";

import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

type ChartCardProps = {
  chart: any;
};

const ChartCard = ({ chart }: ChartCardProps) => {
  return (
    <Paper
      sx={{
        padding: 4,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        margin: "50px",
      }}
    >
      <Typography variant="h5" sx={{ mb: 3 }}>
        {chart?.title}
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        {chart?.subtitle}
      </Typography>

      {/* BAR CHART */}

      {chart?.type === "bar" && (
        <BarChart
          xAxis={[
            {
              scaleType: chart?.xAxis?.scaleType,
              data: chart?.xAxis?.data,
              label: chart?.xAxis?.label,
            },
          ]}
          series={chart?.series?.map((item: any) => ({
            data: item.data,
            label: item.label,
            color: item.color,
          }))}
          height={chart?.height}
          borderRadius={chart?.settings?.borderRadius}
          grid={{
            horizontal: chart?.settings?.showGrid,
            vertical: chart?.settings?.showGrid,
          }}
        />
      )}

      {/* LINE CHART */}

      {chart?.type === "line" && (
        <LineChart
          xAxis={[
            {
              scaleType: chart?.xAxis?.scaleType,
              data: chart?.xAxis?.data,
              label: chart?.xAxis?.label,
            },
          ]}
          yAxis={[
            {
              label: chart?.yAxis?.label,
              min: chart?.yAxis?.min,
            },
          ]}
          series={chart?.series?.map((item: any, index: number) => ({
            id: item.id,
            data: item.data,
            label: item.label,
            color: chart?.theme?.palette[index],
          }))}
          height={chart?.height}
        />
      )}

      {/* PIE CHART */}

      {chart?.type === "pie" && (
        <PieChart
          series={[
            {
              data: chart?.series?.map((item: any) => ({
                id: item.id,
                value: item.value,
                label: item.label,
                color: item.color,
              })),
            },
          ]}
          height={chart?.height}
        />
      )}

      {/* SCATTER CHART */}

      {chart?.type === "scatter" && (
        <ScatterChart
          xAxis={[
            {
              label: chart?.xAxis?.label,
            },
          ]}
          yAxis={[
            {
              label: chart?.yAxis?.label,
            },
          ]}
          series={[
            {
              data: chart?.series[0]?.data,
              label: chart?.series[0]?.label,
            },
          ]}
          height={chart?.height}
        />
      )}

      {/* AREA CHART */}

      {chart?.type === "area" && (
        <LineChart
          xAxis={[
            {
              scaleType: chart?.xAxis?.scaleType,
              data: chart?.xAxis?.data,
              label: chart?.xAxis?.label,
            },
          ]}
          series={chart?.series?.map((item: any) => ({
            data: item.data,
            label: item.label,
            area: true,
          }))}
          height={chart?.height}
        />
      )}
    </Paper>
  );
};

export default ChartCard;
