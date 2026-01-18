import { CiSearch } from "react-icons/ci";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center">
      <div className="relative">
        <div className="absolute top-1/2 left-3 -translate-y-1/2 text-white text-2xl">
          <CiSearch />
        </div>
        <input
          type="text"
          name="search"
          className="
            bg-[rgba(46,64,82,0.8)]
            w-70 h-10 leading-10
            rounded-4xl 
            text-white
            pl-10 py-5 
            focus:outline-none font-medium"
          placeholder="Search city..."
        />
      </div>

      <div className="bg-[rgba(46,64,82,0.8)] flex justify-between items-center rounded-4xl p-[5px] w-[80px]">
        <span className="p-[5px] w-[30px] h-[30px] flex justify-center items-center text-[#2E4052] bg-white rounded-4xl text-lg font-medium cursor-pointer">
          &deg;C
        </span>

        <span className="p-[5px] w-[30px] h-[30px] flex justify-center items-center text-lg font-medium text-white cursor-pointer">
          &deg;F
        </span>
      </div>
    </header>
  );
};

export default Header;
