import {
    Box,
    Typography,

  } from "@mui/material";
  import dayjs from "dayjs";
  import AppointmentButton from "../AppointmentButton/AppointmentButton";


function DashboardHeader(){
    const doctorName = "Green";

    return(
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    background: "linear-gradient(135deg, #1E293B, #0F172A)", // Single clean background
    padding: { xs: 3, sm: 4 },
    borderRadius: "16px",
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)", // Subtle shadow
    marginBottom: 4,
    gap: { xs: 3, sm: 0 },
    color: "#FFF",
  }}
>
  <Box
    sx={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: { xs: "center", sm: "flex-start" },
      textAlign: { xs: "center", sm: "left" },
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: 400,
        fontSize: { xs: "1.5rem", sm: "1.5rem" },
        marginBottom: 4,
        color: "whites", 
      }}
    >
      Welcome, Dr. {doctorName}!
    </Typography>
    <Typography
      variant="h6"
      sx={{
        fontWeight: 600,
        fontSize: { xs: "0.75rem", sm: "0.75rem" },
        color: "#E5E9F0",
        padding: "4px 8px",
        background: "rgba(255, 255, 255, 0.05)", // Subtle transparent background
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow
      }}
    >
      {dayjs().format("dddd, MMMM DD, YYYY")}
    </Typography>
  </Box>

  {/* Middle Section: Current Date */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
 
  </Box>

  {/* Right Section: Appointment Button */}
  <Box
    sx={{
      flex: 1,
      display: "flex",
      justifyContent: { xs: "center", sm: "flex-end" },
      alignItems: "center",
    }}
  >
    <AppointmentButton />
  </Box>
</Box>
    )
}
export default DashboardHeader;