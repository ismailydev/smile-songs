import { createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
    name: "songs",
    initialState: {
        songs: [],
        song: {},
    },
    reducers: {
        getSongs: (state, action) => {
            state.songs = action.payload;
        },
        getSong: (state, action) => {
            state.song = action.payload[0];
        },
        addSong: (state, action) => {
            state.songs.push(action.payload);
        },
        updateSong: (state, action) => {
            state.songs = state.songs.map((song) =>
                song._id === action.payload.id ? action.payload : song
            );
        },
        deleteSong: (state, action) => {
            state.songs = state.songs.filter(
                (song) => song._id !== action.payload
            );
        },
    },
});

export const { getSongs, getSong, addSong, updateSong, deleteSong } =
    songsSlice.actions;

export default songsSlice.reducer;
