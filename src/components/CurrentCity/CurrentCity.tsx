import { BsWind } from "react-icons/bs";
import { useEffect, useState } from "react";
import { WeatherResponse } from "@/type/CurrentWeatherResponse";
import { getCurrentCity } from "@/utils/api";
import Image from "next/image";

type CurrentCityProps = {
  query: string;
};

const CurrentCity: React.FC<CurrentCityProps> = ({ query }) => {
  const [currentCity, setCurrentCity] = useState<WeatherResponse>();

  useEffect(() => {
    const loadCities = async () => {
      if (query) {
        const data = await getCurrentCity(query);
        setCurrentCity(data);
      }
    };

    loadCities();
  }, [query]);
  return (
    <div className="bg-[rgba(46,64,82,0.8)] rounded-xl flex items-center justify-between p-[20px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-white text-[56px]">
          {currentCity?.current.temp_c ?? "--"}&deg;
        </h1>

        <div className="flex items-center gap-[10px]">
          {currentCity?.current?.condition?.icon && (
            <Image
              src={`https:${currentCity.current.condition.icon}`}
              width={60}
              height={60}
              alt={currentCity.current.condition.text}
            />
          )}
          <p className="text-white text-[16px]">{currentCity?.current.condition?.text}</p>
        </div>
        <p className="text-white text-[12px]">
          Feel like: {currentCity?.current.feelslike_c ?? "--"} &deg;C
        </p>
      </div>

      <div className="flex flex-col gap-[10px] items-end justify-between">
        <div className="flex flex-col items-end">
          <h1 className="text-white text-[20px] font-medium">{query}</h1>
          <p className="text-white text-[12px]">
            {currentCity?.location.localtime.split(' ')[1] ?? "--"}
          </p>
        </div>

        <div className="flex items-center gap-[10px]">
          <BsWind className="text-yellow-200" />
          <p className="text-white">
            {currentCity?.current.wind_mph ?? "--"} m/s
          </p>
        </div>

        <p className="text-white text-[12px]">
          {currentCity?.forecast.forecastday[0].day.mintemp_c ?? "--"}&deg; to{" "}
          {currentCity?.forecast.forecastday[0].day.maxtemp_c ?? "--"}&deg;
        </p>
      </div>
    </div>
  );
};

export default CurrentCity;
