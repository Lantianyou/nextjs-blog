import { createContext, SetStateAction, Dispatch } from "react";

const ThemeContext = createContext<
  [
    boolean,
    Dispatch<SetStateAction<boolean>>,
    string,
    Dispatch<SetStateAction<string>>
  ]
>([false, () => {}, "en", () => {}]);

export default ThemeContext;
