import { FaCloud } from "react-icons/fa";

const WeatherDayItem: React.FC = () => {
  return (
    <div
      className="bg-[rgba(46,64,82,0.8)]rounded-xlp-[20px] mt-[20px]grid grid-cols-[1fr_150px_3fr] gap-[10px]"
    >
      <h1 className="text-white text-[20px] font-medium">Today</h1>

      <div className="flex items-center">
        <FaCloud className="text-blue-200 text-[30px]"/>
        <p className="text-white text-[16px] ml-[10px]">Clouds</p>
      </div>

      <div className="flex items-center gap-[10px]">
        <p className="text-white">-1&deg;</p>

        <div className="w-full h-[10px] bg-[rgb(16,30,44)] rounded-xl">
          <span className="bg-[rgb(74,156,238)] h-full w-[120px] block rounded-xl translate-x-[40px]"></span>
        </div>

        <p className="text-white">+1&deg;</p>
      </div>
    </div>
  );
};

export default WeatherDayItem;
