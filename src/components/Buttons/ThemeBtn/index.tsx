import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeBtn: React.FC = () => {
  const [theme, setTheme] = useState<string>("dark");

  const toggleTheme = () => {
    setTheme((prevState) => (prevState == "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeBtn;
