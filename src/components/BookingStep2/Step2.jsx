import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button, List } from "@mui/material";
import PatientCard from "../PatientCard/PatientCard";

const mockPatients = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone_number: "987-654-3210",
    address: "456 Maple St, Toronto",
    insurance_number: "INS12345",
    date_of_birth: "1990-01-01",
    history: [
      {
        specialist: "Dr. Green",
        appointments: [
          { date: "2024-01-10", status: "Completed", description: "Routine checkup" },
          { date: "2024-02-20", status: "Pending", description: "Follow-up on test results" },
        ],
      },
      {
        specialist: "Dr. White",
        appointments: [
          { date: "2024-03-15", status: "Completed", description: "Skin checkup" },
          { date: "2024-04-18", status: "Cancelled", description: "Rescheduled appointment" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone_number: "123-456-7890",
    address: "789 Oak St, Vancouver",
    insurance_number: "INS67890",
    date_of_birth: "1985-05-15",
    history: [
      {
        specialist: "Dr. Brown",
        appointments: [
          { date: "2024-05-10", status: "Completed", description: "Neurological evaluation" },
          { date: "2024-06-20", status: "Pending", description: "Follow-up scan" },
        ],
      },
    ],
  },
];

function Step2({ formData, onNext, onBack, onDataChange }) {
  const [searchCriteria, setSearchCriteria] = useState({ name: "", insurance: "" });
  const [filteredPatients, setFilteredPatients] = useState(mockPatients);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    setFilteredPatients(mockPatients);
  }, []);

  const handleSearchChange = (field, value) => {
    const updatedCriteria = { ...searchCriteria, [field]: value };
    setSearchCriteria(updatedCriteria);

    const filtered = mockPatients.filter((patient) => {
      return (
        (!updatedCriteria.name ||
          patient.name.toLowerCase().includes(updatedCriteria.name.toLowerCase())) &&
        (!updatedCriteria.insurance ||
          patient.insurance_number.toLowerCase().includes(updatedCriteria.insurance.toLowerCase()))
      );
    });

    setFilteredPatients(filtered);
  };

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
    onDataChange("patient", patient.id);
  };

  const handleNext = () => {
    if (selectedPatient) {
      onNext();
    }
  };

  return (
    <Box>
      <Typography variant="h5">Step 2: Select a Patient</Typography>

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
        {filteredPatients.map((patient) => (
          <PatientCard
            key={patient.id}
            patient={patient}
            onSelect={handlePatientSelect}
            isSelected={selectedPatient?.id === patient.id}
          />
        ))}
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

export default Step2;
