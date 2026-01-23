"use client";

import CurrentCity from "@/components/CurrentCity/CurrentCity";
import DayList from "@/components/CurrentDayList/CurrentDayList";
import Header from "@/components/Header/Header";
import LargeCityList from "@/components/LargeCityList/LargeCityList";
import WeatherDayList from "@/components/WeatherDayList/WeatherDayList";
import { WeatherResponse } from "@/type/CurrentWeatherResponse";
import { getCurrentCity } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [currentCity, setCurrentCity] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    if (!query) return;

    const load = async () => {
      const data = await getCurrentCity(query);
      setCurrentCity(data);
    };

    load();
  }, [query]);

  return (
    <div className="bg-[url('/img/map-world.jpg')] w-full h-screen bg-cover bg-center">
      <div className="py-10 px-80">
        <Header
          setQuery={setQuery}
        />

        <div className="pt-[30px] grid grid-cols-[2fr_3fr] gap-[30px]">
          <CurrentCity currentCity={currentCity} />

          <DayList currentCity={currentCity}/>

          <LargeCityList />

          <WeatherDayList />
        </div>
      </div>
    </div>
  );
}
