import React, { useState, useEffect, useContext } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import SpecialistCard from "../SpecialistCard/SpecialistCard";
import { SpecialistsContext } from "../../context/SpecialistsContext";

function SpecialistsList() {
  const {specialists, fetchSpecialists,loading, error} =useContext(SpecialistsContext)
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
   fetchSpecialists()
     
  }, [fetchSpecialists,specialists]);

  const handleSelectSpecialist = (specialist) => {
    setSelectedSpecialist(specialist);
    setSelectedDate(null); 
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
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
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box padding={3}>
      <Typography variant="h4" marginBottom={2}>
        Specialists
      </Typography>
      {specialists.length === 0 ? (
        <Typography align="center">No specialists available.</Typography>
      ) : (
        <Grid container spacing={3}>
          {specialists.map((specialist) => (
            <Grid item xs={12} sm={6} md={4} key={specialist.id}>
              <SpecialistCard
                specialist={specialist}
                selectedSpecialist={selectedSpecialist}
                selectedDate={selectedDate}
                onSelectSpecialist={handleSelectSpecialist}
                onSelectDate={handleSelectDate}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default SpecialistsList;
