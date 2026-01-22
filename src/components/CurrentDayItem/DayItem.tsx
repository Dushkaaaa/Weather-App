import { FaRegSnowflake } from "react-icons/fa";

const DayItem: React.FC = () => {
  return (
    <div className="bg-[rgba(46,64,82,0.8)] rounded-xl py-[10px] px-[10px]">
      <p className="text-white text-center font-medium border-b-[3px] pb-[2px] border-b-[rgb(17,30,43)]">
        9:00 AM
      </p>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center pt-[20px]">
          <FaRegSnowflake className="text-blue-300 text-[30px]"/>
          <p className="text-white">Snow</p>
        </div>

        <h1 className="text-white text-[30px] pt-[20px]">-1&deg;</h1>
      </div>
    </div>
  );
};

export default DayItem;
