import { Chip } from "@mui/material";

const CLASS_COLOR = {
  Business: {
    backgroundColor: "#afc3e6",
    color: "#1A73E8",
  },

  Sleeper: {
    backgroundColor: "#e1ccf8",
    color: "#7B1FA2",
  },

  "AC Chair Car": {
    backgroundColor: "#cef3f8",
    color: "#00838F",
  },

  "AC Sleeper": {
    backgroundColor: "#bef3c2",
    color: "#2E7D32",
  },

  "Non AC": {
    backgroundColor: "#ddebf5",
    color: "#455A64",
  },

  Sedan: {
    backgroundColor: "#c0ddf2",
    color: "#1565C0",
  },

  SUV: {
    backgroundColor: "#f1dec0",
    color: "#EF6C00",
  },

  Standard: {
    backgroundColor: "#f8d5d5",
    color: "#616161",
  },

  "Economy Cabin": {
    backgroundColor: "#dbf8dd",
    color: "#388E3C",
  },

  "AC 3 Tier": {
    backgroundColor: "#dfd1f3",
    color: "#5E35B1",
  },

  Economy: {
    backgroundColor: "#cbf0ee",
    color: "#00695C",
  },

  "Volvo AC": {
    backgroundColor: "#c6e4f1",
    color: "#0277BD",
  },

  Hatchback: {
    backgroundColor: "#fdf2cc",
    color: "#F9A825",
  },

  "Premium Economy": {
    backgroundColor: "#f7d3df",
    color: "#C2185B",
  },

  "Luxury Suite": {
    backgroundColor: "#f6d3cf",
    color: "#D84315",
  },

  "Sleeper Non-AC": {
    backgroundColor: "#e8f8d5",
    color: "#558B2F",
  },
};

const DEFAULT_COLOR = {
  backgroundColor: "#d3c7b6",
  color: "#424242",
};

const ClassColor = ({ travelclass }) => {
  const chipClass = CLASS_COLOR[travelclass];

  return (
    <Chip
      label={travelclass}
      sx={{
        ...chipClass,
        fontWeight: 900,
      }}
    />
  );
};
export default ClassColor;
