import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Edit, AttachFile } from "@mui/icons-material";

function BookingStep3({ formData, onBack, onConfirm }) {
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleConfirm = () => {
    if (!description) {
      alert("Please add a description before confirming.");
      return;
    }
    setShowSuccessMessage(true);
    // Call the onConfirm function to proceed with the appointment
    onConfirm({ description, file });
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Appointment Confirmation
      </Typography>

      {/* Specialist */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>Specialist</Typography>
        <TextField
          value={formData.specialistName || "Dr. John Doe"}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Edit />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flex: 2 }}
        />
      </Box>

      {/* Patient */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>Patient</Typography>
        <TextField
          value={formData.patientName || "Lucy Gray"}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Edit />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flex: 2 }}
        />
      </Box>

      {/* Description */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>Description</Typography>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
          sx={{ flex: 2 }}
        />
      </Box>

      {/* File Upload */}
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>File</Typography>
        <Button
          variant="outlined"
          component="label"
          sx={{ flex: 2 }}
          startIcon={<AttachFile />}
        >
          {file ? file.name : "Attach File"}
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>
      </Box>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>

      {/* Success Message */}
      {showSuccessMessage && (
        <Box sx={{ marginTop: 4, textAlign: "center" }}>
          <Typography variant="h6" color="success.main">
            The appointment has been successfully booked!
          </Typography>
          <Typography sx={{ marginTop: 1 }}>
            Your appointment details have been sent to both you and your
            patient's email.
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default BookingStep3;
