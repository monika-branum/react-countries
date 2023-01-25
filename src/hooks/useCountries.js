import { useEffect, useState } from 'react';
import fetchCountries from '../services/countries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchCountries();
        setCountries(resp);
      } catch (error) {
        setError("oh snap, it's not working");
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
