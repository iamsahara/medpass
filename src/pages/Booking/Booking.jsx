import React, { useState } from 'react';
import Step1 from '../../components/BookingStep1/Step1';
import Step2 from '../../components/BookingStep2/Step2';
import Step3 from '../../components/BookingStep3/Step3';
import { Box, Typography, Stepper, Step, StepLabel, Button } from '@mui/material';

function Booking() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    specialist: null,
    appointmentDate: null,
    patient: null,
  });

  const steps = ['Select Specialist', 'Select Patient', 'Confirm Appointment'];

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
          <Step1
            formData={formData}
            onNext={handleNext}
            onDataChange={handleDataChange}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            onNext={handleNext}
            onBack={handleBack}
            onDataChange={handleDataChange}
          />
        );
      case 2:
        return (
          <Step3
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
