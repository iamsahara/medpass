import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useTheme } from "@mui/material/styles";

function SpecialistCard({
  specialist,
  selectedSpecialist,
  selectedDate,
  onSelectSpecialist,
  onSelectDate,
  index, // Added index for unique background colors
}) {
  const isSelected = selectedSpecialist?.id === specialist.id;
  const [showInfo, setShowInfo] = useState(false);
  const [showAvailability, setShowAvailability] = useState(false);
  const theme = useTheme();

  const toggleInfo = (e) => {
    e.stopPropagation();
    setShowInfo(!showInfo);
    if (showAvailability) setShowAvailability(false);
  };

  const toggleAvailability = (e) => {
    e.stopPropagation();
    setShowAvailability(!showAvailability);
    if (showInfo) setShowInfo(false);
  };

  // Background shades based on index
  const backgroundColors = [
    theme.palette.background.default,
    theme.palette.action.hover,
    theme.palette.secondary.light,
  ];
  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
    <Card
      sx={{
        cursor: "pointer",
        backgroundColor: isSelected ? theme.palette.primary.light : backgroundColor,
        border: "1px solid",
        borderColor: isSelected ? theme.palette.primary.main : "rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        boxShadow: isSelected
          ? `0px 2px 4px ${theme.palette.primary.light}`
          : "0px 1px 3px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: `0px 3px 6px ${theme.palette.primary.light}`,
          borderColor: theme.palette.primary.light,
        },
        width: "100%",
        height: showInfo || showAvailability ? "auto" : "60px",
        padding: "0.5rem 1rem",
        marginBottom: "0.5rem",
      }}
      onClick={() => onSelectSpecialist(specialist)}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Specialist Name */}
        <Box sx={{ flex: 2 }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {specialist.name}
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {/* Info Button */}
          <Button
            variant="outlined"
            size="small"
            onClick={toggleInfo}
            sx={{
              textTransform: "capitalize",
              fontWeight: 500,
              borderRadius: "6px",
              fontSize: "0.65rem",
              paddingX: 1,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            {showInfo ? "Hide Info" : "View Info"}
          </Button>

          {/* Availability Button */}
          <Button
            variant="outlined"
            size="small"
            onClick={toggleAvailability}
            sx={{
              textTransform: "capitalize",
              fontWeight: 500,
              borderRadius: "6px",
              fontSize: "0.65rem",
              paddingX: 1,
              borderColor: theme.palette.secondary.main,
              color: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
            }}
          >
            {showAvailability ? "Hide Availability" : "Check Availability"}
          </Button>
        </Box>
      </Box>

      {/* Collapsible Info Section */}
      <Collapse in={showInfo} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: "0.5rem 0" }}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.75rem",
              marginBottom: 0.5,
            }}
          >
            Specialty: {specialist.specialty}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.75rem",
              marginBottom: 0.5,
            }}
          >
            Address: {specialist.address}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.75rem",
              marginBottom: 0.5,
            }}
          >
            Phone: {specialist.phone}
          </Typography>
        </CardContent>
      </Collapse>

      {/* Collapsible Availability Section */}
      <Collapse in={showAvailability} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: "0.5rem 0" }}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.75rem",
              marginBottom: 0.5,
            }}
          >
            First Availability:{" "}
            {specialist.firstAvailibility
              ? dayjs(specialist.firstAvailibility).format("MMMM DD, YYYY")
              : "Not Available"}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <DatePicker
            label="Select Appointment Date"
            value={isSelected ? selectedDate : null}
            onChange={(date) => onSelectDate(date)}
            shouldDisableDate={(date) =>
              specialist.availability
                ? !specialist.availability.includes(date.format("YYYY-MM-DD"))
                : true
            }
            sx={{
              width: "100%",
              "& .MuiInputBase-root": {
                fontSize: "0.85rem",
                backgroundColor: theme.palette.background.paper,
                borderRadius: "6px",
              },
            }}
          />
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default SpecialistCard;
