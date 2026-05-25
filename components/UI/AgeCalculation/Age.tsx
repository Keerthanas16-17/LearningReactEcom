"use client";
import React, { useState } from "react";
import { Card, Grid, TextField, IconButton, Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import dayjs from "dayjs";
import AgeInfo from "../AgeInfo";
import BoxAge from "../BoxAge";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export default function Age() {
  interface AgeType {
    years: number;
    months: number;
    days: number;
  }

  interface ErrorType {
    year: string;
    month: string;
    day: string;
  }

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
  const currentYear = today.year();

  const CalculateAge = () => {
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

            <TextField
              value={day}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                if (value.length === 2 && (+value < 1 || +value > 31)) {
                  setError({
                    ...error,
                    day: "Enter a valid day ",
                  });
                  return;
                }
                setError({
                  ...error,
                  day: "",
                });
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
            <AgeInfo fontSize="14px" fontWeight={700}>
              Month
            </AgeInfo>
            <TextField
              value={month}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                if (value.length === 2 && (+value < 1 || +value > 12)) {
                  setError({
                    ...error,
                    month: "Enter a valid month ",
                  });
                  return;
                }
                setError({
                  ...error,
                  month: "",
                });

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
            <AgeInfo fontSize="14px" fontWeight={700}>
              Year
            </AgeInfo>
            <TextField
              value={year}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                if (
                  value.length === 4 &&
                  (+value < 1 || +value > currentYear)
                ) {
                  setError({
                    ...error,
                    year: "year should  not be a future ",
                  });
                  return;
                }
                setError({
                  ...error,
                  year: "",
                });
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
            onClick={CalculateAge}
            disabled={
              !day ||
              !month ||
              !year ||
              Boolean(error.day) ||
              Boolean(error.month) ||
              Boolean(error.year)
            }
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
