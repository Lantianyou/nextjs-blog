import { useContext } from "react";
import cn from "classnames";
import { Moon, Sun } from "react-feather";
import ThemeContext from "components/theme/theme-context";

const Toggle = () => {
  const [state, dispatch] = useContext(ThemeContext);
  const { darkThemeEnabled } = state;
  const toggleTheme = () => {
    if (state.darkThemeEnabled) {
      dispatch({ type: "lightTheme" });
    } else {
      dispatch({ type: "darkTheme" });
    }
  };

  return (
    <button
      aria-label="切换暗色模式"
      onClick={toggleTheme}
      style={{ height: "30px" }}
      className={cn({
        "bg-gray-100": !darkThemeEnabled,
      })}
    >
      {darkThemeEnabled ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  );
};

export default Toggle;
