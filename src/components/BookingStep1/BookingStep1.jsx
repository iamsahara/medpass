import { useContext, useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  CircularProgress,
} from "@mui/material";
import PatientCard from "../PatientCard/PatientCard";
import { PatientsContext } from "../../context/PatientsContext";
import { useNavigate } from "react-router-dom";

function BookingStep1({ onNext, onDataChange }) {
  const { fetchPatients, patients, loading, error } = useContext(PatientsContext);
  const [searchCriteria, setSearchCriteria] = useState({ name: "", insurance: "" });
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    setFilteredPatients(patients || []);
  }, [patients]);

  const handleSearchChange = (field, value) => {
    const updatedCriteria = { ...searchCriteria, [field]: value };
    setSearchCriteria(updatedCriteria);

    const filtered = (patients || []).filter((patient) => {
      return (
        (!updatedCriteria.name ||
          patient.name.toLowerCase().includes(updatedCriteria.name.toLowerCase())) &&
        (!updatedCriteria.insurance ||
          patient.insurance_number
            ?.toLowerCase()
            .includes(updatedCriteria.insurance.toLowerCase()))
      );
    });

    setFilteredPatients(filtered);
  };

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    onDataChange("patient", patient);
  };

  const handleNext = () => {
    if (selectedPatient) {
      onNext();
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="body1" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 1 }}>
      <Typography variant="h5" gutterBottom>
        Step 1: Select a Patient
      </Typography>

      {/* Search Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 4,
          marginBottom: 1,
          alignItems: "center", 
        }}
      >
        <TextField
        
          label="Search by Name"
          value={searchCriteria.name}
          onChange={(e) => handleSearchChange("name", e.target.value)}
          variant="outlined"
          placeholder="Enter patient name..."
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
                borderColor: "secondary.main", 
              },
            },
          }}
        />
        <TextField
          label="Search by Insurance"
          value={searchCriteria.insurance}
          onChange={(e) => handleSearchChange("insurance", e.target.value)}
          variant="outlined"
          placeholder="Enter insurance number..."
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
                borderColor: "secondary.main", 
              },
            },
          }}
        />
      </Box>

      {/* Patient List */}
      <List
        sx={{
          maxHeight: "50vh",
          overflowY: "auto",
          backgroundColor: "background.default",
          borderRadius: 2,
          padding: 2,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onSelect={() => handlePatientSelect(patient)}
              isSelected={selectedPatient?.id === patient.id}
            />
          ))
        ) : (
          <Typography
            variant="body1"
            align="center"
            color="text.secondary"
            sx={{ marginTop: 2 }}
          >
            No patients found.
          </Typography>
        )}
      </List>

      {/* Navigation Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 3, marginBottom:3 
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate("/dashboard")}
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!selectedPatient}
          sx={{
            textTransform: "capitalize",
            fontWeight: 600,
            fontSize: "0.9rem",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default BookingStep1;
