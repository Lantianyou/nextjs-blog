import { useReducer } from "react";
import "../public/css/tailwind.css";
import "../public/css/global.css";
import DarkThemeProvider from "../components/theme/DarkThemeProvider";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import SiteNav from "../components/header/site-nav";
import ThemeContext from "../components/theme/theme-context";

const initialState: State = {
  darkThemeEnabled: false,
  language: "en",
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "darkTheme":
      return { ...state, darkThemeEnabled: true };
    case "lightTheme":
      return { ...state, darkThemeEnabled: false };
    default:
      throw new Error();
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      <DarkThemeProvider>
        <Layout preview={true}>
          <SiteNav />
          <Component {...pageProps} />
        </Layout>
      </DarkThemeProvider>
    </ThemeContext.Provider>
  );
}

export type State = {
  darkThemeEnabled: boolean;
  language: "en" | "zh";
};

export type Action = {
  type: string;
  payload?: any;
};
