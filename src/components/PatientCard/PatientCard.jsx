import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Box, List, ListItem, ListItemText } from "@mui/material";

function PatientCard({ patient, onSelect, isSelected }) {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <Card
      sx={{
        marginBottom: 2,
        border: isSelected ? "2px solid #00C853" : "1px solid #ddd",
        cursor: "pointer",
      }}
      onClick={() => onSelect(patient)}
    >
      <CardContent>
        <Typography variant="h6">{patient.name}</Typography>
        <Typography>Email: {patient.email}</Typography>
        <Typography>Phone: {patient.phone_number}</Typography>
        <Typography>Address: {patient.address}</Typography>
        <Typography>Insurance: {patient.insurance_number}</Typography>
        <Typography>Date of Birth: {patient.date_of_birth}</Typography>
      </CardContent>
      <Box sx={{ display: "flex", justifyContent: "space-between", padding: 2 }}>
        <Button
          variant="text"
          onClick={(e) => {
            e.stopPropagation(); // Prevent selecting the card when toggling history
            setShowHistory((prev) => !prev);
          }}
        >
          {showHistory ? "Hide History" : "View History"}
        </Button>
      </Box>
      {showHistory && (
        <Box sx={{ padding: 2, borderTop: "1px solid #ddd" }}>
          <Typography variant="subtitle1">Appointment History</Typography>
          {patient.history.map((record, index) => (
            <Box key={index} sx={{ marginBottom: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Specialist: {record.specialist}
              </Typography>
              <List>
                {record.appointments.map((appointment, i) => (
                  <ListItem key={i}>
                    <ListItemText
                      primary={`${appointment.date} - ${appointment.status}`}
                      secondary={appointment.description}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      )}
    </Card>
  );
}

export default PatientCard;
