import { FaRegSnowflake } from "react-icons/fa";
import { BsWind } from "react-icons/bs";

const CurrentCity: React.FC = () => {
  return (
    <div className="bg-[rgba(46,64,82,0.8)] rounded-xl flex items-center justify-between p-[20px]">
      <div className="flex flex-col gap-[10px]">
        <h1 className="text-white text-[56px]">-1&deg;</h1>

        <div className="flex items-center gap-[10px]">
          <FaRegSnowflake className="text-blue-300 text-[30px]" />
          <p className="text-white text-[16px]">Snow</p>
        </div>
        <p className="text-white text-[12px]">Feel like: -4 &deg;C</p>
      </div>

      <div className="flex flex-col gap-[10px] items-end justify-between">
        <div className="flex flex-col items-end">
          <h1 className="text-white text-[20px] font-medium">Helsinki</h1>
          <p className="text-white text-[12px]">11:45 AM</p>
        </div>

        <div className="flex items-center gap-[10px]">
          <BsWind className="text-yellow-200" />
          <p className="text-white">5.14 m/s</p>
        </div>

        <p className="text-white text-[12px]">-1&deg; to 3&deg;</p>
      </div>
    </div>
  );
};

export default CurrentCity;
