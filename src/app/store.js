import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const loadState = () => {
  const todos = localStorage.getItem("todos");

  if (todos) return JSON.parse(todos);
  else return undefined;
};

export const store = configureStore({
  reducer: todoReducer,
  preloadedState: loadState(),
});
