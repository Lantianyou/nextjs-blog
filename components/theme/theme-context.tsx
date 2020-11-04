import { createContext, Dispatch } from "react";
import { State, Action } from "../../pages/_app";

const ThemeContext = createContext<[State, Dispatch<Action>]>(null);

export default ThemeContext;
