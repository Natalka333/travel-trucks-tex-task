import { configureStore } from "@reduxjs/toolkit";
import { campersReduser } from "./campers/slice";


export const store = configureStore({
    reducer: {
        campers: campersReduser,
    },
});

// export default store;