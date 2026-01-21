import LargeCityItem from "../LargeCityItem/LargeCityItem";

const LargeCityList: React.FC = () => {
  return (
    <div>
      <h1 className="text-white text-[20px] font-medium">
        Other large cities
      </h1>

      <LargeCityItem />
      <LargeCityItem />
      <LargeCityItem />
    </div>
  );
};

export default LargeCityList;
