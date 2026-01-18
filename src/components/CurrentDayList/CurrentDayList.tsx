import DayItem from "../CurrentDayItem/DayItem";

const DayList = () => {
  return (
    <div className="grid grid-cols-8 gap-[10px]">
      <DayItem />
      <DayItem />
      <DayItem />
      <DayItem />
      <DayItem />
      <DayItem />
      <DayItem />
      <DayItem />
    </div>
  )
}

export default DayList;