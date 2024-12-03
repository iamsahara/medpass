import { useContext, useEffect } from "react";
import { Box, Typography, Button, CircularProgress, Grid } from "@mui/material";
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
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh" >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{overflow:"scroll", padding:3, height:"62vh"}}>
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
        <Grid 
          container 
          spacing={2} 
          sx={{
            overflow:"scroll",
            zIndex:0,
            maxWidth: "100%", 
            margin: "0 auto", 
            height:"50vh"
          }}
        >
          {patients.map((patient) => (
            <Grid 
              item 
              xs={12} 
              sm={6} 
              key={patient.id}
            >
              <PatientCard
                patient={patient}
                onSelect={() => console.log(`Selected patient ID: ${patient.id}`)}
                isSelected={false}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default PatientList;
