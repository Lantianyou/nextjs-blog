import { useContext, ReactNode, useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeContext from "components/theme/theme-context";

const DarkThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = useState(false);
  const [darkThemeEnabled] = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  );
};

const lightTheme = {
  body: "#fff",
  text: "#333",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};

export default DarkThemeProvider;
