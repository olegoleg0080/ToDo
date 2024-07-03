import { configureStore } from "@reduxjs/toolkit";
import { toDoReducer } from "./slice";

export const store = configureStore({
    reducer: toDoReducer,
})