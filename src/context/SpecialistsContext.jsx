import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create PatientsContext
export const SpecialistsContext = createContext();

// Provider Component
export const SpecialistsProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [specialists, setSpecialists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/specialists`);
        setSpecialists(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch specialists.");
      } finally {
        setLoading(false);
      }
    };
    fetchSpecialists();


  }, []);

  return (
    <SpecialistsContext.Provider value={{ specialists, setSpecialists, loading, error }}>
      {children}
    </SpecialistsContext.Provider>
  );
};
