import React, { useState } from "react";
import Confetti from "react-confetti-boom";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { z } from "zod";

const ratings: number[] = [1, 2, 3, 4, 5];
const ratingSchema = z.number().min(1).max(5);

const getRatingMessage = (rating: number) => {
  switch (rating) {
    case 1:
      return "Excellent ";
    case 2:
      return "Very Good ";
    case 3:
      return "Good ";
    case 4:
      return "Average ";
    case 5:
      return "Poor ";
    default:
      return "";
  }
};

const ConfettiData: React.FC = () => {

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  
  const handleSubmit = () => {
    const result = ratingSchema.safeParse(selectedRating);

    if (!result.success) {
      console.log("Invalid Rating");
      return;
    }

    setShowConfetti(true);
    setSubmitted(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#141519",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Confetti */}

      {showConfetti && (
        <Confetti
          mode="fall"
          particleCount={180}
          colors={[
            "#FC7614",
            "#FFFFFF",
            "#FFB86B",
            "#FFD6A5",
            "#00E5FF",
            "#7C4DFF",
          ]}
        />
      )}

      <Card
        sx={{
          width: 360,
          p: 4,
          borderRadius: "28px",
          background: "linear-gradient(180deg, #232A34 0%, #181E27 100%)",
          boxShadow: "0 25px 50px #00000066",
        }}
      >

        {/* Star Icon */}
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            backgroundColor: "#262E38",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
          }}
        >
          <StarRoundedIcon
            sx={{
              color: "#FC7614",
              fontSize: 22,
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            color: "#FFFFFF",
            fontWeight: 700,
            mb: 2,
          }}
        >
          How did we do?
        </Typography>

        <Typography
          sx={{
            color: "#969FAD",
            fontSize: "15px",
            lineHeight: 1.5,
            mb: 4,
          }}
        >
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </Typography>


        {/* Rating circle Buttons */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "14px",
            mb: 4,
          }}
        >
          {ratings.map((rating) => {
            const isSelected = selectedRating === rating;

            return (
              <IconButton
                key={rating}
                onClick={() => setSelectedRating(rating)}
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: "50%",
                  backgroundColor: isSelected ? "#FC7614" : "#262E38",
                  color: isSelected ? "#FFFFFF" : "#7C8798",
                  fontWeight: 700,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 700,
                  }}
                >
                  {rating}
                </Typography>
              </IconButton>
            );
          })}
        </Box>

        {/* Submit Button */}
        <Button
          fullWidth
          variant="contained"
          onClick={handleSubmit}
          disabled={!selectedRating}
          sx={{
            py: 1.6,
            borderRadius: "26px",
            backgroundColor: "#FC7614",
            color: "#FFFFFF",
            fontWeight: 700,
            fontSize: "20px",
          }}
        >
          SUBMIT
        </Button>
      </Card>

      {submitted && selectedRating && (
        <Box
          sx={{
            position: "absolute",
            bottom: 40,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#262E38",
              borderRadius: "28px",
              width: "360px",
              py: 2,
            }}
          >
            <Typography
              sx={{
                color: "#FC7614",
                fontWeight: 700,
                fontSize: "20px",
                textAlign: "center",
                whiteSpace: "nowrap",
              }}
            >
              {getRatingMessage(selectedRating)}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ConfettiData;
