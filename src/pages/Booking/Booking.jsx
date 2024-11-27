import { useState } from "react";
import BookingStep1 from "../../components/BookingStep1/BookingStep1";
import BookingStep2 from "../../components/BookingStep2/BookingStep2";
import BookingStep3 from "../../components/BookingStep3/BookingStep3";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Booking() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    specialist: null,
    appointmentDate: null,
    patient: null,
  });
  const steps = ["Select Patient", "Select Specialist", "Confirm Appointment"];
  const navigate = useNavigate();

  const handleNext = () => {
    if (activeStep === 2) {
      setActiveStep(3); 
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);
  
  const handleStepNavigation = (step) => setActiveStep(step);
  
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
            onConfirm={handleNext}
            navigateToStep={handleStepNavigation}
          />
        );
      case 3:
        return (
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Typography variant="h6" color="success.main">
              Appointment Confirmed!
            </Typography>
            <Typography sx={{ marginTop: 1 }}>
              Your appointment details have been sent to both you and your
              patient's email.
            </Typography>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                gap: 2,
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setActiveStep(0);
                  setFormData({
                    specialist: null,
                    appointmentDate: null,
                    patient: null,
                  });
                }}
              >
                Book Another Appointment
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </Button>
            </Box>
          </Box>
        );
      default:
        return (
          <Typography>
            Something went wrong! Please refresh and try again.
          </Typography>
        );
    }
  };
  return (
    <Box>
      <Box sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
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
    </Box>
  );
}

export default Booking;
