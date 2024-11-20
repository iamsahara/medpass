import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  List,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

function Step1({ formData, onNext, onDataChange }) {
  const mockSpecialists = [
    {
      id: 1,
      name: 'Dr. Green',
      specialty: 'Cardiology',
      address: '123 Main St, New York, NY',
      phone: '123-456-7890',
      firstAvailable: '2024-11-21',
      availability: ['2024-11-21', '2024-11-22', '2024-11-23'],
    },
    {
      id: 2,
      name: 'Dr. Brown',
      specialty: 'Neurology',
      address: '456 Elm St, Los Angeles, CA',
      phone: '987-654-3210',
      firstAvailable: '2024-11-22',
      availability: ['2024-11-22', '2024-11-24'],
    },
  ];

  const [searchCriteria, setSearchCriteria] = useState({ name: '', specialty: '' });
  const [filteredSpecialists, setFilteredSpecialists] = useState(mockSpecialists);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSearchChange = (field, value) => {
    const updatedCriteria = { ...searchCriteria, [field]: value };
    setSearchCriteria(updatedCriteria);

    const filtered = mockSpecialists.filter((specialist) => {
      return (
        (!updatedCriteria.name ||
          specialist.name.toLowerCase().includes(updatedCriteria.name.toLowerCase())) &&
        (!updatedCriteria.specialty ||
          specialist.specialty.toLowerCase().includes(updatedCriteria.specialty.toLowerCase()))
      );
    });

    setFilteredSpecialists(filtered);
  };

  const handleSpecialistSelect = (specialist) => {
    setSelectedSpecialist(specialist);
    setSelectedDate(null);
    onDataChange('specialist', specialist.id);
  };

  const handleDateSelect = (date) => {
    if (date) {
      setSelectedDate(date);
      onDataChange('appointmentDate', date.format('YYYY-MM-DD'));
    }
  };

  const handleNext = () => {
    if (!selectedSpecialist) {
      setError('Please select a specialist.');
      setSuccessMessage('');
      return;
    }
    if (!selectedDate) {
      setError('Please select an appointment date.');
      setSuccessMessage('');
      return;
    }

    // Show success message and navigate to Step 2
    setError('');
    setSuccessMessage('Step 1 completed successfully!');
    setTimeout(() => {
      onNext(); // Proceed to the next step after 1 second
    }, 1000);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Step 1: Select a Specialist
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Search by Name"
          value={searchCriteria.name}
          onChange={(e) => handleSearchChange('name', e.target.value)}
          fullWidth
        />
        <TextField
          label="Search by Specialty"
          value={searchCriteria.specialty}
          onChange={(e) => handleSearchChange('specialty', e.target.value)}
          fullWidth
        />
      </Box>

      {error && (
        <Typography color="error" sx={{ marginBottom: 2 }}>
          {error}
        </Typography>
      )}

      {successMessage && (
        <Typography color="success" sx={{ marginBottom: 2 }}>
          {successMessage}
        </Typography>
      )}

      <List>
        {filteredSpecialists.map((specialist) => (
          <Card
            key={specialist.id}
            sx={{
              marginBottom: 2,
              border: selectedSpecialist?.id === specialist.id ? '2px solid #00C853' : '1px solid #ddd',
            }}
          >
            <CardContent>
              <Typography
                variant="h6"
                sx={{ cursor: 'pointer', textDecoration: 'underline' }}
                onClick={() => handleSpecialistSelect(specialist)}
              >
                {specialist.name}
              </Typography>
              <Typography variant="body2">Specialty: {specialist.specialty}</Typography>
              <Typography variant="body2">Address: {specialist.address}</Typography>
              <Typography variant="body2">Phone: {specialist.phone}</Typography>
              <Typography variant="body2">
                First Available: {dayjs(specialist.firstAvailable).format('MMMM DD, YYYY')}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <DatePicker
                label="Select Appointment Date"
                value={selectedSpecialist?.id === specialist.id ? selectedDate : null}
                onChange={(date) => handleDateSelect(date)}
                shouldDisableDate={(date) =>
                  !specialist.availability.includes(date.format('YYYY-MM-DD'))
                }
              />
            </CardContent>
          </Card>
        ))}
      </List>

      <Box sx={{ marginTop: 4, display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Step1;
