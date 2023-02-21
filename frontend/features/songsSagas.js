import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
    getSongs,
    getSong,
    addSong,
    deleteSong,
    updateSong,
} from "./songsSlice";

const API_URL = "https://smile-songs.up.railway.app/api/songs";

function* workOnGetSongs() {
    try {
        const res = yield call(axios.get, API_URL);
        yield put(getSongs(res.data));
    } catch (error) {
        console.log(error);
    }
}

function* workOnGetSong({ payload }) {
    try {
        const res = yield call(axios.get, `${API_URL}/${payload}`);
        yield put(getSong(res.data));
    } catch (error) {
        console.log(error);
    }
}

function* workOnAddSong({ payload }) {
    try {
        const res = yield call(axios.post, API_URL, payload);
        yield put(addSong(res.data));
    } catch (error) {
        console.log(error);
    }
}

function* workOnDeleteSong({ payload }) {
    try {
        yield call(axios.delete, `${API_URL}/${payload}`);
        yield put(deleteSong(payload));
    } catch (error) {
        console.log(error);
    }
}

function* workOnUpdateSong({ payload }) {
    try {
        const res = yield call(axios.put, `${API_URL}/${payload.id}`, payload);
        yield put(updateSong(res.data));
    } catch (error) {
        console.log(error);
    }
}

function* songsSagas() {
    yield takeLatest("songs/getSongs", workOnGetSongs);
    yield takeLatest("songs/getSong", workOnGetSong);
    yield takeLatest("songs/addSong", workOnAddSong);
    yield takeLatest("songs/deleteSong", workOnDeleteSong);
    yield takeLatest("songs/updateSong", workOnUpdateSong);
}

export default songsSagas;
