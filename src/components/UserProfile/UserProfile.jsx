import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Avatar,
  Divider,
  Grid,
  Button,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import profileImage from "../../assets/Image/profileImage.png";

function DoctorProfile() {
  const doctorInfo = {
    name: "Dr. Green",
    title: "Family Physician",
    email: "dr.green@example.com",
    phone: "(123) 456-7890",
    address: "123 Greenway Blvd, Richmond Hill",
    education: "MD, University of Toronto, 2010",
    specialties: ["General Medicine", "Pediatrics"],
    experience: "12 years of experience in family medicine",
    certifications: ["Board Certified in Family Medicine", "CPR & First Aid Certified"],
    languages: ["English", "French"],
    photo: profileImage,
  };

  return (
    <Box
      sx={{
        padding: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      {/* Main Profile Card */}
      <Card
        sx={{
          maxWidth: 800,
          width: "100%",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <CardContent>
          {/* Header Section */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <Avatar
              alt={doctorInfo.name}
              src={doctorInfo.photo} // Dynamic photo URL
              sx={{ width: 80, height: 80, marginRight: 2 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4">{doctorInfo.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {doctorInfo.title}
              </Typography>
            </Box>
            <IconButton
              color="primary"
              sx={{
                backgroundColor: "#f5f5f5",
                padding: 1,
                borderRadius: "50%",
              }}
            >
              <Edit />
            </IconButton>
          </Box>

          <Divider sx={{ marginY: 3 }} />

          {/* Personal Information */}
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Email:</strong> {doctorInfo.email}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  <strong>Phone:</strong> {doctorInfo.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Address:</strong> {doctorInfo.address}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ marginY: 3 }} />

          {/* Professional Details */}
          <Box sx={{ marginBottom: 3 }}>
            <Typography variant="h6" gutterBottom>
              Professional Details
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Education:</strong> {doctorInfo.education}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Specialties:</strong> {doctorInfo.specialties.join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Experience:</strong> {doctorInfo.experience}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Certifications:</strong>{" "}
                  {doctorInfo.certifications.join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Languages:</strong> {doctorInfo.languages.join(", ")}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ marginY: 3 }} />

          {/* Buttons Section */}
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}
              onClick={() => alert("Edit functionality coming soon!")}
            >
              Edit Profile
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => alert("Coming soon!")}
            >
              View Schedule
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DoctorProfile;
