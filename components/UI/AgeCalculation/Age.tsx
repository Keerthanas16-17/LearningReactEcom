"use client";
import React, { useState } from "react";
import { Card, Grid, TextField, IconButton, Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import dayjs from "dayjs";
import AgeInfo from "../AgeInfo";
import BoxAge from "../BoxAge";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const MAX_DAY = 31;
const MAX_MONTH = 12;
type AgeType = {
  years: number;
  months: number;
  days: number;
};

type ErrorType = {
  year: string;
  month: string;
  day: string;
};

export default function Age() {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");

  const [age, setAge] = useState<AgeType>({ years: 0, months: 0, days: 0 });

  const [error, setError] = useState<ErrorType>({
    year: "",
    month: "",
    day: "",
  });

  const today = dayjs();
  const currentYear: number = today.year();
  const hasErrors =
  Boolean(error.day) ||
  Boolean(error.month) ||
  Boolean(error.year);
  const isDisabled = !day || !month || !year || hasErrors;

  const calculateAge = (): void => {
    const birthDay = dayjs(
      `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
      "YYYY-MM-DD",
      true,
    );

    if (!birthDay.isValid()) {
      setError({
        day: "Invalid date",
        month: "Invalid date",
        year: "Invalid date",
      });
      return;
    }
    if (birthDay.isAfter(today)) {
      setError({
        day: "Must be in the past",
        month: "Must be in the past",
        year: "Must be in the past",
      });
      return;
    }

    setError({
      day: "",
      month: "",
      year: "",
    });

    // for years calculate
    const years: number = today.diff(birthDay, "year");
    const afterYears = birthDay.add(years, "year");

    // for months calculate
    const months: number = today.diff(afterYears, "month");
    const afterMonths = afterYears.add(months, "month");

    // for days calculate
    const days: number = today.diff(afterMonths, "day");

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
            <AgeInfo sx={{ fontSize: "14px", fontWeight: "700" }}>DAY</AgeInfo>

            <TextField
              value={day}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                const num = Number(value);

                if (value.length === 2 && (num < 1 || num > MAX_DAY)) {
                  setError((prev) => ({
                    ...prev,
                    day: "Enter a valid day ",
                  }));
                  return;
                }
                setError((prev) => ({
                  ...prev,
                  day: "",
                }));
                setDay(value);
              }}
              error={Boolean(error.day)}
              helperText={error.day}
              slotProps={{
                htmlInput: {
                  maxLength: 2,
                  inputMode: "numeric",
                },
              }}
            />
          </Grid>

          <Grid size={4}>
            <AgeInfo sx={{ fontSize: "14px", fontWeight: "700" }}>
              Month
            </AgeInfo>
            <TextField
              value={month}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                const num = Number(value);

                if (value.length === 2 && (num < 1 || num > MAX_MONTH)) {
                  setError((prev) => ({
                    ...prev,
                    month: "Enter a valid month ",
                  }));
                  return;
                }
                setError((prev) => ({
                  ...prev,
                  month: "",
                }));

                setMonth(value);
              }}
              error={Boolean(error.month)}
              helperText={error.month}
              slotProps={{
                htmlInput: {
                  maxLength: 2,
                  inputMode: "numeric",
                },
              }}
            />
          </Grid>
          <Grid size={4}>
            <AgeInfo sx={{ fontSize: "14px", fontWeight: "700" }}>Year</AgeInfo>
            <TextField
              value={year}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                const num = Number(value);

                if (value.length === 4 && (num < 1 || num > currentYear)) {
                  setError((prev) => ({
                    ...prev,
                    year: "year should  not be a future ",
                  }));
                  return;
                }
                setError((prev) => ({
                  ...prev,
                  year: "",
                }));
                setYear(value);
              }}
              error={Boolean(error.year)}
              helperText={error.year}
              slotProps={{
                htmlInput: {
                  maxLength: 4,
                  inputMode: "numeric",
                },
              }}
            />
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
            onClick={calculateAge}
            disabled={isDisabled}
             
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
