"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Box, Card, CardContent, Dialog, Divider } from "@mui/material";
import Image from "next/image";
import { fetchTransport } from "../../../services/Api/TransportApi";
import TransportType from "../../../components/UI/TransportType";
import TravelTypography from "../../../components/UI/TravelTypography";
import { FadeLoader } from "react-spinners";
import StatusColor from "../../../components/UI/StatusColor";
import ClassColor from "../../../components/UI/ClassColor";
import busImg from "../../../assets/bus.jpg";
import ferryImg from "../../../assets/ferry.jpg";
import flightImg from "../../../assets/flight.jpg";
import metroImg from "../../../assets/metro.jpg";
import shipImg from "../../../assets/ship.jpg";
import taxiImg from "../../../assets/taxi.jpg";
import trainImg from "../../../assets/train.jpg";
import dayjs from "dayjs";
import { useTravel } from "../../../store/Travel/useTravel";

const transportImages = {
  bus: busImg,
  ferry: ferryImg,
  flight: flightImg,
  metro: metroImg,
  ship: shipImg,
  taxi: taxiImg,
  train: trainImg,
};

const Travel = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["transport"],
    queryFn: fetchTransport,
  });

  const { open, selectedTravel, openDialog, closeDialog } = useTravel();

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FadeLoader color="#2f7439" size={4} />
      </Box>
    );
  }

  if (isError) {
    return (
      <TravelTypography
        sx={{ textAlign: "center", marginTop: "50px", color: "error.main" }}
      >
        {error.message}
      </TravelTypography>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "24px",
        p: "24px",
        backgroundColor: "#f5f7fb",
      }}
    >
      {data?.map((travel) => (
        <Card
          key={travel.id}
          onClick={() => {
            openDialog(travel);
          }}
          sx={{
            width: "380px",
            height: "100%",
            borderRadius: "32px",
            padding: "16px",
            backgroundColor: "#f5e6e6",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(221, 90, 90, 0.12)",
          }}
        >
          <Image
            src={transportImages[travel.type]}
            alt={travel.type}
            width={400}
            height={240}
            style={{
              height: "250px",
              objectFit: "cover",
              borderRadius: "25px",
            }}
          />

          <CardContent
            sx={{
              padding: 0,
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <Box>
                <TravelTypography>{travel.type} Info</TravelTypography>

                {/* transport no  */}
                <TravelTypography
                  fontSize="30px"
                  fontWeight={800}
                  sx={{ marginTop: "20px" }}
                >
                  {travel.transportNumber}
                </TravelTypography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
                marginTop: "30px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  textAlign: "left",
                }}
              >
                <TravelTypography
                  fontWeight={700}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {travel.from}
                </TravelTypography>
              </Box>

              <Box
                sx={{
                  width: "170px",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    borderTop: "2px dashed #bdbdbd",
                  }}
                />
                <TravelTypography
                  fontSize="12px"
                  color="#999"
                  fontWeight={600}
                  sx={{ whiteSpace: "nowrap" }}
                >
                  {`${Math.ceil(travel.durationHours)}h`}
                </TravelTypography>
                <Box
                  sx={{
                    flex: 1,
                    borderTop: "2px dashed #bdbdbd",
                  }}
                />
              </Box>

              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  textAlign: "right",
                }}
              >
                <TravelTypography
                  fontWeight={700}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {travel.to}
                </TravelTypography>
              </Box>
            </Box>
            {/*  carrier */}
            <Box sx={{ marginTop: "32px" }}>
              <TravelTypography fontSize="12px" color="#999">
                Carrier
              </TravelTypography>

              <TravelTypography fontSize="18px" fontWeight={700}>
                {travel.carrier}
              </TravelTypography>
            </Box>
          </CardContent>
        </Card>
      ))}

      {/* Dialog  */}

      <Dialog
        open={open}
        onClose={closeDialog}
        sx={{
          "& .MuiDialog-paper": {
            width: "100%",
            maxWidth: "420px",
            maxHeight: "90vh",
            borderRadius: "48px",
            p: "32px",
            backgroundColor: "#fff",
            boxShadow: "0 25px 60px #f3b5b51f",
          },
        }}
      >
        {selectedTravel && (
          <Box>
            <CardContent sx={{ padding: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  {/* type of transport */}

                  <TravelTypography> {selectedTravel.type}</TravelTypography>

                  <TravelTypography
                    fontSize="25px"
                    fontWeight={600}
                    color="#222"
                  >
                    {selectedTravel.transportNumber}
                  </TravelTypography>
                </Box>

                <ClassColor travelclass={selectedTravel.class} />
              </Box>
              {/* STATUS */}
              <Box sx={{ marginTop: "30px" }}>
                <TravelTypography
                  fontSize="14px"
                  color="#888"
                  sx={{ marginBottom: "10px" }}
                >
                  Status
                </TravelTypography>
                <StatusColor
                  status={selectedTravel.status}
                  sx={{ fontWeight: 900 }}
                />
              </Box>
              <Divider sx={{ marginY: "25px" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {/* FROM */}
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    minWidth: 0,
                    justifyContent: "flex-start",
                  }}
                >
                  <TravelTypography
                    fontWeight={800}
                    color="#333"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {selectedTravel.from}
                  </TravelTypography>
                </Box>

                {/* CENTER */}
                <Box
                  sx={{
                    width: "130px",
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TransportType types={selectedTravel.type} />

                  <TravelTypography color="#999" sx={{ marginTop: "10px" }}>
                    {`${Math.ceil(selectedTravel.durationHours)}h`}
                  </TravelTypography>
                </Box>

                {/* TO */}

                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    minWidth: 0,
                    justifyContent: "flex-end",
                  }}
                >
                  <TravelTypography
                    fontWeight={800}
                    color="#333"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      display: "block",
                      width: "100%",
                      textAlign: "right",
                    }}
                  >
                    {selectedTravel.to}
                  </TravelTypography>
                </Box>
              </Box>
              <Divider sx={{ marginY: "25px" }} />
              {/* departure */}
              <Box sx={{ marginTop: "28px" }}>
                <TravelTypography
                  fontSize="14px"
                  color="#999"
                  sx={{ marginBottom: "6px" }}
                >
                  Departure
                </TravelTypography>

                <TravelTypography fontSize="18px" fontWeight={700} color="#222">
                  {dayjs(selectedTravel.departureDateTime).format(
                    "hh:mm on dddd, D MMM YYYY",
                  )}
                </TravelTypography>
              </Box>
              {/* arrival */}
              <Box sx={{ marginTop: "24px" }}>
                <TravelTypography
                  fontSize="14px"
                  color="#999"
                  sx={{ marginBottom: "6px" }}
                >
                  Arrival
                </TravelTypography>

                <TravelTypography fontSize="18px" fontWeight={700} color="#222">
                  {dayjs(selectedTravel.arrivalDateTime).format(
                    "hh:mm on dddd, D MMM YYYY",
                  )}

                  {/* dddd -- day , D mean the day of the month like a 2 , MMM-- short month name */}
                </TravelTypography>
              </Box>
              <Divider sx={{ marginY: "25px" }} />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <TravelTypography fontSize="13px" color="#999">
                    Carrier
                  </TravelTypography>

                  <TravelTypography fontSize="17px" fontWeight={700}>
                    {selectedTravel.carrier}
                  </TravelTypography>
                </Box>

                <Box
                  sx={{
                    padding: "14px 38px",
                    borderRadius: "999px",
                    background: "  #7B9CFF",
                    cursor: "pointer",
                  }}
                >
                  <TravelTypography fontSize="15px" fontWeight={600}>
                    Select
                  </TravelTypography>
                </Box>
              </Box>
            </CardContent>
          </Box>
        )}
      </Dialog>
    </Box>
  );
};

export default Travel;
