import React, { useContext, useState, useEffect } from "react";
import { Box, Typography, TextField, Button, List } from "@mui/material";
import PatientCard from "../PatientCard/PatientCard"; 
import { PatientsContext } from "../../context/PatientsContext"; 

function BookingStep1({ formData, onNext, onBack, onDataChange }) {
  const { patients, loading, error } = useContext(PatientsContext); 
  const [searchCriteria, setSearchCriteria] = useState({ name: "", insurance: "" });
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  // Initialize filteredPatients with patients from context
  useEffect(() => {
    setFilteredPatients(patients || []);
  }, [patients]);

  // Handle search criteria changes and filter the patient list
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

  // Handle patient selection
  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    console.log("Form Data in Step 1:", formData);
    onDataChange("patient", patient); // Pass selected patient ID to formData
  };



  // Proceed to the next step
  const handleNext = () => {
    if (selectedPatient) {
      onNext();
    }
  };

  // Handle loading and error states
  if (loading) {
    return <Typography variant="body1">Loading patients...</Typography>;
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
        Step 1: Select a Patient
      </Typography>

      {/* Search Inputs */}
      <Box sx={{ display: "flex", gap: 2, marginBottom: 3 }}>
        <TextField
          label="Search by Name"
          value={searchCriteria.name}
          onChange={(e) => handleSearchChange("name", e.target.value)}
          fullWidth
        />
        <TextField
          label="Search by Insurance"
          value={searchCriteria.insurance}
          onChange={(e) => handleSearchChange("insurance", e.target.value)}
          fullWidth
        />
      </Box>

      {/* Patient List */}
      <List>
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
          <Typography variant="body1" align="center" color="text.secondary">
            No patients found.
          </Typography>
        )}
      </List>

      {/* Navigation Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
        <Button variant="outlined" onClick={onBack}>
          Back
        </Button>
        <Button variant="contained" onClick={handleNext} disabled={!selectedPatient}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default BookingStep1;
