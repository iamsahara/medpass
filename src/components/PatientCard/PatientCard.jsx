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

function PatientCard({ patient, onSelect, isSelected }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

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
        backgroundColor: isSelected ? "#f5fcff" : "#fff",
        border: "1px solid",
        borderColor: isSelected ? "#00796b" : "rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        boxShadow: isSelected
          ? "0px 2px 4px rgba(0, 121, 107, 0.2)"
          : "0px 1px 3px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
          borderColor: "rgba(0, 121, 107, 0.3)",
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
              color: "#00796b",
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
            color="primary"
            onClick={toggleInfo}
            sx={{
              textTransform: "capitalize",
              fontWeight: 500,
              borderRadius: "6px",
              fontSize: "0.65rem",
              paddingX: 1,
            }}
          >
            {showInfo ? "Hide Info" : "View Info"}
          </Button>

          {/* History Button */}
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={toggleHistory}
            sx={{
              textTransform: "capitalize",
              fontWeight: 500,
              borderRadius: "6px",
              fontSize: "0.65rem",
              paddingX: 1,
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
            sx={{ color: "text.secondary", fontSize: "0.75rem", marginBottom: 0.5 }}
          >
            Email: {patient.email}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.75rem", marginBottom: 0.5 }}
          >
            Phone: {patient.phone}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.75rem", marginBottom: 0.5 }}
          >
            Insurance: {patient.insurance_number}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", fontSize: "0.75rem" }}
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
                    color: "text.secondary",
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
              color: "text.secondary",
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
