import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import packagesReducer from "./features/packageSlice";
import destinationReducer from "./features/destinationsSlice";

export const store = configureStore({
    reducer:{
        counter: counterReducer,
        packages: packagesReducer,
        destination: destinationReducer,
    }
})