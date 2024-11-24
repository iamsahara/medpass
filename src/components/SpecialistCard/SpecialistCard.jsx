import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function SpecialistCard({
  specialist,
  selectedSpecialist,
  selectedDate,
  onSelectSpecialist,
  onSelectDate,
}) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        border: selectedSpecialist?.id === specialist.id ? "2px solid #00C853" : "1px solid #ddd",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => onSelectSpecialist(specialist)}
        >
          {specialist.name}
        </Typography>
        <Typography variant="body2">Specialty: {specialist.specialty}</Typography>
        <Typography variant="body2">Address: {specialist.address}</Typography>
        <Typography variant="body2">Phone: {specialist.phone}</Typography>
        <Typography variant="body2">
          First Availability:{" "}
          {specialist.firstAvailibility
            ? dayjs(specialist.firstAvailibility).format("MMMM DD, YYYY")
            : "Not Available"}
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* DatePicker */}
        <DatePicker
          label="Select Appointment Date"
          value={selectedSpecialist?.id === specialist.id ? selectedDate : null}
          onChange={(date) => onSelectDate(date)}
          shouldDisableDate={(date) =>
            specialist.availability
              ? !specialist.availability.includes(date.format("YYYY-MM-DD"))
              : true
          }
        />
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => onSelectSpecialist(specialist)}
        >
          Select Specialist
        </Button>
      </CardActions>
    </Card>
  );
}

export default SpecialistCard;
