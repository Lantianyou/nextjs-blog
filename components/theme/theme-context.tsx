import { createContext, SetStateAction, Dispatch } from "react";

const ThemeContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>]
>([false, () => {}]);

export default ThemeContext;
