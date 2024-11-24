import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  List,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { SpecialistsContext } from "../../context/SpecialistsContext";

function BookingStep2({ onBack, onNext, onDataChange }) {
  const { specialists, loading, error } = useContext(SpecialistsContext);
  const [searchCriteria, setSearchCriteria] = useState({ name: "", specialty: "" });
  const [filteredSpecialists, setFilteredSpecialists] = useState(specialists);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [localError, setLocalError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearchChange = (field, value) => {
    const updatedCriteria = { ...searchCriteria, [field]: value };
    setSearchCriteria(updatedCriteria);

    const filtered = specialists.filter((specialist) => {
      return (
        (!updatedCriteria.name ||
          specialist.name.toLowerCase().includes(updatedCriteria.name.toLowerCase())) &&
        (!updatedCriteria.specialty ||
          specialist.specialty.toLowerCase().includes(updatedCriteria.specialty.toLowerCase()))
      );
    });

    setFilteredSpecialists(filtered);
  };

  const handleSpecialistSelect = (specialist) => {
    setSelectedSpecialist(specialist);
    setSelectedDate(null);
    onDataChange("specialist", specialist);
  };

  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      onDataChange("appointmentDate", date.format("YYYY-MM-DD"));
    }
  };

  const handleNext = () => {
    if (!selectedSpecialist) {
      setLocalError("Please select a specialist.");
      setSuccessMessage("");
      return;
    }
    if (!selectedDate) {
      setLocalError("Please select an appointment date.");
      setSuccessMessage("");
      return;
    }

    // Show success message and navigate to Step 3
    setLocalError("");
    setSuccessMessage("Step 2 completed successfully!");
    setTimeout(() => {
      onNext(); // Proceed to the next step after 1 second
    }, 1000);
  };

  if (loading) {
    return <Typography variant="body1">Loading Specialist List...</Typography>;
  }

  if (error) {
    return (
      <Typography variant="body1" color="error">
        {error}
      </Typography>
    );
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Step 2: Select a Specialist
      </Typography>

      <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
        <TextField
          label="Search by Name"
          value={searchCriteria.name}
          onChange={(e) => handleSearchChange("name", e.target.value)}
          fullWidth
        />
        <TextField
          label="Search by Specialty"
          value={searchCriteria.specialty}
          onChange={(e) => handleSearchChange("specialty", e.target.value)}
          fullWidth
        />
      </Box>

      {localError && (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          {localError}
        </Typography>
      )}

      {successMessage && (
        <Typography color="success" sx={{ marginBottom: 2 }}>
          {successMessage}
        </Typography>
      )}

      <List>
        {filteredSpecialists.length > 0 ? (
          filteredSpecialists.map((specialist) => (
            <Card
              key={specialist.id}
              sx={{
                marginBottom: 2,
                border:
                  selectedSpecialist?.id === specialist.id
                    ? "2px solid #00C853"
                    : "1px solid #ddd",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() => handleSpecialistSelect(specialist)}
                >
                  {specialist.name}
                </Typography>
                <Typography variant="body2">Specialty: {specialist.specialty}</Typography>
                <Typography variant="body2">Address: {specialist.address}</Typography>
                <Typography variant="body2">Phone: {specialist.phone}</Typography>
                <Typography variant="body2">
                  First Available: {dayjs(specialist.firstAvailibility).format("MMMM DD, YYYY")}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <DatePicker
                  label="Select Appointment Date"
                  value={
                    selectedSpecialist?.id === specialist.id ? selectedDate : null
                  }
                  onChange={(date) => handleDateSelect(date)}
                  shouldDisableDate={(date) =>
                    !specialist.availability.includes(date.format("YYYY-MM-DD"))
                  }
                />
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="body2">No specialists found.</Typography>
        )}
      </List>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={!selectedSpecialist}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default BookingStep2;
