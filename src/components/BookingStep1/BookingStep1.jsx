import{ useContext, useState, useEffect } from "react";
import { Box, Typography, TextField, Button, List } from "@mui/material";
import PatientCard from "../PatientCard/PatientCard"; 
import { PatientsContext } from "../../context/PatientsContext"; 
import { useNavigate} from "react-router-dom";

function BookingStep1({ onNext, onBack, onDataChange }) {
  const { fetchPatients,patients, loading, error } = useContext(PatientsContext); 
  const [searchCriteria, setSearchCriteria] = useState({ name: "", insurance: "" });
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const navigate = useNavigate();
  
  useEffect(async() => {
    await fetchPatients();
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
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: 3 }}>
        <Button variant="outlined"   onClick={() => {
                navigate("/dashboard");
              }}>
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
