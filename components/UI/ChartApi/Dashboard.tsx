"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import { Box, Typography } from "@mui/material";

import { fetchDashboard } from "../../../services/Api/chartApi";

import { CircleLoader } from "react-spinners";
import ChartCard from "./ChartCard";

const Dashboard = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["dashboard"],
    queryFn: fetchDashboard,
    refetchInterval: 30000,
  });

  console.log(data);

  // Loading

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <CircleLoader color="#bb279d" size={50} />
      </Box>
    );

  // Error
  if (isError)
    return (
      <Box
        sx={{
          textAlign: "center",
          color: "red",
          marginTop: 5,
        }}
      >
        <Typography variant="h6">{error.message}</Typography>
      </Box>
    );

  return (
    <Box sx={{p: 3}}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>{data?.dashboard.title}</Typography>
      {data?.charts?.map((chart: any) => (
        <ChartCard key={chart.id} chart={chart} />
      ))}
    </Box>
  );
};

export default Dashboard;
