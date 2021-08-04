import { configureStore } from "@reduxjs/toolkit";
import selectorsReducer from "./selectorsReducer";
import dataManageReducer from "./dataManageReducer";
import menuReducer from "./menuReducer";

const store = configureStore({
  reducer: {
    data: dataManageReducer,
    selectors: selectorsReducer,
    menu: menuReducer
  }
});

export default store;
