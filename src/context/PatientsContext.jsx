import { createContext, useState } from "react";
import axios from "axios";

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    const fetchPatients = async () => {
      if (patients.length > 0) {
        return; 
      }
      try {
        const response = await axios.get(`${apiUrl}/api/patients`);
        setPatients(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch patients.");
      } finally {
        setLoading(false);
      }
    };
   
  return (
    <PatientsContext.Provider value={{ patients, setPatients, loading, error, fetchPatients }}>
      {children}
    </PatientsContext.Provider>
  );
};
