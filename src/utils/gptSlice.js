import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovie: [],
    } ,
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovie: (state, action) => {
            state.gptMovie = action.payload;
        },
    } 
})

export const {toggleGptSearchView, addGptMovie} = gptSlice.actions;

export default gptSlice.reducer;