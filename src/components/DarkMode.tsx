import React from "react";
import sun from "../assets/imgs/sun.svg";
import moon from "../assets/imgs/moon.svg";

interface DarkModeProps {
  dark: boolean;
  toggleTheme: () => void;
}

const DarkMode: React.FC<DarkModeProps> = ({ dark, toggleTheme }) => {
  return (
    <div className="flex justify-center items-center left-0 top-1/2 self-end">
      <input
        id="darkmode"
        type="checkbox"
        checked={dark}
        onChange={toggleTheme}
        className="m-2"
      />
      <label
        htmlFor="darkmode"
        className="darkmode-toggle w-[75px] h-[25px] relative block bg-slate-200 dark:bg-slate-700 rounded-3xl shadow cursor-pointer"
      >
        <img
          src={sun}
          alt="sun"
          className="absolute w-[20px] top-1/2 left-[2px] transfrom -translate-y-1/2 z-10 dark:opacity-50 dark:invert"
        />
        <img
          src={moon}
          alt="moon"
          className= "absolute w-[20px] top-1/2 right-[2px] transfrom -translate-y-1/2 z-10 opacity-50 dark:opacity-100 dark:invert"
        />
      </label>
    </div>
  );
};

export default DarkMode;