import WeatherDayItem from "../WeatherDayItem/WeatherDayItem";

const WeatherDayList: React.FC = () => {
  return (
    <div>
      <h1 className="text-white text-[20px] font-medium">5-day forecast</h1>

      <WeatherDayItem />
      <WeatherDayItem />
      <WeatherDayItem />
      <WeatherDayItem />
      <WeatherDayItem />
    </div>
  );
};

export default WeatherDayList;
