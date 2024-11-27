import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
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
      <Card
        sx={{
          maxWidth: 800,
          width: "100%",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: 2,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: 3,
            }}
          >
            <Avatar
              alt={doctorInfo.name}
              src={doctorInfo.photo}
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
                  <strong>Languages:</strong> {doctorInfo.languages.join(", ")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider sx={{ marginY: 3 }} />
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Button  variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}   onClick={() => {
                navigate("/dashboard");
              }}>
          Dashboard
        </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default DoctorProfile;
