import { ReactNode, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import ThemeContext from "./theme-context";

const DarkThemeProvider = ({ children }: { children: ReactNode }) => {
  const [state] = useContext(ThemeContext);
  const { darkThemeEnabled } = state;
  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <style jsx global>{`
        body {
          background: ${darkThemeEnabled ? darkTheme.body : lightTheme.body};
          color: ${darkThemeEnabled ? darkTheme.text : lightTheme.text};
          transition: all 0.25s linear;
        }
      `}</style>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
