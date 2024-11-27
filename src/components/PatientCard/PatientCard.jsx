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
  const [showHistory, setShowHistory] = useState(false);
  const toggleHistory = (e) => {
    e.stopPropagation();
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
        <Box>
          <Typography variant="h6">{patient.name}</Typography>
          <Typography variant="body2">Email: {patient.email}</Typography>
          <Typography variant="body2">Phone: {patient.phone}</Typography>
          <Typography variant="body2">
            Insurance Number: {patient.insurance_number}
          </Typography>
          <Typography variant="body2">Address: {patient.address}</Typography>
        </Box>
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
        <Collapse in={showHistory}>
          {patient.history && patient.history.length > 0 ? (
            <List>
              {patient.history.map((appointment, index) => (
                <ListItem key={index}>
                  <Typography>{appointment.date}: {appointment.details}</Typography>
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No history available.</Typography>
          )}
        </Collapse>
      </CardContent>
    </Card>
  );
}

export default PatientCard;
