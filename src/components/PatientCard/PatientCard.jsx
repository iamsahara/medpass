import React, { useState } from "react";
import { Box, Card, CardContent, Typography, Button, Collapse, List, ListItem, CircularProgress } from "@mui/material";

function PatientCard({ patient, onSelect, isSelected, onViewHistory }) {
  console.log(patient, typeof onViewHistory);


  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(false);

  const toggleHistory = async (e) => {
    e.stopPropagation(); // Prevent triggering onSelect
    if (!showHistory && !history) {
      setLoading(true);
      console.log(patient.id)
      setHistory(patient.history);
      setLoading(false);
    }
    setShowHistory(!showHistory);
  };

  return (
    <Card
      onClick={onSelect}
      sx={{
        marginBottom: 2,
        cursor: "pointer",
        backgroundColor: isSelected ? "#e0f7fa" : "#fff",
        border: isSelected ? "2px solid #00796b" : "1px solid #ddd",
      }}
    >
      <CardContent>
        {/* Patient Info */}
        <Box>
          <Typography variant="h6">{patient.name}</Typography>
          <Typography variant="body2">Email: {patient.email}</Typography>
          <Typography variant="body2">Phone: {patient.phone}</Typography>
          <Typography variant="body2">
            Date of Birth: {patient.date_of_birth}
          </Typography>
          <Typography variant="body2">Address: {patient.address}</Typography>
        </Box>

        {/* View History Button */}
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
          <Button
            variant="outlined"
            size="small"
            color="secondary"
            onClick={toggleHistory}
          >
            {showHistory ? "Hide History" : "View History"}
          </Button>
        </Box>

        {/* Patient History Section */}
        <Collapse in={showHistory}>
          {loading ? (
            <Box display="flex" justifyContent="center" marginTop={2}>
              <CircularProgress size={20} />
            </Box>
          ) : history ? (
            <Box marginTop={2}>
              <Typography variant="body2" fontWeight="bold">
                Appointment History:
              </Typography>
              <List>
                {history.map((appointment, index) => (
                  <ListItem key={index}>
                    <Typography variant="body2">
                      {appointment.date}: {appointment.details}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary" marginTop={2}>
              No history available.
            </Typography>
          )}
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default PatientCard;
