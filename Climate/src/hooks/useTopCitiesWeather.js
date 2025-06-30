import { useEffect, useState } from "react";

const useTopCitiesWeather = (cities) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const requests = cities.map((city) =>
          fetch(
            `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`
          ).then((res) => res.json())
        );

        const results = await Promise.all(requests);
        setData(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [API_KEY, cities]);

  return { data, loading, error };
};

export default useTopCitiesWeather;
