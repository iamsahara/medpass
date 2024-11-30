import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Collapse,
  List,
  ListItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

function PatientCard({ patient, onSelect, isSelected }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const theme = useTheme();

  const toggleInfo = (e) => {
    e.stopPropagation();
    setShowInfo(!showInfo);
    if (showHistory) setShowHistory(false); // Close history if it's open
  };

  const toggleHistory = (e) => {
    e.stopPropagation();
    setShowHistory(!showHistory);
    if (showInfo) setShowInfo(false); // Close info if it's open
  };

  return (
    <Card
      onClick={onSelect}
      sx={{
        cursor: "pointer",
        backgroundColor: isSelected
          ? theme.palette.action.hover
          : theme.palette.background.paper,
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
        height: showInfo || showHistory ? "auto" : "60px", // Dynamic height
        padding: "0.5rem 1rem",
        marginBottom: "0.5rem",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Patient Name */}
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
            {patient.name}
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

          {/* History Button */}
          <Button
            variant="outlined"
            size="small"
            onClick={toggleHistory}
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
            {showHistory ? "Hide History" : "View History"}
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
            Email: {patient.email}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.75rem",
              marginBottom: 0.5,
            }}
          >
            Phone: {patient.phone}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.75rem",
              marginBottom: 0.5,
            }}
          >
            Insurance: {patient.insurance_number}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.75rem",
            }}
          >
            Address: {patient.address}
          </Typography>
        </CardContent>
      </Collapse>

      {/* Collapsible History Section */}
      <Collapse in={showHistory} timeout="auto" unmountOnExit>
        {patient.history && patient.history.length > 0 ? (
          <List sx={{ padding: 0 }}>
            {patient.history.map((appointment, index) => (
              <ListItem
                key={index}
                sx={{
                  padding: "0.2rem 0",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "0.65rem",
                    color: theme.palette.text.secondary,
                  }}
                >
                  {appointment.date}: {appointment.details}
                </Typography>
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.65rem",
              color: theme.palette.text.secondary,
              fontStyle: "italic",
              padding: "0.2rem",
            }}
          >
            No history available.
          </Typography>
        )}
      </Collapse>
    </Card>
  );
}

export default PatientCard;
