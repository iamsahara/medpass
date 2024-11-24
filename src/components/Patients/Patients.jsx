import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import PatientCard from "../PatientCard/PatientCard";

function PatientList() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [patientData, setPatientData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPatientList() {
      try {
        const response = await axios.get(`${apiUrl}/api/dashboard/patients`);
        setPatientData(response.data);
      } catch (err) {
        setError("Failed to fetch patient data. Please try again later.");
        console.error("Error fetching patient data:", err);
      } finally {
        setIsLoading(false);
      }
    }
    getPatientList();
  }, [apiUrl]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  const handleViewHistory = async (id) => {
    console.log(`Fetching history for patient ID: ${id}`);
    // Replace with API call
    return [
      { date: "2024-11-10", details: "Consultation for flu symptoms" },
      { date: "2024-10-15", details: "Routine checkup" },
      { date: "2024-09-01", details: "Follow-up for hypertension" },
    ];
  };


  return (
    <Box padding={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom={2}>
        <Typography variant="h4">Patient List</Typography>
        <Button
          component={Link}
          to="/patients/add"
          variant="contained"
          color="primary"
        >
          + Add New Patient
        </Button>
      </Box>
      {patientData.length === 0 ? (
        <Typography align="center">No patients available.</Typography>
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          {patientData.map((patient) => (
            <PatientCard key={patient.id} patient={patient}  onSelect={() => console.log(`Selected patient ID: ${patient.id}`)}
          isSelected={false} // Replace with selection logic
          onViewHistory={handleViewHistory}/>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default PatientList;
