<DatePicker
  label="Select Appointment Date"
  value={formData.appointmentDate}
  onChange={(date) => handleDataChange('appointmentDate', date)}
  shouldDisableDate={(date) =>
    !specialist.availability.includes(date.format('YYYY-MM-DD'))
  }
  aria-label="Select Appointment Date"
/>
