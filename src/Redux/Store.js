import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";

export const Store = configureStore({
  reducer: {
    Todo: TodoReducer,
  },
});
