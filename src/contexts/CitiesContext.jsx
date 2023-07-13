/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

const BASE_URL = 'http://localhost:9000';

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchCities() {
      try {
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert('fetchCities error:', error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider value={(cities, isLoading)}>
      {children}
    </CitiesContext.Provider>
  );
}

export { CitiesProvider };
