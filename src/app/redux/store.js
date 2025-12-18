import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import indiaReducer from "./features/IndiaSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        india: indiaReducer,
    }
})