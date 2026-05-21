import FlightIcon from "@mui/icons-material/Flight";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import TramIcon from "@mui/icons-material/Tram";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import SailingIcon from "@mui/icons-material/Sailing";

const TRANSPORT_ICONS = {
  flight: {
    icon: FlightIcon,
    color: "#FF6B6B",
  },

  train: {
    icon: TrainIcon,
    color: "#4ECDC4",
  },

  bus: {
    icon: DirectionsBusIcon,
    color: "#FFA94D",
  },

  metro: {
    icon: TramIcon,
    color: "#845EF7",
  },

  ship: {
    icon: DirectionsBoatIcon,
    color: "#339AF0",
  },

  ferry: {
    icon: SailingIcon,
    color: "#20C997",
  },

  taxi: {
    icon: LocalTaxiIcon,
    color: "#FCC419",
  },
};

const TransportType = ({ types }) => {
  const typeColor = TRANSPORT_ICONS[types];
  console.log("typeColor:", typeColor);
  const Icon = typeColor.icon;

  return (
    <Icon
      sx={{
        color: typeColor.color,
        fontSize: "20px",
      }}
    />
  );
};

export default TransportType;
