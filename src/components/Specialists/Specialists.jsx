import { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import SpecialistCard from "../SpecialistCard/SpecialistCard";
import { SpecialistsContext } from "../../context/SpecialistsContext";

function Specialists() {
  const { specialists, fetchSpecialists, loading, error } =
    useContext(SpecialistsContext);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortByClosest, setSortByClosest] = useState(false);

  useEffect(() => {
    fetchSpecialists();
  }, [fetchSpecialists]);

  const handleSelectSpecialist = (specialist) => {
    setSelectedSpecialist(specialist);
    setSelectedDate(null);
  };

  const handleSelectDate = (date) => {
    setSelectedDate(date);
  };

  const filteredSpecialists = specialists
    .filter((specialist) =>
      specialist.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => (sortByClosest ? a.proximity - b.proximity : 0));

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
      <Typography variant="h4" marginBottom={3}>
        Specialists
      </Typography>

      {/* Search and Filter */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        marginBottom={3}
        gap={2}
      >
        {/* Search Bar */}
        <TextField
          variant="outlined"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            width: { xs: "100%", sm: "50%", md: "30%" },
            borderRadius: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
            },
          }}
        />

        {/* Filter Buttons */}
        <ButtonGroup
          sx={{
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            "& .MuiButton-root": {
              padding: "0.5rem 1.5rem",
              textTransform: "capitalize",
              fontWeight: 600,
              borderRadius: "12px !important", 
              fontSize: "0.9rem",
              transition: "all 0.3s ease",
            },
          }}
        >
          <Button
            onClick={() => setSortByClosest(false)}
            variant={!sortByClosest ? "contained" : "outlined"}
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: !sortByClosest
                  ? "primary.dark"
                  : "rgba(108, 92, 231, 0.1)", 
              },
            }}
          >
            Search by Name
          </Button>
          <Button
            onClick={() => setSortByClosest(true)}
            variant={sortByClosest ? "contained" : "outlined"}
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: sortByClosest
                  ? "primary.dark"
                  : "rgba(108, 92, 231, 0.1)", 
              },
            }}
          >
            Closest to Patient
          </Button>
        </ButtonGroup>
      </Box>

      {/* Specialists List */}
      {filteredSpecialists.length === 0 ? (
        <Typography align="center">No specialists available.</Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredSpecialists.map((specialist) => (
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

export default Specialists;
