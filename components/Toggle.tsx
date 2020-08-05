import { useContext } from "react";
import cn from "classnames";
import { Moon, Sun } from "react-feather";
import ThemeContext from "components/theme/theme-context";

const Toggle = () => {
  const [darkThemeEnabled, setDarkThemeEnabled] = useContext(ThemeContext);
  const toggleTheme = () => setDarkThemeEnabled(!darkThemeEnabled);

  return (
    <button
      aria-label="切换暗色模式"
      onClick={toggleTheme}
      style={{ height: "30px" }}
      className={cn("my-auto", { "bg-gray-100": !darkThemeEnabled })}
    >
      {darkThemeEnabled ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  );
};

export default Toggle;
