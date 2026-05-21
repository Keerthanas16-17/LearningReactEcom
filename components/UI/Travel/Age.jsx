"use client";
import React, { useState } from "react";
import { Card, Grid, TextField, IconButton, Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import dayjs from "dayjs";
import AgeInfo from "../AgeInfo";
import BoxAge from "../BoxAge";

export default function Age() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [age, setAge] = useState({ years: "", months: "", days: "" });

  
  const birthDay = dayjs(`${year}-${month}-${day}`);
  const today = dayjs();
  const CalculateAge = () => {
    if (birthDay.isAfter(today)) {
      alert("Enter a valid date");
      return;
    }

    // for years calculate
    const years = today.diff(birthDay, "year");

    // for months calculate
    const months = today.diff(birthDay.add(years, "year"), "month");

    // foe days calculate
    const days = today.diff(
      birthDay.add(years, "year").add(months, "month"),
      "day",
    );

    setAge({ years, months, days });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#ececec",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "16px",
      }}
    >
      <Card
        sx={{
          padding: "32px",
          borderRadius: "30px 40px 130px 40px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={4}>
            <AgeInfo fontSize="14px" fontWeight={700}>
              DAY
            </AgeInfo>
            <TextField value={day} onChange={(e) => setDay(e.target.value)} />
          </Grid>

          <Grid size={4}>
            <AgeInfo fontSize="14px" fontWeight={700}>
              Month
            </AgeInfo>
            <TextField
              value={month}
              onChange={(e) => setMonth(e.target.value)}
            />
          </Grid>
          <Grid size={4}>
            <AgeInfo fontSize="14px" fontWeight={700}>
              Year
            </AgeInfo>
            <TextField value={year} onChange={(e) => setYear(e.target.value)} />
          </Grid>
        </Grid>

        <Box
          sx={{
            position: "relative",
            my: "40px",
          }}
        >
          <AgeInfo
            sx={{
              height: "2px",
              bgcolor: "#eee",
            }}
          />
          <IconButton
            onClick={CalculateAge}
            sx={{
              position: "absolute",
              right: "4px",
              top: "50%",
              transform: "translateY(-50%)",
              bgcolor: "#8645ff",
            }}
          >
            <ArrowDownwardIcon fontSize="large" />
          </IconButton>
        </Box>

        <Box>
          <AgeInfo>
            <BoxAge>{age.years}</BoxAge>
            years
          </AgeInfo>

          <AgeInfo>
            <BoxAge>{age.months}</BoxAge>
            months
          </AgeInfo>

          <AgeInfo>
            <BoxAge>{age.days}</BoxAge>
            days
          </AgeInfo>
        </Box>
      </Card>
    </Box>
  );
}
