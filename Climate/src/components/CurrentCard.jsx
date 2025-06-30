import React from "react";
import useCurrentWeather from "../hooks/useCurrentWeather.js";

function CurrentCard({ city }) {
  const { data, error, loading } = useCurrentWeather(city);

  if (error)
    return (
      <p className="text-center text-red-600 font-medium mt-4">❌ {error}</p>
    );

  if (loading)
    return (
      <p className="text-center text-gray-500 font-medium mt-4">
        ⏳ Loading weather data...
      </p>
    );

  if (!data) return null;

  return (
    <div className="p-6 w-full max-w-md mx-auto mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 transition hover:shadow-xl">
      <h2 className="text-2xl font-bold text-center text-blue-700">
        {data.location.name}, {data.location.country}
      </h2>

      <div className="flex items-center justify-center mt-4">
        <img
          src={data.current.condition.icon}
          alt={data.current.condition.text}
          className="w-16 h-16"
        />
        <div className="ml-4 text-center">
          <p className="text-lg font-medium text-gray-800">
            {data.current.condition.text}
          </p>
          <p className="text-3xl font-bold text-blue-600">
            {data.current.temp_c}°C
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 mt-6">
        <div className="flex flex-col items-start">
          <span className="font-semibold">🌆 City:</span>
          <span>{data.location.name}</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold">💧 Humidity:</span>
          <span>{data.current.humidity}%</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold">💨 Wind:</span>
          <span>{data.current.wind_kph} km/h</span>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold">🕒 Local Time:</span>
          <span>{data.location.localtime}</span>
        </div>
      </div>
    </div>
  );
}

export default CurrentCard;
