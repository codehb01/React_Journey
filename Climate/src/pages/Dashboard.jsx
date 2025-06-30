import React, { useState } from "react";
import InputBox from "../components/InputBox.jsx";
import CurrentCard from "../components/CurrentCard.jsx";
import useCurrentWeather from "../hooks/useCurrentWeather.js";
import useTopCitiesWeather from "../hooks/useTopCitiesWeather.js";
function Dashboard() {
  const topCities = ["New York", "London", "Tokyo", "Delhi", "Sydney"];
  const {
    data: cityData,
    // error: cityError,
    // loading: cityLoading,
  } = useTopCitiesWeather(topCities);
  const [city, setCity] = useState("");
  const { data, error, loading } = useCurrentWeather(city);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="max-w-7xl flex justify-center items-center">
        <InputBox onSearch={(value) => setCity(value)} />
      </div>

      {/* {loading && (
        <p className="text-center text-gray-600 font-medium">
          Loading city weather...
        </p>
      )} */}
      {error && (
        <p className="text-center text-red-500 font-semibold">{error}</p>
      )}
      {data && city && <CurrentCard city={city} />}
      <div className="text-center my-8">
        <h3 className="text-2xl font-bold">Top Cities Weather</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 m-8">
        {cityData?.map((weather, index) => {
          if (!weather?.location || !weather?.current) return null;
          return (
            <div
              key={index}
              className="px-6 py-8  bg-white rounded-2xl shadow-md space-y-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-bold text-center text-blue-700">
                {weather.location.name}
              </h2>

              <div className="flex items-center justify-center">
                <img
                  src={weather.current.condition.icon}
                  alt="weather-icon"
                  className="w-16 h-16"
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-800">
                    {weather.current.condition.text}
                  </p>
                  <p className="text-3xl font-bold text-blue-600">
                    {weather.current.temp_c}°C
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
