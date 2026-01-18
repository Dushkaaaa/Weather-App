import CurrentCity from "@/components/CurrentCity/CurrentCity";
import DayList from "@/components/CurrentDayList/CurrentDayList";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <div className="bg-[url('/img/map-world.jpg')] w-full h-screen relative z-0 bg-cover bg-center">
      <div className="py-10 px-80">
        <Header />

        <div className="pt-[30px] grid grid-cols-[2fr_3fr] gap-[30px]">
          <CurrentCity />

          <DayList />
        </div>
      </div>
    </div>
  );
}
