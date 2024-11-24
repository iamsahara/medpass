import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import axios from "axios";
import SpecialistCard from "../SpecialistCard/SpecialistCard";

function SpecialistsList() {
  const [specialists, setSpecialists] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSpecialists() {
      const apiUrl = import.meta.env.VITE_API_URL;
      try {
        const response = await axios.get(`${apiUrl}/api/specialists`);
        setSpecialists(response.data);
      } catch (err) {
        setError("Failed to fetch specialists. Please try again.");
        console.error("Error fetching specialists:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSpecialists();
  }, []);

  const handleSelectSpecialist = (specialist) => {
    setSelectedSpecialist(specialist);
    setSelectedDate(null); // Reset the date when a new specialist is selected
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

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
