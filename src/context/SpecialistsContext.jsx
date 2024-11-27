import { createContext, useState } from "react";
import axios from "axios";

export const SpecialistsContext = createContext();

export const SpecialistsProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const [specialists, setSpecialists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSpecialists = async () => {

    try {
      const response = await axios.get(`${apiUrl}/api/specialists`);
      console.log(response.data)
      setSpecialists(response.data);
    } catch (err) {
      setError(err.message || "Failed to fetch specialists.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SpecialistsContext.Provider value={{ fetchSpecialists, specialists, setSpecialists, loading, error }}>
      {children}
    </SpecialistsContext.Provider>
  );
};
