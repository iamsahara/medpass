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

      <Collapse in={showInfo} timeout="auto" unmountOnExit>
  <CardContent
    sx={{
      padding: "0.5rem",
      backgroundColor: theme.palette.background.default,
      borderRadius: "6px",
      boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
      border: `1px solid ${theme.palette.divider}`,
      marginTop: "0.5rem",
    }}
  >
    <Typography
      variant="body2"
      sx={{
        fontSize: "0.8rem",
        fontWeight: 600,
        color: theme.palette.primary.main,
        marginBottom: "0.5rem",
      }}
    >
      Patient Info
    </Typography>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "0.5rem",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          fontSize: "0.75rem",
        }}
      >
        <strong>Email:</strong> {patient.email}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          fontSize: "0.75rem",
        }}
      >
        <strong>Phone:</strong> {patient.phone}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          fontSize: "0.75rem",
        }}
      >
        <strong>Insurance:</strong> {patient.insurance_number}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          fontSize: "0.75rem",
        }}
      >
        <strong>Address:</strong> {patient.address}
      </Typography>
    </Box>
  </CardContent>
</Collapse>

<Collapse in={showHistory} timeout="auto" unmountOnExit>
  <Box
    sx={{
      padding: "1rem",
      backgroundColor: theme.palette.background.default,
      borderRadius: "8px",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      border: `1px solid ${theme.palette.divider}`,
      marginTop: "0.5rem",
    }}
  >
    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        fontSize: "1rem",
        color: theme.palette.primary.main,
        marginBottom: "0.75rem",
        textAlign: "center",
      }}
    >
      History of Appointments
    </Typography>

    {patient.history && patient.history.length > 0 ? (
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          padding: 0,
        }}
      >
        {patient.history.map((appointment, index) => (
          <ListItem
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.5rem",
              backgroundColor: theme.palette.background.paper,
              borderRadius: "6px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
              border: `1px solid ${theme.palette.divider}`,
            }}
          >
            {/* Date Section */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: theme.palette.primary.main,
                }}
              >
                {appointment.date}
              </Typography>
            </Box>

            {/* Details Section */}
            <Box sx={{ flex: 3 }}>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "0.8rem",
                  color: theme.palette.text.secondary,
                }}
              >
                {appointment.details}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    ) : (
      <Box
        sx={{
          padding: "0.5rem",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.85rem",
            fontStyle: "italic",
            color: theme.palette.text.secondary,
          }}
        >
          No history available.
        </Typography>
      </Box>
    )}
  </Box>
</Collapse>

    </Card>
  );
}

export default PatientCard;
