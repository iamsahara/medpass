import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create PatientsContext
export const PatientsContext = createContext();

// Provider Component
export const PatientsProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch patients from the backend
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/patients`);
        setPatients(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch patients.");
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();


  }, []);

  return (
    <PatientsContext.Provider value={{ patients, setPatients, loading, error }}>
      {children}
    </PatientsContext.Provider>
  );
};
