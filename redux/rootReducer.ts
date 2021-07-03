import { combineReducers } from "@reduxjs/toolkit";
import envSlice from "./env/envSlice";

const rootReducer = combineReducers({
  env: envSlice,
});

export default rootReducer;
