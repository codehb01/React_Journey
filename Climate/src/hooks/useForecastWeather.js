import { useEffect, useState } from "react";

const useForecastWeather = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        if (!city || !API_KEY) throw new Error("City or API KEY not found");
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

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
    if (city) fetchForecast();
  }, [API_KEY, city]);
  return { data, error, loading };
};
export default useForecastWeather;
