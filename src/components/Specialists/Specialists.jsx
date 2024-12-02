import { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  TextField,
  Button,
} from "@mui/material";
import SpecialistCard from "../SpecialistCard/SpecialistCard";
import { SpecialistsContext } from "../../context/SpecialistsContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        sx={{ backgroundColor: "#F9FAFB" }}
      >
        <CircularProgress color="primary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        sx={{ backgroundColor: "#F9FAFB" }}
      >
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, backgroundColor: "#F9FAFB", minHeight: "62vh",overflow:"scroll", padding:3, height:"62vh" }}>
      <Typography
        variant="h4"
        marginBottom={3}
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem" },
          fontWeight: 700,
          color: "#1F2937",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        Specialists
      </Typography>
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        marginBottom={3}
      >
        <TextField
          variant="outlined"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            flex: 1,
            size:"small",
            maxWidth:"50%",
            backgroundColor: "#FFF",
            borderRadius: 3,
            "& .MuiOutlinedInput-root": {
              borderRadius: 3,
              "& fieldset": {
                borderColor: "#E5E7EB",
              },
              "&:hover fieldset": {
                borderColor: "#9CA3AF",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#3B82F6",
              },
            },
          }}
        />
        <Button
          onClick={() => setSortByClosest(!sortByClosest)}
          startIcon={<LocationOnIcon />}
          variant={sortByClosest ? "contained" : "outlined"}
          color="primary"
          sx={{
            padding: "0.75rem 1.5rem",
            fontWeight: 600,
            textTransform: "capitalize",
            fontSize: "0.9rem",
            borderRadius: 3,
            boxShadow: sortByClosest ? "0px 4px 10px rgba(59, 130, 246, 0.4)" : "none",
            backgroundColor: sortByClosest ? "#3B82F6" : "#FFF",
            color: sortByClosest ? "#FFF" : "#1F2937",
            "&:hover": {
              backgroundColor: sortByClosest ? "#2563EB" : "#F3F4F6",
              boxShadow: "0px 4px 12px rgba(59, 130, 246, 0.2)",
            },
          }}
        >
          Closest to Patient
        </Button>
      </Box>
      {filteredSpecialists.length === 0 ? (
        <Typography align="center" sx={{ color: "#9CA3AF", fontSize: "1rem" }}>
          No specialists available.
        </Typography>
      ) : (
        <Grid container spacing={3} sx={{ overflow:"scroll",
          zIndex:0,
          maxWidth: "100%", 
          margin: "0 auto", 
          height:"50vh"}}>
          {filteredSpecialists.map((specialist) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={specialist.id}>
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
