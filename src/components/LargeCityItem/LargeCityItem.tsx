import { TiWeatherSunny } from "react-icons/ti";

const LargeCityItem: React.FC = () => {
  return (
    <div className="flex items-center bg-[rgba(46,64,82,0.8)] rounded-xl p-[20px] justify-between mt-[20px]">
      <div>
        <p className="text-[rgb(124,125,126)] text-[12px]">US</p>
        <h1 className="text-white text-[20px] font-medium">New York</h1>
        <p className="text-white text-[12px] mt-[10px]">Clear sky</p>
      </div>

      <div className="flex flex-col items-center gap-[10px]">
        <TiWeatherSunny className="text-yellow-200 text-[30px]" />
        <h1 className="text-white text-[24px]">14&deg;</h1>
      </div>
    </div>
  );
};

export default LargeCityItem;
