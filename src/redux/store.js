import { configureStore } from "@reduxjs/toolkit";
import selectorsReducer from "./selectorsReducer";
import dataManageReducer from "./dataManageReducer";
import menuReducer from "./menuReducer";
import filtersReducer from "./filtersReducer";

const store = configureStore({
  reducer: {
    data: dataManageReducer,
    selectors: selectorsReducer,
    menu: menuReducer,
    filters: filtersReducer
  }
});

export default store;
