import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function Step3({ formData, onBack }) {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Confirm Appointment
      </Typography>
      <Typography variant="body1">Specialist: {formData.specialist.name}</Typography>
      <Typography variant="body1">Specialty: {formData.specialist.specialty}</Typography>
      <Typography variant="body1">Appointment Date: {formData.appointmentDate}</Typography>

      <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" color="primary">
          Confirm Appointment
        </Button>
      </Box>
    </Box>
  );
}

export default Step3;
