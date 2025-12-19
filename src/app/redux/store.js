import { configureStore } from "@reduxjs/toolkit"; 
import packagesReducer from "./features/packageSlice";
import destinationReducer from "./features/destinationsSlice";
import placeReducer from "./features/placeSlice";

export const store = configureStore({
    reducer:{
        packages: packagesReducer,
        destination: destinationReducer,
        place:placeReducer,
    }
})