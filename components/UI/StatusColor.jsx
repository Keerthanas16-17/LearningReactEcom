import { Chip } from "@mui/material";

const STATUS_COLOR = {
  Running: {
    backgroundColor: "#ecdac4",
    color: "#E67700",
  },

  Delayed: {
    backgroundColor: "#f7c7c7",
    color: "#ef0f0f",
  },
  "On Time": {
    backgroundColor: "#bce0c1",
    color: "#2B8A3E",
  },
  Cancelled: {
    backgroundColor: "#FFE3E3",
    color: "#C92A2A",
  },
  Scheduled: {
    backgroundColor: "#a0c4e0",
    color: "#1864AB",
  },
  Completed: {
    backgroundColor: "#b2ebd9",
    color: "#087F5B",
  },
  Boarding: {
    backgroundColor: "#f0e2a4",
    color: "#F08C00",
  },
  "In Transit": {
    backgroundColor: "#cfc4ed",
    color: "#5F3DC4",
  },
};

const DEFAULT_COLOR = {
  backgroundColor: "#CED6E0",
  color: "#2F3542",
};

const StatusColor = ({ status }) => {
  const chipColor = STATUS_COLOR[status];

  console.log("chipColor:", chipColor);

  return (
    <Chip
      label={status}
      sx={{
        ...chipColor,
        fontWeight: 900,
      }}
    />
  );
};

export default StatusColor;
