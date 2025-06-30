import { useEffect, useState } from "react";

const useCurrentWeather = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_API_KEY;
  console.log("Inside Hook:");
  console.log("city:", city);
  console.log("API_KEY:", import.meta.env.VITE_API_KEY);

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        if (!city || !API_KEY) throw new Error("Missing city or API key");

        const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`;

        console.log("City:", city);
        console.log("API_KEY:", API_KEY);
        console.log("Request URL:", url);

        const response = await fetch(url);
        if (!response.ok) throw new Error("Error in fetching data");

        const data = await response.json();
        setData(data);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (city) fetchCurrentWeather();
  }, [API_KEY, city]);

  return { error, data, loading };
};

export default useCurrentWeather;
