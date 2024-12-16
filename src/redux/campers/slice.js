import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    campers: [],
    favorites: [],
};

const campersSlice = createSlice({
    name: 'campers',
    initialState,
    reducers: {
        setCampers(state, action) {
            state.campers = action.payload;
        },
        addFavorite(state, action) {
            state.favorites.push(action.payload);
        },
    },
});


export const { setCampers, addFavorite } = campersSlice.actions;
export const campersReduser = campersSlice.reducer;

