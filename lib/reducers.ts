
import * as actions from "./actions";
import { combineReducers } from "redux";

const preferences = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARKTHEME:
      return { ...state, darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

const fixes = (state = { passCover: false }, action) => {
  switch (action.type) {
    case actions.PASS_COVER:
      return { ...state, passCover: !state.passCover }
    default:
      return state
  }
}

export default combineReducers({ preferences, fixes });