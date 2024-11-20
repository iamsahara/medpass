import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const mockPatients = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321' },
];

function Step2({ formData, onNext, onBack, onDataChange }) {
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    onDataChange('patient', patient.id);
  };

  return (
    <Box>
      <Typography variant="h5">Step 2: Select a Patient</Typography>
      <List>
        {mockPatients.map((patient) => (
          <ListItem
            key={patient.id}
            button
            selected={formData.patient === patient.id}
            onClick={() => handlePatientSelect(patient)}
          >
            <ListItemText primary={patient.name} secondary={patient.email} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={onNext} disabled={!selectedPatient}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Step2;
