import { configureStore } from "@reduxjs/toolkit";
import { campersReduser } from "./campers/slice";


const store = configureStore({
    reducer: {
        campers: campersReduser,
    },
});

export default store;