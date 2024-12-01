import { useContext, useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  List,

} from "@mui/material";
import { Map as MapIcon } from "@mui/icons-material";
import axios from "axios";
import SpecialistCard from "../SpecialistCard/SpecialistCard";
import { SpecialistsContext } from "../../context/SpecialistsContext";

function BookingStep2({ formData, onBack, onNext, onDataChange }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  const { fetchSpecialists, specialists, loading, error } = useContext(SpecialistsContext);
  const [searchCriteria, setSearchCriteria] = useState("");
  const [filteredSpecialists, setFilteredSpecialists] = useState(specialists);
  const [sortOption, setSortOption] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [localError, setLocalError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(async () => {
    await fetchSpecialists();
    console.log(specialists)
  }, []);

  useEffect(() => {
    setFilteredSpecialists(specialists)
  }, [specialists])

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
      <Box sx={{
        display: "flex",
        gap: 2,
        marginBottom: 2,
        alignItems: "center",
        flexWrap: "wrap", 
      }}>

        <TextField
          label="Search by Name"
          placeholder="Enter specialist name..."
          value={searchCriteria}
          onChange={(e) => handleSearchChange(e.target.value)}
          variant="outlined"
          fullWidth
          size="small"
          sx={{
            backgroundColor: "white", 
            borderRadius: 3, 
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", 
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": {
                borderColor: "secondary.light", 
              },
              "&:hover fieldset": {
                borderColor: "secondary.main", 
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main", 
              },
            },
          }}
        />
        <Box sx={{ display: "flex", gap: 2, marginBottom: 2 }}>
          <Select
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
            displayEmpty
            fullWidth
            size="small"
            sx={{
              backgroundColor: "secondary.light",
              borderRadius: 1,
              boxShadow: 1,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.light",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "secondary.main",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "primary.main",
              },
            }}
          >
            <MenuItem value="" disabled>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2">Sort By</Typography>
              </Box>
            </MenuItem>
            <MenuItem value="closest">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {/* Pin Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  style={{ color: "#22C55E" }}
                >
                  <path d="M8 0a5 5 0 0 0-5 5c0 3.9 5 11 5 11s5-7.1 5-11a5 5 0 0 0-5-5zm0 7.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                </svg>
                <Typography variant="body2">Closest to Patient</Typography>
              </Box>
            </MenuItem>
          </Select>
        </Box>
      </Box>
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
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3, marginBottom: 3 }}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={!selectedSpecialist}>
          Next
        </Button>
      </Box>
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
