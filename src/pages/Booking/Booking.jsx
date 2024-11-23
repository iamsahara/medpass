import React, { useState } from 'react';
import BookingStep1 from '../../components/BookingStep1/BookingStep1';
import BookingStep2 from '../../components/BookingStep2/BookingStep2';
import BookingStep3 from '../../components/BookingStep3/BookingStep3';
import { Box, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';

function Booking() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    specialist: null,
    appointmentDate: null,
    patient: null,
  });

  const steps = ['Select Patient', 'Select Specialist', 'Confirm Appointment'];

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const handleDataChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <BookingStep1
            formData={formData}
            onNext={handleNext}
            onDataChange={handleDataChange}
          />
        );
      case 1:
        return (
          <BookingStep2
            formData={formData}
            onNext={handleNext}
            onBack={handleBack}
            onDataChange={handleDataChange}
          />
        );
      case 2:
        return (
          <BookingStep3
            formData={formData}
            onBack={handleBack}
            onNext={handleNext}
          />
        );
      default:
        return <Typography>Unknown Step</Typography>;
    }
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Booking Page
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ marginTop: 3 }}>{renderStepContent(activeStep)}</Box>
    </Box>
  );
}

export default Booking;
