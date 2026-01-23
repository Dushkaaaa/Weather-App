import DayItem from "../CurrentDayItem/DayItem";
import { WeatherResponse } from "@/type/CurrentWeatherResponse";

type CurrentCityProps = {
  currentCity: WeatherResponse | null;
};

const DayList: React.FC<CurrentCityProps> = ({ currentCity }) => {
  
  const hourToShow = [3, 6, 9, 12, 15, 18, 21, 23];

  const hours = currentCity?.forecast.forecastday[0]?.hour ?? [];

  const filteredHours = hours.filter(h => {
    const hourNumber = new Date(h.time).getHours();
    return hourToShow.includes(hourNumber);
  })
  
  return (
    <div className="grid grid-cols-8 gap-[10px]">
      {filteredHours.map(hour => (
        <DayItem key={hour.time_epoch} hour={hour} />
      ))}
    </div>
  )
}

export default DayList;