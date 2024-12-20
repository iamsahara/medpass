import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Edit, AttachFile } from "@mui/icons-material";
import axios from "axios";

function BookingStep3({ formData, onBack, onConfirm, navigateToStep }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const handleConfirm = async () => {
    if (!description) {
      alert("Please add a description before confirming.");
      return;
    }
    const response = await axios.post(
      `${apiUrl}/api/patients/${formData.patient.id}/history`,
      {
        id: formData.patient.id,
        date: formData.appointmentDate,
        details: `${formData.specialist?.name || "Specialist"}: ${description}`,
      }
    );

    if ((response.status = 200)) {
      setShowSuccessMessage(true);
      onConfirm({ description, file });
    } else {
     console.error("error");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: 3 }}>
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Appointment Confirmation
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>Patient</Typography>
        <TextField
          value={formData.patient?.name || "No patient selected"}
          disabled
           size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => navigateToStep(0)}>
                  <Edit />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flex: 2 }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>Specialist</Typography>
        <TextField
          value={formData.specialist?.name || "No specialist selected"}
          disabled
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => navigateToStep(1)}>
                  <Edit />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flex: 2 }}
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <Typography sx={{ flex: 1 }}>Date</Typography>
        <TextField
         size="small"
          value={formData.appointmentDate || "No date selected"}
          disabled
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => navigateToStep(1)}>
                  <Edit />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ flex: 2 }}
        />
      </Box>
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
      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}
      >
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleConfirm}>
          Confirm
        </Button>
      </Box>
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
