"use client";

import { City } from "@/type/cityList";
import { getCity } from "@/utils/api";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

type HeaderProps = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Header: React.FC<HeaderProps> = ({ setQuery }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    const loadCities = async () => {
      if (!searchQuery.trim()) {
        setCities([]);
        return;
      }

      const data = await getCity(searchQuery);
      setCities(data);
    };

    loadCities();
  }, [searchQuery]);

  return (
    <header className="flex justify-between items-center">
      <div className="relative">
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-2xl">
          <CiSearch />
        </div>
        <input
          type="text"
          name="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-[rgba(46,64,82,0.8)] w-70 h-10 leading-10 rounded-4xl text-white pl-10 py-5 focus:outline-none font-medium"
          placeholder="Search city..."
        />

        {searchQuery && (
          <div className="absolute bg-[#2E4052] w-[300px] top-[50px]">
            <ul>
              {cities.slice(0, 5).map((item) => (
                <li
                  key={item.id}
                  onClick={() => {
                    setQuery(item.name)
                    setSearchQuery('');
                  }}
                  className="flex justify-between text-white font-medium p-[10px] transition hover:bg-[#DAD7D1] hover:text-[#2E4052] cursor-pointer"
                >
                  {item.name}{" "}
                  <span className="text-[#9F9F9F]">{item.country}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="bg-[rgba(46,64,82,0.8)] flex justify-between items-center rounded-4xl p-[5px] w-[80px]">
        <span className="p-[5px] w-[30px] h-[30px] flex justify-center items-center text-[#2E4052] bg-white rounded-4xl text-lg font-medium cursor-pointer">
          &deg;C
        </span>

        <span className="p-[5px] w-[30px] h-[30px] flex justify-center items-center text-lg font-medium text-white cursor-pointer">
          &deg;F
        </span>
      </div>
    </header>
  );
};

export default Header;
