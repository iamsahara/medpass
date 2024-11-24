import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  List,
} from "@mui/material";
import axios from "axios";
import SpecialistCard from "../SpecialistCard/SpecialistCard";
import { SpecialistsContext } from "../../context/SpecialistsContext";

function BookingStep2({ formData, onBack, onNext, onDataChange }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log("Patient ID:", formData);
  console.log("API URL:", apiUrl);
  console.log("Form Data", formData);
  const { specialists, loading, error } = useContext(SpecialistsContext);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [filteredSpecialists, setFilteredSpecialists] = useState(specialists);
  const [sortOption, setSortOption] = useState(""); 
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [localError, setLocalError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSearchChange = (value) => {
    setSearchCriteria(value);

    const filtered = specialists.filter((specialist) =>
      specialist.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSpecialists(filtered);
  };

  const handleSortChange = async (sortOption) => {
    setSortOption(sortOption);
    if (sortOption === "closest") {
      try {
        const response = await axios.get(
          `${apiUrl}/api/specialists/closest?patientId=${formData.patient.id}`
        );
        console.log(response.data)
        setFilteredSpecialists(response.data);
      } catch (err) {
        console.error("Error fetching closest specialists:", err.message);
      }
    }
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

    setLocalError("");
    setSuccessMessage("Step 2 completed successfully!");
    setTimeout(() => {
      onNext();
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

      {/* Search and Sort Controls */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
        <TextField
          label="Search by Name"
          value={searchCriteria}
          onChange={(e) => handleSearchChange(e.target.value)}
          fullWidth
        />
       <Select
  value={sortOption}
  onChange={(e) => handleSortChange(e.target.value)} // Updates sortOption state
  displayEmpty
  fullWidth
>
  <MenuItem value="" disabled>
    Sort By
  </MenuItem>
  <MenuItem value="closest">Closest to Patient</MenuItem>
</Select>
      </Box>

      {/* Specialist List */}
      <List>
        {filteredSpecialists.length > 0 ? (
          filteredSpecialists.map((specialist) => (
            <SpecialistCard
              key={specialist.id}
              specialist={specialist}
              selectedSpecialist={selectedSpecialist}
              selectedDate={selectedDate}
              onSelectSpecialist={handleSpecialistSelect}
              onSelectDate={handleDateSelect}
            />
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

      {/* Error or Success Messages */}
      {localError && (
        <Typography color="error" sx={{ marginTop: 2 }}>
          {localError}
        </Typography>
      )}
      {successMessage && (
        <Typography color="primary" sx={{ marginTop: 2 }}>
          {successMessage}
        </Typography>
      )}
    </Box>
  );
}

export default BookingStep2;
