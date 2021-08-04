import { configureStore } from "@reduxjs/toolkit";
import selectorsReducer from "./selectorsReducer";
import dataManageReducer from "./dataManageReducer";

const store = configureStore({
  reducer: {
    data: dataManageReducer,
    selectors: selectorsReducer
  }
});

export default store;
