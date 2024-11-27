import { useContext, useEffect } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import PatientCard from "../PatientCard/PatientCard";
import { PatientsContext } from "../../context/PatientsContext";

function PatientList() {
  const { fetchPatients, loading, error, patients } = useContext(PatientsContext);

  useEffect(() => {
    fetchPatients();
  }, [fetchPatients, patients]);

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
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box padding={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom={2}
      >
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
      {patients.length === 0 ? (
        <Typography align="center">No patients available.</Typography>
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          {patients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onSelect={() => console.log(`Selected patient ID: ${patient.id}`)}
              isSelected={false}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}

export default PatientList;
