import { Hours } from "@/type/CurrentWeatherResponse";
import Image from "next/image";

type DayItemProps = {
  hour: Hours;
};

const DayItem: React.FC<DayItemProps> = ({ hour }) => {
  return (
    <div className="bg-[rgba(46,64,82,0.8)] rounded-xl py-[10px] px-[10px] flex flex-col">
      <p className="text-white text-center font-medium border-b-[3px] pb-[2px] border-b-[rgb(17,30,43)]">
        {hour.time.split(" ")[1] ?? '--'}
      </p>

      <div className="flex flex-col items-center mt-[25px] relative">
        <div className="flex flex-col items-center gap-[10px]">
          <Image
            src={`https:${hour.condition.icon}`}
            width={30}
            height={30}
            alt={hour.condition.text}
          />
          <p
            title={hour.condition.text}
            className="text-white text-center leading-[16px] line-clamp-2 overflow-hidden cursor-default"
          >
            {hour.condition.text}
          </p>
        </div>

        <h1 className="text-white text-[30px] pt-[20px] absolute top-[70px]">{hour.temp_c}&deg;</h1>
      </div>
    </div>
  );
};

export default DayItem;
